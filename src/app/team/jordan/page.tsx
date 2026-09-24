import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

// Jordan's background page (Wade 2026-09-24: "a page with more info about
// his background that doesn't read like a resume"). Every claim here traces
// to his 9/17 resume or the experience set in Wade OS
// (opportunity_intelligence/team/). Initials tile until his headshot lands;
// when it does, swap the circle for <img src="/jordan.jpg"> here and on /team.
export const metadata: Metadata = {
  title: "Jordan Holzmiller | Kerzie AI",
  description:
    "Jordan Holzmiller sells The Back Cover for Kerzie AI in North Texas. Six-plus years in sales, and he runs his own AI operating system on Claude Code.",
  alternates: { canonical: "https://kerzie.ai/team/jordan" },
  openGraph: {
    type: "profile",
    title: "Jordan Holzmiller | Kerzie AI",
    description:
      "Account Executive at Kerzie AI Solutions. North Texas. Earning trust before he earns the business.",
    url: "https://kerzie.ai/team/jordan",
  },
};

export default function JordanPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">

      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/team"
          className="k-mono text-[#262B3D]/70 text-xs lg:text-sm tracking-[0.15em] lg:tracking-[0.12em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; THE PEOPLE
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-14 pb-12 lg:pb-10">
        <p className="k-rise k-rise-1 k-label mb-8 lg:mb-6">The People</p>
        <div className="k-rise k-rise-2 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
          <div className="w-[144px] h-[144px] rounded-full bg-[#FFFFFF] flex items-center justify-center shrink-0">
            <span className="k-mono text-[#2B5D96] text-3xl">JH</span>
          </div>
          <div>
            <h1 className="text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
              Jordan Holzmiller
            </h1>
            <p className="mt-3 text-[#262B3D] text-lg">
              Account Executive, Kerzie AI Solutions. Dallas, Texas.
            </p>
          </div>
        </div>
        <p className="k-rise k-rise-3 mt-10 text-[#262B3D] text-lg lg:text-xl max-w-2xl leading-relaxed">
          Jordan sells The Back Cover in North Texas: one page, written for
          the AI, that makes a business readable to the AI its customers now
          ask. His job is to ask that question plainly and answer it
          honestly.
        </p>
      </section>

      {/* Where he comes from */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12 lg:py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <h2 className="text-[#1A1B2E] text-[clamp(1.5rem,3vw,2.125rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-2xl mb-6">
            Where he comes from<span className="text-[#B04E2B]">.</span>
          </h2>
          <div className="max-w-2xl space-y-5 text-[#262B3D] text-lg leading-relaxed">
            <p>
              Jordan has spent six-plus years in quota-carrying sales, most
              of it in businesses where a promise has to survive contact with
              an operation. In freight, he was the sole point of contact for
              shippers ranging from $5 million companies to $1 billion-plus
              enterprises: location updates, issue resolution, transparency.
              In the Frisco area
              he launched and ran a 40,000-home print distribution network
              from the ground up, and negotiated the advertising contracts
              and pricing that paid for it.
            </p>
            <p>
              Most recently he managed 56 recurring accounts for a direct-mail
              company, each running monthly campaigns of up to 60,000 pieces.
              He coordinated data, production, finance and prepress teams to
              hit contractual timelines, and he was the escalation point when
              something slipped. Before that came construction tech, where he
              fielded inbound leads and ran deals to close, and a stretch
              running the sales department day to day at an insurance office.
            </p>
            <p>
              His own line for how he sells: he humanizes the sales process
              and earns trust before he earns the business. He is explicit
              about where AI tooling earns trust and where judgment still has
              to do the work.
            </p>
          </div>
        </Reveal>
      </section>

      {/* He runs on the same kind of system Kerzie AI builds */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12 lg:py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <h2 className="text-[#1A1B2E] text-[clamp(1.5rem,3vw,2.125rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-2xl mb-6">
            He runs on the same kind of system Kerzie AI builds
            <span className="text-[#B04E2B]">.</span>
          </h2>
          <div className="max-w-2xl space-y-5 text-[#262B3D] text-lg leading-relaxed">
            <p>
              Since July 2026 Jordan has run his own AI operating system on
              Claude Code: scheduled overnight routines, subagents built for
              research and scoring, standing rules the system has to follow,
              and a live dashboard fed by the underlying data. He holds
              it to two rules. Nothing goes out that cannot be traced to
              source data. Anything unknown is recorded as unknown, not filled
              in with something plausible. He has debugged its ugly failures
              too, like scheduled jobs that reported success while producing
              nothing.
            </p>
            <p>
              In one case study he took a 508-row carrier data export to a
              finished quarterly business review. Profiling every column first
              caught a duplicate load, a facility code that would have split
              one lane into two, and a sentinel value that would have wrecked
              the dwell medians. He found a correlation near -0.3 between
              destination dwell and next-day on-time delivery, and declined to
              claim causation on it. He put the question on an ask list for
              the customer instead.
            </p>
            <p>
              That is the discipline an owner is trusting when they hand
              Kerzie AI their website. Jordan practices it on his own work
              first.
            </p>
          </div>
        </Reveal>
      </section>

      {/* One quiet CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-12 lg:pt-14 pb-28 lg:pb-20 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="text-[#262B3D] text-lg max-w-2xl mb-4">
            Want to know what the AI says about your business?
          </p>
          <Link
            href="/back-cover"
            className="k-link k-focus text-[#2B5D96] text-base lg:text-lg font-semibold hover:text-[#1A1B2E] transition-colors duration-200"
          >
            See The Back Cover <span className="k-arrow">&rarr;</span>
          </Link>
        </Reveal>
      </section>

    </div>
  );
}
