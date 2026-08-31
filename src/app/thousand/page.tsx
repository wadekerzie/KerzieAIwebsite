import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import operators from "@/data/operators.json";

export const metadata: Metadata = {
  title: "The First Thousand | Kerzie AI",
  description:
    "The mission: get 1,000 people through the blast door before it closes. Live count, updated as each operator goes live.",
  openGraph: {
    type: "article",
    title: "The First Thousand",
    description:
      "The mission: get 1,000 people through the blast door before it closes.",
    url: "https://kerzie.ai/thousand",
  },
};

export default function ThousandPage() {
  const pct = Math.max(0.5, (operators.count / operators.goal) * 100);
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#262B3D]/70 text-xs tracking-[0.15em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#B04E2B]">.</span>AI
        </Link>
      </div>

      {/* The counter is the hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-14">
        <p className="k-rise k-rise-1 k-label mb-8">The First Thousand</p>
        <h1 className="k-rise k-rise-2 text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.02] text-[clamp(3rem,9vw,6.5rem)]">
          {operators.count}
          <span className="text-[#262B3D]/50 font-normal text-[0.45em]"> of 1,000</span>
        </h1>
        <div className="k-rise k-rise-3 mt-6 max-w-xl">
          <div className="h-2 rounded-full bg-[rgba(26,27,46,0.15)] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#B04E2B]"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-3 text-[#262B3D]/70 text-sm">
            {operators.goal - operators.count} to go &middot; count updated{" "}
            {operators.updated} &middot; an operator is counted only when their
            window is actually running, not when they buy
          </p>
        </div>
        <p className="k-rise k-rise-3 mt-8 text-[#262B3D] text-lg lg:text-xl max-w-xl leading-relaxed">
          The mission: get 1,000 people through the blast door before it
          closes. Running their work, their business, or their job from one
          window, with an AI that actually knows their world.
        </p>
      </section>

      {/* The Founding Hundred - decided 2026-08-10 (Wade's option B), FIRST
          SHIPPED TO THE PAGE 2026-08-14. Terms come verbatim from
          kerzie_ai_content/founding_hundred_program.md in Wade OS. The price
          never drops - the founding benefit is the free upgrade path. The
          wall names founders ONLY after each one consents to being named;
          seats 1-7 are the existing operators, grandfathered. */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">The Founding Hundred</p>
          <h2 className="text-[#1A1B2E] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-2xl mb-5">
            The first hundred get everything we ever ship
            <span className="text-[#B04E2B]">.</span>
          </h2>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed mb-8">
            <p>
              The price does not drop for anybody - a discount you have to
              notice is a discount you learn to ignore. What the first hundred
              operators get instead is worth more, and it never expires.
            </p>
          </div>
          <p className="k-mono text-[#B04E2B] text-xs tracking-[0.15em] mb-4">
            WHAT FOUNDERS GET
          </p>
          <ul className="max-w-2xl space-y-4">
            {[
              "Every OS upgrade free, for life. The people whose feedback creates the upgrades never pay for them.",
              "The downloads page, free. Every setup guide we sell, included from day one.",
              "A founding number - Operator #12 of 100 - stamped in your setup document.",
              "Your name, your business, and your link on this page, if you want them here.",
              "Fingerprints on the product: release notes name who asked for what. The last customer request shipped inside a week.",
              "The monthly founding call, capped at the hundred.",
            ].map((line) => (
              <li
                key={line}
                className="border-l border-[#B04E2B] pl-5 text-[#262B3D] text-lg leading-relaxed"
              >
                {line}
              </li>
            ))}
          </ul>
          <p className="k-mono text-[#2B5D96] text-xs tracking-[0.15em] mt-10 mb-4">
            WHAT FOUNDERS GIVE
          </p>
          <ul className="max-w-2xl space-y-4">
            {[
              "One short note a month: what hurt, what saved time, what you want next.",
              "Permission to use your first name, business type, and real numbers as receipts.",
              "After thirty days of real use, a testimonial - only if we genuinely earned it.",
            ].map((line) => (
              <li
                key={line}
                className="border-l border-[#2B5D96] pl-5 text-[#262B3D] text-lg leading-relaxed"
              >
                {line}
              </li>
            ))}
          </ul>
          <p className="max-w-2xl mt-10 text-[#262B3D] text-lg leading-relaxed">
            <span className="text-[#1A1B2E] font-medium">
              Seats 1 through {operators.count} are taken.
            </span>{" "}
            The founding wall goes up here as each founder says yes to being
            named.
          </p>
          <div className="mt-8">
            <Link href="/one-window" className="k-btn-solid k-focus inline-block">
              Claim a founding seat - One-Window{" "}
              <span className="k-arrow">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Why the door */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">Why A Door, And Why A Clock</p>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
            <p>
              I have written three essays that explain what I believe is
              happening to work.{" "}
              <Link href="/kerzie-effect" className="k-link k-focus text-[#2B5D96]">
                The Kerzie Effect
              </Link>{" "}
              is why the door exists: once your buyer or your boss holds your
              scope of work plus an AI, they can execute it without you.{" "}
              <Link href="/consequence-clock" className="k-link k-focus text-[#2B5D96]">
                The Consequence Clock
              </Link>{" "}
              is why now: the gap between what companies say they want and what
              they absorb has a clock running on it.{" "}
              <Link href="/blast-door" className="k-link k-focus text-[#2B5D96]">
                The Blast Door
              </Link>{" "}
              is the honest part: the window to get good at this while it still
              counts as an advantage does not stay open.
            </p>
            <p className="text-[#1A1B2E] font-medium">
              I can write essays until the door closes, or I can count the
              people who got through it. This page counts.
            </p>
          </div>
        </Reveal>
      </section>

      {/* What counts */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">What Counts As Through The Door</p>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
            <p>
              Not a course completed. Not a subscription bought. An operator
              counts when their one-window operating system is actually
              running: their accounts connected, their tracker live, their
              work happening by talking. A solopreneur, an employee, a
              retiree running a household. The role does not matter. The
              window does.
            </p>
            <p>
              Every operator gets a number, in order of going live. The first
              five are real people I can name, starting with me. When this
              page says 1,000, it will mean one thousand actual running
              systems, because this count follows the same rule as everything
              I publish: it has to be literally true.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The conviction layer */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">Why I Am Doing This</p>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
            <p>
              I spent thirty years watching technology shifts sort people into
              two groups, and I watched who ended up in each one. This shift
              is faster and it sorts harder. I am not neutral about it. I
              want the people who read my letters, the operators who run
              their businesses from their trucks, the employees nobody is
              training, on the right side of that door when it moves.
            </p>
            <p className="text-[#1A1B2E] font-medium">
              A thousand is not a business plan. It is the number where a
              group of people becomes proof that nobody else needs
              permission.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">Walk Through</p>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
            <p>
              The door is the{" "}
              <Link href="/one-window" className="k-link k-focus text-[#2B5D96]">
                One-Window
              </Link>
              : $99, one document, about three hours to a running system. Not
              ready to spend anything? Take the free{" "}
              <Link href="/free/mobile-capture-kit" className="k-link k-focus text-[#2B5D96]">
                Voice Command Center
              </Link>{" "}
              and start the habit.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/one-window" className="k-btn-solid k-focus inline-block">
              Get the Setup <span className="k-arrow">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
