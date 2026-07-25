import Link from "next/link";
import type { Metadata } from "next";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "The Kerzie Effect | Kerzie AI",
  description:
    "Once a buyer has the seller's scope of work and the buyer's own context, an AI can synthesize, and now execute, what used to require paying for the seller's time. Named, defined, and demonstrated across three industries.",
  openGraph: {
    title: "The Kerzie Effect",
    description:
      "Why the vendor relationship you've had for ten years might not survive the next two. A named, demonstrable mechanism for how AI actually hits Main Street knowledge work.",
    type: "article",
    publishedTime: "2026-07-24",
    authors: ["Wade Kerzie"],
  },
};

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#AABBCC] text-lg leading-relaxed mt-6">{children}</p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-white font-bold tracking-[-0.02em] text-2xl lg:text-3xl mt-16">
      {children}
    </h2>
  );
}

function Sow({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="border-l-2 border-[#E8896A] pl-4 text-[#AABBCC] leading-relaxed"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Ai({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-6 bg-[#1E2035] border border-[rgba(170,187,204,0.15)] rounded-sm px-6 py-5 flex flex-col gap-3">
      {children}
    </blockquote>
  );
}

function AiLine({ children }: { children: React.ReactNode }) {
  return <p className="text-[#c9d4de] leading-relaxed">{children}</p>;
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-white text-lg leading-relaxed mt-6 font-semibold">
      {children}
    </p>
  );
}

export default function KerzieEffectPage() {
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

      <article className="max-w-3xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-24">
        <p className="k-label mb-8">
          <span className="idx">Essay</span>Wade Kerzie &middot; July 24, 2026
        </p>

        <h1 className="text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.5rem,6vw,4rem)]">
          The Kerzie Effect<span className="text-[#E8896A]">.</span>
        </h1>
        <p className="mt-6 k-serif text-[#AABBCC] text-xl lg:text-2xl leading-snug">
          Why the vendor relationship you&rsquo;ve had for ten years might not
          survive the next two.
        </p>

        <div className="k-hairline w-full mt-10" />

        <P>Here&rsquo;s what nobody in professional services is saying out loud yet.</P>
        <P>
          For as long as there have been experts, there have been buyers who
          couldn&rsquo;t do what the expert did. That gap, between what you know and
          what I know, is the entire business model of professional services,
          training, and a good chunk of software. You pay for the gap to be
          closed. Someone packages their know-how, hands you the result, and the
          transaction is over.
        </P>
        <P>
          I think that gap is closing for free, and almost nobody selling into
          it has noticed yet.
        </P>

        <H2>Where I saw it</H2>
        <P>
          I was writing a proposal for a client engagement. Standard shape:
          assess where their people are, build a plan to get them where they
          need to be, deliver it in steps. I&rsquo;ve written a hundred proposals
          like it, and so has everyone in professional services.
        </P>
        <P>
          Then it hit me. The proposal itself is a scope of work. A scope of
          work is a measurable, step by step outline of exactly what I&rsquo;m going
          to do. And once someone has that outline, plus everything they already
          know about their own business that I don&rsquo;t, they don&rsquo;t need me to
          execute it. They need an AI that can read the outline and their own
          context, and go.
        </P>
        <P>
          I&rsquo;m not describing a hypothetical. I&rsquo;ve done the buyer side of this
          myself. I&rsquo;ve sat through free webinars where someone selling a paid
          course laid out the six sessions they&rsquo;d walk me through. I took that
          same outline, the one they were using to sell me, and asked Claude to
          build me the self-run version. I only needed two of the six sessions.
          I never paid for the course.
        </P>
        <P>That&rsquo;s the whole mechanism, and it needs a name.</P>

        <div className="mt-8 border-l-2 border-[#E8896A] pl-6 py-1">
          <p className="text-white text-xl lg:text-2xl leading-snug font-semibold">
            The Kerzie effect: once a buyer has the seller&rsquo;s scope of work and
            the buyer&rsquo;s own context, an AI can synthesize, and now execute,
            what used to require paying for the seller&rsquo;s time.
          </p>
        </div>

        <H2>Why now</H2>
        <P>
          I want to be precise about what actually changed, because it isn&rsquo;t
          what most people assume.
        </P>
        <P>
          The capability behind this didn&rsquo;t arrive in the last few weeks.
          Reasoning across files, calling tools, executing multi-step work,
          that&rsquo;s been building for a while now. What changed recently is
          narrower, and more consequential: the interface got simple enough
          that someone who isn&rsquo;t technical can drive that capability alone,
          from one place, without bouncing between a terminal and three
          different tools and a stack of open tabs.
        </P>
        <P>
          I&rsquo;ve watched this happen with my own hands. Even something as
          ordinary as a browser extension, no API key, no setup beyond
          installing it, now does a genuinely massive amount of real work from
          one window. Diagnose the problem, build the fix, run it, watch it
          work. A year ago, doing that same thing required someone technical
          enough to stitch several disconnected tools together themselves.
          That&rsquo;s a different population of people who can do it now, and it
          isn&rsquo;t because they got smarter. It&rsquo;s because the tool did the work
          of getting simpler.
        </P>
        <P>
          That&rsquo;s an old pattern wearing a new coat. Mainframes existed for
          decades before a computer simple enough to sit on a desk put that
          same computation in reach of someone with no engineering background.
          Mobile computing existed for years before an interface, not a new
          capability, triggered the shift to everyone carrying a computer in
          their pocket. Capability tends to arrive quietly. Adoption tracks the
          interface.
        </P>
        <P>
          That&rsquo;s why I&rsquo;m writing this now instead of a year from now, and why
          I don&rsquo;t think I&rsquo;m a year late either. The line a business owner has
          to cross to trigger the Kerzie effect didn&rsquo;t move because people got
          more capable. It moved because the interface got out of the way.
        </P>

        <H2>The two phases</H2>
        <P>
          It helps to walk through this as a flow, because it doesn&rsquo;t stop
          where most people would assume it stops.
        </P>
        <Callout>Phase one: the buyer harvests the free proposal.</Callout>
        <P>
          A small business owner needs help getting found on Google. She calls
          three marketing agencies and asks each one for a proposal, which is
          completely normal. Asking a vendor to write up a plan before you pay
          for anything is how sales in professional services has always worked.
        </P>
        <P>
          All three agencies do real work to win her business. Someone audits
          her listings, checks her review profile, looks at what her
          competitors are ranking for, and writes up a plan: fix these things,
          in this order, over sixty days, for this many dollars a month.
        </P>
        <P>
          She reads all three. Then she does something that used to be rare and
          is becoming routine. She takes the best one, the plan that laid out
          her problem most clearly, and hands it to an AI along with everything
          she already knows about her own business that no agency could have:
          her actual customer list, her actual review history, her
          competitors&rsquo; real hours and menus. She asks the AI to execute the
          plan the agency already wrote for her, for free, as part of trying to
          win her business.
        </P>
        <P>
          She never calls any of the three agencies back. She didn&rsquo;t need to.
          The most expensive part of what they were selling, the diagnosis, the
          plan, the part that used to require paying someone to synthesize, was
          handed to her for free the moment she asked for a quote.
        </P>
        <P>
          If she sounds hypothetical, the agency world&rsquo;s own numbers say she
          isn&rsquo;t. Focus Digital&rsquo;s 2026 agency churn report found 60 percent of
          marketing leaders already spending less on agencies because of AI,
          and the dominant pattern isn&rsquo;t canceled contracts. It&rsquo;s trimmed
          retainers, twenty-five thousand a month quietly becoming fifteen.
          Phase one doesn&rsquo;t announce itself. It shows up as clients needing
          less of you.
        </P>
        <Callout>Phase two: the buyer stops asking for the proposal at all.</Callout>
        <P>
          This is the part that&rsquo;s easy to miss, and it&rsquo;s the more important
          one. Phase one still needed a real professional services business
          somewhere, even if only to get harvested for a free plan. Phase two
          doesn&rsquo;t need one to exist at all.
        </P>
        <P>
          Once a buyer has done what she just did, she&rsquo;s learned something
          more valuable than the plan itself: she&rsquo;s learned that a plan like
          that can be generated, not just executed. Next time she needs
          something like this, she doesn&rsquo;t call three agencies. She sits down
          with an AI, describes her business the way she would to a
          salesperson, and asks it to build her the plan directly. There&rsquo;s no
          agency anywhere in this version, not even for a free consultation.
          The AI is the vendor, the discovery call, and the execution, all in
          one sitting.
        </P>
        <P>
          That&rsquo;s the actual end state of the Kerzie effect, and it&rsquo;s a
          different claim than &ldquo;AI does the work cheaper.&rdquo; It&rsquo;s that the buyer
          stops needing a third party to tell them what needs doing in the
          first place, which was always the harder, more valuable half of what
          professional services actually sold. Writing a good scope of work was
          never the easy part. Once a buyer can generate one for themselves,
          the entire &ldquo;come talk to us and we&rsquo;ll tell you what you need&rdquo; front
          door of the business closes, whether or not anyone ever executes
          anything for them.
        </P>

        <H2>This isn&rsquo;t new. It&rsquo;s just fast now</H2>
        <P>
          Every version of this has happened before, and every time, it
          followed the same shape.
        </P>
        <P>
          Travel agents sold the synthesis of airline schedules, fares, and
          your preferences. Search engines did that synthesis for free, and
          travel agents mostly disappeared.
        </P>
        <P>
          Full-service stockbrokers sold the synthesis of market knowledge and
          your goals. Discount brokerages, then robo-advisors, did that
          synthesis cheaper, and the full-service model shrank to the clients
          who wanted something else, a relationship, a hand to hold in a crash.
        </P>
        <P>
          Simple tax preparation sold the synthesis of tax code and your
          numbers. Software did that synthesis for forty dollars, and an entire
          tier of tax preparers went with it.
        </P>
        <P>
          Encyclopedia salesmen sold codified knowledge itself. It became free,
          and so did they.
        </P>
        <P>
          Every one of those took years, because someone had to build a
          dedicated product aimed at one industry. Expedia took years to build.
          E-Trade took years to build. Nobody has to build anything this time.
          The tool that does the synthesizing already exists, it&rsquo;s general
          purpose, and it&rsquo;s sitting in a browser tab. It doesn&rsquo;t need funding,
          a founding team, or five years of runway to come for your industry.
          It&rsquo;s already here, waiting for a buyer to point it at you.
        </P>

        <H2>What this actually looks like</H2>
        <P>
          I went looking for a real company&rsquo;s private proposal to use as the
          proof here, and I want to tell you honestly what I found instead,
          because it&rsquo;s its own piece of evidence.
        </P>
        <P>
          I read the public &ldquo;our process&rdquo; pages of several real coaching and
          consulting firms in the trades and in dental practice management.
          Every one of them names phases and says nothing underneath them.
          Assessment, planning, implementation, accountability. Systematic,
          efficient, proven. That is not an accident and it is not bad
          marketing. It&rsquo;s sellers already protecting the part of the business
          that&rsquo;s actually worth money, whether or not anyone there has ever
          thought about it in those terms. The real, detailed, executable
          version of that document doesn&rsquo;t get published. It gets sent,
          privately, to one qualified prospect who already picked up the phone.
        </P>
        <P>
          I can&rsquo;t get a copy of that private document without breaking the
          same rule this piece is built on: no invented receipts. So here are
          three composites instead, built honestly from how these engagements
          actually run and what they actually cost, not copied from any single
          real company. Three disparate industries, on purpose, so this
          doesn&rsquo;t read as one lucky example. And I priced each one against
          real published benchmarks for that kind of work, because a scope of
          work without a dollar figure next to it is just a description. The
          dollar figure is what makes it a proposal.
        </P>
        <P>
          Notice something else these three have in common before you read
          them: none of them is &ldquo;strategy.&rdquo; All three are the unglamorous,
          specific, recurring fix that most professional services businesses
          actually sell. That&rsquo;s deliberate. The Kerzie effect doesn&rsquo;t need to
          touch the expensive, prestigious work to matter. It just needs to
          touch the invoicing process, the front desk script, the weekly
          schedule template, the stuff that&rsquo;s actually most of the revenue.
          And it literally is most of the revenue: by Source Global Research&rsquo;s
          2024 count, strategy work is about $57 billion of the $263 billion
          global consulting market. The other four fifths is this.
        </P>

        <h3 className="text-white font-semibold text-xl mt-12">
          HVAC and plumbing: the accounts receivable and invoicing fix
        </h3>
        <P>
          Trades businesses routinely carry tens of thousands of dollars in
          aging receivables because invoicing is manual, payment terms are
          inconsistent, and nobody follows up in a structured way. Outsourced
          AR management for a small business runs roughly twelve to thirty
          thousand dollars a year. A bounded, one-time process fix, not an
          ongoing service, prices below that: call it{" "}
          <strong className="text-white">$9,500, one time, over a 90 day engagement</strong>.
          The private version of that proposal looks like this:
        </P>
        <Sow
          items={[
            "Week 1: pull the 90 day AR aging report. Diagnose: no standard invoice terms, no card on file, no follow-up cadence past a single mailed statement.",
            "Week 2: set new terms, net 15 residential with a 2 percent discount for paying within 5 days, net 30 commercial. Build a three-stage automated follow-up cadence, days 5, 20, and 35 past due.",
            "Weeks 3 to 4: add a card-on-file request at time of estimate signing, and train front office staff on the script that asks for it without it feeling like a credit check.",
          ]}
        />
        <P>
          I gave an AI that outline and one sentence of context: an 8
          technician plumbing company carrying $180,000 in receivables over 60
          days past due, no online payment option today. It didn&rsquo;t jump
          straight to deliverables. It came back the way a real operator would,
          with a plan first:
        </P>
        <Ai>
          <AiLine>Here&rsquo;s what I&rsquo;d set up based on this scope of work and your numbers:</AiLine>
          <AiLine>&bull; New terms: net 15 residential with a 2 percent discount for paying within 5 days, net 30 commercial.</AiLine>
          <AiLine>&bull; A three-stage follow-up cadence at 5, 20, and 35 days past due.</AiLine>
          <AiLine>&bull; A card-on-file request added at the point of estimate signing, worded so it doesn&rsquo;t feel like a credit check.</AiLine>
          <AiLine>Want me to write the actual invoice language, the follow-up messages, and the request script?</AiLine>
        </Ai>
        <P>I said yes. In about a minute:</P>
        <Ai>
          <AiLine>&bull; Invoice line: &ldquo;Due within 15 days. Pay in one click: [link]. Pay within 5 days and take 2 percent off.&rdquo;</AiLine>
          <AiLine>&bull; Day 20 follow-up: &ldquo;Hi [name], just a reminder that invoice #[number] for $[amount] was due on [date]. Pay instantly here: [link]. Let us know if anything&rsquo;s holding this up.&rdquo;</AiLine>
          <AiLine>&bull; Day 35 follow-up, phone script for office staff: &ldquo;Hi [name], I&rsquo;m calling about invoice #[number], now over a month past due. We want to keep the work moving for you. Can we get this resolved today, in full or with a payment plan?&rdquo;</AiLine>
          <AiLine>&bull; Card-on-file request at signing: &ldquo;Before we get started, we ask everyone to keep a card on file, it&rsquo;s just for anything you approve, and it&rsquo;s how we keep our prices as low as they are. Would you like to use the card ending in [xxxx], or a different one?&rdquo;</AiLine>
        </Ai>
        <P>
          Everything above is a real transcript from that session. Now connect
          the same AI to the business&rsquo;s systems, which is exactly what the
          one-window setups do, and the response ends with one more line:
        </P>
        <Ai>
          <AiLine>&ldquo;I have API and browser access to your ServiceTitan account and your QuickBooks Payments setup. Want me to load these terms and the follow-up cadence in now, or schedule it to go live at the start of next month?&rdquo;</AiLine>
        </Ai>
        <P>
          A printed proposal could never do that last part.{" "}
          <strong className="text-white">
            This is the magic moment. This is the Kerzie effect.
          </strong>{" "}
          Not the scripts. Not even the plan. The moment an AI stops
          recommending what a professional services firm would have recommended
          and asks permission to go do it, inside the business&rsquo;s own systems,
          right now.
        </P>

        <h3 className="text-white font-semibold text-xl mt-12">
          Dental: the front office and hygiene upskilling playbook
        </h3>
        <P>
          Comprehensive dental practice consulting is typically custom quoted,
          with entry level retainers starting around $395 a month for basic
          support and full engagements running well beyond that once real
          training is involved. A bounded, one-time upskilling project, not an
          open-ended coaching retainer: call it{" "}
          <strong className="text-white">$6,800, one time, over 4 weeks, including one on-site training day</strong>.
          The private version looks like this:
        </P>
        <Sow
          items={[
            "Week 1: shadow the front desk and hygiene team for two days. Find where recall calls and treatment case presentations actually break down.",
            "Week 2: build a recall script with objection handling, a chair hour production target against the practice's own fee schedule, and a hand-off script between the dentist and the treatment coordinator.",
            "Week 3: run a half day, in person training session, role playing the new scripts with the team.",
            "Week 4: a 30 day follow-up call comparing recall and case acceptance numbers to baseline.",
          ]}
        />
        <P>
          Same test. I described a single doctor practice, weak recall
          follow-through, about $180 an hour in hygiene production, no hand-off
          process today. Same shape of answer, a plan before a deliverable:
        </P>
        <Ai>
          <AiLine>Here&rsquo;s what I&rsquo;d build from this scope of work:</AiLine>
          <AiLine>&bull; A recall script with responses to the three objections you&rsquo;ll hear most: cost, time, and &ldquo;I&rsquo;ll call back.&rdquo;</AiLine>
          <AiLine>&bull; A chair hour target calculated against your actual fee schedule.</AiLine>
          <AiLine>&bull; A hand-off sequence so the dentist delivers the finding and the coordinator handles cost and scheduling, so neither of them has to sell.</AiLine>
          <AiLine>Want the scripts written out?</AiLine>
        </Ai>
        <P>I said yes:</P>
        <Ai>
          <AiLine>&bull; Recall call: &ldquo;Hi [patient], this is [name] calling from Dr. [name]&rsquo;s office. You&rsquo;re due for your six month cleaning, and we have an opening [day] at [time]. Does that work for you?&rdquo;</AiLine>
          <AiLine>&bull; If cost comes up: &ldquo;Cleanings are covered at 100 percent under most plans, and skipping this is usually what leads to the bigger, more expensive problem down the road. Would [alternate time] work better?&rdquo;</AiLine>
          <AiLine>&bull; If they say they&rsquo;ll call back: &ldquo;Of course. Let me hold [day/time] so it doesn&rsquo;t get taken. You can always call to move it if something comes up.&rdquo;</AiLine>
          <AiLine>&bull; Hand-off script: Dentist says, &ldquo;[Patient], I found [finding]. I&rsquo;m going to have [coordinator name] walk you through the details and the options so this works with your schedule.&rdquo; Coordinator then presents cost and timeline without restating or re-selling the clinical case.</AiLine>
        </Ai>
        <P>Real output again. Connect it to the practice&rsquo;s systems and it ends the same way:</P>
        <Ai>
          <AiLine>&ldquo;I have API and browser access to your Dentrix system, including the recall list and the scheduling calendar. Want me to load this into the recall workflow now, or schedule the rollout for your next team meeting?&rdquo;</AiLine>
        </Ai>
        <P>
          A printed proposal could never do that last part either.{" "}
          <strong className="text-white">This is the magic moment again.</strong>{" "}
          Same shift, different industry: not a recommendation about what the
          practice should do, but a live offer to go do it, inside the system
          the practice already runs on, today or on a schedule the owner picks.
        </P>

        <h3 className="text-white font-semibold text-xl mt-12">
          Restaurants: the prime cost and scheduling fix
        </h3>
        <P>
          Restaurant consulting typically runs $150 to $350 an hour, and
          operators commonly recover the fee within months through cost savings
          alone. A focused, 4 week prime cost engagement: call it{" "}
          <strong className="text-white">$11,000 flat</strong>, roughly the
          middle of that hourly range across the actual hours the work takes.
          The private version looks like this:
        </P>
        <Sow
          items={[
            "Week 1: pull 90 days of POS and payroll data. Calculate current prime cost, food cost plus labor cost as a share of revenue, against the healthy target of 55 to 60 percent.",
            "Week 2: rebuild the weekly schedule against forecasted sales by daypart instead of fixed shifts, cutting overstaffed slow periods.",
            "Week 3: re-cost the two or three highest food cost menu items without changing the menu price.",
            "Week 4: build a weekly prime cost dashboard managers fill in every Monday, red, yellow, green against target.",
          ]}
        />
        <P>
          I described a 120 seat casual restaurant doing $2.1 million a year,
          prime cost currently running 68 percent, targeting 58. Same pattern,
          the plan first:
        </P>
        <Ai>
          <AiLine>Here&rsquo;s what I&rsquo;d do with your numbers:</AiLine>
          <AiLine>&bull; Rebuild the weekly schedule around your actual ticket volume by daypart instead of fixed shifts.</AiLine>
          <AiLine>&bull; Re-cost your two or three highest food cost items without touching the menu price.</AiLine>
          <AiLine>&bull; Set up a weekly dashboard so you can see prime cost drift before it becomes a real problem.</AiLine>
          <AiLine>Want me to build the actual schedule, the recipe costing, and the dashboard?</AiLine>
        </Ai>
        <P>I said yes:</P>
        <Ai>
          <AiLine>&bull; Schedule fix: &ldquo;Rebuild Tuesday through Thursday dinner from 4 line cooks and 2 servers per hour of service to 3 line cooks, with a 4th who clocks in only once ticket volume crosses 15 covers an hour, based on your last 90 days of POS timestamps. Saves approximately 9 labor hours a week across your three slowest dinner shifts.&rdquo;</AiLine>
          <AiLine>&bull; Menu re-cost: &ldquo;Your chicken parm currently plates at $4.80 against a $16 price, a 30 percent food cost. Cutting the chicken portion from 8 ounces to 6 and switching the side from hand-cut fries to a par-baked wedge cut drops plate cost to $3.65 with no menu price change, moving that single item to 23 percent food cost.&rdquo;</AiLine>
          <AiLine>&bull; Weekly dashboard: a simple table, Week, Food Cost Percent, Labor Cost Percent, Prime Cost Percent, Target, Variance, color coded against target.</AiLine>
        </Ai>
        <P>And with the restaurant&rsquo;s systems connected:</P>
        <Ai>
          <AiLine>&ldquo;I have API and browser access to your Toast POS and your 7shifts account. Want me to update the recipe costing and rebuild next week&rsquo;s schedule now, or schedule it to start Monday?&rdquo;</AiLine>
        </Ai>
        <P>
          Same as the other two, a printed proposal stops right before that
          last line.{" "}
          <strong className="text-white">Third industry, same magic moment.</strong>{" "}
          Trades, healthcare, hospitality, it doesn&rsquo;t matter. Once someone has
          crossed the competency line and is working from one window, this is
          what happens next every time: not a recommendation, an offer to
          execute.
        </P>

        <P>
          None of those took a week to produce, and none of them needed anyone
          with a badge, a car, or a billable hour. They needed the outline, a
          few sentences of real context, one word of approval, and about a
          minute.
        </P>
        <P>
          I want to be direct about what this does and doesn&rsquo;t prove. It
          doesn&rsquo;t prove any specific company is exposed, because I didn&rsquo;t use
          any specific company&rsquo;s real document or real price list. What it
          proves is that the mechanism isn&rsquo;t theoretical: give an AI a
          realistically detailed, realistically priced scope of work and a
          business&rsquo;s own numbers, and it produces something a business owner
          could act on immediately, not a watered down approximation.
        </P>
        <P>
          And you don&rsquo;t have to take my word on the quality. When Harvard
          Business School and BCG ran a field experiment with 758 of BCG&rsquo;s own
          consultants, the ones using AI on tasks within its reach finished
          about 25 percent faster with roughly 40 percent higher quality. The
          same study found the opposite on tasks beyond its reach: those
          consultants did worse, by 19 percentage points. The competency line I
          keep talking about is not a metaphor. It&rsquo;s measurable, and it cuts
          in both directions.
        </P>
        <P>
          So say the whole thing as plainly as I can. You start with a
          quantified business problem. You either send it out and get a
          proposal back on how to fix it, or you skip that step and diagnose it
          yourself. Either way, you bring the structure in-house, measure it
          against your exact environment, your numbers, your systems, your fee
          schedule, your POS data, and then you execute the work, from the same
          one window, without ever picking up the phone to hire someone.
          Recommending what a firm would have recommended is the part everyone
          already assumes AI can do. Executing it, inside the buyer&rsquo;s actual
          invoicing platform or POS or practice management system, is the part
          that used to require hiring someone. That is the Kerzie effect, and
          the only thing standing between a buyer and it is having the detailed
          version of the scope of work in hand, which is exactly the document
          this industry hands out for free every time someone asks for a quote.
        </P>

        <H2>It doesn&rsquo;t stay inside professional services</H2>
        <P>
          Once you see the mechanism, you stop seeing it as a consulting
          problem.
        </P>
        <P>
          Most software is a license to use somebody else&rsquo;s codified workflow,
          and most people use a small slice of what they pay for. Everybody who
          has ever opened Excel or QuickBooks knows they&rsquo;re using maybe a
          fifth of the product. That slice, the part you actually use, is
          exactly the size of thing an AI can now build you directly, tuned to
          your business, without a license.
        </P>
        <P>
          I&rsquo;m not the first to notice the pressure on software licensing. Wall
          Street has already given it a nickname this year, the
          &ldquo;SaaSpocalypse.&rdquo; But that story is about companies needing fewer
          seats because agents do the work. Mine is more uncomfortable: a
          business owner who has crossed the AI literacy line doesn&rsquo;t need the
          license at all, the same way I didn&rsquo;t need the course once I had the
          outline.
        </P>

        <H2>The honest limits</H2>
        <P>
          I want to be direct about where this doesn&rsquo;t apply, because a thesis
          that pretends it has no edges isn&rsquo;t a thesis, it&rsquo;s a slogan.
        </P>
        <P>
          Some third parties exist because the law requires them, not because a
          buyer chose them. Financial audits, certain certifications, parts of
          government contracting, need an independent outside party by
          regulation. The Kerzie effect doesn&rsquo;t touch that. It was never going
          to.
        </P>
        <P>
          Risk transfer is a real product, separate from labor. If a business
          builds its own tool and something goes wrong, nobody is holding an
          insurance policy or an indemnification clause on that outcome. Buying
          a vendor sometimes means buying somewhere for the risk to live.
          That&rsquo;s worth paying for, and AI doesn&rsquo;t replace it.
        </P>
        <P>
          Somebody still has to maintain what gets built. A business that
          generates its own bespoke replacement for a piece of software has
          taken on the job of keeping it working when their needs change in a
          year. That&rsquo;s not free. It&rsquo;s just a different kind of cost, paid in
          attention instead of a subscription.
        </P>
        <P>
          And knowledge being free doesn&rsquo;t create the hours in someone&rsquo;s day
          to act on it. A business owner still has to have the time and the
          internal priority to actually build and run the thing. AI removes the
          knowledge barrier. It does not touch the calendar.
        </P>

        <H2>What&rsquo;s actually left</H2>
        <P>
          Remove everything the Kerzie effect can&rsquo;t touch, work that requires a
          licensed third party by law, work that transfers real financial or
          legal risk off your books, work that requires physical presence, and
          judgment on a genuinely new situation that hasn&rsquo;t happened before,
          the kind no outline can anticipate because the answer doesn&rsquo;t exist
          yet. Take all of that off the table, and the list that&rsquo;s left is
          still long.
        </P>
        <P>
          That list is most of what gets sold as expertise: packaged synthesis,
          a generic training deck, a standard audit, a boilerplate strategy
          framework, a piece of software that&rsquo;s mostly workflow templates. All
          of it is running on the same clock now, whatever industry label it
          happens to wear.
        </P>
        <P>
          That gives you one test, and it works on any business, including
          mine: is what you&rsquo;re selling a synthesis of general knowledge and
          generally available information, or is it something that genuinely
          can&rsquo;t be substituted. If it&rsquo;s the first one, the Kerzie effect is
          coming for it, on a timeline set by how fast the buyer in front of
          you gets AI literate, not by how good your relationship with them has
          been. If it&rsquo;s the second one, you&rsquo;re fine, and you should say so
          plainly, because that&rsquo;s the part worth charging for.
        </P>

        <H2>Seller beware, buyer&rsquo;s advantage</H2>
        <P>
          I used to think the danger in this business was someone building a
          better version of what I do. The actual danger is simpler. It&rsquo;s a
          buyer who was never trying to compete with me at all, who just got
          tired of paying for something they realized they could build
          themselves the moment they understood the mechanism.
        </P>
        <P>
          The mood on the buying side is already waiting for this. In 2025, HFS
          Research asked a thousand senior executives across sixteen industries
          about their consulting relationships, and 65 percent said traditional
          consulting models no longer deliver value. Those buyers haven&rsquo;t all
          found the mechanism yet. They&rsquo;ve just stopped believing the old
          model is worth the invoice, and that is exactly the audience the
          Kerzie effect walks into.
        </P>
        <P>
          That&rsquo;s not a reason to stop writing proposals. You can&rsquo;t win a
          client without telling them what you&rsquo;re going to do for their money.
          But phase one only works on you because your free proposal is a
          complete, standalone product now, not a loss leader that costs you an
          afternoon and wins you a client. If the plan you hand over for free
          is detailed enough to execute, you&rsquo;ve already given away the thing
          you meant to get paid for, whether or not anyone signs.
        </P>
        <P>
          So here&rsquo;s the practical shift. Stop handing over a fully executable
          scope of work as your sales process. What you give away for free from
          now on should set the direction, not hand over the finished plan:
          here&rsquo;s the shape of your problem, here&rsquo;s roughly what it will take,
          here&rsquo;s what you get if you want the specific plan built around your
          business. The discovery itself, the actual expensive part, has to
          become something you charge for directly, even a small amount, before
          anyone gets a step by step build plan with their name on it.
        </P>
        <P>
          That doesn&rsquo;t stop phase two. Nothing stops phase two, for the buyer
          who&rsquo;s already educated enough to skip you entirely. What it protects
          is phase one: the buyer who would have called you, harvested your
          free thinking, and walked. Make them pay for the diagnosis before
          they ever see the plan, and you find out fast which kind of buyer
          you&rsquo;re actually talking to.
        </P>
        <P>
          I&rsquo;ve spent the last few weeks watching that line move in real time,
          in my own business and in the ones I talk to. I&rsquo;m going to keep
          writing about where it moves next.
        </P>

        <div className="k-hairline w-full mt-16" />

        <div className="mt-10">
          <p className="k-label mb-5">Follow where the line moves</p>
          <p className="text-[#AABBCC] leading-relaxed max-w-xl">
            I write up what I&rsquo;m actually seeing, twice a week, Tuesday and
            Thursday. What I built, what broke, what it cost. If I haven&rsquo;t
            done it myself, it doesn&rsquo;t go in.
          </p>
          <div className="mt-6">
            <SubscribeForm source="kerzie-effect-essay" />
          </div>
        </div>

        <p className="mt-12 k-mono text-[#AABBCC]/50 text-xs leading-relaxed">
          Sources: Dell&rsquo;Acqua et al., &ldquo;Navigating the Jagged Technological
          Frontier,&rdquo; HBS/BCG field experiment (Organization Science, 2026).
          Source Global Research, consulting service line data, 2024. HFS
          Research / IBM Market Impact Report, 2025. Focus Digital, 2026 agency
          churn report. Pricing benchmarks: published AR outsourcing, dental
          consulting, and restaurant consulting rate ranges, 2025-2026.
        </p>
      </article>
    </div>
  );
}
