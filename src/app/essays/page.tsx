import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

// THE ESSAYS INDEX (Wade, 2026-09-24): "I think we might need an essays page
// on the website that lists each one as a clickable thing. This link goes
// directly to the Kerzie Effect, but then you have to go to the menu and dig
// down to find the other essays. I think we need an essays page because
// there's going to be more."
//
// Reading order is publication order. The decks are the same three lines the
// header drawer uses. Each `argues` line is copied verbatim from the opening
// of that essay page's own metadata description, so this page never claims
// something the essay does not. /the-line is an Appendix (its masthead kicker
// says so), so it sits after the essays, labeled as one.
export const metadata: Metadata = {
  title: "Essays | Kerzie AI",
  description:
    "Wade Kerzie's essays on what AI does to knowledge work: The Kerzie Effect, The Consequence Clock, and The Blast Door, plus the appendix on the line.",
};

const essays = [
  {
    title: "The Kerzie Effect",
    date: "July 24, 2026",
    deck: "The firm-level argument",
    argues:
      "The most valuable thing you sell is the document you hand over free to win the work. Once the buyer has it, an AI can do the work you used to be paid for.",
    href: "/kerzie-effect",
  },
  {
    title: "The Consequence Clock",
    date: "July 30, 2026",
    deck: "The person-level one",
    argues:
      "You work at the speed you are checked, not the speed you are capable of.",
    href: "/consequence-clock",
  },
  {
    title: "The Blast Door",
    date: "July 31, 2026",
    deck: "The time limit on both",
    argues:
      "A person plus a nearly-free intelligence can build something of their own. That era is real, it is short, and it is closing.",
    href: "/blast-door",
  },
];

const appendix = {
  title: "If you’re on the wrong side of the line",
  date: "July 25, 2026",
  deck: "Appendix to The Kerzie Effect",
  argues:
    "The Kerzie Effect has two preconditions: cross the AI competency line, and work from one window. If you are missing one, this is what to do about it.",
  href: "/the-line",
};

type Entry = typeof essays[number];

function EssayRow({ e, i, cta }: { e: Entry; i: number; cta: string }) {
  return (
    <Reveal delay={i * 80}>
      <Link
        href={e.href}
        className="group block py-10 border-b border-[rgba(26,27,46,0.13)] k-focus"
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-baseline">
          <div className="lg:col-span-3 mb-3 lg:mb-0">
            <span className="k-mono text-[#262B3D]/40 text-xs lg:text-sm tracking-[0.12em]">
              {e.date}
            </span>
          </div>
          <div className="lg:col-span-6 mb-3 lg:mb-0">
            <h2 className="text-[#1A1B2E] text-2xl lg:text-3xl font-semibold tracking-[-0.02em] group-hover:text-[#2B5D96] transition-colors duration-200">
              {e.title}
            </h2>
            <p className="mt-1 text-[#5B6B77] text-sm lg:text-base">{e.deck}</p>
            <p className="mt-3 text-[#262B3D] text-base lg:text-lg leading-relaxed max-w-lg">
              {e.argues}
            </p>
          </div>
          <div className="lg:col-span-3 lg:text-right">
            <span className="text-[#2B5D96] text-sm lg:text-base font-semibold">
              {cta} <span className="k-arrow">&rarr;</span>
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function EssaysPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">

      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#262B3D]/70 text-xs lg:text-sm tracking-[0.15em] lg:tracking-[0.12em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#B04E2B]">.</span>AI
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-14 pb-16 lg:pb-12">
        <p className="k-rise k-rise-1 k-label mb-8 lg:mb-6">Essays</p>
        <h1 className="k-rise k-rise-2 text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
          One argument, in three parts.
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#262B3D] text-lg max-w-xl">
          Read them in the order I wrote them if you can. Each one stands on
          its own, but they build.
        </p>
      </section>

      {/* The essays */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-12 lg:pb-10">
        <div className="k-hairline w-full" />
        {essays.map((e, i) => (
          <EssayRow key={e.href} e={e} i={i} cta="Read the essay" />
        ))}
      </section>

      {/* The appendix, after the essays and labeled as one */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-12 lg:pb-10">
        <p className="k-label mb-2">Appendix</p>
        <div className="k-hairline w-full" />
        <EssayRow e={appendix} i={essays.length} cta="Read the appendix" />
      </section>

      {/* What is coming */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-28 lg:pb-20">
        <p className="k-mono text-[#262B3D]/50 text-xs lg:text-sm tracking-[0.12em]">
          Coming next: The Blast Radius
        </p>
      </section>

    </div>
  );
}
