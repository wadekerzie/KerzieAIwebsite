import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SalesTeamsViews, { ExampleShot } from "./SalesTeamsViews";
import TeamViewBuilder from "./TeamViewBuilder";
import VideoEmbed from "./VideoEmbed";

// Rebuilt 2026-09-24 on Wade's eight approved changes: the mandate leads,
// two views (leader / seller) on one page, a live "build your team view"
// section, the leader's view of Crawl / Walk / Run, a real redacted brief
// as the receipt, the licensed-AI strip, the two illustrations, and a video
// slot that stays empty until a URL is set.

// VIDEO SLOT. To show the "Watch it run" section, set this to an EMBED URL
// (not a watch page), for example:
//   YouTube: "https://www.youtube.com/embed/VIDEO_ID"
//   Loom:    "https://www.loom.com/embed/VIDEO_ID"
// Leave it "" and the section does not render at all.
const VIDEO_URL = "";

export const metadata: Metadata = {
  title: "For Sales Teams | Kerzie AI",
  description:
    "Your team was told to use AI. Here's what it looks like when it works: every seller runs their own AI operating system, and the leader gets the view.",
  openGraph: {
    title: "For Sales Teams | Kerzie AI",
    description:
      "Every seller runs their own AI operating system, and the leader gets the view. An engagement, not a login.",
    url: "https://kerzie.ai/services/sales-teams",
    images: [{ url: "/og/sales-teams.jpg", width: 1200, height: 630, alt: "A salesperson with his laptop closed, listening across the table to a customer in a modern office." }],
  },
  twitter: { card: "summary_large_image", images: ["/og/sales-teams.jpg"] },
};

const leaderThoughts = [
  {
    thought: "I can't teach it. I don't know it myself.",
    answer:
      "You don't need to know AI. You need to know selling. Every seller sits for an interview about their territory, accounts, deals and competitors. Your sales motion is the input. The AI part is ours.",
  },
  {
    thought: "I'm not pulling my team out of the field for a training day.",
    answer:
      "Nobody leaves the field. A 60-second voice memo in the car after a meeting, and the CRM update, the follow-up and the deal notes are drafted before they're back at a desk. Nothing goes out without the rep's yes.",
  },
  {
    thought: "I've been told to use AI. I can't define it, so I can't measure it.",
    answer:
      "Here's the definition: five questions, yes or no, per rep, every week, built from what the OS actually did. That's the number you report up.",
  },
  {
    thought: "There's probably something in this for me.",
    answer:
      "Your forecast gets honest. Deal reviews without the interrogation. Every pipeline change carries its reason. Coaching from real conversations. The QBR and the pipeline review drafted from the record. New hires ramp on the playbook your best people run.",
  },
];

const sellerWorries = [
  {
    worry: "Another tool to learn.",
    answer:
      "It learns you. One interview about your territory, your accounts and how you sell, then you talk and it drafts.",
  },
  {
    worry: "My manager's going to watch everything.",
    answer:
      "Your manager sees what the CRM would show if you'd had time to fill it in: deal outcomes, next steps and five yes or no questions. No keystroke logging. Fewer \"where are we on this deal?\" messages.",
  },
  {
    worry: "It'll write to my customers like a robot.",
    answer:
      "Drafts come from your own words, the ones you said in the car. You keep the send button.",
  },
  {
    worry: "I don't have time for this.",
    answer:
      "60 seconds after a meeting. In return it takes the 9 PM admin hour off your plate.",
  },
];

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
    leaderSees:
      "Every seller's OS installed and interviewed. The first briefs and captures appear.",
  },
  {
    label: "Walk",
    body: "Four weeks on live accounts building the one habit. Every call captured, every meeting briefed, the admin work coming out of the OS instead of the rep. Real deals, not exercises.",
    leaderSees: "The weekly five-question page per rep. You coach the no's.",
  },
  {
    label: "Run",
    body: "The hours go to selling. The first sellers to break through set the standard, and the rest of the team gets fast-laned into it.",
    leaderSees: "The Monday team view and the honest forecast.",
  },
];

const scorecard = [
  "Were the week's customer calls captured?",
  "Did every external meeting get a brief?",
  "Did the weekly report come out of the OS?",
  "Did CRM updates come from what was captured?",
  "Did the rep act on something the watch or the alerts surfaced?",
];

// The redacted pre-call brief. Real output, names blurred. Each entry is a
// label plus a run of text and redacted chips, so nothing about a real
// person or organization renders.
type BriefPart = string | { redacted: string };
const brief: { label: string; parts: BriefPart[] }[] = [
  {
    label: "WHO",
    parts: [
      { redacted: "Host name" },
      ", ",
      { redacted: "title" },
      ", ",
      { redacted: "organization" },
      ". He hosts the call. You are a member since ",
      { redacted: "date" },
      ". You own this relationship.",
    ],
  },
  { label: "WHY THIS MEETING", parts: ["Bi-weekly member networking. Listen and connect."] },
  { label: "LAST CONTACT", parts: ["Yesterday, 4:11 PM. Their reminder names today's topic."] },
  {
    label: "OPEN BETWEEN US",
    parts: [
      "1. You promised a short video this week. 2. Send the link before the call. 3. A second contact wrote last week about a follow-up. No reply on record.",
    ],
  },
  { label: "THE ASK TODAY", parts: ["Meet two members by name."] },
  { label: "DO NOT", parts: ["pitch. Mention pricing. Re-offer help they already declined."] },
];

function Redacted({ children }: { children: string }) {
  return (
    <span className="inline-block align-baseline bg-[#1A1B2E]/10 px-1.5 rounded-sm">
      <span aria-hidden="true" className="select-none blur-[4px] text-[#1A1B2E]/70">
        {children}
      </span>
      <span className="sr-only">redacted</span>
    </span>
  );
}

const sectionClass =
  "max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]";

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

      {/* Hero: the mandate leads */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-16">
        <p className="k-rise k-rise-1 k-label mb-8">For Sales Teams</p>
        <h1 className="k-rise k-rise-2 text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)] max-w-4xl">
          Your team was told to use AI.{" "}
          <span className="k-serif font-normal">Here&apos;s what it looks like when it works</span>
          <span className="text-[#B04E2B]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#262B3D] text-lg lg:text-xl max-w-xl leading-relaxed">
          An engagement, not a login. Every seller runs their own AI operating
          system, and the leader gets the view.
        </p>
        <div className="k-rise k-rise-4 mt-10">
          <Link href="/schedule" className="k-btn-solid k-focus inline-block">
            Book a call <span className="k-arrow">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* 01 The gap */}
      <section className={sectionClass}>
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

      {/* 02 Two views */}
      <section className={sectionClass} id="views">
        <Reveal>
          <p className="k-label mb-6">02 &middot; Two Views, One Engagement</p>
          <p className="text-[#262B3D] text-lg max-w-2xl mb-8 leading-relaxed">
            The leader and the seller look at different pages. Both are built
            overnight from the same captures, and nothing on either was typed
            in by a rep.
          </p>
        </Reveal>
        <SalesTeamsViews
            leader={
              <div>
                <p className="text-[#1A1B2E] text-lg font-medium max-w-2xl mb-6 leading-relaxed">
                  Monday morning, before the forecast call. This is the page
                  you open.
                </p>
                <ExampleShot
                  src="/sales-teams/team-view-example.png"
                  width={2560}
                  height={2600}
                  priority
                  alt="Example team view for a sales leader on Monday morning before the forecast call: customer meetings captured, meeting outcomes with the customer's own words, pipeline revisions with the reason for each change, the commit forecast, each rep's next action, next meetings with briefs ready, and the five yes or no questions per rep. Labeled example data."
                  caption="Example data. Built overnight from what each rep's OS captured."
                />
                <ul className="mt-12 grid gap-8 lg:grid-cols-2">
                  {leaderThoughts.map((t) => (
                    <li key={t.thought} className="border-l border-[#B04E2B] pl-5">
                      <p className="k-serif text-[#1A1B2E] text-xl leading-snug mb-3">
                        &ldquo;{t.thought}&rdquo;
                      </p>
                      <p className="text-[#262B3D] text-base lg:text-lg leading-relaxed">
                        {t.answer}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            }
            seller={
              <div>
                <h3 className="text-[#1A1B2E] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] leading-[1.1] mb-3">
                  Selling is the job again.
                </h3>
                <p className="text-[#262B3D] text-lg max-w-2xl mb-8 leading-relaxed">
                  Tuesday, 7:05 AM. Your meetings are briefed, your follow-ups
                  are drafted, and last night&apos;s admin is done. You said it
                  in the car. It did the rest.
                </p>
                <ExampleShot
                  src="/sales-teams/rep-morning-example.png"
                  width={2560}
                  height={1620}
                  alt="Example rep morning view, Tuesday at 7:05 AM: today's meetings with briefs ready, follow-ups drafted and waiting for the rep's yes, CRM updates done overnight, account and competitor alerts, and the week's five yes or no answers. Labeled example data."
                  caption="Example data. Built overnight from yesterday's captures."
                />

                <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center">
                  <figure className="lg:col-span-5 mb-6 lg:mb-0">
                    <Image
                      src="/sales-teams/rep-voice-memo-car.jpg"
                      width={1800}
                      height={1012}
                      sizes="(min-width: 1024px) 440px, calc(100vw - 48px)"
                      alt="A saleswoman in her fifties sits in her parked car right after a meeting, speaking a voice memo into her phone. Illustration."
                      className="k-photo h-auto"
                    />
                    <figcaption className="k-mono mt-3 text-[11px] tracking-[0.12em] uppercase text-[#262B3D]/60">
                      The 60-second habit. Illustration.
                    </figcaption>
                  </figure>
                  <div className="lg:col-span-7 text-[#262B3D] text-lg leading-relaxed space-y-4">
                    <p className="text-[#1A1B2E] font-medium">
                      The whole habit is 60 seconds in the car.
                    </p>
                    <p>
                      Meeting ends. You talk into your phone in your own words:
                      what they said, what you promised, what changed. By the
                      time you are back at a desk, the CRM update, the follow-up
                      and the deal notes are drafted and waiting for your yes.
                    </p>
                  </div>
                </div>

                <ul className="mt-12 grid gap-8 lg:grid-cols-2">
                  {sellerWorries.map((w) => (
                    <li key={w.worry} className="border-l border-[#B04E2B] pl-5">
                      <p className="k-serif text-[#1A1B2E] text-xl leading-snug mb-3">
                        &ldquo;{w.worry}&rdquo;
                      </p>
                      <p className="text-[#262B3D] text-base lg:text-lg leading-relaxed">
                        {w.answer}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-14">
                  <p className="k-mono text-[#B04E2B] text-sm tracking-[0.15em] uppercase mb-4">
                    What moves into the OS
                  </p>
                  <p className="text-[#1A1B2E] text-lg font-medium max-w-2xl mb-8 leading-relaxed">
                    Your own AI operating system on the company laptop, connected
                    to the email, calendar, meeting notes and CRM your company
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
                </div>
              </div>
            }
        />
      </section>

      {/* 03 Build your team view */}
      <section className={sectionClass} id="build">
        <Reveal>
          <p className="k-label mb-6">03 &middot; Build Your Team View</p>
          <p className="text-[#1A1B2E] text-lg font-medium max-w-2xl mb-3 leading-relaxed">
            Type your pipeline stages and a few account names. The Monday view
            rebuilds with your words in it.
          </p>
          <p className="text-[#262B3D] text-lg max-w-2xl mb-10 leading-relaxed">
            The reps, quotes and reasons are examples. The structure is what
            you would open every Monday.
          </p>
        </Reveal>
        <TeamViewBuilder />
      </section>

      {/* 04 The one habit */}
      <section className={sectionClass}>
        <Reveal>
          <p className="k-label mb-6">04 &middot; The One Habit</p>
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

      {/* 05 The hours back */}
      <section className={sectionClass}>
        <Reveal>
          <p className="k-label mb-6">05 &middot; What the Hours Go To</p>
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

      {/* 06 How it works: crawl, walk, run, with what the leader sees */}
      <section className={sectionClass}>
        <Reveal>
          <p className="k-label mb-6">06 &middot; How It Works: Crawl, Walk, Run</p>
          <p className="text-[#262B3D] text-lg max-w-2xl mb-10 leading-relaxed">
            Your whole team, leaders included. A manager who does not run it
            cannot coach it.
          </p>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7 space-y-10">
              {steps.map((step) => (
                <div key={step.label}>
                  <p className="k-mono text-[#B04E2B] text-sm tracking-[0.15em] uppercase mb-3">
                    {step.label}
                  </p>
                  <p className="text-[#262B3D] text-lg leading-relaxed">{step.body}</p>
                  <p className="mt-3 text-[#1A1B2E] text-lg leading-relaxed">
                    <span className="k-mono text-[#2B5D96] text-xs tracking-[0.15em] uppercase mr-2">
                      What you see
                    </span>
                    {step.leaderSees}
                  </p>
                </div>
              ))}
            </div>
            <figure className="lg:col-span-5 mt-10 lg:mt-0">
              <Image
                src="/sales-teams/leader-monday-forecast.jpg"
                width={1800}
                height={1012}
                sizes="(min-width: 1024px) 440px, calc(100vw - 48px)"
                alt="A sales leader works through printed pages with his team at a meeting table. Illustration."
                className="k-photo h-auto"
              />
              <figcaption className="k-mono mt-3 text-[11px] tracking-[0.12em] uppercase text-[#262B3D]/60">
                Monday, with the forecast in hand. Illustration.
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </section>

      {/* 07 Scorecard */}
      <section className={sectionClass}>
        <Reveal>
          <p className="k-label mb-6">07 &middot; What You See Every Week</p>
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

      {/* Runs on the AI you already licensed */}
      <section className="border-t border-[rgba(26,27,46,0.13)] bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
          <Reveal>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="text-[#1A1B2E] text-[clamp(1.375rem,2.5vw,1.875rem)] font-bold tracking-[-0.02em] leading-[1.15]">
                  Runs on the AI your company already licensed: Claude or ChatGPT
                  <span className="text-[#B04E2B]">.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 mt-4 lg:mt-0 text-[#262B3D] text-base lg:text-lg leading-relaxed">
                Through the connections your company already approved. Where
                one doesn&apos;t exist, it works in the rep&apos;s own browser,
                as the rep.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 08 Receipt: a real brief, names blurred */}
      <section className={sectionClass}>
        <Reveal>
          <p className="k-label mb-6">08 &middot; The Receipt</p>
          <h2 className="text-[#1A1B2E] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-2xl mb-8">
            My OS wrote this at 6:45 this morning
            <span className="text-[#B04E2B]">.</span>
          </h2>
          <div className="max-w-2xl bg-white border border-[rgba(26,27,46,0.13)] p-6 sm:p-8">
            <p className="k-mono text-[#2B5D96] text-[11px] tracking-[0.2em] uppercase mb-5">
              Brief (written 6:45 AM)
            </p>
            <dl className="space-y-4 text-[#262B3D] text-base leading-relaxed">
              {brief.map((row) => (
                <div key={row.label}>
                  <dt className="k-mono text-[#B04E2B] text-[11px] tracking-[0.15em] uppercase mb-1">
                    {row.label}
                  </dt>
                  <dd>
                    {row.parts.map((p, i) =>
                      typeof p === "string" ? (
                        <span key={i}>{p}</span>
                      ) : (
                        <Redacted key={i}>{p.redacted}</Redacted>
                      )
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-6 max-w-2xl text-[#262B3D] text-lg leading-relaxed">
            Every outside meeting on my calendar gets one of these before I walk
            in, and I didn&apos;t write it.
          </p>
        </Reveal>
      </section>

      {/* Watch it run: renders only when VIDEO_URL is set */}
      {VIDEO_URL ? (
        <section className={sectionClass}>
          <Reveal>
            <p className="k-label mb-6">Watch It Run</p>
            <div className="max-w-4xl">
              <VideoEmbed url={VIDEO_URL} title="Watch the sales OS run" />
            </div>
          </Reveal>
        </section>
      ) : null}

      {/* 09 Why me */}
      <section className={sectionClass}>
        <Reveal>
          <p className="k-label mb-6">09 &middot; Why Me</p>
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
