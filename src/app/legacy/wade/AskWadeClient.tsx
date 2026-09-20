"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { VIEWERS, type Viewer } from "@/lib/askwade-keys";
import VoiceReader, { takeScript, useVoiceEnabled } from "./VoiceReader";

// The executive's page, as the people with a key see it. Four jobs on one
// screen: the person (so it reads like a tribute), the ask (the tool), the
// key model (what this viewer can and cannot open), and the executive's own
// side (what Wade sees). The avatar clip at the bottom is the optional part.

type Citation = { n: number; title: string; date: string; url: string; type: string };
type Reason = { point: string; citations: Citation[] };
type Result =
  | { kind: "answer"; answer: string; silent: boolean; citations: Citation[] }
  | { kind: "take"; decision_type: string; take: string; reasons: Reason[]; ask_first: string[]; silent: string; citations: Citation[] }
  | { kind: "sealed"; topic: string; note: string }
  | { kind: "error"; message: string };

const SAMPLE_SITUATION =
  "A dealer we pitched last month came back and said yes, but only if we cut the setup fee in half and give them three months free. Their GM says two competitors are already doing something similar for less. Our seller wants to take it because it is the first dealer in that group and there are six more rooftops behind it. I am leaning toward saying yes to the free months and no to the fee cut. What would you do?";

const SAMPLE_QUESTIONS = [
  "What do you refuse to publish without a receipt?",
  "How do you think about pricing a new offer?",
  "What did the AT&T call-screening pilot teach you?",
  "What changed when the buyer stopped being a human?",
];

const FACTS = [
  { k: "$420M+", v: "career revenue closed" },
  { k: "9", v: "deals over $12M each" },
  { k: "30+", v: "years in enterprise sales" },
  { k: "8x / 5x", v: "Honor's Club / President's Club" },
];

const CONSOLE_SAMPLE = [
  { q: "Would you take a dealer at $999 a month if they asked for a discount?", status: "Approved", when: "Tue" },
  { q: "Why is Facebook not the audience?", status: "Corrected: added the 9/15 ruling", when: "Mon" },
  { q: "Who should run the Colorado market after Aaron?", status: "Sealed: succession sessions", when: "Sun" },
];

export default function AskWadeClient() {
  const [viewer, setViewer] = useState<Viewer>("successor");
  const [mode, setMode] = useState<"question" | "situation">("question");
  const [situation, setSituation] = useState("");
  const [question, setQuestion] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [readAloud, setReadAloud] = useState(false);
  const voiceEnabled = useVoiceEnabled();

  useEffect(() => {
    try {
      setReadAloud(localStorage.getItem("askwade:readAloud") === "1");
    } catch {}
  }, []);
  function toggleReadAloud() {
    setReadAloud((v) => {
      try {
        localStorage.setItem("askwade:readAloud", v ? "0" : "1");
      } catch {}
      return !v;
    });
  }

  async function ask(q: string) {
    const text = q.trim();
    if (!text || busy) return;
    setBusy(true);
    setResult(null);
    try {
      const r = await fetch("/api/askwade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text, viewer }),
      });
      const j = await r.json();
      if (!r.ok) setResult({ kind: "error", message: j.error ?? "Something went wrong." });
      else if (j.sealed) setResult({ kind: "sealed", topic: j.topic, note: j.note });
      else setResult({ kind: "answer", answer: j.answer, silent: !!j.silent, citations: j.citations ?? [] });
    } catch {
      setResult({ kind: "error", message: "The record could not be reached just now." });
    } finally {
      setBusy(false);
    }
  }

  async function bring(text: string) {
    const body = text.trim();
    if (!body || busy) return;
    setBusy(true);
    setResult(null);
    try {
      const r = await fetch("/api/askwade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "situation", situation: body, viewer }),
      });
      const j = await r.json();
      if (!r.ok) setResult({ kind: "error", message: j.error ?? "Something went wrong." });
      else if (j.sealed) setResult({ kind: "sealed", topic: j.topic, note: j.note });
      else setResult({ kind: "take", decision_type: j.decision_type ?? "", take: j.take ?? "", reasons: j.reasons ?? [], ask_first: j.ask_first ?? [], silent: j.silent ?? "", citations: j.citations ?? [] });
    } catch {
      setResult({ kind: "error", message: "The record could not be reached just now." });
    } finally {
      setBusy(false);
    }
  }

  const v = VIEWERS[viewer];

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#1A1B2E]">
      {/* Top bar: the name, and who is holding the key */}
      <header className="border-b border-[#1A1B2E]/10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8">
          <div>
            <p className="k-mono text-[11px] tracking-[0.18em] text-[#262B3D]/60">ON THE RECORD</p>
            <p className="text-lg font-semibold tracking-tight">Wade Kerzie</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="k-mono text-[11px] tracking-[0.12em] text-[#262B3D]/60">VIEWING AS</span>
            {(Object.keys(VIEWERS) as Viewer[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setViewer(key);
                  setResult(null);
                }}
                className={
                  key === viewer
                    ? "rounded-full bg-[#1A1B2E] px-3 py-1 text-sm font-medium text-[#FAF8F4]"
                    : "rounded-full border border-[#1A1B2E]/20 px-3 py-1 text-sm text-[#262B3D] hover:bg-white"
                }
              >
                {VIEWERS[key].label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* The person */}
        <section className="grid gap-10 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <Image
              src="/askwade/wade-portrait.jpg"
              alt="Wade Kerzie"
              width={1000}
              height={1400}
              priority
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="lg:col-span-8">
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em]">
              Thirty years of judgment. Still answering.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#262B3D]">
              Wade Kerzie spent three decades selling into carriers and enterprises, then built Kerzie AI Solutions and moved the whole company onto an operating system he runs with Claude. Everything he has published about how he decides is on this record. Ask it. Every answer comes back with the date and the piece it came from. When the record is silent, it says so.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
              {FACTS.map((f) => (
                <div key={f.k}>
                  <dt className="k-mono text-2xl font-semibold text-[#1A1B2E]">{f.k}</dt>
                  <dd className="mt-1 text-sm text-[#262B3D]/80">{f.v}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-8 flex flex-wrap gap-2 text-xs text-[#262B3D]/80">
              {["1998 Salesperson of the Year", "Published in Nation's Restaurant News", "Founder, Kerzie AI Solutions", "McKinney, Texas"].map((t) => (
                <li key={t} className="rounded-full border border-[#1A1B2E]/15 bg-white px-3 py-1">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The ask */}
        <section className="rounded-xl border border-[#1A1B2E]/10 bg-white p-6 lg:p-10">
          <p className="k-label mb-3">
            <span className="idx">01</span>Ask Wade
          </p>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {(["question", "situation"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => {
                  setMode(m);
                  setResult(null);
                }}
                className={
                  m === mode
                    ? "rounded-full bg-[#1A1B2E] px-4 py-1.5 text-sm font-medium text-[#FAF8F4]"
                    : "rounded-full border border-[#1A1B2E]/20 px-4 py-1.5 text-sm text-[#262B3D] hover:bg-[#FAF8F4]"
                }
              >
                {m === "question" ? "Quick question" : "Bring a situation"}
              </button>
            ))}
            {voiceEnabled && (
              <label className="ml-auto inline-flex cursor-pointer items-center gap-2 text-sm text-[#262B3D]">
                <input type="checkbox" checked={readAloud} onChange={toggleReadAloud} className="h-4 w-4 accent-[#2B5D96]" />
                Read answers aloud in Wade&apos;s voice
              </label>
            )}
          </div>

          {mode === "question" && (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void ask(question);
                }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  id="askwade-question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  maxLength={300}
                  placeholder="Ask the way you would ask him in the hallway."
                  className="flex-1 rounded-lg border border-[#1A1B2E]/20 bg-[#FAF8F4] px-4 py-3 text-base outline-none focus:border-[#2B5D96]"
                />
                <button
                  type="submit"
                  disabled={busy}
                  className="rounded-lg bg-[#2B5D96] px-6 py-3 font-semibold text-[#FAF8F4] transition-colors hover:bg-[#4A7BB5] disabled:opacity-60"
                >
                  {busy ? "Reading the record" : "Ask"}
                </button>
              </form>
              <div className="mt-4 flex flex-wrap gap-2">
                {SAMPLE_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => {
                      setQuestion(q);
                      void ask(q);
                    }}
                    className="rounded-full border border-[#1A1B2E]/15 px-3 py-1 text-sm text-[#262B3D] hover:bg-[#FAF8F4]"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </>
          )}

          {mode === "situation" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void bring(situation);
              }}
              className="flex flex-col gap-3"
            >
              <textarea
                id="askwade-situation"
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
                maxLength={2500}
                rows={7}
                placeholder="What is happening. Who is involved. What is on the table. What you are leaning toward. What you need from Wade."
                className="w-full rounded-lg border border-[#1A1B2E]/20 bg-[#FAF8F4] px-4 py-3 text-base leading-relaxed outline-none focus:border-[#2B5D96]"
              />
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={busy}
                  className="rounded-lg bg-[#2B5D96] px-6 py-3 font-semibold text-[#FAF8F4] transition-colors hover:bg-[#4A7BB5] disabled:opacity-60"
                >
                  {busy ? "Reading the record" : "Get Wade's take"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSituation(SAMPLE_SITUATION);
                    void bring(SAMPLE_SITUATION);
                  }}
                  className="rounded-full border border-[#1A1B2E]/15 px-3 py-1 text-sm text-[#262B3D] hover:bg-[#FAF8F4]"
                >
                  Try a sample situation
                </button>
                <span className="text-xs text-[#262B3D]/60">Public demo. Do not paste anything confidential. In the product this page is private behind your key.</span>
              </div>
            </form>
          )}

          {result && (
            <div className="mt-8 border-t border-[#1A1B2E]/10 pt-6">
              {result.kind === "error" && <p className="text-[#B04E2B]">{result.message}</p>}
              {result.kind === "sealed" && (
                <div className="rounded-lg border border-[#B04E2B]/40 bg-[#FAF8F4] p-5">
                  <p className="k-mono text-[11px] tracking-[0.14em] text-[#B04E2B]">SEALED</p>
                  <p className="mt-2 text-lg font-semibold">{result.topic}</p>
                  <p className="mt-1 text-[#262B3D]">{result.note}. The key you are holding does not open it.</p>
                </div>
              )}
              {result.kind === "take" && (
                <div>
                  {result.decision_type && <p className="k-mono text-[11px] tracking-[0.14em] text-[#262B3D]/60">{result.decision_type.toUpperCase()}</p>}
                  <p className="mt-2 k-mono text-[11px] tracking-[0.14em] text-[#2B5D96]">WHAT I WOULD DO</p>
                  <p className="mt-2 whitespace-pre-line text-lg leading-relaxed">{result.take}</p>
                  {result.reasons.length > 0 && (
                    <div className="mt-6">
                      <p className="k-mono text-[11px] tracking-[0.14em] text-[#2B5D96]">WHY</p>
                      <ul className="mt-2 space-y-3">
                        {result.reasons.map((r) => (
                          <li key={r.point} className="text-[#262B3D]">
                            {r.point}
                            {r.citations.length > 0 && (
                              <span className="ml-2 inline-flex flex-wrap gap-1 align-middle">
                                {r.citations.map((c) => (
                                  <a key={c.n} href={c.url || "#"} target="_blank" rel="noopener" className="rounded-full border border-[#1A1B2E]/15 bg-[#FAF8F4] px-2 py-0.5 k-mono text-[11px] text-[#2B5D96]" title={c.title}>
                                    [{c.n}] {c.title.length > 34 ? c.title.slice(0, 34) + "..." : c.title}
                                  </a>
                                ))}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {result.ask_first.length > 0 && (
                    <div className="mt-6">
                      <p className="k-mono text-[11px] tracking-[0.14em] text-[#2B5D96]">WHAT I WOULD WANT TO KNOW FIRST</p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-[#262B3D]">
                        {result.ask_first.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {result.silent && (
                    <div className="mt-6 rounded-lg border border-[#B04E2B]/40 bg-[#FAF8F4] p-4">
                      <p className="k-mono text-[11px] tracking-[0.14em] text-[#B04E2B]">WHERE THE RECORD IS SILENT</p>
                      <p className="mt-1 text-[#262B3D]">{result.silent}</p>
                    </div>
                  )}
                  <VoiceReader text={takeScript(result)} autoplay={readAloud} />
                </div>
              )}
              {result.kind === "answer" && (
                <div>
                  <p className="whitespace-pre-line text-lg leading-relaxed">{result.answer}</p>
                  <VoiceReader text={result.answer} autoplay={readAloud} />
                  {!result.silent && result.citations.length > 0 && (
                    <div className="mt-6">
                      <p className="k-mono text-[11px] tracking-[0.14em] text-[#262B3D]/60">FROM THE RECORD</p>
                      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                        {result.citations.map((c) => (
                          <li key={c.n} className="rounded-lg border border-[#1A1B2E]/10 bg-[#FAF8F4] p-4 text-sm">
                            <p className="k-mono text-[11px] text-[#262B3D]/60">
                              [{c.n}] {c.type}
                              {c.date ? ` · ${c.date}` : ""}
                            </p>
                            <p className="mt-1 font-medium">{c.title}</p>
                            {c.url && (
                              <a href={c.url} target="_blank" rel="noopener" className="mt-1 inline-block text-[#2B5D96] underline underline-offset-4">
                                Read the source
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          <p className="mt-6 text-xs leading-relaxed text-[#262B3D]/60">
            This answer set was built from Wade&apos;s published record only: his newsletter, his LinkedIn posts, and his essays. It answers in his words, cites the piece each answer came from, and says when the record is silent. It never improvises.
            {voiceEnabled && " The voice is Wade's own, cloned with his permission; it reads the answer on the page and nothing else."}
          </p>
        </section>

        {/* The key */}
        <section className="grid gap-8 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-3">
            <p className="k-label">
              <span className="idx">02</span>Your Key
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-[clamp(1.375rem,2.3vw,1.75rem)] font-semibold leading-snug">
              You are holding the {v.label.toLowerCase()} key. Wade set it.
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-[#1A1B2E]/10 bg-white p-5">
                <p className="k-mono text-[11px] tracking-[0.14em] text-[#2B5D96]">OPEN TO YOU</p>
                <ul className="mt-3 space-y-2 text-[#262B3D]">
                  {v.opens.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-[#B04E2B]/30 bg-white p-5">
                <p className="k-mono text-[11px] tracking-[0.14em] text-[#B04E2B]">SEALED</p>
                <ul className="mt-3 space-y-2 text-[#262B3D]">
                  {v.sealed.map((s) => (
                    <li key={s.topic}>
                      <span className="font-medium">{s.topic}.</span> <span className="text-[#262B3D]/70">{s.note}.</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Wade's side */}
        <section className="grid gap-8 border-t border-[#1A1B2E]/10 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-3">
            <p className="k-label">
              <span className="idx">03</span>What Wade Sees
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-[clamp(1.375rem,2.3vw,1.75rem)] font-semibold leading-snug">
              Every question asked, every answer given, and a correct button. For as long as he wants the job.
            </h2>
            <p className="mt-4 max-w-2xl text-[#262B3D]">
              The executive&apos;s side of the record. The company pays him monthly to keep it true. This is what that looks like, with example rows.
            </p>
            <div className="mt-6 overflow-x-auto rounded-lg border border-[#1A1B2E]/10 bg-white">
              <table className="w-full min-w-[560px] text-sm">
                <thead className="bg-[#FAF8F4] text-left k-mono text-[11px] tracking-[0.12em] text-[#262B3D]/60">
                  <tr>
                    <th className="px-4 py-3 font-normal">ASKED</th>
                    <th className="px-4 py-3 font-normal">STATUS</th>
                    <th className="px-4 py-3 font-normal">WHEN</th>
                  </tr>
                </thead>
                <tbody>
                  {CONSOLE_SAMPLE.map((row) => (
                    <tr key={row.q} className="border-t border-[#1A1B2E]/10">
                      <td className="px-4 py-3">{row.q}</td>
                      <td className="px-4 py-3">{row.status}</td>
                      <td className="px-4 py-3 text-[#262B3D]/70">{row.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* The avatar, optional */}
        <section className="grid gap-8 border-t border-[#1A1B2E]/10 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-3">
            <p className="k-label">
              <span className="idx">04</span>The Avatar
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-[clamp(1.375rem,2.3vw,1.75rem)] font-semibold leading-snug">
              If the executive wants it, the answer set can look and sound like them. Optional.
            </h2>
            <div className="mt-6 max-w-2xl">
              <video controls preload="metadata" playsInline poster="/videos/executive-legacy-poster.jpg" className="w-full rounded-lg border border-[rgba(26,27,46,0.2)]">
                <source src="/videos/executive-legacy.mp4" type="video/mp4" />
              </video>
              <p className="mt-3 text-sm leading-relaxed text-[#262B3D]/70">
                This is an AI video clone of Wade, built from his own record. The words are his. What sits behind it, the cited record above, is the part that is not optional.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1A1B2E]/10">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-[#262B3D]/70 lg:px-8">
          <p>
            This page is the Executive Legacy deliverable, shown on Wade Kerzie&apos;s own record. Built by{" "}
            <a href="https://kerzie.ai" className="underline underline-offset-4">Kerzie AI Solutions</a>. The engagement:{" "}
            <a href="https://kerzie.ai/ventures/executive-legacy" className="underline underline-offset-4">kerzie.ai/ventures/executive-legacy</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}
