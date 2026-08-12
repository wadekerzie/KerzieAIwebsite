import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { offer } from "@/content/siteFacts";
import { serviceJsonLd } from "@/content/jsonLd";

const BACK_COVER = offer("back-cover");

export const metadata: Metadata = {
  title: "The Back Cover | Kerzie AI",
  description:
    "Your customers stopped searching and started asking. We make your existing website readable to the AI that now decides which businesses get named. We do not build new websites.",
};

// CLAIM DISCIPLINE ON THIS PAGE - do not loosen it in a later edit.
//
// 1. Wade is the WITNESS, not the statistician. He reports what owners tell
//    him. He never claims to have measured the reader's traffic.
// 2. "Some industries" and "up to 40%" are load-bearing. Cloudflare's actual
//    words are "some of the most heavily crawled categories... as much as 40%
//    in less than one year." They never measured small businesses.
// 3. No promise of traffic or leads. The deliverable is legibility, which we
//    can show; ranking is not ours to promise.
// 4. llms.txt is included as cheap optionality, never as the mechanism that
//    is claimed to work. Controlled studies show AI tools read visible HTML,
//    not markup, so the visible-content work is what carries the value.
const whatWeDo = [
  {
    lead: "We read your site the way an AI reads it.",
    body: "Stripped of the design, the animation and the menus, what facts about your business are actually there? Usually fewer than the owner thinks.",
  },
  {
    lead: "We make the facts plain and current.",
    body: "What you do, where you do it, what it costs, who to call. In the visible text, because that is what ChatGPT and the others actually read.",
  },
  {
    lead: "We fix the plumbing while we are in there.",
    body: "Structured data that tells an AI what you sell, where you work and what it costs, plus whatever else your platform lets us reach. The standards here are new and still moving, so we take the cheap wins now rather than scrambling later.",
  },
  {
    lead: "We show you the difference in their words, not ours.",
    body: "We ask ChatGPT, Claude, Gemini and Perplexity about your business before and after, and hand you both answers side by side.",
  },
];

export default function BackCoverPage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(BACK_COVER)) }}
      />

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
        <p className="k-rise k-rise-1 k-label mb-8">The Back Cover</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)] max-w-4xl">
          Your customers stopped searching and started{" "}
          <span className="k-serif font-normal">asking</span>
          <span className="text-[#E8896A]">.</span>
        </h1>
        <div className="k-rise k-rise-3 mt-6 max-w-xl space-y-4 text-[#AABBCC] text-lg lg:text-xl leading-relaxed">
          <p>
            The owners I talk to keep telling me the same thing: the website is
            not bringing in what it used to.
          </p>
          <p className="text-white">You are not imagining it.</p>
        </div>
        <div className="k-rise k-rise-4 mt-10 flex flex-wrap items-center gap-4">
          <Link href="/schedule" className="k-btn-solid k-focus inline-block">
            Get the free diagnostic <span className="k-arrow">&rarr;</span>
          </Link>
          <a
            href="/llms.txt"
            className="k-focus rounded-md bg-[#6B9FD4] hover:bg-[#8FB8E0] transition-colors duration-200 px-4 py-2.5 k-mono text-[#1A1B2E] text-[13px] font-semibold"
          >
            See this site&apos;s llms.txt &rarr;
          </a>
        </div>
      </section>

      {/* What changed */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">01 &mdash; What Changed</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              More than half of all web traffic is now machines rather than
              people. Cloudflare said so this year. Some industries have already
              lost up to 40% of their human visitors in under a year.
            </p>
            {/* This paragraph exists because TWO independent reviewers read the
                earlier copy and heard "half your customers are AI." That is a
                conflation a sophisticated buyer catches, and catching it costs
                us the honesty the rest of the page earns. Never remove it to
                make the pitch punchier. */}
            <p>
              Straight about what that does not mean: half your customers are
              not robots. Today only a small slice of most sites&apos; visits
              come from an assistant. What changed is who does the{" "}
              <span className="text-white font-medium">choosing</span> - and the
              people who arrive that way already know what they want.
            </p>
            <p>
              Here is what that means on the ground. When someone asks an AI
              &ldquo;who fixes furnaces in McKinney,&rdquo; an{" "}
              <span className="text-white font-medium">
                AI decides which businesses to name
              </span>
              . Nobody scrolls a page of ten blue links and picks you. They get
              two or three names and they call one.
            </p>
            <p className="text-white font-medium">
              Your website was built to be read by a person. The AI doing the
              choosing is not a person.
            </p>
          </div>
        </Reveal>
      </section>

      {/* What we do */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">02 &mdash; What We Do</p>
          <p className="text-white text-lg font-medium max-w-2xl mb-8 leading-relaxed">
            We do not build new websites. We make yours readable to the AI.
          </p>
          <ul className="max-w-2xl space-y-5">
            {whatWeDo.map((item) => (
              <li
                key={item.lead}
                className="border-l border-[#E8896A] pl-5 text-[#AABBCC] text-lg leading-relaxed"
              >
                <span className="text-white font-medium">{item.lead}</span>{" "}
                {item.body}
              </li>
            ))}
          </ul>
          <p className="max-w-2xl mt-8 text-[#AABBCC]/80 text-base leading-relaxed">
            It works on whatever you already have. Wix, Squarespace, GoDaddy,
            WordPress, a site someone built for you in 2019 and never touched
            again. Where it is hosted is not our problem to solve.
          </p>
        </Reveal>
      </section>

      {/* The proof */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">03 &mdash; See It On This Site</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              We did it to ourselves first. There is a file on this site written
              for machines rather than for you: every offer, every price, how to
              reach a human, in plain text with the design stripped out.
            </p>
            <p>
              It is deliberately not in the menu. No customer will ever navigate
              to it. Every AI that looks at this business will.
            </p>
            <p className="text-[#AABBCC]/75 text-base">
              It is generated from the same source the pages are built from, so
              it cannot quietly go stale and start quoting an old price. That is
              the part most people get wrong.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="/llms.txt"
              className="k-focus inline-block rounded-md bg-[#6B9FD4] hover:bg-[#8FB8E0] transition-colors duration-200 px-5 py-3 shadow-lg shadow-black/20"
            >
              <span className="block k-mono text-[#1A1B2E] text-sm font-semibold leading-tight">
                See what the llms.txt looks like for this website
              </span>
              <span className="block k-mono text-[#1A1B2E]/70 text-[11px] leading-tight mt-1">
                This is what the AI sees &rarr;
              </span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* Honest section - this is the trust builder, do not cut it */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">04 &mdash; What We Will Not Promise</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              Anyone who tells you they can guarantee an AI will recommend you is
              guessing, and the honest answer is better than the confident one.
            </p>
            <p>
              This standard is new and still moving. Nobody knows yet which parts
              of it the AI tools will settle on. What we can do is make sure
              the facts about your business are clear, current and easy to lift,
              and that nothing on your site contradicts itself.
            </p>
            <p className="text-white">
              We show you what the AI says about you before, and what it says
              after. You decide what that was worth.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Price + CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">05 &mdash; The Price</p>
          <h2 className="text-white text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-2xl mb-5">
            {BACK_COVER.priceLabel}
            <span className="text-[#E8896A]">.</span>
          </h2>
          <p className="text-[#AABBCC] text-lg max-w-xl mb-4 leading-relaxed">
            One fee, once. Not a retainer, not a rebuild, not a subscription to
            a dashboard you will never open.
          </p>
          <p className="text-[#AABBCC] text-lg max-w-xl mb-4 leading-relaxed">
            The diagnostic is free and takes us about an hour. We ask the AI
            tools your customers are already using - ChatGPT, Claude, Gemini,
            Perplexity - what they say about your business, and we send you
            their answers word for word.
          </p>
          <p className="text-[#AABBCC] text-lg max-w-xl mb-10 leading-relaxed">
            Sometimes the answers come back fine, and we tell you so. Either
            way you will know where you stand, and finding out costs you
            nothing.
          </p>
          <Link href="/schedule" className="k-btn-solid k-focus inline-block">
            Get the free diagnostic <span className="k-arrow">&rarr;</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
