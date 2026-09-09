import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import OneWindowGate from "@/components/OneWindowGate";

// The free door - rebuilt 2026-09-05 on Wade's ruling: no payment rails,
// capture first/last/email before the download, the collapse thesis leads.
// The gate posts to /api/gate (magnet "one-window") which subscribes the
// operator to the newsletter and lands them on /one-window/welcome.

export const metadata: Metadata = {
  title: "One-Window | Kerzie AI",
  description:
    "If you can create an account and follow instructions, you can run your work on AI. Your own AI operating system, free, every upgrade included. Mac.",
  openGraph: {
    type: "article",
    title: "One-Window",
    description:
      "I talk. The work gets done. One paste of the Foundation into Claude installs your own AI operating system. Free, upgrades included. Mac.",
    url: "https://kerzie.ai/one-window",
    images: [{ url: "/og/one-window-talk.jpg", width: 1200, height: 630, alt: "A man alone at his desk, speaking to his laptop, hands away from the keyboard." }],
  },
  twitter: { card: "summary_large_image", images: ["/og/one-window-talk.jpg"] },
};

const gets = [
  {
    name: "It remembers you.",
    body: "Your work, your people, your decisions - session to session. You never re-explain your business to your own AI.",
  },
  {
    name: "You talk, the work gets done.",
    body: "Drafts, follow-ups, trackers, plans - staged for your yes. Nothing goes out without you.",
  },
  {
    name: "One place to look.",
    body: "The Single Pane: every project you run as a tab on one private page, kept current by your AI, not by you.",
  },
  {
    name: "Say “done W1” and it is done.",
    body: "Every open item has a short ID. You speak in two words; the tracker stays true.",
  },
  {
    name: "It works while you sleep.",
    body: "Scheduled tasks run overnight and in the morning the results are waiting: the inbox swept, the day set up.",
  },
  {
    name: "It spends your AI budget wisely.",
    body: "The expensive model thinks; cheaper ones do the legwork. Your $20 subscription lasts the month.",
  },
  {
    name: "It closes every day clean.",
    body: "A wrap-up ritual reconciles everything, so tomorrow starts from the truth instead of from memory.",
  },
  {
    name: "It cannot go rogue.",
    body: "Standing rules and approval gates are built into the foundation. Sending, spending, and publishing always wait for your yes.",
  },
];

export default function OneWindowPage() {
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

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-16">
        <p className="k-rise k-rise-1 k-label mb-8">
          One-Window &mdash; your own personal OS. Free.
        </p>
        <h1 className="k-rise k-rise-2 text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.08] text-[clamp(2rem,4.5vw,3.4rem)]">
          If you can create an account
          <span className="k-serif font-normal block">and follow instructions,</span>
          you can run your work on AI
          <span className="text-[#B04E2B]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#262B3D] text-lg lg:text-xl max-w-xl leading-relaxed">
          That is the whole requirement. Paste the Foundation into Claude
          and it interviews you, then builds your operating system around your
          answers: one window, one AI that knows your work, turning what you
          say into finished work you approve.
        </p>
        <p className="k-rise k-rise-3 mt-6 text-[#1A1B2E] text-2xl font-semibold">
          Free<span className="text-[#B04E2B]">.</span> The whole operating
          system, and every upgrade.
        </p>
        <p className="k-rise k-rise-3 mt-4 text-[#262B3D]/80 text-base max-w-xl leading-relaxed">
          System requirements: a Mac, and a $20 per month Claude subscription.
          Windows is not supported yet.
        </p>
        <div className="k-rise k-rise-4 mt-10">
          <a href="#get" className="k-btn-solid k-focus inline-block">
            Get One-Window free <span className="k-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* The countdown - 3-2-1-0 */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-lg overflow-hidden border border-[rgba(26,27,46,0.2)] bg-[rgba(26,27,46,0.2)] max-w-4xl">
          {[
            {
              n: "3",
              t: "hours",
              d: "from one paste of the Foundation to running your work in one window.",
            },
            {
              n: "2",
              t: "new habits",
              d: "record what you say, and give it one place to land.",
            },
            {
              n: "1",
              t: "window",
              d: "one AI that knows your work and turns talk into finished work.",
            },
            {
              n: "0",
              t: "to-do list",
              d: "gone, replaced by a pane your AI keeps current for you.",
            },
          ].map((c) => (
            <div key={c.n} className="bg-[#FAF8F4] p-6">
              <p
                className={`text-5xl lg:text-6xl font-bold tracking-tight ${
                  c.n === "0" ? "text-[#B04E2B]" : "text-[#1A1B2E]"
                }`}
              >
                {c.n}
              </p>
              <p className="k-mono mt-2 text-[11px] tracking-[0.15em] uppercase text-[#262B3D]">
                {c.t}
              </p>
              <p className="mt-3 text-[#262B3D]/80 text-sm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[#262B3D]/70 text-sm">
          A countdown does not stop at one. It lands on zero
          <span className="text-[#B04E2B]">.</span>
        </p>
      </section>

      {/* The explainer - the video is the demo */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-4">
        <div className="max-w-2xl">
          <p className="k-label mb-4">60 Seconds, And The Video Is The Demo</p>
          <video
            controls
            preload="metadata"
            playsInline
            className="w-full rounded-lg border border-[rgba(26,27,46,0.2)]"
          >
            <source src="/videos/one-window-explainer.mp4" type="video/mp4" />
          </video>
          <p className="mt-3 text-[#262B3D]/70 text-sm leading-relaxed">
            That is my AI avatar, built and scripted from my own spoken words by
            my operating system. Made the same way everything else here gets
            made: I talked, the work got done.
          </p>
        </div>
      </section>

      {/* The collapse */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">01 &mdash; The Learning Curve Is Gone</p>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
            <p>
              For two years, using AI well meant studying it: which model for
              what, which tools, prompt this, chain that. People built careers
              on explaining it. That curve is gone.
            </p>
            <p className="text-[#1A1B2E] font-medium">
              Two skills are left, and you have had both for twenty-five years:
              create an account with a username and password, and follow
              instructions.
            </p>
            <p>
              The window gives the instructions now, not you. Connect your
              email: it walks you through it. Connect your calendar: it walks
              you through it. The hardest thing you will ever do is follow
              steps to create an account, and you have been doing that since
              the internet arrived.
            </p>
            <p>
              Prompt engineering did not get easier. It got done. It is inside
              the Foundation, written once, and you get it free. What is left
              for you is the only part that was ever really yours: knowing
              what needs to get done.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The 16,000 words */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">02 &mdash; Your 16,000 Words</p>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
            <p>
              Researchers once wired people with recorders to settle how much
              the average person talks. The answer: about 16,000 words a day.
            </p>
            <p>
              That is a 60 page document, every day, spoken into the air and
              gone by dinner. The idea you had in the car is in there. The
              commitment you made in the hallway is in there. The email you
              meant to send is in there. All of it said out loud, captured by
              nobody.
            </p>
            <p className="text-[#1A1B2E] font-medium">
              One-Window exists to catch those words and turn them into
              finished work. Simpler, not additional.
            </p>
          </div>
        </Reveal>
      </section>

      {/* What you get */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">03 &mdash; What You Get</p>
          <p className="max-w-2xl text-[#262B3D] text-lg leading-relaxed mb-8">
            Built with you in the first sittings, from an interview about your
            actual work. Nothing generic.
          </p>
          <ul className="max-w-2xl space-y-4">
            {gets.map((item) => (
              <li
                key={item.name}
                className="border-l border-[#B04E2B] pl-5 text-[#262B3D] text-lg leading-relaxed"
              >
                <span className="text-[#1A1B2E] font-medium">{item.name}</span>{" "}
                {item.body}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* The three steps */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">04 &mdash; The Whole Door Is Three Steps</p>
          <div className="max-w-2xl space-y-6">
            {[
              {
                n: "1",
                t: "Get a Claude account and the desktop app.",
                d: "The $20 per month plan. If you have ever created an account online, you can do this.",
              },
              {
                n: "2",
                t: "Run one command on your Mac.",
                d: "Copied straight off the page, pasted once. The Foundation tells you exactly what to do if the one confusing part goes wrong.",
              },
              {
                n: "3",
                t: "Paste the Foundation.",
                d: "Your AI reads it and becomes the builder. It interviews you, then it builds. You answer questions and approve.",
              },
            ].map((s) => (
              <div key={s.n} className="flex gap-5">
                <p className="text-3xl font-bold text-[#B04E2B] leading-none pt-1">{s.n}</p>
                <div>
                  <p className="text-[#1A1B2E] text-lg font-medium leading-snug">{s.t}</p>
                  <p className="mt-1 text-[#262B3D]/85 text-lg leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Why free */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">05 &mdash; Why Free</p>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
            <p>
              This used to cost $99, with a $149 pass for the upgrade stream.
              I retired both.
            </p>
            <p className="text-[#1A1B2E] font-medium">
              Because I want a thousand operators more than I want
              anybody&apos;s $99. Kerzie AI&apos;s business is deploying AI for
              companies. One-Window running your work is the proof, and the
              proof is the megaphone.
            </p>
            <p>
              The upgrades come with it: the Living Pane, the Clean Handoff,
              the Weekly Tune-Up, the Nightly Dream, and the stream keeps
              coming as I keep building my own system. If I&apos;m giving this
              away, I&apos;m giving away the updates too.
            </p>
            <p>
              The first hundred operators are counted on{" "}
              <Link href="/thousand" className="k-link k-focus text-[#2B5D96]">
                the First Thousand page
              </Link>
              . The seat means what it always meant: you were here before the
              door was obvious.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The gate */}
      <section id="get" className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">06 &mdash; Tell Me Where To Send It</p>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed mb-8">
            <p>
              Your name and email are the whole price. You get the download
              page now and the link by email, so it is there whenever you sit
              down to do the three hours.
            </p>
          </div>
          <OneWindowGate />
          <div className="max-w-2xl mt-10">
            <Link
              href="/one-window/business"
              className="k-focus block rounded-lg bg-white p-5 sm:p-6 hover:bg-[#F3F4F8] transition-colors duration-200"
            >
              <p className="k-mono text-[11px] tracking-[0.15em] text-[#C4633F] font-bold mb-2">
                RUNNING A BUSINESS?
              </p>
              <p className="text-[#1A1B2E] text-lg font-semibold leading-snug">
                There is a door built for owners: follow-ups, quotes, the
                tracker, your marketing. Same OS, same price: free.
              </p>
              <p className="mt-3 text-[#C4633F] font-semibold">
                The Small Business Setup <span className="k-arrow">&rarr;</span>
              </p>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Straight answers */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">07 &mdash; Straight Answers</p>
          <div className="max-w-2xl space-y-5 text-[#262B3D] text-lg leading-relaxed">
            <p>
              <span className="text-[#1A1B2E] font-medium">Do I need to know AI?</span>{" "}
              If you can talk, you qualify. The setup interviews you; you never
              write a prompt.
            </p>
            <p>
              <span className="text-[#1A1B2E] font-medium">What is the catch?</span>{" "}
              There is not one. You join my newsletter list when you take the
              OS, and you can leave it the same day and keep everything.
              I am building a thousand operators, and this is how I count.
            </p>
            <p>
              <span className="text-[#1A1B2E] font-medium">Is this a course?</span>{" "}
              No. It is a working operating system your own AI installs.
              About an hour gets the foundation running; the first-week plan
              inside paces the rest.
            </p>
            <p>
              <span className="text-[#1A1B2E] font-medium">Which AI?</span> Claude,
              specifically the Code tab in the Claude desktop app, on a Claude
              Pro plan at $20 per month. Committing to one setup is what lets
              the Foundation walk you through the real install, the real click
              paths, and the real place it breaks.
            </p>
            <p>
              <span className="text-[#1A1B2E] font-medium">Mac or Windows?</span> Mac
              today. Windows is a genuinely different install path and I am not
              going to ship instructions I have not done myself.
            </p>
            <p>
              <span className="text-[#1A1B2E] font-medium">Is this real?</span> It is
              the literal framework my operating system runs on: the same
              tracker, rules, routines, and capture pipeline that run my
              ventures every day. Nothing in it is theoretical.
            </p>
            <p>
              <span className="text-[#1A1B2E] font-medium">
                Rather have it built WITH you?
              </span>{" "}
              Your machine, your accounts, one real workflow shipped before I
              leave the room: the{" "}
              <Link href="/services/fast-track" className="k-link k-focus text-[#2B5D96]">
                AI Fast-Track Session
              </Link>{" "}
              at $999 for up to three people. The OS is free either way - the
              session is for having it installed beside you instead of alone.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
