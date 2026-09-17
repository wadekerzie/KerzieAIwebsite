"use client";

import Image from "next/image";
import { useState } from "react";
import { VIEWERS, type Viewer } from "@/lib/askwade";

// The executive's page, as the people with a key see it. Four jobs on one
// screen: the person (so it reads like a tribute), the ask (the tool), the
// key model (what this viewer can and cannot open), and the executive's own
// side (what Wade sees). The avatar clip at the bottom is the optional part.

type Citation = { n: number; title: string; date: string; url: string; type: string };
type Result =
  | { kind: "answer"; answer: string; silent: boolean; citations: Citation[] }
  | { kind: "sealed"; topic: string; note: string }
  | { kind: "error"; message: string };

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
  const [question, setQuestion] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

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
              {result.kind === "answer" && (
                <div>
                  <p className="whitespace-pre-line text-lg leading-relaxed">{result.answer}</p>
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
