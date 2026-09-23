import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "For Sales Teams | Kerzie AI",
  description:
    "Selling is the job again. Each seller runs their own AI operating system: prep, reports and CRM updates move into it, and the hours go back to customers.",
};

const adminJobs = [
  {
    lead: "Meeting prep.",
    body: "A one-page brief before every external meeting: who, why, last contact, the ask, what not to say.",
  },
  {
    lead: "The weekly report.",
    body: "Drafted from the week's calls and pipeline. The rep edits it instead of writing it.",
  },
  {
    lead: "CRM updates.",
    body: "Written from what the rep captured, not retyped from memory at 9 at night.",
  },
  {
    lead: "The QBR and the pipeline review.",
    body: "Built from the record the OS already keeps, deal by deal.",
  },
  {
    lead: "Follow-up.",
    body: "Drafted and waiting in the rep's inbox. Nothing leaves without the rep's yes.",
  },
];

const hoursBack = [
  {
    lead: "An industry watch.",
    body: "Every morning, what moved in the rep's market and accounts, with the items that need action.",
  },
  {
    lead: "Competitor alerts.",
    body: "Announcements mapped to the deals they touch, with a copy routed to marketing so the next battle card is right.",
  },
  {
    lead: "Time to think.",
    body: "Thirty minutes on one account instead of three. That used to be what separated the top rep from everybody else. It was never talent. It was bandwidth.",
  },
];

const steps = [
  {
    label: "Crawl",
    body: "Every seller installs their OS on the company laptop, inside your rules, and sits for the interview that teaches it their territory, accounts, deals and competitors. It answers like a teammate from the first day, not a search box.",
  },
  {
    label: "Walk",
    body: "Four weeks on live accounts building the one habit. Every call captured, every meeting briefed, the admin work coming out of the OS instead of the rep. Real deals, not exercises.",
  },
  {
    label: "Run",
    body: "The hours go to selling. The first sellers to break through set the standard, and the rest of the team gets fast-laned into it.",
  },
];

const scorecard = [
  "Were the week's customer calls captured?",
  "Did every external meeting get a brief?",
  "Did the weekly report come out of the OS?",
  "Did CRM updates come from what was captured?",
  "Did the rep act on something the watch or the alerts surfaced?",
];

export default function SalesTeamsPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#262B3D]/70 text-xs tracking-[0.15em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#B04E2B]">.</span>AI
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-16">
        <p className="k-rise k-rise-1 k-label mb-8">For Sales Teams</p>
        <h1 className="k-rise k-rise-2 text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
          Selling is the job{" "}
          <span className="k-serif font-normal">again</span>
          <span className="text-[#B04E2B]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#262B3D] text-lg lg:text-xl max-w-xl leading-relaxed">
          I spent 30 years leading enterprise sales teams. Now I put an AI
          operating system in each seller&apos;s hands, so the prep, the reports
          and the CRM updates run themselves and the hours go back to customers.
        </p>
        <div className="k-rise k-rise-4 mt-10">
          <Link href="/schedule" className="k-btn-solid k-focus inline-block">
            Book a call <span className="k-arrow">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* The gap */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">01 &middot; The Gap</p>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
            <p>
              Most companies roll AI out to the sales floor the same way: buy the
              licenses, send a video, move on. A few sellers figure it out on
              their own. Most watched the video and went back to what they knew.
            </p>
            <p className="text-[#1A1B2E] font-medium">
              Your reps have AI licenses. That is not the same as using it.
            </p>
            <p>
              A license upgrade is not an enablement plan. There is a difference
              between a tool you pick up and an{" "}
              <span className="k-serif font-normal">
                engine you run the business on
              </span>
              . That difference is where the pipeline is.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The admin moves into the OS */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">02 &middot; The Admin Work Moves Into the OS</p>
          <p className="text-[#1A1B2E] text-lg font-medium max-w-2xl mb-8 leading-relaxed">
            Each seller runs their own AI operating system on the company laptop,
            connected to the email, calendar, meeting notes and CRM your company
            already allows. It does the work nobody hired a salesperson to do.
          </p>
          <ul className="max-w-2xl space-y-5">
            {adminJobs.map((item) => (
              <li
                key={item.lead}
                className="border-l border-[#B04E2B] pl-5 text-[#262B3D] text-lg leading-relaxed"
              >
                <span className="text-[#1A1B2E] font-medium">{item.lead}</span>{" "}
                {item.body}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* The one habit */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">03 &middot; The One Habit</p>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
            <p>
              The OS only knows what the rep feeds it. A rep who installs the
              software and skips the habit gets an empty system and decides AI
              does not work.
            </p>
            <p className="text-[#1A1B2E] font-medium">
              So the behavior change is one question, asked all day: how do I
              get this into my OS?
            </p>
            <p>
              Virtual calls come in from the Teams, Zoom or Meet transcript. In
              the field, it is a 60-second voice memo in the car after the
              meeting, in the rep&apos;s own words. Customers are recorded only
              with their consent, under your policy.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The hours back */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">04 &middot; What the Hours Go To</p>
          <p className="text-[#1A1B2E] text-lg font-medium max-w-2xl mb-8 leading-relaxed">
            Not more calls. The work every great seller knows they should do and
            never had room for. It ships turned on, so the whole team gets it,
            not only the rep who would have found the time anyway.
          </p>
          <ul className="max-w-2xl space-y-5">
            {hoursBack.map((item) => (
              <li
                key={item.lead}
                className="border-l border-[#B04E2B] pl-5 text-[#262B3D] text-lg leading-relaxed"
              >
                <span className="text-[#1A1B2E] font-medium">{item.lead}</span>{" "}
                {item.body}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">05 &middot; How It Works: Crawl, Walk, Run</p>
          <p className="text-[#262B3D] text-lg max-w-2xl mb-8 leading-relaxed">
            Your whole team, leaders included. A manager who does not run it
            cannot coach it.
          </p>
          <div className="max-w-2xl space-y-8">
            {steps.map((step) => (
              <div key={step.label} className="lg:grid lg:grid-cols-12 lg:gap-6">
                <div className="lg:col-span-3 mb-2 lg:mb-0">
                  <p className="k-mono text-[#B04E2B] text-sm tracking-[0.15em] uppercase">
                    {step.label}
                  </p>
                </div>
                <p className="lg:col-span-9 text-[#262B3D] text-lg leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Scorecard */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">06 &middot; What You See Every Week</p>
          <p className="text-[#1A1B2E] text-lg font-medium max-w-2xl mb-8 leading-relaxed">
            One page per rep, built from what the OS actually did, not from what
            anyone says they did. Five questions, yes or no.
          </p>
          <ol className="max-w-2xl space-y-3 text-[#262B3D] text-lg leading-relaxed list-decimal pl-6 marker:text-[#B04E2B]">
            {scorecard.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Why me */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">07 &middot; Why Me</p>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
            <p>
              Thirty years carrying a number and leading the people who carry
              theirs. I am not a technologist who read about sales. I ran sales.
            </p>
            <p>
              And I run my own company this way. Every weekday at 6:45 AM my OS
              writes the brief for my external meetings. When a call ends, the
              transcript turns into filed action items and a follow-up waiting in
              my drafts.{" "}
              <span className="k-serif font-normal text-[#1A1B2E]">
                Your reps will feel understood before they feel taught.
              </span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA band */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <h2 className="text-[#1A1B2E] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-2xl mb-5">
            Every rep, not just the one who figured it out
            <span className="text-[#B04E2B]">.</span>
          </h2>
          <p className="text-[#262B3D] text-lg max-w-xl mb-4 leading-relaxed">
            The sales edition of the OS comes with the engagement: I install it
            with your team and train the habit until it holds. It is not sold as
            a download.
          </p>
          <p className="text-[#262B3D] text-lg max-w-xl mb-10 leading-relaxed">
            Simpler, not additional. If AI adds a step to a rep&apos;s day, it is
            dead on arrival, so it runs inside the way they already sell. Scored
            from day one. If it is working, you will see it. If it is not, you
            will know that too.
          </p>
          <Link href="/schedule" className="k-btn-solid k-focus inline-block">
            Book a call <span className="k-arrow">&rarr;</span>
          </Link>
          <p className="mt-8 text-[#262B3D]/80 text-base max-w-xl leading-relaxed">
            A seller on your own? The general OS is free:{" "}
            <Link href="/one-window" className="underline k-focus hover:text-[#1A1B2E]">
              get One-Window
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </div>
  );
}
