import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The One-Window Setup | Kerzie AI",
  description:
    "The complete AI working environment in one document. Load it into Claude, ChatGPT, Codex, or Gemini and your AI builds your operating system with you. $99, one time.",
};

// TODO: replace with the live Stripe payment link before launch
const CHECKOUT_URL = "STRIPE_LINK_PENDING";

const builds = [
  "The one-folder workspace: everything your AI needs to know, on disk, not lost in a chat thread.",
  "The operating manual your AI loads every session, with the five standing rules that prevent AI disasters.",
  "A single working tracker your whole business runs from, updated in plain language.",
  "Memory rules, so corrections stick and context survives model changes.",
  "Automated routines: a daily email sweep, weekly ops checks, and watchers that alert only when something changes.",
  "The voice-capture pipeline: talk into your phone, and the thought is processed into next steps by the time you sit down.",
  "Cost-control and model-routing rules, learned the expensive way so you do not have to.",
];

export default function OneWindowPage() {
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

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-16">
        <p className="k-rise k-rise-1 k-label mb-8">The One-Window Setup</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
          Your whole business, <span className="k-serif font-normal">one window</span>
          <span className="text-[#E8896A]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#AABBCC] text-lg lg:text-xl max-w-xl leading-relaxed">
          The complete AI working environment, in one document you load into your
          AI. It asks you the questions. It does the building. It is the exact
          framework my own businesses run on every day.
        </p>
        <p className="k-rise k-rise-3 mt-6 text-white text-2xl font-semibold">
          $99, one time<span className="text-[#E8896A]">.</span>
        </p>
        <div className="k-rise k-rise-4 mt-10">
          <a href={CHECKOUT_URL} className="k-btn-solid k-focus inline-block">
            Get the Setup <span className="k-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* Why a document */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">01 &mdash; Why The Product Is A Document</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              Most people run AI as a chat window: ask a question, get an answer,
              lose everything when the thread ends.
            </p>
            <p>
              The operators getting real leverage run it as an operating system:
              one window where the AI reads the state of the business, carries
              the execution, and remembers.
            </p>
            <p className="text-white font-medium">
              Getting from the first mode to the second is a setup problem. Most
              people never figure the full setup out on their own, or they get 75
              percent of the way there and stall.
            </p>
            <p>
              This document is the missing piece: a briefing written to your AI,
              not to you. Your AI reads it and becomes the builder. You answer
              its questions.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Already in your hand */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">02 &mdash; No New Hardware</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              There is a wave of AI gadgets right now that record your voice and
              hand you summaries: pins, pendants, pocket recorders. Another
              device, another app, another subscription.
            </p>
            <p className="text-white font-medium">
              The capability is already in your hand.{" "}
              <span className="k-serif font-normal">
                And it is better, because it feeds YOUR AI, with your context,
                not a vendor&apos;s summary app.
              </span>
            </p>
            <p>
              This setup uses the AI subscription you already pay for and the
              phone already in your pocket. Nothing new to buy, charge, or wear.
            </p>
          </div>
        </Reveal>
      </section>

      {/* What your AI builds */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">03 &mdash; What Your AI Builds With You</p>
          <ul className="max-w-2xl space-y-4">
            {builds.map((t) => (
              <li
                key={t}
                className="border-l border-[#E8896A] pl-5 text-[#AABBCC] text-lg leading-relaxed"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Straight answers */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">04 &mdash; Straight Answers</p>
          <div className="max-w-2xl space-y-5 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              <span className="text-white font-medium">Is this a course?</span>{" "}
              No. It is a working document. About an hour gets the foundation
              running; the first-week plan inside paces the rest.
            </p>
            <p>
              <span className="text-white font-medium">Do I need to be technical?</span>{" "}
              No. Your AI is the technical one. If you can describe your business
              and answer questions about it, you can do this.
            </p>
            <p>
              <span className="text-white font-medium">Which AI?</span> Written
              AI-agnostic. Claude with file access is the best fit; ChatGPT,
              Codex, and Gemini work too.
            </p>
            <p>
              <span className="text-white font-medium">Is this real?</span> It is
              the literal framework my operating system runs on: the same
              tracker, rules, routines, and capture pipeline that run my ventures
              every day. Nothing in it is theoretical.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Price + ladder */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">05 &mdash; The Price</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p className="text-white text-xl font-semibold">
              $99, one time. Instant access after checkout.
            </p>
            <p>
              Rather have it built WITH you: your machine, your accounts, one
              real workflow shipped before I leave the call? That is the{" "}
              <Link href="/services/fast-track" className="k-link k-focus text-[#6B9FD4]">
                AI Fast-Track Session
              </Link>{" "}
              at $750, and this document is included.
            </p>
          </div>
          <div className="mt-10">
            <a href={CHECKOUT_URL} className="k-btn-solid k-focus inline-block">
              Get the Setup for $99 <span className="k-arrow">&rarr;</span>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
