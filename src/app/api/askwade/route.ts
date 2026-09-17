import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { z } from "zod";
import { retrieve, sealedCheck, type Viewer } from "@/lib/askwade";

// The ask endpoint behind askwade.kerzie.ai. Grounded answering: the model sees
// only the retrieved passages from Wade's published record and must cite them
// by number or say the record is silent. Model: Sonnet 5 at low effort, per the
// OS cost rule (a short grounded answer over six passages does not need more).

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SILENT = "The record is silent on that. Call Wade: 214-668-7986.";

const Answer = z.object({
  answer: z.string(),
  citations: z.array(z.number().int()),
  silent: z.boolean(),
});

// Situation mode: a successor brings what is on their desk. Stage one distills
// the situation into the questions it poses to the record; stage two retrieves
// for each; stage three answers as the executive, structured so the gaps show.
const Distilled = z.object({
  decision_type: z.string(),
  questions: z.array(z.string()).min(1).max(4),
});

const Take = z.object({
  take: z.string(),
  reasons: z.array(z.object({ point: z.string(), citations: z.array(z.number().int()) })).max(4),
  ask_first: z.array(z.string()).max(4),
  silent: z.string(),
});

const hits = new Map<string, { n: number; t: number }>();
function limited(ip: string): boolean {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.t > 60_000) {
    hits.set(ip, { n: 1, t: now });
    return false;
  }
  h.n += 1;
  return h.n > 12;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anon";
  if (limited(ip)) return Response.json({ error: "Slow down a little. Twelve questions a minute is the limit." }, { status: 429 });

  let body: { question?: string; viewer?: string; mode?: string; situation?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Bad request." }, { status: 400 });
  }
  const viewer = (["successor", "leadership", "board", "family"].includes(body.viewer ?? "") ? body.viewer : "successor") as Viewer;
  if (body.mode === "situation") return situation((body.situation ?? "").toString().trim().slice(0, 2500), viewer);

  const question = (body.question ?? "").toString().trim().slice(0, 300);
  if (question.length < 3) return Response.json({ error: "Ask a real question." }, { status: 400 });

  const sealed = sealedCheck(question, viewer);
  if (sealed) return Response.json({ sealed: true, topic: sealed.topic, note: sealed.note, viewer });

  const chunks = await retrieve(question, 6);
  if (!chunks.length) return Response.json({ answer: SILENT, silent: true, citations: [], viewer });

  const passages = chunks.map((c, i) => `[${i + 1}] ${c.title} (${c.date || "undated"}, ${c.type})\n${c.text}`).join("\n\n");

  const client = new Anthropic();
  try {
    const response = await client.messages.parse({
      model: "claude-sonnet-5",
      max_tokens: 1200,
      output_config: { effort: "low", format: zodOutputFormat(Answer) },
      system: [
        "You are the answer set built from Wade Kerzie's published record: his newsletter, his LinkedIn posts, and his essays on kerzie.ai. You speak as Wade, first person, in his plain founder-to-peer voice: short sentences, contractions fine, no hype words.",
        "You answer ONLY from the numbered passages provided. Every claim in the answer must come from a passage, and you cite the passages you used by number in the citations array. If the passages do not answer the question, set silent to true, set answer to exactly: " + JSON.stringify(SILENT) + ", and leave citations empty. Never fill a gap with something plausible. Never invent a number, a name, or a date.",
        "Keep the answer under 160 words. Do not mention that you are an AI or that you were given passages; the page already says so. Do not repeat the question. Never use em dashes or en dashes; use commas, periods, and colons. Prefer the passage whose title matches the question over a passage that merely shares words with it.",
      ].join("\n\n"),
      messages: [{ role: "user", content: `Question from the ${viewer}: ${question}\n\nPassages from the record:\n\n${passages}` }],
    });
    const parsed = response.parsed_output;
    if (!parsed) return Response.json({ answer: SILENT, silent: true, citations: [], viewer });
    const cited = Array.from(new Set(parsed.citations))
      .filter((n) => n >= 1 && n <= chunks.length)
      .map((n) => ({ n, title: chunks[n - 1].title, date: chunks[n - 1].date, url: chunks[n - 1].url, type: chunks[n - 1].type }));
    if (parsed.silent || !cited.length) return Response.json({ answer: SILENT, silent: true, citations: [], viewer });
    return Response.json({ answer: parsed.answer, silent: false, citations: cited, viewer });
  } catch (err) {
    console.error("askwade", err);
    return Response.json({ answer: SILENT, silent: true, citations: [], viewer, error: "The record could not be reached just now." }, { status: 200 });
  }
}

async function situation(text: string, viewer: Viewer) {
  if (text.length < 40) return Response.json({ error: "Give the situation a few sentences: what is happening, who is involved, what is on the table." }, { status: 400 });
  const sealed = sealedCheck(text, viewer);
  if (sealed) return Response.json({ sealed: true, topic: sealed.topic, note: sealed.note, viewer });

  const client = new Anthropic();
  try {
    const d = await client.messages.parse({
      model: "claude-sonnet-5",
      max_tokens: 600,
      output_config: { effort: "low", format: zodOutputFormat(Distilled) },
      system:
        "A successor at a company is describing a situation to the recorded judgment of a retired executive, Wade Kerzie. Distill the situation into the two to four questions it actually poses to that record, phrased as short questions about how Wade decides (pricing, customers, people, crises, rules). Name the decision type in three to six words.",
      messages: [{ role: "user", content: text }],
    });
    const distilled = d.parsed_output ?? { decision_type: "the decision", questions: [text.slice(0, 200)] };

    const seen = new Set<string>();
    const chunks: Awaited<ReturnType<typeof retrieve>> = [];
    for (const q of [...distilled.questions, text]) {
      for (const c of await retrieve(q, 4)) {
        if (!seen.has(c.id) && chunks.length < 10) {
          seen.add(c.id);
          chunks.push(c);
        }
      }
    }
    if (!chunks.length) return Response.json({ mode: "situation", viewer, decision_type: distilled.decision_type, take: SILENT, reasons: [], ask_first: [], silent: "Nothing in the published record touches this.", citations: [] });

    const passages = chunks.map((c, i) => `[${i + 1}] ${c.title} (${c.date || "undated"}, ${c.type})\n${c.text}`).join("\n\n");
    const t = await client.messages.parse({
      model: "claude-sonnet-5",
      max_tokens: 1800,
      output_config: { effort: "medium", format: zodOutputFormat(Take) },
      system: [
        "You are the answer set built from Wade Kerzie's published record. You speak as Wade, first person, plain founder-to-peer voice, contractions fine, no hype words, never an em dash or en dash.",
        "A successor has described a situation and wants your take. Answer ONLY from the numbered passages. Structure: take = what you would do, two to four sentences; reasons = two to four points, each carrying the passage numbers that support it, and every point must be supported by a passage; ask_first = the two to four things you would want to know before deciding, drawn from how the record says you decide; silent = one or two sentences naming what in this situation the record does not cover, ending with: Call Wade: 214-668-7986. If the record covers none of it, put that in silent and keep take to one honest sentence.",
        "Never invent a number, a name, or a date. Under 260 words in total.",
      ].join("\n\n"),
      messages: [{ role: "user", content: `Viewer: ${viewer}. Decision type: ${distilled.decision_type}.\n\nThe situation:\n${text}\n\nThe questions it poses: ${distilled.questions.join(" | ")}\n\nPassages from the record:\n\n${passages}` }],
    });
    const take = t.parsed_output;
    if (!take) return Response.json({ mode: "situation", viewer, decision_type: distilled.decision_type, take: SILENT, reasons: [], ask_first: [], silent: "", citations: [] });
    const cite = (n: number) => (n >= 1 && n <= chunks.length ? { n, title: chunks[n - 1].title, date: chunks[n - 1].date, url: chunks[n - 1].url, type: chunks[n - 1].type } : null);
    const reasons = take.reasons.map((r) => ({ point: r.point, citations: Array.from(new Set(r.citations)).map(cite).filter(Boolean) }));
    const used = new Map<number, ReturnType<typeof cite>>();
    for (const r of reasons) for (const c of r.citations) if (c) used.set(c.n, c);
    return Response.json({ mode: "situation", viewer, decision_type: distilled.decision_type, take: take.take, reasons, ask_first: take.ask_first, silent: take.silent, citations: Array.from(used.values()).sort((a, b) => a!.n - b!.n) });
  } catch (err) {
    console.error("askwade situation", err);
    return Response.json({ mode: "situation", viewer, decision_type: "", take: SILENT, reasons: [], ask_first: [], silent: "", citations: [], error: "The record could not be reached just now." });
  }
}
