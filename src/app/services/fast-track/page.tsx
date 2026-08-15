import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FastTrackIntakeForm from "@/components/FastTrackIntakeForm";
import { offer } from "@/content/siteFacts";
import { serviceJsonLd } from "@/content/jsonLd";

// Price comes from siteFacts so this page, /services, the JSON-LD and
// /llms.txt can never quote different numbers. Was hardcoded in 6 places.
const FAST_TRACK = offer("fast-track");

export const metadata: Metadata = {
  title: "AI Fast-Track Session | Kerzie AI",
  description:
    "3 hours. 2 new habits. 1 window. 0 to-do list. One room, up to three people, each on your own machine, your own accounts, your own $20 AI subscription. Everyone ships one real piece of their own work before we are done. $999 flat for the room.",
};

const specs = [
  "Three hours, one sitting.",
  "One to three people, in one room, in person.",
  "Each person on their own machine, with their own logins open.",
  "Each person on their own $20 per month Claude subscription, set up live.",
  "The $99 One-Window included for every person in the room.",
];

const takeaways = [
  "A working Claude setup on your own machine, under your own $20 per month subscription.",
  "Connected to the real accounts your business runs on.",
  "One painful workflow moved from manual to working, per person. Your call which one; the intake helps us pick.",
  "A simple action system you can run every day.",
  "A check-in from me 30 days later to see what stuck.",
];

export default function FastTrackPage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      {/* Service + Offer structured data, priced from siteFacts. This is what
          lets an assistant answer "what does a Kerzie AI session cost" with a
          number it can stand behind. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(FAST_TRACK)) }}
      />
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
        <p className="k-rise k-rise-1 k-label mb-8">AI Fast-Track Session</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
          You leave with it <span className="k-serif font-normal">working</span>
          <span className="text-[#E8896A]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#AABBCC] text-lg lg:text-xl max-w-xl leading-relaxed">
          Three hours. One room. Up to three people, each at your own machine,
          in your own accounts, on your own $20 AI subscription. We set it up
          together and every person ships one real piece of their own work
          before we are done.
        </p>
        <p className="k-rise k-rise-3 mt-6 text-white text-2xl font-semibold">
          {FAST_TRACK.priceLabel}<span className="text-[#E8896A]">.</span>
        </p>
        <p className="k-rise k-rise-3 mt-2 text-[#AABBCC] text-base">
          One person or three. Same price.
        </p>
        <div className="k-rise k-rise-4 mt-10">
          <a href="#intake" className="k-btn-solid k-focus inline-block">
            Start with the intake <span className="k-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* The countdown - 3-2-1-0 */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-lg overflow-hidden border border-[rgba(170,187,204,0.2)] bg-[rgba(170,187,204,0.2)] max-w-4xl">
          {[
            {
              n: "3",
              t: "hours",
              d: "one sitting, spent with us instead of alone.",
            },
            {
              n: "2",
              t: "new habits",
              d: "record what you say, and give it one place to land. You leave with both running.",
            },
            {
              n: "1",
              t: "window",
              d: "one AI that knows your work, set up on your machine, in your accounts.",
            },
            {
              n: "0",
              t: "to-do list",
              d: "gone, replaced by a pane your AI keeps current for you.",
            },
          ].map((c) => (
            <div key={c.n} className="bg-[#1A1B2E] p-6">
              <p
                className={`text-5xl lg:text-6xl font-bold tracking-tight ${
                  c.n === "0" ? "text-[#E8896A]" : "text-white"
                }`}
              >
                {c.n}
              </p>
              <p className="k-mono mt-2 text-[11px] tracking-[0.15em] uppercase text-[#AABBCC]">
                {c.t}
              </p>
              <p className="mt-3 text-[#AABBCC]/80 text-sm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[#AABBCC]/70 text-sm">
          The same countdown as the{" "}
          <Link href="/one-window" className="k-link k-focus text-[#6B9FD4]">
            $99 do-it-yourself setup
          </Link>
          . The difference is who is beside you for the three hours
          <span className="text-[#E8896A]">.</span>
        </p>
      </section>

      {/* Evidence */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/evidence/fast-track.jpg"
            alt="Three seasoned business owners at a kitchen table in warm morning light: a silver-haired woman with reading glasses at the laptop keyboard, two others leaning in over her shoulders, all smiling at the screen"
            className="k-photo"
          />
        </Reveal>
      </section>

      {/* The problem with AI demos */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">01 &mdash; The Problem With AI Demos</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              You can watch a free AI demo any week of the year. Google runs
              them. Intuit runs them. Your chamber of commerce runs them.
            </p>
            <p className="text-white font-medium">
              You leave impressed. And nothing at your business changes.
            </p>
            <p>
              That is because a demo happens on someone else&apos;s screen, with
              someone else&apos;s business, solving someone else&apos;s problem.
            </p>
          </div>
        </Reveal>
      </section>

      {/* What this is */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">02 &mdash; What This Is</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>Not a class. Not a demo. Not a report you file away.</p>
            <p>
              A working session. We sit down at your computers, in your
              accounts, and set up AI to do real work in your business. Then we
              do some of that work, together, before the session ends.
            </p>
            <p className="text-white font-medium">
              By the end you are not &quot;trained on AI.&quot; You have AI
              working, and you know how to keep it working tomorrow without me.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The specifics */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">03 &mdash; The Specifics</p>
          <ul className="max-w-2xl space-y-4 mb-6">
            {specs.map((s) => (
              <li
                key={s}
                className="border-l border-[#E8896A] pl-5 text-[#AABBCC] text-lg leading-relaxed"
              >
                {s}
              </li>
            ))}
          </ul>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p className="text-white font-medium">
              Bring the people who will actually use it.
            </p>
            <p>
              Three people set up beats one person set up, and the price is the
              same either way. The most common way a session like this gets
              wasted is one person learning it and then becoming the bottleneck
              for everyone else.
            </p>
          </div>
        </Reveal>
      </section>

      {/* What you leave with */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">04 &mdash; What You Leave With</p>
          <ul className="max-w-2xl space-y-4">
            {takeaways.map((t) => (
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

      {/* The first one */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">05 &mdash; The First One</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              Kurt and Tana Nelson run{" "}
              <a
                href="https://www.innovativeimagesphotos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="k-link k-focus text-[#6B9FD4]"
              >
                Innovative Images
              </a>
              , a McKinney professional photography studio. Husband and wife, 25
              plus years in business. He shoots, she does the marketing. Neither
              had ever touched AI.
            </p>
            <p>
              One session: their own AI subscription set up, live changes
              shipped to their website, a marketing workflow started, and an
              action tracker built.
            </p>
            <p className="text-white font-medium">
              Three hours after I left, he sat back down at the same window and
              kept working. Alone.{" "}
              <span className="k-serif font-normal">
                That is the bar: not impressed, self-sufficient.
              </span>
            </p>
            <p>
              When I sent him the next piece, a voice-capture setup for his
              phone, he texted me this on day one, unprompted:{" "}
              <span className="k-serif text-white">
                &quot;I absolutely love this new voice memos to Claude so far.
                Done 4 items and a couple of them while doing other task.&quot;
              </span>{" "}
              Typo his. Receipt real.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Before we book */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">06 &mdash; Before We Book</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              Not everyone is a fit, and I would rather tell you that before you
              pay me.
            </p>
            <p>You fill out a short intake first. Two things are non-negotiable:</p>
            <ol className="list-decimal list-outside ml-5 space-y-3">
              <li>
                You can name a workflow that actually hurts.{" "}
                <span className="k-serif text-white">
                  &quot;I want to see what AI can do&quot;
                </span>{" "}
                is what the free demos are for.
              </li>
              <li>
                Everyone coming shows up with an active $20 per month Claude
                subscription, their own machine, and their logins ready. If that
                feels like too much before we start, this session is not for you
                yet.
              </li>
            </ol>
            <p>
              If the intake tells me the session will not pay for itself, I will
              say so and point you somewhere free.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The price */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">07 &mdash; The Price</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p className="text-white text-xl font-semibold">
              ${FAST_TRACK.price}, flat. That is the room, not the seat.
            </p>
            <p>
              It covers the intake review, the 3-hour working session, the
              30-day check-in, and a $99 One-Window for every person who
              sits down.
            </p>
            <p>
              Run the comparison you are already running. You were going to buy
              the $99 One-Window anyway, so take it off the top. That puts
              the session itself at $900. Bring three people and that is{" "}
              <span className="text-white font-medium">
                $100 an hour, per person
              </span>
              , to have it built with you instead of by you. And all three of
              you still walk out with the Setup.
            </p>
            <p>
              The Setup is the same document either way. The difference is
              whether it gets read or whether it gets installed, in your
              accounts, on the workflow that is actually costing you money,
              before anyone leaves the room.
            </p>
            <p>
              Come alone and it is three hours of my time on the one workflow
              hurting you most. Same price either way, so the only real question
              is how many people you want working on the other side of it.
            </p>
            <p>
              If what we find during the session is bigger than three hours can
              hold, that is a different conversation, and we will have it
              straight.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Intake */}
      <section
        id="intake"
        className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-t border-[rgba(170,187,204,0.13)]"
      >
        <Reveal>
          <p className="k-label mb-6">08 &mdash; The Intake</p>
          <p className="text-white font-medium text-lg max-w-2xl mb-4">
            The test of the session is the test of everything we do: did
            technology just get simpler for you, and did something real ship
            before you left the room.
          </p>
          <p className="text-[#AABBCC] text-lg max-w-2xl mb-10">
            Five minutes. This tells us both whether the session is worth your
            ${FAST_TRACK.price} and my three hours. Tell me how many of you are coming.
          </p>
          <div className="max-w-2xl">
            <FastTrackIntakeForm />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
