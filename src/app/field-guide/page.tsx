import Link from "next/link";
import type { Metadata } from "next";

// The Back Cover seller field guide - UNLISTED on purpose, same recipe as
// /downloads: not in any menu, noindex, shared by link only. Audience: Wade's
// commission sellers (Jordan, Kade, Jaxon - $500/deal + recurring cut).
// Source of record: Wade OS brand/kerzie_ai/back_cover_seller_onepager.md.
// PAGE never file, everywhere. Claim discipline: no ranking promises.
export const metadata: Metadata = {
  title: "Back Cover Field Guide | Kerzie AI",
  description: "The one-page sales guide for the Back Cover.",
  robots: { index: false, follow: false },
};

const pitch = [
  {
    lead: "The hook - two openers, and Wade wants both tested. Use the one that fits the room.",
    body: "A: “45% of people now ask an AI instead of searching Google. When they ask about your business, what does the AI actually see?” B: “Are you seeing a drop in business coming through your website?” Almost every business says yes. Then: “We know why, and we can fix it.”",
  },
  {
    lead: "The demo they run themselves - this closes more than anything you say.",
    body: "Their phone, their ChatGPT: “Tell me about [their business name].” Thin, generic, maybe wrong. Then: “Tell me about Kerzie AI Solutions.” Rich and current. “That difference is the product.”",
  },
  {
    lead: "The metaphor - the one that lands. Say it close to word for word.",
    body: "In a bookstore you flip the book over. The back cover tells you what the book is about, and the index tells you what is on page 263. AI does the same thing with a website - except most businesses never had either one written. Pretty websites are built for people. AI reads plain facts, and most sites barely have any.",
  },
  {
    lead: "Peer pressure.",
    body: "Name a business in their trade already publishing one - ask Wade for the current list in their vertical. “So do GMC and Carvana, which tells you where this is heading.”",
  },
  {
    lead: "The promise.",
    body: "“We only add. We never break anything. Your website looks exactly the same to every human who visits.”",
  },
  {
    lead: "The close.",
    body: "“$1,500, done in one to three days, and $99 a month keeps it current. Want it on the calendar?” Book the deployment meeting - payment happens there, and Wade takes it from that point.",
  },
];

// The twenty-second answer to "what do you actually build?" - Wade's framing,
// 2026-08-20. Deliberately three beats, not four: the fourth beat (clean
// per-page copies for AI to read) is NOT in the offer yet and must not be sold
// until Wade rules on it. Do not add it here without his go.
const build = [
  {
    lead: "We write the back cover.",
    body: "What the business is, in their words. This is the part a free tool leaves blank.",
  },
  {
    lead: "We build the index.",
    body: "Plumbing on 12, water heaters on 31, service area on 44. AI reads the index and knows where to go instead of guessing.",
  },
  {
    lead: "We keep it accurate.",
    body: "That is The Watch, and that is the $99. A business changes. A page written once and never touched goes wrong quietly, and nobody notices until an AI says something untrue about them.",
  },
];

export default function FieldGuidePage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-20">
        <Link
          href="/"
          className="k-mono text-[#AABBCC]/70 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#E8896A]">.</span>AI
        </Link>

        <p className="k-label mt-12 mb-4">Seller Field Guide</p>
        <h1 className="text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,5vw,3rem)]">
          The Back Cover<span className="text-[#E8896A]">.</span>
        </h1>
        <p className="mt-4 text-[#AABBCC] text-lg leading-relaxed">
          One page, everything you need. Sold to a Colorado car dealer on the
          first call in about twenty minutes with exactly this.{" "}
          <span className="text-white font-medium">
            You make $500 per closed deal, plus a recurring cut when the
            customer takes the monthly.
          </span>
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            ["$1,500", "setup, one time"],
            ["$99/mo", "The Watch - keeps it true"],
            ["$500 + recurring", "yours, per closed deal"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="rounded-lg border border-[rgba(170,187,204,0.2)] bg-[rgba(170,187,204,0.06)] px-4 py-2.5"
            >
              <span className="block text-white font-bold text-lg">{n}</span>
              <span className="block k-mono text-[#AABBCC]/70 text-[10px] tracking-[0.1em] uppercase">
                {l}
              </span>
            </div>
          ))}
        </div>

        <h2 className="k-mono text-[#6B9FD4] text-xs tracking-[0.15em] mt-12 mb-4">
          STEP ZERO - KNOW THE PAGE BY HEART
        </h2>
        <p className="text-[#AABBCC] text-lg leading-relaxed">
          <span className="text-white font-medium">
            Read{" "}
            <Link href="/back-cover" className="k-link k-focus text-[#6B9FD4]">
              kerzie.ai/back-cover
            </Link>{" "}
            until you can say it without notes.
          </span>{" "}
          Watch the two-minute video twice. Run the ChatGPT test on Kerzie AI
          yourself so you have seen the difference before you ever show it. If
          you know that page by heart, the only thing you need the other person
          to do is run the ChatGPT exercise. The page is the pitch - you are
          just walking them to the demo.
        </p>

        <h2 className="k-mono text-[#6B9FD4] text-xs tracking-[0.15em] mt-10 mb-4">
          BEFORE YOU CALL ANYONE
        </h2>
        <p className="text-[#AABBCC] text-lg leading-relaxed">
          <span className="text-white font-medium">Check their page first:</span>{" "}
          type theirwebsite.com/llms.txt into a browser. An error page means
          they do not have it - that is your opening receipt. (Ours is at{" "}
          <a href="/llms.txt" className="k-link k-focus text-[#6B9FD4]">
            kerzie.ai/llms.txt
          </a>
          , so you can show what a real one looks like.){" "}
          <span className="text-white font-medium">
            And start with your own book
          </span>{" "}
          - people who already know you and take your calls. Work the
          relationships you already have and three to four deals a week is
          realistic.
        </p>

        <h2 className="k-mono text-[#E8896A] text-xs tracking-[0.15em] mt-10 mb-5">
          THE SIX-STEP PITCH (THE ONE THAT WORKS)
        </h2>
        <ol className="space-y-5">
          {pitch.map((s, i) => (
            <li key={s.lead} className="flex gap-4">
              <span className="k-mono text-[#E8896A] text-sm font-semibold pt-1 flex-shrink-0">
                {i + 1}
              </span>
              <p className="text-[#AABBCC] text-lg leading-relaxed">
                <span className="text-white font-medium">{s.lead}</span>{" "}
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <h2 className="k-mono text-[#E8896A] text-xs tracking-[0.15em] mt-10 mb-4">
          SAY IT IN TWENTY SECONDS
        </h2>
        <p className="text-[#AABBCC] text-lg leading-relaxed">
          When they ask what you actually build, this is the whole answer. Three
          parts, in this order.{" "}
          <span className="text-white font-medium">
            You never have to use a technical word, and you never have to teach
            them anything.
          </span>{" "}
          They do not need to learn what any of this is called. They need to
          understand that AI cannot see them, and that we build it so it can.
        </p>
        <ol className="mt-5 space-y-4">
          {build.map((s, i) => (
            <li key={s.lead} className="flex gap-4">
              <span className="k-mono text-[#5DBB87] text-sm font-semibold pt-1 flex-shrink-0">
                {i + 1}
              </span>
              <p className="text-[#AABBCC] text-lg leading-relaxed">
                <span className="text-white font-medium">{s.lead}</span>{" "}
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <h2 className="k-mono text-[#6B9FD4] text-xs tracking-[0.15em] mt-10 mb-4">
          WHEN THEY SAY THEY ALREADY HAVE ONE
        </h2>
        <p className="text-[#AABBCC] text-lg leading-relaxed">
          Do not argue. Read theirs together on their screen.{" "}
          <span className="text-white font-medium">
            &ldquo;A free tool photocopies your table of contents, blank pages
            and all, leaves the back cover empty, and never touches it
            again.&rdquo;
          </span>{" "}
          On a real one we checked, the page still credited the tool that made
          it, was built in March and never updated while the site kept changing,
          and one of its 59 links went to a page that no longer exists. Scroll to
          the bottom and read the tool&rsquo;s credit line out loud. Then:{" "}
          <span className="text-white font-medium">
            &ldquo;The tool gave you a snapshot. The value was never the page -
            it is the page staying true.&rdquo;
          </span>
        </p>

        <h2 className="k-mono text-[#6B9FD4] text-xs tracking-[0.15em] mt-10 mb-4">
          FOR THE SKEPTIC - AND THE LINE YOU NEVER CROSS
        </h2>
        <p className="text-[#AABBCC] text-lg leading-relaxed">
          <span className="text-white font-medium">
            &ldquo;I am not promising you a ranking. I am telling you AI has to
            read your business the hard way today and it gets things wrong - you
            just saw it. We make it easy to read. That part we control.&rdquo;
          </span>{" "}
          And when they ask what happens as this keeps changing:{" "}
          <span className="text-white font-medium">
            &ldquo;This is new and it is still moving. We build to what works
            today, and when it changes, we change with it. That is what the
            monthly is for.&rdquo;
          </span>
        </p>
        <p className="mt-4 text-[#AABBCC] text-lg leading-relaxed">
          <span className="text-[#E07B70] font-medium">One guardrail.</span>{" "}
          Never say AI &ldquo;looks up the answer&rdquo; in the index. It points,
          it does not answer. If someone pushes, the honest line is: it tells AI
          where to look, and makes sure what is there can be read. Never promise
          a ranking, a citation, or what any AI will say back.
        </p>

        <h2 className="k-mono text-[#6B9FD4] text-xs tracking-[0.15em] mt-10 mb-4">
          THE SOFT CLOSE FOR THE KINDA-INTERESTED
        </h2>
        <p className="text-[#AABBCC] text-lg leading-relaxed">
          &ldquo;Do you have three minutes to improve your business?&rdquo; Then
          send them{" "}
          <Link href="/back-cover" className="k-link k-focus text-[#6B9FD4]">
            kerzie.ai/back-cover
          </Link>{" "}
          - the video does the explaining in Wade&apos;s own voice.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <div className="rounded-lg border border-[rgba(170,187,204,0.15)] border-t-2 border-t-[#5DBB87] bg-[rgba(170,187,204,0.04)] p-5">
            <h3 className="k-mono text-[#5DBB87] text-xs tracking-[0.12em] mb-3">
              SAY THIS
            </h3>
            <ul className="space-y-2.5 text-[#AABBCC] text-[15px] leading-relaxed list-disc pl-5">
              <li>
                <span className="text-white font-medium">PAGE</span> - &ldquo;the
                back cover page,&rdquo; &ldquo;the llms.txt page&rdquo;
              </li>
              <li>
                &ldquo;We are an AI company - not a marketing agency, not a
                website host.&rdquo; That difference is the advantage.
              </li>
              <li>Name the AIs: ChatGPT, Gemini, Perplexity</li>
              <li>
                &ldquo;The AI can finally read you. Test it yourself.&rdquo; -
                their own ask is the receipt
              </li>
              <li>
                If &ldquo;my website guy can do that&rdquo;: &ldquo;Has he? It
                has been out for a year.&rdquo;
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-[rgba(170,187,204,0.15)] border-t-2 border-t-[#E07B70] bg-[rgba(170,187,204,0.04)] p-5">
            <h3 className="k-mono text-[#E07B70] text-xs tracking-[0.12em] mb-3">
              NEVER THIS
            </h3>
            <ul className="space-y-2.5 text-[#AABBCC] text-[15px] leading-relaxed list-disc pl-5">
              <li>&ldquo;File.&rdquo; No one pays $1,500 for a file.</li>
              <li>&ldquo;Simple&rdquo; anything.</li>
              <li>
                &ldquo;The assistant&rdquo; - in a shop, an assistant is a
                person at a desk.
              </li>
              <li>
                Any promise of rankings or &ldquo;the AI will pick you.&rdquo;
                Nobody on earth can promise that. We promise readable, ready,
                visible.
              </li>
              <li>
                Invented numbers or clients. Everything on this page is real
                and checkable.
              </li>
            </ul>
          </div>
        </div>

        <h2 className="k-mono text-[#6B9FD4] text-xs tracking-[0.15em] mt-10 mb-4">
          WHO TO PITCH
        </h2>
        <p className="text-[#AABBCC] text-lg leading-relaxed">
          Product businesses first:{" "}
          <span className="text-white font-medium">
            car dealers, pizza and restaurants, pool companies, roofers, med
            spas, home services.
          </span>{" "}
          Talk to the OWNER, not their marketing vendor. Walk-ins work - the
          whole demo lives on the phone in their pocket.
        </p>

        <h2 className="k-mono text-[#6B9FD4] text-xs tracking-[0.15em] mt-10 mb-4">
          GUARDRAILS
        </h2>
        <p className="text-[#AABBCC] text-lg leading-relaxed">
          Platform-hosted dealer sites (DealerOn and similar) need a check with
          Wade before quoting - some platforms gate the page placement.
          Multi-location businesses: $2,500 setup + $99 a month per location -
          confirm before quoting. Businesses whose information moves daily can
          take the $299 a month daily-refresh tier - that is Wade&apos;s
          conversation.
        </p>

        <div className="mt-12 border-t border-[rgba(170,187,204,0.13)] pt-6 text-[#AABBCC]/80 text-base leading-relaxed">
          <p>
            <span className="text-white font-medium">After the yes:</span> book
            the deployment meeting (in person or video) and hand it to Wade -
            payment at the meeting, delivery in one to three days, then the
            walkthrough where the owner reads their new page with us.
            Commission terms with Wade directly.
          </p>
          <p className="mt-4 k-mono text-[13px] text-[#AABBCC]/60">
            Wade Kerzie &middot; Kerzie AI Solutions &middot; McKinney, Texas
            &middot; 214-668-7986
          </p>
        </div>
      </div>
    </div>
  );
}
