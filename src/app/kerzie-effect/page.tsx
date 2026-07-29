import Link from "next/link";
import type { Metadata } from "next";
import SubscribeForm from "@/components/SubscribeForm";
import {
  EssaySheet,
  EssayMasthead,
  Abstract,
  P,
  Section,
  Note,
  Thesis,
  Callout,
  Case,
  Sow,
  Ai,
  AiLine,
  Colophon,
} from "@/components/Essay";

export const metadata: Metadata = {
  title: "The Kerzie Effect | Kerzie AI",
  description:
    "The most valuable thing you sell is the document you hand over for free to win the work. Once a buyer has the seller's scope of work and their own context, an AI can synthesize, and now execute, what used to require paying for the seller's time.",
  openGraph: {
    title: "The Kerzie Effect",
    description:
      "The most valuable thing you sell is the document you hand over for free to win the work. A named, demonstrable mechanism for how AI actually hits Main Street knowledge work, and who it elevates.",
    type: "article",
    publishedTime: "2026-07-24",
    modifiedTime: "2026-07-27",
    authors: ["Wade Kerzie"],
    url: "https://kerzie.ai/kerzie-effect",
    images: [
      {
        url: "/og/kerzie-effect.jpg",
        width: 1200,
        height: 630,
        alt: "A woman at a kitchen table reading a printed proposal beside an open laptop.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kerzie Effect",
    description:
      "The most valuable thing you sell is the document you hand over for free to win the work.",
    images: ["/og/kerzie-effect.jpg"],
  },
};

// Everything that is website rather than document: it sits below the sheet on
// the navy, and it does not print.
const afterMatter = (
  <>
    <p className="text-[#AABBCC]/80 leading-relaxed max-w-xl">
      If you finished this on the wrong side of the line, I wrote a separate
      page on{" "}
      <Link href="/the-line" className="k-link k-focus text-[#6B9FD4]">
        what to do about it
      </Link>
      .
    </p>

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
  </>
);

export default function KerzieEffectPage() {
  return (
    <EssaySheet after={afterMatter}>
      <EssayMasthead
        kicker="Essay"
        author="Wade Kerzie"
        date="July 24, 2026"
        revised="July 27, 2026"
        title={
          <>
            The Kerzie Effect<span className="dot">.</span>
          </>
        }
        deck={
          <>
            The most valuable thing you sell is the document you hand over for
            free to win the work.
          </>
        }
      />

      <Abstract>
        Once a buyer has the seller&rsquo;s scope of work and the buyer&rsquo;s
        own context, an AI can synthesize, and now execute, what used to
        require paying for the seller&rsquo;s time. Named here, walked through
        its two phases, demonstrated across three industries at real prices,
        and bounded by the places it does not reach. The mechanism cuts both
        ways. It strands anyone whose product is synthesis, and it elevates
        whoever inside a company picks it up first.
      </Abstract>

        <P open>Here&rsquo;s what nobody in professional services is saying out loud yet.</P>
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

        <Section>Where I saw it</Section>
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
        <Note>Receipt. I ran the buyer side of this on myself: I needed two of the six sessions, and never paid for the course.</Note>
        <P>
          I&rsquo;m not describing a hypothetical. I&rsquo;ve done the buyer side of this
          myself. I&rsquo;ve sat through free webinars where someone selling a paid
          course laid out the six sessions they&rsquo;d walk me through. I took that
          same outline, the one they were using to sell me, and asked Claude to
          build me the self-run version. I only needed two of the six sessions.
          I never paid for the course.
        </P>
        <P>That&rsquo;s the whole mechanism, and it needs a name.</P>

        <Thesis>
          The Kerzie effect: once a buyer has the seller&rsquo;s scope of work and
          the buyer&rsquo;s own context, an AI can synthesize, and now execute,
          what used to require paying for the seller&rsquo;s time.
        </Thesis>

        <Section>Why now</Section>
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
        <P>
          Worth noting who that puts in play. It isn&rsquo;t only owners. Anyone
          inside a company who understands their own operation well enough to
          describe it can now cross the same line, without a technical
          background and without asking anyone&rsquo;s permission. Hold onto that,
          because it changes who this essay is actually about, and I come back to
          it at the end.
        </P>

        <Section>The two phases</Section>
        <P>
          Before the flow, one thing worth naming, because it explains why this
          lands as hard as it does. Think about every proposal that got read and
          never signed. Not the ones where the buyer thought the seller was
          wrong, and not the ones where they were too busy. The ordinary ones,
          that sat.
        </P>
        <Note>
          The price was never what stopped them. The unanswered question was.
        </Note>
        <P>
          They didn&rsquo;t sign because of the question mark still hanging there
          when they got to the last page: is this going to return more than it
          costs me? Nobody could answer that. Not even the person who wrote it,
          and it was that person&rsquo;s job to make it sound like the answer was
          yes. Run it the other way and you can see it plainly. If that same
          proposal came with a guarantee attached, sign here and this returns
          double what it costs, it would have been signed before the meeting
          ended. The price was never the obstacle. Not knowing was. And what a
          buyer can do now, for free, in about a minute, is answer that question
          for themselves before they spend anything.
        </P>
        <P>
          It helps to walk through the rest as a flow, because it doesn&rsquo;t
          stop where most people would assume it stops.
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
        <Note>Phase one does not announce itself. It arrives as a trimmed retainer, not a canceled contract.</Note>
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
        <Note>Phase two is the harder claim: the buyer stops needing anyone to tell them what the work is.</Note>
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

        <Section>This isn&rsquo;t new. It&rsquo;s just fast now</Section>
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

        <Section>What this actually looks like</Section>
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
          global consulting market. The other 80 percent is this.
        </P>

        <Case
          label="Case I &middot; HVAC and plumbing"
          title="The accounts receivable and invoicing fix"
        />
        <P>
          Trades businesses routinely carry tens of thousands of dollars in
          aging receivables because invoicing is manual, payment terms are
          inconsistent, and nobody follows up in a structured way. Outsourced
          AR management for a small business runs roughly twelve to thirty
          thousand dollars a year. A bounded, one-time process fix, not an
          ongoing service, prices below that: call it{" "}
          <strong>$9,500, one time, over a 90 day engagement</strong>.
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
        <Note>The claim, first of three. Not a recommendation. An offer to go execute, inside the buyer&rsquo;s own systems.</Note>
        <P>
          A printed proposal could never do that last part.{" "}
          <strong>
            This is the magic moment. This is the Kerzie effect.
          </strong>{" "}
          Not the scripts. Not even the plan. The moment an AI stops
          recommending what a professional services firm would have recommended
          and asks permission to go do it, inside the business&rsquo;s own systems,
          right now.
        </P>

        <Case
          label="Case II &middot; Dental"
          title="The front office and hygiene upskilling playbook"
        />
        <P>
          Comprehensive dental practice consulting is typically custom quoted,
          with entry level retainers starting around $395 a month for basic
          support and full engagements running well beyond that once real
          training is involved. A bounded, one-time upskilling project, not an
          open-ended coaching retainer: call it{" "}
          <strong>$6,800, one time, over 4 weeks, including one on-site training day</strong>.
          The private version looks like this:
        </P>
        <Sow
          items={[
            "Week 1: shadow the front desk and hygiene team for two days. Find where recall calls and treatment case presentations actually break down.",
            "Week 2: build a recall script with objection handling, a chair hour production target against the practice’s own fee schedule, and a hand-off script between the dentist and the treatment coordinator.",
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
        <Note>Second industry. Same moment, in a practice management system instead of an invoicing platform.</Note>
        <P>
          A printed proposal could never do that last part either.{" "}
          <strong>This is the magic moment again.</strong>{" "}
          Same shift, different industry: not a recommendation about what the
          practice should do, but a live offer to go do it, inside the system
          the practice already runs on, today or on a schedule the owner picks.
        </P>

        <Case
          label="Case III &middot; Restaurants"
          title="The prime cost and scheduling fix"
        />
        <P>
          Restaurant consulting typically runs $150 to $350 an hour, and
          operators commonly recover the fee within months through cost savings
          alone. A focused, 4 week prime cost engagement: call it{" "}
          <strong>$11,000 flat</strong>, roughly the
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
        <Note>Third industry. The mechanism is not industry-specific, which is the whole point of running it three times.</Note>
        <P>
          Same as the other two, a printed proposal stops right before that
          last line.{" "}
          <strong>Third industry, same magic moment.</strong>{" "}
          Trades, healthcare, hospitality, it doesn&rsquo;t matter. Once someone has
          crossed the competency line and is working from one window, this is
          what happens next every time: not a recommendation, an offer to
          execute.
        </P>

        <P>
          None of those took a week to produce, and none of them needed anyone
          with a badge, a car, or a billable hour. They needed the outline, a
          few sentences of real context, one word of approval, and about a
          minute. And notice what the context actually was in each case: the
          receivables number, the hygiene production rate, the prime cost
          percentage. That&rsquo;s not consultant knowledge. That&rsquo;s knowledge
          somebody inside the business already has in their head.
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
        <Note>
          Most people put the line far to the right of where it actually sits.
          It is closer to you than you think, and it keeps moving your way.
        </Note>
        <P>
          I&rsquo;ve been saying &ldquo;the line&rdquo; for several thousand words
          now without telling you where it is, so let me fix that, because I
          think almost everyone puts it in the wrong place. Picture AI
          competency as a continuum. On the far left is the person who says
          &ldquo;I&rsquo;m using AI,&rdquo; and what they mean is they type a
          question into a chatbot and read the answer. On the far right is a
          fully AI-operated company, autonomous systems running the business end
          to end. The line you have to cross to do everything I just
          demonstrated sits much further left than most people assume. It is
          past the chatbot, and it is nowhere near the far end. And it keeps
          moving toward you, because the tools keep getting simpler.
        </P>
        <P>
          That matters for how you read the rest of this. If you had the line
          pictured way out at the right edge, you probably concluded this
          doesn&rsquo;t apply to you for a few more years. It does. You are
          closer to it than you think, and so is the buyer sitting across from
          you.
        </P>
        <Callout>
          Nobody has to become technical. The line sits well short of that, and
          it is drifting closer every time an interface gets simpler.
        </Callout>
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
        <Note>
          The seller&rsquo;s recommendation is shaped by what the seller happens
          to sell. The AI has no service line to protect.
        </Note>
        <P>
          There&rsquo;s a fair objection to all of this that I should answer
          before going further: why would a buyer trust what the AI hands back?
          They can&rsquo;t verify it either. That&rsquo;s true, and here&rsquo;s
          why it still comes out ahead. Every recommendation a seller makes is
          shaped by what that seller happens to offer. Not dishonestly, usually
          not even consciously, but a firm that sells training programs finds
          training problems, and a firm that sells software finds software
          problems. I have done this myself, for thirty years, and I&rsquo;d be
          lying if I said otherwise. The AI has no service line to protect. It
          has no quota, no utilization target, and nothing to upsell you in the
          spring. That doesn&rsquo;t make it right. It makes it disinterested,
          which is a different and rarer thing, and it means the options it lays
          out are the options, not the options that happen to be for sale.
        </P>
        <Callout>
          So don&rsquo;t pay for a playbook. And don&rsquo;t pay for somebody
          else&rsquo;s judgment either. Get the playbook, which they will hand
          you for free, run it against your own numbers, and then apply the one
          thing that was always yours: your judgment about your own business.
        </Callout>

        <Section>It doesn&rsquo;t stay inside professional services</Section>
        <P>
          Once you see the mechanism, you stop seeing it as a consulting
          problem.
        </P>
        <Note>It does not stop at consulting. Most software is a license on somebody else&rsquo;s workflow, and you use 20 percent of it.</Note>
        <P>
          Most software is a license to use somebody else&rsquo;s codified workflow,
          and most people use a small slice of what they pay for. Everybody who
          has ever opened Excel or QuickBooks knows they&rsquo;re using maybe
          20 percent of the product. That slice, the part you actually use, is
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

        <Section>The physical layer is a floor, not a moat</Section>
        <P>
          Everyone who reads this far finds the same escape hatch, and I want to
          close it, because I think it&rsquo;s the most misread part of this whole
          thing.
        </P>
        <P>
          The hatch goes: fine, but somebody still has to show up. Somebody
          still has to own the warehouse, drive the truck, climb the ladder, and
          put their hands on the equipment. No model in a browser tab is doing
          that. All true. And it protects far less than the people relying on it
          think.
        </P>
        <P>
          Picture a large services organization that handles inventory,
          delivery, and installation for a national carrier. Real warehouses.
          Real trucks. Certified technicians in real buildings. Nothing about
          the Kerzie effect touches any of that directly, and I don&rsquo;t expect it
          to any time soon.
        </P>
        <P>
          But look at what the invoice is actually for. Physical work almost
          never gets sold by itself. It arrives wrapped in the knowledge work
          around it: the design, the configuration, the staging plan, the
          sequencing, the project management, the integration, the
          documentation, the engineers who decide what goes where and in what
          order and why. All of it priced together as one number, and most of
          the margin living in the wrapper, not the truck.
        </P>
        <P>
          That last part isn&rsquo;t a hunch. The public companies in this business
          report it every quarter. Insight Enterprises did about $8.7 billion in
          net sales in 2024, and product was 81 percent of it against 19 percent
          for services. That 19 percent produced 57 percent of the company&rsquo;s
          gross profit. The small number is where the money is. ePlus shows the
          same shape more plainly, because they break the two out: product gross
          margin around 23 percent, professional services at 39.5 percent.
        </P>
        <P>
          And there&rsquo;s a sharper test sitting inside ePlus&rsquo;s own numbers. In
          August 2024 they bought a company that does precisely the physical
          layer I&rsquo;ve been describing, logistics, configuration, cabling, and
          installation across large store and branch footprints. Their
          professional services revenue jumped 48 percent, which they attribute
          mainly to that acquisition. In the same year, their professional
          services gross margin fell from 44.1 percent to 39.5 percent. I&rsquo;m not
          going to claim one number caused the other, because they didn&rsquo;t say
          that. I&rsquo;ll just point out that the year a services business absorbed a
          large hands-on deployment operation is the year its services margin
          dropped by more than four points, and ask you to sit with why that
          would be.
        </P>
        <Note>The physical layer is not eliminated. It is stranded: the margin separates from the labor.</Note>
        <P>
          So the Kerzie effect doesn&rsquo;t come for the physical work. It comes for
          the wrapper. When the buyer&rsquo;s own AI can do the design and the
          sequencing and the configuration, using the buyer&rsquo;s own network data,
          which the vendor never had in the first place, the buyer doesn&rsquo;t fire
          the vendor. Firing the vendor was never the move. The buyer unbundles.
          The call sounds like this: just house it, deliver it, and install it.
          We&rsquo;ll take it from there.
        </P>
        <Callout>
          Say it plainly, because this is the part that gets missed: the Kerzie
          effect doesn&rsquo;t eliminate physical work. It strands it. It separates
          the high-margin knowledge layer from the low-margin physical layer,
          and the buyer keeps only the layer they can&rsquo;t do themselves.
        </Callout>
        <P>
          What&rsquo;s left is still a real business. It&rsquo;s just a different business
          at a different margin, and here&rsquo;s the part that should worry anyone in
          it: it&rsquo;s a business with a completely different competitive set. The
          day your scope of work is house it, deliver it, install it, you are
          being priced against every other outfit that owns a warehouse and a
          truck. The thing that made you hard to replace, knowing what should go
          where and in what order, isn&rsquo;t yours anymore. It&rsquo;s the buyer&rsquo;s, and
          they didn&rsquo;t buy it from anyone. Your relationship, your history, your
          bench of engineers, none of it shows up on an invoice that only has
          logistics on it.
        </P>
        <P>
          That&rsquo;s worse than a rate cut, and it&rsquo;s worse in a specific way. The
          knowledge layer was what made the relationship sticky in the first
          place. It&rsquo;s the reason the buyer called you instead of running a bid.
          Strip it out and you haven&rsquo;t just lost the margin on that layer,
          you&rsquo;ve lost the reason anyone had to not run a bid.
        </P>
        <P>
          The defense is already in this essay, in the limits section below.
          Physical presence by itself isn&rsquo;t a moat, but two things sitting next
          to it are. Risk transfer is real: if the installation carries a
          service level agreement with actual penalties attached, that&rsquo;s a
          product no buyer generates for themselves, because what they&rsquo;re buying
          is somewhere for the failure to live. And a genuine physical network
          is real: certified crews, parts on a shelf within four hours in forty
          markets, coverage nobody can stand up quickly. Neither of those is
          synthesis. Neither can be handed over in a proposal.
        </P>
        <P>
          So the same test I&rsquo;d apply anywhere else applies here, it just has to
          be asked more precisely. Not &ldquo;can an AI do what we do.&rdquo; Ask: if my
          client&rsquo;s own AI wrote the design and handed it to us finished, what is
          still on our invoice, and what is it worth? If the honest answer is
          most of it, you&rsquo;re in good shape and you should price that part out
          loud, separately, where the buyer can see it. If the honest answer is
          the truck, then the truck is your number, and you want to know that
          now rather than at renewal.
        </P>

        <Section>The honest limits</Section>
        <Note>Where it stops. A thesis that pretends it has no edges is not a thesis, it is a slogan.</Note>
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
        <P>
          And a seller running a real learning loop still owns something. The
          sharpest version of this objection came from over at OpenExO: the moat
          is the rate of improvement, not the state of the data on any given
          day. That is a fair hit and I will concede the mechanism. A scope of
          work is a snapshot. What a firm actually owns is not the document, it
          is the rate at which the document gets better, and a buyer holding one
          proposal cannot capture that.
        </P>
        <P>
          Here is why I think the argument still holds. Both things are true at
          once. The static playbook is finished, which is the effect I named.
          And a firm that genuinely improves its playbook every quarter has
          something to sell that no buyer can harvest in an afternoon. The
          problem is that most professional services firms do not run that loop.
          Ask yours what their methodology learned in the last ninety days,
          which engagement taught it, and what changed in the deliverable as a
          result. A real answer is specific and a little embarrassing, because
          learning usually starts with something that did not work. A version
          number on a template is not an answer.
        </P>
        <Note>
          The improvement rate is a real moat. It is just not a moat most of
          them have built.
        </Note>

        <Section>What&rsquo;s actually left</Section>
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
          One caution on that third one, since I just spent a section on it.
          Physical presence survives as work. It does not automatically survive
          as margin, because the money in physical services usually sits in the
          knowledge wrapped around the work rather than in the work itself. Put
          physical presence on the safe list if you want, but put it there for
          the labor, not for the invoice.
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

        <Section>The other side of the ledger</Section>
        <P>
          Everything up to here is written from the seller&rsquo;s chair, because
          that&rsquo;s the chair I sit in. But there&rsquo;s a person in every one of
          these examples that I&rsquo;ve been calling &ldquo;the buyer,&rdquo; and I
          want to stop being vague about who that actually is.
        </P>
        <Note>
          Companies don&rsquo;t cross competency lines. A specific person inside
          one does, and that person is already on payroll.
        </Note>
        <P>
          It isn&rsquo;t a company. Companies don&rsquo;t cross competency lines. In
          each of those three cases, somebody specific sat down with the scope of
          work and their own numbers and did the thing. In the plumbing company
          it&rsquo;s the office manager who already knew where the receivables were
          buried. In the dental practice it&rsquo;s the treatment coordinator.
          Nobody hired anyone. Nobody ran a search. Someone already on payroll
          picked up a tool that finally got simple enough to use, and work that
          used to cost $9,500 to buy got done from one window.
        </P>
        <P>
          Let me be clear that this next part is my expectation and not something
          I can source. I don&rsquo;t think the number of jobs three years from now
          is the interesting question. The count could hold roughly flat and this
          would still be one of the larger changes to work I&rsquo;ve seen, because
          what shifts isn&rsquo;t how many jobs there are. It&rsquo;s what the job is.
          The titles mostly stay. The skill underneath them turns over.
        </P>
        <Callout>
          The Kerzie effect doesn&rsquo;t only strand the people who sell
          expertise. It relocates that expertise, and it relocates it to whoever
          picks it up first.
        </Callout>
        <P>
          It also isn&rsquo;t predictable by job title, which took me a while to
          accept. In a two person business I know well, the person who crossed
          the line was the owner, because in a shop that small there isn&rsquo;t
          anybody else. In a company with a real payroll and a full org chart,
          it was the controller, who saw it before anyone above him did. Neither
          one is technical.
        </P>
        <Note>
          The qualification isn&rsquo;t a title or a skill. It&rsquo;s a sentence:
          I know we should be using AI here, and I don&rsquo;t know how.
        </Note>
        <P>
          What they had in common was a sentence I hear constantly now: I know
          we should be using AI in this business, and I don&rsquo;t know how. That
          sentence is the whole qualification. It is somebody who has correctly
          worked out that their own knowledge is the only thing standing in the
          way, and who believes, in their gut, that if that one thing changed the
          business would get better. That belief is doing more work than any
          credential. If you have ever said that sentence to yourself, you are
          already most of the way to the line I described earlier, which is a lot
          closer than you were picturing it.
        </P>
        <P>
          And almost nobody will. I want to say that plainly, because it&rsquo;s the
          whole reason there&rsquo;s an opening here at all. Every time an interface
          gets simple, the capability becomes available to everyone and gets used
          by a small fraction, and that fraction is disproportionately valuable
          for a while. I don&rsquo;t expect a whole company to cross this line. I
          expect one or two people per department to cross it, and I expect them
          to end up running things they weren&rsquo;t running before, because
          they&rsquo;re the only ones who can.
        </P>
        <Note>
          The seat changes: from performing one slice of the work to
          orchestrating all of it. That seat is harder to cut.
        </Note>
        <P>
          If you&rsquo;re the person in your company who can take a scope of work,
          your own systems, and your own numbers, and produce the thing that used
          to get purchased, you haven&rsquo;t automated yourself out of a job.
          You&rsquo;ve moved from performing one slice of the work to orchestrating
          the whole of it, which is a different seat and a much harder one to cut.
          The competency line isn&rsquo;t only the thing that decides which vendors
          survive. Inside a company, it decides which people become load-bearing.
        </P>
        <P>
          It&rsquo;s the same mechanism, read from the other chair. It strands you
          if what you sell is synthesis. It elevates you if you&rsquo;re the one who
          learns to run it. Most of the worry I hear about this comes from people
          who know they&rsquo;re in one of those two positions and haven&rsquo;t worked
          out which.
        </P>

        <Section>Seller beware, buyer&rsquo;s advantage</Section>
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
        <P>
          One closing thought, and it&rsquo;s the one I&rsquo;d want if I were reading
          this instead of writing it. Whether this lands on you as a threat or as
          an opening comes down to a single question, and it isn&rsquo;t about your
          industry or your title. It&rsquo;s whether you&rsquo;re on the side of the
          competency line that gets synthesized, or the side that does the
          synthesizing. That line is not hard to cross anymore. That&rsquo;s the
          entire point of this essay, and it&rsquo;s the part that cuts both ways.
        </P>

        <Colophon>
          Dell&rsquo;Acqua et al., &ldquo;Navigating the Jagged Technological
          Frontier,&rdquo; HBS/BCG field experiment (Organization Science, 2026).
          Source Global Research, consulting service line data, 2024. HFS
          Research / IBM Market Impact Report, 2025. Focus Digital, 2026 agency
          churn report. Insight Enterprises and ePlus, FY2024 annual reports.
          Pricing benchmarks: published AR outsourcing, dental consulting, and
          restaurant consulting rate ranges, 2025-2026.
        </Colophon>

    </EssaySheet>
  );
}
