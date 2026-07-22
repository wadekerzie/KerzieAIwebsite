import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "For Sales Teams | Kerzie AI",
  description:
    "Your reps have AI licenses. That is not the same as using AI. Thirty years leading enterprise sales, now turning AI from a forgotten login into the way your team runs its accounts. A 30-day pilot, scored from day one.",
};

const whatIDo = [
  {
    lead: "Pilot pod.",
    body: "One sales leader and three reps who share accounts, so the manager's view is part of the proof, not an afterthought.",
  },
  {
    lead: "Hands on the keyboard from day one.",
    body: "Watching a demo is not the same as doing the work.",
  },
  {
    lead: "A scorecard from the first session.",
    body: "So “this helped” is something you read, not something we argue about.",
  },
];

const steps = [
  {
    label: "Crawl",
    body: "Every seller builds a context brain — who they are, what they sell, how they work — so the AI answers like a teammate, not a search box.",
  },
  {
    label: "Walk",
    body: "We put it to work on live accounts. Prep, research, follow-up, the account plan. Real deals, not exercises.",
  },
  {
    label: "Run",
    body: "The pod's wins become the standard the rest of the team gets fast-laned into. Whoever reaches the next level first sets the bar everyone else has to meet.",
  },
];

export default function SalesTeamsPage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#AABBCC]/70 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#E8896A]">.</span>AI
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-16">
        <p className="k-rise k-rise-1 k-label mb-8">For Sales Teams</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
          Your reps have AI licenses. That is not the same as{" "}
          <span className="k-serif font-normal">using</span> it
          <span className="text-[#E8896A]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#AABBCC] text-lg lg:text-xl max-w-xl leading-relaxed">
          I spent 30 years leading enterprise sales teams. Now I help those
          teams turn AI from a login they forget into the way they run their
          accounts.
        </p>
        <div className="k-rise k-rise-4 mt-10">
          <Link href="/schedule" className="k-btn-solid k-focus inline-block">
            Book a call <span className="k-arrow">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* The gap */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">01 &mdash; The Gap</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              Most companies roll AI out to the sales floor the same way: buy the
              licenses, send a video, move on. About one in ten sellers figures
              it out on their own. The other nine watched the video and went back
              to what they knew.
            </p>
            <p className="text-white font-medium">
              Budget without know-how is a gift the team cannot open.
            </p>
            <p>
              A license upgrade is not an enablement plan. And if your team is
              still calling AI a tool, they are not using it. There is a
              difference between a tool you pick up and an{" "}
              <span className="k-serif font-normal">
                engine you run the business on
              </span>
              . That difference is where the pipeline is.
            </p>
          </div>
        </Reveal>
      </section>

      {/* What I do */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">02 &mdash; What I Do</p>
          <p className="text-white text-lg font-medium max-w-2xl mb-8 leading-relaxed">
            I get a small group hands-on-keyboard and prove the value in
            miniature before you scale it.
          </p>
          <ul className="max-w-2xl space-y-5">
            {whatIDo.map((item) => (
              <li
                key={item.lead}
                className="border-l border-[#E8896A] pl-5 text-[#AABBCC] text-lg leading-relaxed"
              >
                <span className="text-white font-medium">{item.lead}</span>{" "}
                {item.body}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">03 &mdash; How It Works: Crawl, Walk, Run</p>
          <div className="max-w-2xl space-y-8">
            {steps.map((step) => (
              <div key={step.label} className="lg:grid lg:grid-cols-12 lg:gap-6">
                <div className="lg:col-span-3 mb-2 lg:mb-0">
                  <p className="k-mono text-[#E8896A] text-sm tracking-[0.15em] uppercase">
                    {step.label}
                  </p>
                </div>
                <p className="lg:col-span-9 text-[#AABBCC] text-lg leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Why me */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">04 &mdash; Why Me</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              Thirty years carrying a number and leading the people who carry
              theirs. I am not a technologist who read about sales. I ran sales.
            </p>
            <p>
              Now I bring the AI layer on top of decades of knowing what a
              seller's day actually looks like: the meetings, the waiting, the
              prep that never ends.{" "}
              <span className="k-serif font-normal text-white">
                Your reps will feel understood before they feel taught.
              </span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA band */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <h2 className="text-white text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-2xl mb-5">
            Let&apos;s prove it with a few of your people
            <span className="text-[#E8896A]">.</span>
          </h2>
          <p className="text-[#AABBCC] text-lg max-w-xl mb-10 leading-relaxed">
            A 30-day pilot, scored from day one. If it works, you will see it. If
            it does not, you will know that too.
          </p>
          <Link href="/schedule" className="k-btn-solid k-focus inline-block">
            Book a call <span className="k-arrow">&rarr;</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
