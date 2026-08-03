import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The One-Window Setup for Small Business | Kerzie AI",
  description:
    "One AI window that knows your business and carries the office work: follow-ups, quotes, drafts, the tracker. Paste one document into Claude and it builds your operating system around your answers. Mac. $99, one time.",
  openGraph: {
    type: "article",
    title: "The One-Window Setup for Small Business",
    description:
      "One AI window that knows your business and carries the office work: follow-ups, quotes, drafts, the tracker. $99, one time.",
    url: "https://kerzie.ai/one-window/business",
    images: [{ url: "/og/one-window.jpg", width: 1200, height: 630, alt: "Two colleagues working side by side at one laptop." }],
  },
  twitter: { card: "summary_large_image", images: ["/og/one-window.jpg"] },
};

const CHECKOUT_URL = "https://buy.stripe.com/fZu4gAgDda7TarOfNc3cc00";

const carries = [
  "The follow-up that did not go out: yesterday's quote chased, the lead from last week answered, in your words, staged for your one-click send.",
  "The estimate email drafted while you are still in the truck, from the notes you talked into your phone.",
  "A working tracker of every open job, lead, and promise - seeded in the first sitting with the things already falling through your cracks.",
  "Your marketing drafted on a schedule you set: the weekly post, the review reply, the newsletter - written for your approval, never sent without it.",
  "Your accounts connected one at a time, walked through click by click: Gmail, Calendar, Drive, your browser.",
  "One painful thing from your own week, done end to end, before the first sitting is over.",
  "The Single Pane: your whole operation as tabs on one private page - every job, every lead, what is true now, what happens next. Your AI keeps it current; you just look at it.",
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
          Run your business from <span className="k-serif font-normal">one window</span>
          <span className="text-[#E8896A]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#AABBCC] text-lg lg:text-xl max-w-xl leading-relaxed">
          One AI that actually knows your business - your customers, your jobs,
          your voice - and carries the office work with you: the follow-ups, the
          quotes, the drafts, the tracker. It is built by one document you paste
          into Claude. The document interviews you about your business, then
          builds your operating system around your answers.
        </p>
        <p className="k-rise k-rise-3 mt-6 text-white text-2xl font-semibold">
          $99, one time<span className="text-[#E8896A]">.</span>
        </p>
        <p className="k-rise k-rise-3 mt-4 text-[#AABBCC]/80 text-base max-w-xl leading-relaxed">
          Mac, and a $20 per month Claude subscription. Windows is not covered
          yet.
        </p>
        <p className="k-rise k-rise-3 mt-5 text-[#AABBCC]/80 text-base max-w-xl leading-relaxed">
          Setting it up for your own work rather than a company?{" "}
          <Link href="/one-window" className="k-link k-focus text-[#6B9FD4]">
            The personal door is here
          </Link>
          . Same product, same price.
        </p>
        <div className="k-rise k-rise-4 mt-10">
          <a href={CHECKOUT_URL} className="k-btn-solid k-focus inline-block">
            Get the Setup <span className="k-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* The owner's problem */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">01 &mdash; The Job After The Job</p>
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

      {/* What it carries */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">02 &mdash; What It Carries For You</p>
          <p className="max-w-2xl text-[#AABBCC] text-lg leading-relaxed mb-8">
            Built in the first sittings, from an interview about your actual
            business. Nothing generic, and nothing goes out to a customer
            without your yes.
          </p>
          <ul className="max-w-2xl space-y-4">
            {carries.map((t) => (
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

      {/* Keep your systems */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">03 &mdash; Keep What Already Works</p>
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

      {/* Receipts */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">04 &mdash; This Is How I Run Mine</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              I am not selling a theory. This document is the same framework my
              own companies run on every day: a home repair business operating
              in two markets, an AI consultancy, a golf training brand, and the
              content that promotes all of them.
            </p>
            <p className="text-white font-medium">
              This summer I deleted Outlook, Excel, and Notion off my machine,
              because the window had replaced the parts of them I actually used.
            </p>
            <p>
              My follow-ups get drafted before I ask. My tracker is current when
              I sit down. My week runs from one page. That is what $99 buys: the
              setup that gets a business owner to the same place, built around
              your answers instead of mine.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Straight answers */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">05 &mdash; Straight Answers</p>
          <div className="max-w-2xl space-y-5 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              <span className="text-white font-medium">Do I need to be technical?</span>{" "}
              No. Your AI is the technical one. If you can describe your
              business and answer questions about it, you can do this. You will
              type one command into your Mac, once, copied straight off the
              page.
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

      {/* Price + ladder */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">06 &mdash; The Price</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p className="text-white text-xl font-semibold">
              $99, one time. Instant access after checkout.
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
