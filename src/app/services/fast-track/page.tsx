import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FastTrackIntakeForm from "@/components/FastTrackIntakeForm";

export const metadata: Metadata = {
  title: "AI Fast-Track Session | Kerzie AI",
  description:
    "Three hours. Your computer, your business, your own AI subscription. We set it up together and ship one real piece of work before we are done. $750 flat.",
};

const takeaways = [
  "A working Claude setup on your own machine, under your own $20 per month subscription.",
  "Connected to the real accounts your business runs on.",
  "One painful workflow moved from manual to working. Your call which one; the intake helps us pick.",
  "A simple action system you can run every day.",
  "A check-in from me 30 days later to see what stuck.",
];

export default function FastTrackPage() {
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
        <p className="k-rise k-rise-1 k-label mb-8">AI Fast-Track Session</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
          You leave with it <span className="k-serif font-normal">working</span>
          <span className="text-[#E8896A]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#AABBCC] text-lg lg:text-xl max-w-xl leading-relaxed">
          Three hours. Your computer, your business, your own $20 AI
          subscription. We set it up together and ship one real piece of work
          before we are done.
        </p>
        <p className="k-rise k-rise-3 mt-6 text-white text-2xl font-semibold">
          $750 flat<span className="text-[#E8896A]">.</span>
        </p>
        <div className="k-rise k-rise-4 mt-10">
          <a href="#intake" className="k-btn-solid k-focus inline-block">
            Start with the intake <span className="k-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* Evidence */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/evidence/fast-track.jpg"
            alt="A kitchen table at sunrise: golden light through the window, a glowing laptop, steam rising from a fresh coffee, handwritten notes mid-thought"
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
              A working session. We sit down at your computer, with your
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

      {/* What you leave with */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">03 &mdash; What You Leave With</p>
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
          <p className="k-label mb-6">04 &mdash; The First One</p>
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
          </div>
        </Reveal>
      </section>

      {/* Before we book */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">05 &mdash; Before We Book</p>
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
                You show up with an active $20 per month Claude subscription and
                your logins ready. If that feels like too much before we start,
                this session is not for you yet.
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
          <p className="k-label mb-6">06 &mdash; The Price</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p className="text-white text-xl font-semibold">
              $750, flat. That covers the intake review, the 3-hour working
              session, and the 30-day check-in.
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
          <p className="k-label mb-6">07 &mdash; The Intake</p>
          <p className="text-[#AABBCC] text-lg max-w-2xl mb-10">
            Five minutes. This tells us both whether the session is worth your
            $750 and my three hours.
          </p>
          <div className="max-w-2xl">
            <FastTrackIntakeForm />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
