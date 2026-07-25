import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Wrong Side Of The Line | Kerzie AI",
  description:
    "The Kerzie effect has two preconditions: someone crosses the AI competency line, and they work from one window. If you finished the essay missing one of them, this is what to do about it.",
};

export default function TheLinePage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/kerzie-effect"
          className="k-mono text-[#AABBCC]/70 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200 k-focus"
        >
          &larr; THE KERZIE EFFECT
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-16">
        <p className="k-rise k-rise-1 k-label mb-8">After The Essay</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
          If you&rsquo;re on the{" "}
          <span className="k-serif font-normal">wrong side</span> of the line
          <span className="text-[#E8896A]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#AABBCC] text-lg lg:text-xl max-w-xl leading-relaxed">
          The essay names two things that have to be true before any of this
          happens to you, or for you. This page is about what to do if
          you&rsquo;re missing one of them.
        </p>
      </section>

      {/* The two preconditions */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">01 &mdash; The Two Preconditions</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              The whole essay comes down to one sentence: once someone has
              crossed the competency line and is working from one window, the AI
              stops recommending and starts executing.
            </p>
            <p className="text-white font-medium">
              That is two separate conditions, and neither one is about being
              technical.
            </p>
            <p>
              <span className="text-white font-medium">The competency line</span>{" "}
              is knowing what to hand an AI and knowing when what comes back is
              wrong. It is measurable. In the Harvard Business School and BCG
              field experiment, consultants working inside that line finished
              about 25 percent faster with roughly 40 percent higher quality.
              The same study found consultants working outside it did worse, by
              19 percentage points. It cuts both ways.
            </p>
            <p>
              <span className="text-white font-medium">One window</span> is your
              AI being able to see the business: your files, your numbers, your
              accounts, your systems. Not a chat tab you paste things into and
              lose at the end of the thread.
            </p>
            <p className="text-white font-medium">
              Two different problems. They do not have the same fix, and they do
              not cost the same to solve.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Which one are you missing */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">02 &mdash; Which One Are You Missing</p>
          <ul className="max-w-2xl space-y-4">
            <li className="border-l border-[#E8896A] pl-5 text-[#AABBCC] text-lg leading-relaxed">
              <span className="text-white font-medium">
                You can already describe what you want the AI to do, and the
                problem is that it can&rsquo;t see anything.
              </span>{" "}
              You&rsquo;re missing the window.
            </li>
            <li className="border-l border-[#E8896A] pl-5 text-[#AABBCC] text-lg leading-relaxed">
              <span className="text-white font-medium">
                Your AI can see plenty, and the problem is that you don&rsquo;t
                know what to hand it or how to tell when the answer is wrong.
              </span>{" "}
              You&rsquo;re missing the crossing.
            </li>
            <li className="border-l border-[#E8896A] pl-5 text-[#AABBCC] text-lg leading-relaxed">
              <span className="text-white font-medium">Both.</span> Start with
              the window. It is the cheaper half, and the session below includes
              it anyway.
            </li>
          </ul>
        </Reveal>
      </section>

      {/* The window */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">03 &mdash; If You&rsquo;re Missing The Window</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              The one-window setup is a document you load into the AI you
              already pay for. It asks you the questions and builds the working
              environment with you: the workspace, the operating manual, the
              tracker, the memory rules, the routines.
            </p>
            <p>
              It is the same framework my own businesses run on every day, which
              also means it is a synthesis of general knowledge, and I have
              priced it that way.
            </p>
            <p className="text-white text-xl font-semibold">$99, one time.</p>
          </div>
          <div className="mt-10">
            <Link href="/one-window" className="k-btn-solid k-focus inline-block">
              The One-Window Setup <span className="k-arrow">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* The crossing */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">04 &mdash; If You&rsquo;re Missing The Crossing</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              Three hours at your desk, on your machine, with your accounts and
              your own AI subscription. We set it up together and ship one real
              piece of your own work before the session ends. Not a class, not a
              demo on someone else&rsquo;s screen.
            </p>
            <p>
              Kurt Nelson runs a McKinney photography studio and had never
              touched AI. Three hours after I left, he sat back down at the same
              window and kept working, alone.{" "}
              <span className="k-serif text-white">
                That is the bar: not impressed, self-sufficient.
              </span>
            </p>
            <p className="text-white text-xl font-semibold">
              $750 flat, and the one-window document is included.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/services/fast-track"
              className="k-btn-solid k-focus inline-block"
            >
              The AI Fast-Track Session <span className="k-arrow">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Selling side */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">05 &mdash; If You Read It From The Selling Side</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              Different problem. Your exposure isn&rsquo;t that you can&rsquo;t use
              AI. It&rsquo;s that the document you hand out for free is a
              standalone product now.
            </p>
            <p className="text-white font-medium">
              The move is not to stop writing proposals. It&rsquo;s to stop giving
              away the executable version, charge for the diagnosis before
              anyone sees a plan with their name on it, and be able to execute
              inside a client&rsquo;s actual systems rather than recommend from
              outside them.
            </p>
            <p>
              That last part is a build, not a purchase, and it&rsquo;s a longer
              conversation than a page.
            </p>
          </div>
          <div className="mt-10">
            <Link href="/schedule" className="k-btn-ghost k-focus inline-block">
              Have that conversation <span className="k-arrow">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* The honest part */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">06 &mdash; The Honest Part</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              The essay&rsquo;s own test applies to me, so here it is run on my
              own offers.
            </p>
            <p>
              The $99 document is a synthesis of general knowledge. Someone
              patient enough could assemble most of it themselves, and the price
              reflects exactly that. The three hours at your desk, with your
              accounts, on the workflow that actually hurts, is the part that
              can&rsquo;t be substituted. That&rsquo;s the $750.
            </p>
            <p className="text-white font-medium">
              Neither one makes you immune to any of this. They put you on the
              side of the line where it works for you instead of on you.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
