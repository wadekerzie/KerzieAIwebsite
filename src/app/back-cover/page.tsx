import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { offer } from "@/content/siteFacts";
import { serviceJsonLd } from "@/content/jsonLd";

const BACK_COVER = offer("back-cover");
const THE_WATCH = offer("the-watch");

// THE WATCH REPRICED $299 -> $99/mo ($990/yr) 2026-08-14, Wade's call after
// market research. The buyer benchmarks this against what they already pay
// monthly for "the website" (hosting $15-45, agency care plans $89-100 entry),
// NOT against AI-visibility dashboards - and $299 was Birdeye's exact
// single-location entry price, a contract-locked platform costume this does
// not need. $99 sits on the number an owner already recognizes as a website
// care plan, under the no-deliberation line, and above the sub-$50 churn
// zone where cheap prices select uncommitted buyers. Aaron's 8/13 risk-line
// framing ($299 vs Scrunch/AthenaHQ/Profound) is superseded; the dashboards
// comparison survives below as a price WEAPON ("a third of the money, work
// included") rather than an anchor.
const watchIncludes = [
  "We ask the major AI assistants the questions your customers actually ask, every month.",
  "We check their answers against what is true, and correct whatever has drifted at the source.",
  "We keep your machine-readable pages current as the standards move.",
  "One page a month, in plain language, that you can read in five minutes.",
];

// Share-card imagery added 2026-08-14 (Wade's call after an iMessage share
// rendered a generic stock photo): the og:image is a generated hardcover seen
// from its BACK, metadata mid-scan, coral bookmark - the offer in one picture.
// Source + the typographic alternate live in Wade OS under
// brand/kerzie_ai/assets/og/.
export const metadata: Metadata = {
  title: "The Back Cover | Kerzie AI",
  description:
    "Your customers stopped searching and started asking. We make your existing website readable to the AI that now decides which businesses get named. We do not build new websites.",
  openGraph: {
    title: "The Back Cover",
    description:
      "What does the AI say about your business? We make your existing website readable to the AI your customers now ask. We only add. We never break anything.",
    url: "https://kerzie.ai/back-cover",
    siteName: "Kerzie AI",
    type: "website",
    images: [
      {
        url: "https://kerzie.ai/back-cover-og.jpg",
        width: 1200,
        height: 630,
        alt: "A hardcover book seen from the back, its machine-readable metadata lit by a scanning beam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Back Cover",
    description:
      "What does the AI say about your business? We make your existing website readable to the AI your customers now ask.",
    images: ["https://kerzie.ai/back-cover-og.jpg"],
  },
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
// 4. THE TWO HALVES ARE THE PRODUCT (Wade, 2026-08-13). Half one is what
//    machines can read TODAY. Half two is llms.txt, which is preparation for
//    what they will read NEXT. Selling only half one is website optimization,
//    which is crowded and unmeasurable. Selling only half two is a file almost
//    nothing fetches yet. Together, as one decision at one price, it is
//    neither. Do not collapse them back into a single list.
// 5. The llms.txt claim is PREPAREDNESS, never efficacy. "You will be ready"
//    is honest. "This will get you found" is not, and is banned.
const halfOne = [
  {
    lead: "We read your site the way a machine reads it.",
    body: "Stripped of the design, the animation and the menus, what facts about your business are actually there? Usually fewer than the owner thinks.",
  },
  {
    lead: "We make the facts plain and current.",
    body: "What you do, where you do it, what it costs, who to call. In the visible text, because that is what the AI tools read today.",
  },
  {
    lead: "We fix the plumbing while we are in there.",
    body: "Structured data that spells out what you sell, where you work and what it costs, plus whatever else your platform lets us reach.",
  },
];

// HALF TWO REFRAMED 8/14 (Wade's call): the old "adapter before the socket is
// live" hedge undersold a channel that is demonstrably on - his own ChatGPT
// test returned a robust answer, 8 of 37 local trades in our own sweep already
// publish the file, Squarespace ships it native. The line that survives claim
// discipline: READY and VISIBLE (legibility, which we deliver) - never ranked
// or found (efficacy, which nobody can promise). Rule 5 below still governs.
const halfTwo = [
  {
    lead: "We publish your llms.txt.",
    body: "It is the standard the industry is settling on for handing an AI a clean map of your business. Squarespace now builds it into every site it hosts, and when we checked 57 Texas and Colorado trades this week, eighteen already publish one - in roofing it is already half. Your competitors have started. The window is closing, not closed.",
  },
  {
    lead: "This stage of AI search is already on.",
    body: "Ask an AI about our business: you get a real, current answer, because there is something real to read. How each AI weighs what it finds is not ours to promise - nobody outside those companies knows. What we deliver is simpler: you are ready for this stage of AI search, and your business is visible to the machines that answer.",
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

      {/* Hero. The book image (generated 8/14, Wade: "it's gold") sits SMALL
          beside the header - portrait crop, fixed width, never a scroll
          interruption (Wade's correction, same day: the full-bleed 16:9
          version broke the hero). The 16:9 original still drives the og
          share card. */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-14">
          <div className="lg:flex-1">
            <p className="k-rise k-rise-1 k-label mb-8">The Back Cover</p>
            <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)] max-w-4xl">
              Your customers stopped searching and started{" "}
              <span className="k-serif font-normal">asking</span>
              <span className="text-[#E8896A]">.</span>
            </h1>
            <div className="k-rise k-rise-3 mt-6 max-w-xl space-y-4 text-[#AABBCC] text-lg lg:text-xl leading-relaxed">
              <p>
                The owners I talk to keep telling me the same thing: the website
                is not bringing in what it used to.
              </p>
              <p className="text-white">You are not imagining it.</p>
            </div>
            <div className="k-rise k-rise-4 mt-10 flex flex-wrap items-center gap-4">
              <Link href="/schedule" className="k-btn-solid k-focus inline-block">
                Schedule your deployment <span className="k-arrow">&rarr;</span>
              </Link>
              <a
                href="/llms.txt"
                className="k-focus rounded-md bg-[#6B9FD4] hover:bg-[#8FB8E0] transition-colors duration-200 px-4 py-2.5 k-mono text-[#1A1B2E] text-[13px] font-semibold"
              >
                See this site&apos;s llms.txt &rarr;
              </a>
            </div>
          </div>
          <div className="k-rise k-rise-2 mt-10 lg:mt-0 flex items-center gap-5 lg:block lg:w-52 lg:flex-shrink-0 lg:pt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/back-cover-book-tall.jpg"
              alt="A hardcover book seen from the back, its machine-readable metadata lit by a scanning beam"
              className="w-32 sm:w-40 lg:w-full rounded-lg border border-[rgba(170,187,204,0.13)] shadow-2xl shadow-black/40 flex-shrink-0"
            />
            <p className="lg:mt-3 k-mono text-[#AABBCC]/50 text-[11px] leading-relaxed max-w-[14rem]">
              Every business has a back cover. The AI reads it whether you
              wrote it or not.
            </p>
          </div>
        </div>
      </section>

      {/* The explainer video - rendered 8/14 (HeyGen, Wade's avatar, the
          blazer look), SERVED FROM THIS REPO like the one-window video -
          never embedded from HeyGen or YouTube on the sales page (Wade's
          rule, 8/14: our file, our domain; YouTube is distribution, not
          infrastructure). The llms.txt button sits directly beneath per
          Wade's spec - the video points at it. */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">The Two-Minute Version</p>
          <video
            controls
            preload="metadata"
            poster="/videos/back-cover-poster.jpg"
            className="w-full max-w-3xl rounded-lg border border-[rgba(170,187,204,0.13)] shadow-2xl shadow-black/40"
          >
            <source src="/videos/back-cover-explainer.mp4" type="video/mp4" />
          </video>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a
              href="/llms.txt"
              className="k-focus rounded-md bg-[#6B9FD4] hover:bg-[#8FB8E0] transition-colors duration-200 px-4 py-2.5 k-mono text-[#1A1B2E] text-[13px] font-semibold"
            >
              The page mentioned in the video: our llms.txt &rarr;
            </a>
            <Link href="/schedule" className="k-btn-solid k-focus inline-block">
              Schedule your deployment <span className="k-arrow">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* The self-run challenge - THE FUNNEL CHANGED HERE (Wade, 8/14): no
          free assessment, no discovery call. The visitor proves the problem
          on their own phone in a minute, and the calendar is for the PAID
          deployment. Claim discipline: "99% of the time" is spoken Wade, not
          page copy - the page says "almost every business we have checked,"
          which our diagnostic runs support. And AI answers vary run to run
          (the same non-determinism that killed the before/after receipt), so
          the copy compares whether the AI has anything real to read, never
          exact outputs. */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">01 &mdash; Prove It To Yourself</p>
          <h2 className="text-white text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-2xl mb-5">
            You do not need a sales call. You need sixty seconds and your own
            phone<span className="text-[#E8896A]">.</span>
          </h2>
          <ol className="max-w-2xl mt-8 space-y-7">
            {[
              {
                n: "1",
                lead: "Open ChatGPT. The free one is fine.",
                body: "Ask: “Who should I call for [your trade] in [your town]?” See if your business gets named. Almost every small business we have checked is not there - one owner we sat with watched eleven competitors get named while he did not appear once.",
              },
              {
                n: "2",
                lead: "Now ask it about you, by name.",
                body: "“Tell me about [your business name].” Read what comes back. Thin, generic, maybe wrong. That is what the AI carries into every conversation where your name comes up.",
              },
              {
                n: "3",
                lead: "Last one: ask it about us.",
                body: "“Tell me about Kerzie AI Solutions.” The difference you just watched is not because we are bigger than you. We are not. It is because we published our back cover, and you have not - the AI finally had something real to read.",
              },
            ].map((s) => (
              <li key={s.n} className="flex gap-5">
                <span className="k-mono text-[#E8896A] text-sm font-semibold pt-1 flex-shrink-0">
                  {s.n}
                </span>
                <p className="text-[#AABBCC] text-lg leading-relaxed">
                  <span className="text-white font-medium">{s.lead}</span>{" "}
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
          <p className="max-w-2xl mt-8 text-[#AABBCC]/80 text-base leading-relaxed">
            AI answers move around - no two runs come back identical. What you
            are comparing is not the wording. It is whether the AI had anything
            real to read.
          </p>
          <div className="mt-8">
            <Link href="/schedule" className="k-btn-solid k-focus inline-block">
              Saw the difference? Schedule your deployment{" "}
              <span className="k-arrow">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* What changed */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">02 &mdash; What Changed</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            {/* The anti-conflation guard used to be its own defensive paragraph
                ("half your customers are not robots"), added because two
                reviewers heard "half your customers are AI." It is NOT deleted
                - it is folded into the sentence below as "Not customers.
                Traffic." Same protection, one line instead of five, and the
                reader is never told what to think about their own customer mix.
                Do not re-expand it into a paragraph; Wade cut that for being
                an over-explanation that undercut the point (2026-08-13). */}
            <p>
              Cloudflare reported this year that more than half of all traffic
              on the internet is now machines rather than people. Not customers.{" "}
              <span className="text-white font-medium">Traffic.</span>{" "}
              Assistants, agents and crawlers now outnumber human eyeballs.
            </p>
            <p className="text-white font-medium">
              Your website was built to be read by a person.
            </p>
            <p className="text-white font-medium">
              We get it ready for the AI to read
              <span className="text-[#E8896A]">.</span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* The receipts - every number sourced and linked (Wade, 8/14: "we need
          credibility for our claims - citing news articles, cloudflare's
          announcement, and others"). CLAIM DISCIPLINE: each stat carries its
          own qualifier and links to the primary source. The Cloudflare 40%
          NEVER loses "most heavily crawled categories" - that qualifier is
          load-bearing, Cloudflare never measured small businesses. All five
          verified by direct fetch 2026-08-14. */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">03 &mdash; Don&apos;t Take Our Word For It</p>
          <p className="max-w-2xl mb-10 text-[#AABBCC] text-lg leading-relaxed">
            None of these numbers are ours. Every one links to the people who
            published&nbsp;it.
          </p>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
            {[
              {
                src: "CLOUDFLARE",
                date: "JULY 2026",
                stat: "Human traffic to some of the internet's most heavily crawled categories fell as much as 40% in under a year.",
                gloss:
                  "And more than half of all traffic on the internet is now machines, not people.",
                href: "https://blog.cloudflare.com/agentic-internet-bot-report/",
              },
              {
                src: "BRIGHTLOCAL",
                date: "FEBRUARY 2026",
                stat: "45% of consumers now ask ChatGPT and other AI tools for local business recommendations. A year earlier it was 6%.",
                gloss:
                  "That makes AI the third most popular way people find a local business - ahead of Yelp and TripAdvisor.",
                href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
              },
              {
                src: "PEW RESEARCH CENTER",
                date: "JULY 2025",
                stat: "When Google answers with an AI summary, clicks to actual websites drop from 15% to 8%.",
                gloss:
                  "Measured across 68,879 real searches. When the AI answers first, half the visits never happen.",
                href: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/",
              },
              {
                src: "OPENAI",
                date: "FEBRUARY 2026",
                stat: "ChatGPT now has 900 million weekly users.",
                gloss:
                  "Nearly a billion people a week asking an AI the questions they used to type into a search box.",
                href: "https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users",
              },
              {
                src: "SQUARESPACE",
                date: "JULY 2026",
                stat: "Squarespace now ships a built-in llms.txt - a page written for AI to read - on every site it hosts.",
                gloss:
                  "Mainstream website platforms are already building for machine readers. It ships turned off, which is exactly where most businesses are standing today.",
                href: "https://support.squarespace.com/hc/en-us/articles/47434125611277-Create-an-llms-txt-file",
              },
            ].map((c) => (
              <a
                key={c.src}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="k-focus block rounded-lg border border-[rgba(170,187,204,0.15)] bg-[rgba(170,187,204,0.04)] p-6 hover:border-[rgba(170,187,204,0.35)] transition-colors duration-200"
              >
                <p className="k-mono text-[#6B9FD4] text-[11px] tracking-[0.14em] mb-3">
                  {c.src} <span className="text-[#AABBCC]/40">&middot; {c.date}</span>
                </p>
                <p className="text-white text-lg font-medium leading-snug mb-3">
                  {c.stat}
                </p>
                <p className="text-[#AABBCC] text-[15px] leading-relaxed mb-3">
                  {c.gloss}
                </p>
                <p className="k-mono text-[#E8896A] text-[11px] tracking-[0.1em]">
                  READ THE SOURCE &rarr;
                </p>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* What we do */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">04 &mdash; What We Do</p>
          <p className="text-white text-lg font-medium max-w-2xl mb-3 leading-relaxed">
            We do not build new websites. We get yours ready to be read by
            machines.
          </p>
          <p className="max-w-2xl mb-10 text-[#AABBCC] text-lg leading-relaxed">
            Two halves. One job, one price.
          </p>

          <p className="k-mono text-[#E8896A] text-xs tracking-[0.15em] mb-4">
            HALF ONE &mdash; WHAT THEY CAN READ TODAY
          </p>
          <ul className="max-w-2xl space-y-5">
            {halfOne.map((item) => (
              <li
                key={item.lead}
                className="border-l border-[#E8896A] pl-5 text-[#AABBCC] text-lg leading-relaxed"
              >
                <span className="text-white font-medium">{item.lead}</span>{" "}
                {item.body}
              </li>
            ))}
          </ul>

          <p className="k-mono text-[#6B9FD4] text-xs tracking-[0.15em] mt-12 mb-4">
            HALF TWO &mdash; WHAT THEY WILL READ NEXT
          </p>
          <ul className="max-w-2xl space-y-5">
            {halfTwo.map((item) => (
              <li
                key={item.lead}
                className="border-l border-[#6B9FD4] pl-5 text-[#AABBCC] text-lg leading-relaxed"
              >
                <span className="text-white font-medium">{item.lead}</span>{" "}
                {item.body}
              </li>
            ))}
          </ul>

          <p className="max-w-2xl mt-12 text-[#AABBCC] text-lg leading-relaxed">
            <span className="text-white font-medium">
              Then we hand you the list.
            </span>{" "}
            Every fact that was missing, every one that is there now, and the
            address of the page the AI tools look for. You can check every line
            of it yourself, the day we finish.
          </p>
          <p className="max-w-2xl mt-8 text-[#AABBCC]/80 text-base leading-relaxed">
            It works on whatever you already have. Wix, Squarespace, GoDaddy,
            WordPress, a site someone built for you in 2019 and never touched
            again. Where it is hosted is not our problem to solve.
          </p>

          {/* THE NEVER-BREAK-ANYTHING PROMISE - Wade's bar, 2026-08-13:
              "if we can't confidently say 'we enhance your website with Back
              Cover, but we never break anything', we shouldn't offer this,
              period." Every claim in this block is load-bearing and each one
              is true because of a delivery rule in
              opportunity_intelligence/agent_readable_web_scope_2026-08-12.md.
              The DNS line in particular is why the Cloudflare Worker was ruled
              out of standard delivery - do not reintroduce it. */}
          <div className="max-w-2xl mt-12 border-l-2 border-[#E8896A] pl-6 py-1">
            <p className="text-white text-lg font-medium leading-relaxed mb-4">
              We only add. We never break anything.
            </p>
            <div className="space-y-4 text-[#AABBCC] text-lg leading-relaxed">
              <p>
                We add facts to your pages, a page for the AI tools, and markup
                that describes your business. We do not redesign anything, we do
                not delete anything, and we never touch your domain, your
                hosting or your email.
              </p>
              <p>
                Every change is additive and reversible to exactly what was
                there before. We work under our own login, so you can see what
                we did and when.
              </p>
              <p className="text-white">
                When we are finished your website will look exactly the same to
                a human being. That is the point.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* The proof */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">05 &mdash; See It On This Site</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              We did it to ourselves first. There is a page on this site written
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
          {/* THE RECEIPT IS THE ARTIFACT, SHOWN. Wade, 2026-08-13: the demo
              button IS the receipt in the sales conversation, and the delivery
              receipt is the client's own file at their own address, walked
              through with them. Not a before/after, not a metric. Do not
              reintroduce an outcome promise here. */}
          <p className="max-w-2xl mt-8 text-[#AABBCC] text-lg leading-relaxed">
            <span className="text-white font-medium">
              When we finish, yours lives at your own address.
            </span>{" "}
            We open it with you and read it together, so you can see exactly
            what an AI now gets told about your business. That is the whole
            deliverable, and you are looking at a working copy of it right now.
          </p>
        </Reveal>
      </section>

      {/* Honest section - this is the trust builder, do not cut it */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">06 &mdash; What We Will Not Promise</p>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              Anyone who tells you they can guarantee an AI will recommend you is
              guessing, and the honest answer is better than the confident one.
            </p>
            <p>
              Nobody outside those companies knows exactly how the AI tools
              decide who to name, or how long they take to notice a site has
              changed. We are not going to pretend otherwise, and we are not
              going to tell you an answer will change by Friday.
            </p>
            <p>
              What we do is the best-known practice available today, in the
              places the AI tools actually read, plus the page for the standard
              that is coming. Facts clear and current, nothing on your site
              contradicting itself, and your business described in the form
              machines take instructions from.
            </p>
            <p className="text-white">
              And we show you all of it. Your own page, at your own address, the
              same way you just looked at ours. Plus what was missing, what is
              there now, and the markup with a validator confirming it is
              correct. That is a receipt you can open yourself the day we
              finish, instead of a result you have to take on faith.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Price + CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">07 &mdash; The Price</p>
          <h2 className="text-white text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-2xl mb-5">
            {BACK_COVER.priceLabel}
            <span className="text-[#E8896A]">.</span>
          </h2>
          {/* "Not a subscription to a dashboard you will never open" was
              removed 2026-08-13. Wade's model now has an ongoing service AFTER
              the setup (keeping the site current as the standards move), so
              that absolute was about to become false the first time one sold.
              Pricing for the ongoing half is still undecided, so nothing is
              claimed here yet - this line only says what the setup fee is. */}
          <p className="text-[#AABBCC] text-lg max-w-xl mb-4 leading-relaxed">
            One fee for the setup. Not a rebuild, and nothing you cannot walk
            away from.
          </p>
          {/* The free diagnostic was retired 8/14 (Wade): the self-run test in
              section 01 IS the assessment, run by the buyer for nothing. The
              calendar is for the paid deployment meeting. */}
          <p className="text-[#AABBCC] text-lg max-w-xl mb-4 leading-relaxed">
            No assessment call, no discovery dance. You already ran the test at
            the top of this page, on your own phone, for nothing.
          </p>
          <p className="text-[#AABBCC] text-lg max-w-xl mb-10 leading-relaxed">
            The calendar is for your deployment: face to face or on a video
            call, your choice. That meeting is where we take payment and start
            the work, and delivery runs one to three days from it.
          </p>
          <Link href="/schedule" className="k-btn-solid k-focus inline-block">
            Schedule your deployment <span className="k-arrow">&rarr;</span>
          </Link>
        </Reveal>
      </section>

      {/* When you say yes - the frictionless path (Wade, 8/14: "a simple
          step-by-step explanation to the buyer for what happens." The access
          ask is the friction point, so step 3 does the de-fanging: their own
          platform's add-a-user door, their password never leaves their hands,
          we send the exact clicks.) */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">08 &mdash; When You Say Yes</p>
          <h2 className="text-white text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-2xl mb-8">
            Four steps from calendar to walkthrough
            <span className="text-[#E8896A]">.</span>
          </h2>
          <ol className="max-w-2xl space-y-7">
            {[
              {
                n: "1",
                lead: "Book the deployment.",
                body: "Face to face or a video call, your choice. You already proved the problem to yourself at the top of this page - the meeting is where we take payment, answer whatever you want answered, and start the clock. Delivery runs one to three days.",
              },
              {
                n: "2",
                lead: "Two minutes on your website: you add us as a user.",
                body: "Every website platform has a place to add another login. You add one for us, and your own password never leaves your hands. We send you the exact clicks for your platform, and we are on the phone with you while you do it if you want. This is the only step that needs your hands.",
              },
              {
                n: "3",
                lead: "We do the work under our own login.",
                body: "One to three days. We only add, so your website looks exactly the same to every human who visits, the whole time and after.",
              },
              {
                n: "4",
                lead: "The walkthrough.",
                body: "We open your new back cover page, at your own web address, together, and read what the AI now gets told about your business. You also get the list: every fact that was missing, every one that is there now, and where each lives.",
              },
            ].map((s) => (
              <li key={s.n} className="flex gap-5">
                <span className="k-mono text-[#E8896A] text-sm font-semibold pt-1 flex-shrink-0">
                  {s.n}
                </span>
                <p className="text-[#AABBCC] text-lg leading-relaxed">
                  <span className="text-white font-medium">{s.lead}</span>{" "}
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
          <p className="max-w-2xl mt-10 text-[#AABBCC]/80 text-base leading-relaxed">
            When you are done with us, remove our login. It takes one click,
            and everything we added stays yours.
          </p>
        </Reveal>
      </section>

      {/* The Watch - the ongoing half */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="k-label mb-6">09 &mdash; Staying Ready</p>
          <h2 className="text-white text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-2xl mb-5">
            The Watch<span className="text-[#E8896A]">.</span>{" "}
            <span className="text-[#6B9FD4] font-normal">
              {THE_WATCH.priceLabel}
            </span>
          </h2>
          <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
            <p>
              The Back Cover gets you set up. The Watch keeps you there.
            </p>
            <p>
              What an AI says about your business drifts. Your hours change, a
              price moves, a program ends, a competitor&apos;s detail gets
              attached to your name. Nobody sends you a report when that
              happens. The first sign is usually a customer showing up annoyed,
              or not showing up at all.
            </p>
          </div>
          <ul className="max-w-2xl mt-8 space-y-4">
            {watchIncludes.map((line) => (
              <li
                key={line}
                className="border-l border-[#6B9FD4] pl-5 text-[#AABBCC] text-lg leading-relaxed"
              >
                {line}
              </li>
            ))}
          </ul>
          <p className="max-w-2xl mt-8 text-[#AABBCC] text-lg leading-relaxed">
            Month to month. Cancel whenever it stops being worth it. Or pay for
            the year at{" "}
            <span className="text-white font-medium">$990</span> and get two
            months back.
          </p>
          {/* Refresh tiers decided on the Wade/Aaron call 8/14 (after the
              Shortline pitch): $99 = twice-monthly refresh, the right cadence
              for most businesses; $299 = daily refresh for inventory-velocity
              businesses (dealers, menus). Two tiers, one product. */}
          <p className="max-w-2xl mt-6 text-[#AABBCC] text-lg leading-relaxed">
            The $99 rate keeps your page refreshed twice a month, which is
            right for most businesses. If your information moves every day -
            vehicle inventory, menus, listings - the daily-refresh tier is{" "}
            <span className="text-white font-medium">$299 a month</span>.
          </p>
          {/* The two-sides framing (Wade's positioning, 8/14): the familiar
              monthly website column next to the thing none of it covers. */}
          <p className="max-w-2xl mt-6 text-[#AABBCC] text-lg leading-relaxed">
            <span className="text-white font-medium">
              Think about what you already pay every month
            </span>{" "}
            - the hosting, maybe a care plan, maybe the SEO work. All of it
            keeps your website ready for people. None of it touches what the
            AI tells your customers about you. The Watch is that missing
            column, priced like the rest of the column.
          </p>
          <p className="max-w-2xl mt-6 text-[#AABBCC]/80 text-base leading-relaxed">
            The dashboards that only watch this start around $250 a month, and
            you run them yourself. This is a third of that with the work
            included.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
