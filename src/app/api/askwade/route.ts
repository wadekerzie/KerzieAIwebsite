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

  let body: { question?: string; viewer?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Bad request." }, { status: 400 });
  }
  const question = (body.question ?? "").toString().trim().slice(0, 300);
  const viewer = (["successor", "leadership", "board", "family"].includes(body.viewer ?? "") ? body.viewer : "successor") as Viewer;
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
