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
    <div className="bg-[#1A1B2E] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#AABBCC]/70 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#E8896A]">.</span>AI
        </Link>
      </div>

      {/* The counter is the hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-14">
        <p className="k-rise k-rise-1 k-label mb-8">The First Thousand</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.02] text-[clamp(3rem,9vw,6.5rem)]">
          {operators.count}
          <span className="text-[#AABBCC]/50 font-normal text-[0.45em]"> of 1,000</span>
        </h1>
        <div className="k-rise k-rise-3 mt-6 max-w-xl">
          <div className="h-2 rounded-full bg-[rgba(170,187,204,0.15)] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#E8896A]"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-3 text-[#AABBCC]/70 text-sm">
            {operators.goal - operators.count} to go &middot; count updated{" "}
            {operators.updated} &middot; an operator is counted only when their
            window is actually running, not when they buy
          </p>
        </div>
        <p className="k-rise k-rise-3 mt-8 text-[#AABBCC] text-lg lg:text-xl max-w-xl leading-relaxed">
          The mission: get 1,000 people through the blast door before it
          closes. Running their work, their business, or their job from one
          window, with an AI that actually knows their world.
        </p>
      </section>

      {/* Why the door */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">Why A Door, And Why A Clock</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              I have written three essays that explain what I believe is
              happening to work.{" "}
              <Link href="/kerzie-effect" className="k-link k-focus text-[#6B9FD4]">
                The Kerzie Effect
              </Link>{" "}
              is why the door exists: once your buyer or your boss holds your
              scope of work plus an AI, they can execute it without you.{" "}
              <Link href="/consequence-clock" className="k-link k-focus text-[#6B9FD4]">
                The Consequence Clock
              </Link>{" "}
              is why now: the gap between what companies say they want and what
              they absorb has a clock running on it.{" "}
              <Link href="/blast-door" className="k-link k-focus text-[#6B9FD4]">
                The Blast Door
              </Link>{" "}
              is the honest part: the window to get good at this while it still
              counts as an advantage does not stay open.
            </p>
            <p className="text-white font-medium">
              I can write essays until the door closes, or I can count the
              people who got through it. This page counts.
            </p>
          </div>
        </Reveal>
      </section>

      {/* What counts */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">What Counts As Through The Door</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
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
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">Why I Am Doing This</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              I spent thirty years watching technology shifts sort people into
              two groups, and I watched who ended up in each one. This shift
              is faster and it sorts harder. I am not neutral about it. I
              want the people who read my letters, the operators who run
              their businesses from their trucks, the employees nobody is
              training, on the right side of that door when it moves.
            </p>
            <p className="text-white font-medium">
              A thousand is not a business plan. It is the number where a
              group of people becomes proof that nobody else needs
              permission.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">Walk Through</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              The door is the{" "}
              <Link href="/one-window" className="k-link k-focus text-[#6B9FD4]">
                One-Window Setup
              </Link>
              : $99, one document, about three hours to a running system. Not
              ready to spend anything? Take the free{" "}
              <Link href="/free/mobile-capture-kit" className="k-link k-focus text-[#6B9FD4]">
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
