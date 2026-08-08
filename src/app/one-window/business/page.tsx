import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The One-Window Setup for Small Business | Kerzie AI",
  description:
    "3 hours. 2 new habits. 1 window. 0 to-do list. One AI that knows your business drafts, chases, tracks, and stages it for your yes. Mac. $99, one time.",
  openGraph: {
    type: "article",
    title: "The One-Window Setup for Small Business",
    description:
      "I talk. The work gets done. 3 hours, 2 new habits, 1 window, 0 to-do list. One AI window that knows your business and carries the office work. $99, one time.",
    url: "https://kerzie.ai/one-window/business",
    images: [{ url: "/og/one-window-talk.jpg", width: 1200, height: 630, alt: "A man alone at his desk, speaking to his laptop, hands away from the keyboard." }],
  },
  twitter: { card: "summary_large_image", images: ["/og/one-window-talk.jpg"] },
};

const CHECKOUT_URL = "https://buy.stripe.com/fZu4gAgDda7TarOfNc3cc00";
const UPGRADE_PASS_URL = "https://buy.stripe.com/bJeaEY2Mn7ZLgQc8kK3cc01";

const stack = [
  {
    name: "The Setup Document.",
    body: "One document you paste into Claude. It interviews you about your actual business and builds your operating system from your answers. Nothing generic.",
  },
  {
    name: "The Follow-Up Engine.",
    body: "Yesterday's quote chased, last week's lead answered, in your words, staged for one-click send. Nothing reaches a customer without your yes.",
  },
  {
    name: "The Tracker.",
    body: "Every open job, lead, and promise, seeded in the first sitting with the things already falling through your cracks.",
  },
  {
    name: "The Single Pane.",
    body: "Your whole operation as tabs on one private page: what is true now, what happens next. The AI keeps it current. You just look.",
  },
  {
    name: "The Voice Command Center.",
    body: "The pocket half of the habit: talk into your phone from the truck or the airport line, and the thought is waiting in the window, processed, when you sit down.",
  },
  {
    name: "The First Sitting.",
    body: "Your accounts connected click by click, and one painful thing from your own week done end to end before it is over.",
  },
];

export default function OneWindowBusinessPage() {
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
        <p className="k-rise k-rise-1 k-label mb-8">The One-Window Setup &mdash; For Small Business</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
          I talk. <span className="k-serif font-normal">The work gets done</span>
          <span className="text-[#E8896A]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#AABBCC] text-lg lg:text-xl max-w-xl leading-relaxed">
          One window. One AI that actually knows your business - your customers,
          your jobs, your voice. You say what needs to happen. It drafts,
          chases, tracks, and stages. You approve.
        </p>
        <p className="k-rise k-rise-3 mt-6 text-white text-2xl font-semibold">
          $99, one time<span className="text-[#E8896A]">.</span>
        </p>
        <p className="k-rise k-rise-3 mt-4 text-[#AABBCC]/80 text-base max-w-xl leading-relaxed">
          System requirements: a Mac, and a $20 per month Claude
          subscription. Windows is not supported yet.
        </p>
        <div className="k-rise k-rise-4 mt-8 max-w-xl">
          <Link
            href="/one-window"
            className="k-focus block rounded-lg bg-white p-5 sm:p-6 hover:bg-[#F3F4F8] transition-colors duration-200"
          >
            <p className="k-mono text-[11px] tracking-[0.15em] text-[#C4633F] font-bold mb-2">
              SETTING IT UP FOR YOURSELF?
            </p>
            <p className="text-[#1A1B2E] text-lg font-semibold leading-snug">
              There is a door for running your own work: the job, the projects,
              the commitments. Same product, same price.
            </p>
            <p className="mt-3 text-[#C4633F] font-semibold">
              The Personal Setup <span className="k-arrow">&rarr;</span>
            </p>
          </Link>
        </div>
        <div className="k-rise k-rise-4 mt-10 flex flex-wrap gap-4">
          <a href={CHECKOUT_URL} className="k-btn-solid k-focus inline-block">
            Get the Setup for $99 <span className="k-arrow">&rarr;</span>
          </a>
          <a
            href={UPGRADE_PASS_URL}
            className="k-focus inline-block rounded-lg border border-[#E8896A] px-6 py-3 text-[#E8896A] font-semibold hover:bg-[#E8896A] hover:text-[#1A1B2E] transition-colors duration-200"
          >
            Add the Upgrade Pass for $149 <span className="k-arrow">&rarr;</span>
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
              d: "from pasting one document to running your business in one window.",
            },
            {
              n: "2",
              t: "new habits",
              d: "record what you say, and give it one place to land.",
            },
            {
              n: "1",
              t: "window",
              d: "one AI that knows your customers, your jobs, and your voice.",
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
          Put in the three hours yourself for $99, or have them{" "}
          <Link href="/services/fast-track" className="k-link k-focus text-[#6B9FD4]">
            done with you for $999
          </Link>
          . Either way the countdown lands on zero
          <span className="text-[#E8896A]">.</span>
        </p>
      </section>

      {/* The explainer - the video is the demo */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-4">
        <div className="max-w-2xl">
          <p className="k-label mb-4">80 Seconds, And The Video Is The Demo</p>
          <video
            controls
            preload="metadata"
            playsInline
            className="w-full rounded-lg border border-[rgba(170,187,204,0.2)]"
          >
            <source src="/videos/one-window-explainer.mp4" type="video/mp4" />
          </video>
          <p className="mt-3 text-[#AABBCC]/70 text-sm leading-relaxed">
            That is my AI avatar, built and scripted from my own spoken words by
            my operating system. Made the same way everything else here gets
            made: I talked, the work got done.
          </p>
        </div>
      </section>

      {/* The 16,000 words */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">01 &mdash; Your 16,000 Words</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              Researchers once wired people with recorders to settle how much
              the average person talks. The answer: about 16,000 words a day.
            </p>
            <p>
              That is a 60 page document, every day, spoken into the air and
              gone by dinner. Your quotes are in there. The follow-up you meant
              to send is in there. The promise you made a customer in the
              driveway is in there. All of it said out loud, captured by
              nobody.
            </p>
            <p className="text-white font-medium">
              The One-Window Setup exists to catch those words and turn them
              into finished work.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 1965 */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">02 &mdash; This Existed In 1965</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              In 1965 an executive walked out of a meeting talking, and
              somebody wrote down every word. She checked it against what he
              had said before, threw out the repeats, and routed the rest: this
              goes to accounting, this becomes a letter, draft it for his
              signature.
            </p>
            <p>
              Talk went in. Action came out. That was the whole system. We
              deleted that layer because it cost a salary, and everybody below
              the corner office never had it at all.
            </p>
            <p className="text-white font-medium">
              That layer is back. This time it costs $99, and everybody gets
              one.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The owner's problem */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">03 &mdash; The Job After The Job</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              You do the work all day. Then you do the second job at night: the
              quote you meant to send, the lead you meant to answer, the invoice
              you meant to chase, the post you meant to write.
            </p>
            <p>
              The standard answer is more software. Another app, another login,
              another monthly fee, and none of it talks to each other - so you
              become the integration, retyping the same customer into three
              systems.
            </p>
            <p className="text-white font-medium">
              This is the opposite move: one window, one AI that knows the whole
              business, doing the office work with you. Simpler, not additional.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The one habit */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">04 &mdash; The Two Habits</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              Here is what almost everyone gets wrong about AI: they picture a
              curriculum. Months of studying, keeping up with model releases,
              learning which tool does what. That imagined climb is why most
              people never start.
            </p>
            <p className="text-white font-medium">
              The whole learning curve is two habits: record what you say, and
              give it one place to land.
            </p>
            <p>
              Talk to the window at your desk. Talk to your phone from the
              truck. That is the first habit, and you already produce the raw
              material, 16,000 words at a time. The second habit is two
              clicks: your words land in a folder your window watches. The
              setup does the rest: it interviews you about your business once,
              then it knows your customers, your prices, and your voice, and
              it turns your talk into drafts, trackers, and follow-ups, staged
              for your yes.
            </p>
            <p>
              And you do not need to wait for a better AI. I run my companies
              on today&apos;s models, and I honestly could not tell you what a
              smarter one would add to this. The gap was never the model. The
              gap was that nobody built the window.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The stack */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">05 &mdash; What The $99 Buys</p>
          <p className="max-w-2xl text-[#AABBCC] text-lg leading-relaxed mb-8">
            Built in the first sittings, from an interview about your actual
            business. Nothing generic, and nothing goes out to a customer
            without your yes.
          </p>
          <ul className="max-w-2xl space-y-4">
            {stack.map((item) => (
              <li
                key={item.name}
                className="border-l border-[#E8896A] pl-5 text-[#AABBCC] text-lg leading-relaxed"
              >
                <span className="text-white font-medium">{item.name}</span>{" "}
                {item.body}
              </li>
            ))}
          </ul>
          <div className="max-w-2xl mt-8 space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              If I priced this at what it replaced for me, it would be
              thousands: this summer I deleted Outlook, Excel, and Notion off
              my machine because the window had taken over the parts I used. It
              is $99 because I want the number beneath deciding - less than one
              lost lead, one no-show, one night of the second job.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Receipts */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">06 &mdash; This Is How I Run Mine</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              I am not selling a theory. This framework runs my own companies
              every day: a home repair business in two markets, an AI
              consultancy, a golf training brand, and the content that promotes
              all of them.
            </p>
            <p>
              The morning I drafted this page, I talked while setting up a
              camera, and by the time I stood up: a product release had shipped
              and gone live, an email was staged, a live ad campaign got its
              spending cap set, and the plan for this page was written into the
              record. I typed almost none of it.
            </p>
            <p className="text-white font-medium">
              That is not a demo day. That is Tuesday.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The offer */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">07 &mdash; The Offer</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p className="text-white text-xl font-semibold">
              The One-Window Setup: $99, one time. Instant access after
              checkout.
            </p>
            <p className="text-white text-xl font-semibold">
              The Upgrade Pass: $149 for six months. Then it ends, on purpose.
            </p>
            <p>
              Every upgrade I build for my own OS, packaged and pushed to you:
              at least one upgrade a month for the full six months. The first
              four are already built - the Living Pane, the Clean Handoff, the
              Weekly Tune-Up, and the Nightly Dream - and the stream keeps
              coming as I keep building.
            </p>
            <p className="text-white font-medium">
              This pass is designed to end. If you take the upgrades, by month
              six you will not need to buy improvements, because you will be
              making your own. That is not a marketing line; it is the product
              working. I am not building a payment you forget to cancel. I am
              walking you across the line where you do not need me.
            </p>
            <p>
              <span className="text-white font-medium">The guarantee:</span>{" "}
              the first sitting ends with one real thing from your week done
              end to end. If it does not, I refund the $99 and you keep the
              document.
            </p>
            <p>
              Rather have it built WITH you: your machine, your accounts, one
              real workflow shipped before I leave the room? That is the{" "}
              <Link href="/services/fast-track" className="k-link k-focus text-[#6B9FD4]">
                AI Fast-Track Session
              </Link>{" "}
              at $999 for up to three people, and this document is included for
              every one of them.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={CHECKOUT_URL} className="k-btn-solid k-focus inline-block">
              Get the Setup for $99 <span className="k-arrow">&rarr;</span>
            </a>
            <a
              href={UPGRADE_PASS_URL}
              className="k-focus inline-block rounded-lg border border-[#E8896A] px-6 py-3 text-[#E8896A] font-semibold hover:bg-[#E8896A] hover:text-[#1A1B2E] transition-colors duration-200"
            >
              Add the Upgrade Pass for $149 <span className="k-arrow">&rarr;</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* Keep your systems */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">08 &mdash; Keep What Already Works</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              Already run QuickBooks, a scheduling tool, a point of sale? Keep
              them. This is not another system to migrate into.
            </p>
            <p className="text-white font-medium">
              The window sits in front of what you have. It drafts, chases,
              tracks, and remembers - and you stay the one who approves anything
              that touches a customer or a dollar.
            </p>
            <p>
              No new hardware either. It runs on the Mac you own and the AI
              subscription that costs less than one lost lead a month.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Straight answers */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">09 &mdash; Straight Answers</p>
          <div className="max-w-2xl space-y-5 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              <span className="text-white font-medium">Do I need to know AI?</span>{" "}
              If you can talk, you qualify. The setup interviews you; you never
              write a prompt. You will type one command into your Mac, once,
              copied straight off the page.
            </p>
            <p>
              <span className="text-white font-medium">Is this a course?</span>{" "}
              No. It is a working document. About an hour gets the foundation
              running; the first-week plan inside paces the rest.
            </p>
            <p>
              <span className="text-white font-medium">Will it send things to my customers?</span>{" "}
              Not without you. Everything customer-facing is drafted for your
              review and sent by you. That rule is built into the setup itself.
            </p>
            <p>
              <span className="text-white font-medium">Which AI?</span> Claude,
              specifically the Code tab in the Claude desktop app, on a Claude
              Pro plan at $20 per month. Committing to one setup is what lets
              the document walk you through the real install, the real click
              paths, and the real place it breaks.
            </p>
            <p>
              <span className="text-white font-medium">Mac or Windows?</span>{" "}
              Mac today. Windows is a genuinely different install path and I am
              not going to ship instructions I have not done myself.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Free rung */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">10 &mdash; Not Ready? Take The Habit For Free</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              Take the <span className="text-white font-medium">Voice Command Center</span>{" "}
              free. Ten minutes of setup, one habit: talk into your phone, and
              the thought is waiting in your AI the next time you sit down.
              Works with whatever AI you already use.
            </p>
            <p>
              If the habit sticks, you will know exactly what the full window
              is worth before you spend a dollar.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/free/mobile-capture-kit"
              className="k-focus inline-block rounded-lg border border-[rgba(170,187,204,0.4)] px-6 py-3 text-[#AABBCC] font-semibold hover:border-white hover:text-white transition-colors duration-200"
            >
              Get the Voice Command Center free <span className="k-arrow">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
