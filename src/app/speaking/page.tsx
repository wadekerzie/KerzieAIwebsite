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
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#262B3D]/70 text-xs tracking-[0.15em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#B04E2B]">.</span>AI
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-12">
        <p className="k-label mb-8">Wade Kerzie &middot; Speaker &amp; Podcast Guest</p>
        <h1 className="text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.5rem)]">
          One person doing the work of a company with multiple departments
          <span className="text-[#B04E2B]">.</span>{" "}
          <span className="k-serif font-normal">And showing exactly how.</span>
        </h1>
        <p className="mt-6 text-[#262B3D] text-lg lg:text-xl max-w-2xl leading-relaxed">
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

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12 border-t border-[rgba(26,27,46,0.13)]">
        <p className="k-label mb-8">Topics</p>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl">
          {TOPICS.map((t, i) => (
            <div key={i}>
              <p className="k-mono text-[#B04E2B] text-xs tracking-[0.15em] mb-2">
                0{i + 1}
              </p>
              <h2 className="text-[#1A1B2E] text-xl font-bold tracking-[-0.01em]">
                {t.title}
              </h2>
              <p className="mt-3 text-[#262B3D] leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12 border-t border-[rgba(26,27,46,0.13)]">
        <p className="k-label mb-8">Receipts</p>
        <ul className="max-w-2xl space-y-4">
          {RECEIPTS.map((r, i) => (
            <li key={i} className="text-[#262B3D] text-lg leading-relaxed flex gap-4">
              <span className="text-[#B04E2B] shrink-0">&#8226;</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[#262B3D] text-lg max-w-2xl leading-relaxed">
          The first non-technical person Wade handed his free Voice Command Center texted
          him unprompted on day one:{" "}
          <span className="k-serif text-[#1A1B2E]">
            &quot;I absolutely love this new voice memos to Claude so far. Done 4
            items and a couple of them while doing other task.&quot;
          </span>{" "}
          <span className="text-sm text-[#5B6B77]">
            Kurt Nelson, Innovative Images. Typo his. Receipt real.
          </span>
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12 border-t border-[rgba(26,27,46,0.13)] pb-24">
        <p className="k-label mb-8">Logistics</p>
        <div className="max-w-2xl space-y-3 text-[#262B3D] text-lg leading-relaxed">
          <p>Based in McKinney, Texas. In person across DFW; remote anywhere.</p>
          <p>
            Own recording setup, comfortable long-form or tight segments.
            Everything claimed on air can be shown on screen.
          </p>
          <p>
            Booking:{" "}
            <a href="mailto:wade@kerzie.ai" className="k-link k-focus text-[#2B5D96]">
              wade@kerzie.ai
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
