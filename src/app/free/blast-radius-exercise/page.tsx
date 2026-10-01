import Link from "next/link";
import type { Metadata } from "next";
import { CopyButton } from "@/components/CopyButton";

// THE GIVEAWAY FOR THE BLAST RADIUS (Wade, approved 2026-10-01). Free and
// ungated on purpose: no form, no /api/gate, nothing collected. The two
// prompts are the ones Wade ran for the essay's "What the humans are for"
// section, with "B2B sales organization" opened up to [brackets] so anyone
// can run it on their own function. One CTA: the Substack.
//
// Receipts only. The claims on this page are the ones in the essay: Wade ran
// it on Claude, eight titles came back and boiled down to two real jobs, and
// the 10 to 15 of 50 figure was the model's own judgment, not data.
export const metadata: Metadata = {
  title: "Run the Blast Radius exercise on your own job (Free) | Kerzie AI",
  description:
    "The two prompts from The Blast Radius, opened up for any function and any industry. Round one asks for the new jobs. Round two asks which ones actually need a person.",
  openGraph: {
    title: "Run the exercise on your own job",
    description:
      "Two prompts, free. Ask your AI for the new jobs in your function, then make it tell you which ones need a person and why.",
    type: "website",
    url: "https://kerzie.ai/free/blast-radius-exercise",
  },
  twitter: {
    card: "summary",
    title: "Run the exercise on your own job",
    description:
      "Two prompts, free. Ask your AI for the new jobs in your function, then make it tell you which ones need a person and why.",
  },
};

// Brackets are what the reader fills in. Everything else is the prompt as
// Wade ran it, with his sales-specific words generalized.
const ROUND_ONE = `I want you to consult with futurists, scientists, engineers, science fiction writers, economists, and strategists, and tell me what the new jobs inside [your function, for example: a B2B sales organization] in [your industry] will be by 2029, once AI agents do most of [the recurring work in your function, for example: prospecting, research, reporting, forecasting, and follow-up], and [the people you serve, for example: buyers] increasingly send their own AI agents to deal with you. I want job titles that mostly do not exist today.

Give me 8 job titles. For each: the title, one sentence on what the person actually does all day, and one sentence on which of today's jobs it replaces or absorbs. Then name 3 of today's [your function] titles you think are gone by 2029, and why, in one line each. Plain language, no hype words, no em dashes.`;

const ROUND_TWO = `Earlier I asked for the new jobs inside [your function] in [your industry] by 2029, once AI agents do most of [the recurring work in your function], and [the people you serve] send their own AI agents to deal with you. I got the 8 titles below. I'm skeptical. I think I can point at every one of them and say an AI agent could handle most of it, even with today's top models.

[Paste the 8 titles and their one-line descriptions from round one here.]

Be honest with me, not reassuring. For each of the 8: (a) what part of this job an AI agent could do with today's top models, (b) what part is left for a person, if any, and (c) whether what's left is left because the AI can't do it yet (capability), or because someone has to answer for the result: sign it, own it, get fired for it (accountability). Say "nothing is left" where that is true.

Then tell me: of the 8, how many are really full-time human jobs by 2029, and how many people would a [size of your team today, for example: 50]-person [your function] team today actually need for all of this? Then give me the one-line rule for which [your function] work stays human. Plain language, no hype words, no em dashes.`;

function PromptBlock({
  label,
  title,
  lead,
  text,
}: {
  label: string;
  title: string;
  lead: string;
  text: string;
}) {
  return (
    <section className="mt-16 lg:mt-20">
      <p className="k-label mb-3">{label}</p>
      <h2 className="text-[#1A1B2E] text-2xl lg:text-3xl font-semibold tracking-[-0.02em]">
        {title}
      </h2>
      <p className="mt-4 text-[#262B3D] text-lg leading-relaxed max-w-2xl">
        {lead}
      </p>
      <pre className="mt-6 whitespace-pre-wrap font-sans text-[#262B3D] text-base lg:text-lg leading-relaxed bg-[#FFFFFF] border border-[rgba(26,27,46,0.13)] border-l-[3px] border-l-[#2B5D96] p-6 lg:p-8 max-w-3xl">
        {text}
      </pre>
      <div className="mt-5">
        <CopyButton text={text} label={`Copy ${label.toLowerCase()}`} />
      </div>
    </section>
  );
}

export default function BlastRadiusExercisePage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10 flex items-baseline justify-between gap-6">
        <Link
          href="/"
          className="k-mono text-[#262B3D]/70 text-xs lg:text-sm tracking-[0.15em] lg:tracking-[0.12em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#B04E2B]">.</span>AI
        </Link>
        <Link
          href="/blast-radius"
          className="k-mono text-[#262B3D]/70 text-xs lg:text-sm tracking-[0.15em] lg:tracking-[0.12em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus flex-shrink-0"
        >
          THE ESSAY &rarr;
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-14 pb-4">
        <p className="k-label mb-8">The Blast Radius &middot; Free</p>
        <h1 className="text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.5rem)]">
          Run the exercise on your own job
          <span className="text-[#B04E2B]">.</span>
        </h1>
        <div className="mt-6 text-[#262B3D] text-lg lg:text-xl max-w-2xl leading-relaxed space-y-5">
          <p>
            In{" "}
            <Link href="/blast-radius" className="k-link k-focus text-[#2B5D96]">
              The Blast Radius
            </Link>{" "}
            I ran an exercise I heard from Cathie Wood: ask the AI what the new
            jobs in your world will be. I ran it on Claude for a B2B sales
            organization. It came back with eight titles. Then I ran a second
            round and told it I was skeptical. The eight boiled down to two
            real jobs, and when I asked how many people a 50-person team would
            need, it said about 10 to 15 and labeled that its own judgment,
            not data.
          </p>
          <p>
            Here are both prompts, opened up so you can run them on your own
            function and your own industry. Fill in the brackets, paste round
            one into a fresh session, then paste round two into another fresh
            session with the eight titles it gave you. Nothing to sign up for.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <PromptBlock
          label="Round one"
          title="Ask for the new jobs."
          lead="The question as Cathie Wood framed it. You will get eight tidy titles with a description of what each person does all day. Do not stop here."
          text={ROUND_ONE}
        />
        <PromptBlock
          label="Round two"
          title="Make it tell you which ones need a person."
          lead="The skeptic pass. For each title: what an agent can do today, what is left for a person, and whether that is left because the AI cannot do it yet or because someone has to answer for the result."
          text={ROUND_TWO}
        />
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-28 lg:pb-24">
        <div className="k-hairline w-full mb-10" />
        <p className="text-[#262B3D] text-lg leading-relaxed max-w-2xl">
          If round two surprises you the way it surprised me, the essay is
          where I work out what it means:{" "}
          <Link href="/blast-radius" className="k-link k-focus text-[#2B5D96]">
            read The Blast Radius
          </Link>
          . Every Tuesday I publish a newsletter on Substack, in plain
          words, from inside the businesses I run.
        </p>
        <div className="mt-8">
          <a
            href="https://news.kerzie.ai"
            className="k-btn-solid k-focus inline-block"
          >
            Subscribe on Substack &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
