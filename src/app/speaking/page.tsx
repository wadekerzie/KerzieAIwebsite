import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking | Wade Kerzie | Kerzie AI",
  description:
    "Wade Kerzie: 30 years of enterprise sales leadership, now running four businesses solo with AI. Podcast guest and speaker topics, receipts included.",
};

const TOPICS = [
  {
    title: "The model was never the bottleneck. You are.",
    body: "Why waiting for the next model release is costing operators the only advantage window they will get, and the five reps that close the gap this week.",
  },
  {
    title: "One person, whole company.",
    body: "What it actually looks like to run marketing, sales ops, product, and finance through one AI working session a day. Live walkthrough available.",
  },
  {
    title: "Your phone is about to answer itself.",
    body: "Wade is an active user in AT&T's North Texas AI call-screening pilot. A first-person report on carrier AI, what it filters, and what it means for every business that answers a phone.",
  },
  {
    title: "My own method died in six weeks.",
    body: "Wade built a two-AI workflow, taught it, then watched the tools make it obsolete. What that pace does to best practices, training budgets, and anyone selling AI advice.",
  },
  {
    title: "Main Street AI.",
    body: "Home repair by text with no app and no AI talk to the customer. What adoption looks like when the technology hides completely.",
  },
];

const RECEIPTS = [
  "30 years of enterprise sales leadership, VP and Director roles.",
  "Runs Kerzie AI (consulting), GotaGuy (home repair by text, Texas and Colorado), TrueSeat (AI-interview hiring engine, XPrize entry in progress), and PuttingIsSimple. Solo.",
  "Took a paid digital product from idea to live checkout in about a day, payment stack included.",
  "Active enterprise AI enablement engagement in flight with a major technology partner.",
  "Weekly newsletter and the AI in the Wild YouTube show.",
];

export default function SpeakingPage() {
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

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-12">
        <p className="k-label mb-8">Wade Kerzie &middot; Speaker &amp; Podcast Guest</p>
        <h1 className="text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.5rem)]">
          One person doing the work of a company with multiple departments
          <span className="text-[#E8896A]">.</span>{" "}
          <span className="k-serif font-normal">And showing exactly how.</span>
        </h1>
        <p className="mt-6 text-[#AABBCC] text-lg lg:text-xl max-w-2xl leading-relaxed">
          Wade Kerzie spent 30 years leading enterprise sales teams before
          rebuilding his entire working life around AI. Today he runs an AI
          consulting practice, a home-repair-by-text service in two states, an
          AI hiring engine, and a weekly newsletter and YouTube show, alone,
          from McKinney, Texas. No staff, no agency, no code. He talks about
          what AI actually does in a real business, with receipts.
        </p>
        <div className="mt-10">
          <a href="mailto:wade@kerzie.ai?subject=Speaking%20inquiry" className="k-btn-solid k-focus inline-block">
            Book Wade <span className="k-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12 border-t border-[rgba(170,187,204,0.13)]">
        <p className="k-label mb-8">Topics</p>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl">
          {TOPICS.map((t, i) => (
            <div key={i}>
              <p className="k-mono text-[#E8896A] text-xs tracking-[0.15em] mb-2">
                0{i + 1}
              </p>
              <h2 className="text-white text-xl font-bold tracking-[-0.01em]">
                {t.title}
              </h2>
              <p className="mt-3 text-[#AABBCC] leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12 border-t border-[rgba(170,187,204,0.13)]">
        <p className="k-label mb-8">Receipts</p>
        <ul className="max-w-2xl space-y-4">
          {RECEIPTS.map((r, i) => (
            <li key={i} className="text-[#AABBCC] text-lg leading-relaxed flex gap-4">
              <span className="text-[#E8896A] shrink-0">&#8226;</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[#AABBCC] text-lg max-w-2xl leading-relaxed">
          The first non-technical person Wade handed his free Capture Kit texted
          him unprompted on day one:{" "}
          <span className="k-serif text-white">
            &quot;I absolutely love this new voice memos to Claude so far. Done 4
            items and a couple of them while doing other task.&quot;
          </span>{" "}
          <span className="text-sm text-[#6d7585]">
            Kurt Nelson, Innovative Images. Typo his. Receipt real.
          </span>
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12 border-t border-[rgba(170,187,204,0.13)] pb-24">
        <p className="k-label mb-8">Logistics</p>
        <div className="max-w-2xl space-y-3 text-[#AABBCC] text-lg leading-relaxed">
          <p>Based in McKinney, Texas. In person across DFW; remote anywhere.</p>
          <p>
            Own recording setup, comfortable long-form or tight segments.
            Everything claimed on air can be shown on screen.
          </p>
          <p>
            Booking:{" "}
            <a href="mailto:wade@kerzie.ai" className="k-link k-focus text-[#6B9FD4]">
              wade@kerzie.ai
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
