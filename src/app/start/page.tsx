import Link from "next/link";
import type { Metadata } from "next";

// The new-operator "start here" page. Deliberately not in the site menu -
// Wade hands this link to people he invites into the One-Window cohort.
// Content is the five-step non-technical install walk-through captured from
// the first real cohort-welcome email (8/22) - the first new-operator recipe.
export const metadata: Metadata = {
  title: "Start Here | Kerzie AI",
  description: "Your own OS, all in one window. The whole setup, step by step.",
  robots: { index: false, follow: false },
};

const STEPS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Make your OS a home.",
    body: (
      <>
        Right-click any empty spot on your Mac desktop, choose{" "}
        <span className="text-[#1A1B2E]">New Folder</span>, and name it{" "}
        <span className="text-[#1A1B2E]">Your Name&rsquo;s Operating System</span>.
        Your actual name. This folder is where your OS lives.
      </>
    ),
  },
  {
    title: "One command in Terminal.",
    body: (
      <>
        Press <span className="text-[#1A1B2E]">Command + space bar</span>, type{" "}
        <span className="text-[#1A1B2E]">Terminal</span>, and press Return - a
        plain little window opens. Copy the line below, paste it into that
        window, and press Return. Let it run until it finishes. That is the
        only thing you will ever do in that window - close it after.
        <span className="block mt-4 k-mono text-sm text-[#2B5D96] bg-black/30 border border-[#2B5D96]/20 rounded-md px-4 py-3 overflow-x-auto whitespace-nowrap">
          curl -fsSL https://claude.ai/install.sh | bash
        </span>
      </>
    ),
  },
  {
    title: "Get Claude.",
    body: (
      <>
        Download the Mac app at{" "}
        <a
          href="https://claude.com/download"
          className="k-link k-focus text-[#2B5D96]"
        >
          claude.com/download
        </a>
        , drag it into Applications, open it, and create your account. Take
        the <span className="text-[#1A1B2E]">Pro plan</span> when it asks - about
        twenty bucks a month, and it is the one piece that is yours to carry.
      </>
    ),
  },
  {
    title: "Pick Code, not Home.",
    body: (
      <>
        When Claude opens you will see both. Click{" "}
        <span className="text-[#1A1B2E]">Code</span>. It will ask which folder to
        work in - point it at the operating-system folder you made on the
        desktop in step one.
      </>
    ),
  },
  {
    title: "Get the Foundation.",
    body: (
      <>
        Go to{" "}
        <Link href="/downloads" className="k-link k-focus text-[#2B5D96]">
          kerzie.ai/downloads
        </Link>{" "}
        and hit <span className="text-[#1A1B2E]">Copy</span> on the Foundation.
        Click back into Claude Code, paste, and press Return.
      </>
    ),
  },
];

export default function StartPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#262B3D]/70 text-xs tracking-[0.15em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#B04E2B]">.</span>AI
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-10">
        <p className="k-label mb-6">One-Window &middot; Start Here</p>
        <h1 className="text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.2rem,6vw,4rem)] max-w-3xl">
          Your own OS, all in one window.
        </h1>
        <div className="mt-6 max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
          <p>
            One place where your work, your follow-ups, and your AI sit
            together, and it gets smarter about your world every week.{" "}
            <span className="text-[#1A1B2E]">
              Here is the whole setup, step by step. Fifteen minutes, and you
              do not need to be an Apple guy for any of it.
            </span>
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
        <ol className="max-w-2xl space-y-10">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="k-mono text-[#B04E2B] text-lg leading-relaxed shrink-0">
                {i + 1}.
              </span>
              <div className="text-[#262B3D] text-lg leading-relaxed">
                <span className="text-[#1A1B2E] font-bold">{step.title}</span>{" "}
                {step.body}
              </div>
            </li>
          ))}
        </ol>

        <div className="max-w-2xl mt-14 space-y-4 text-[#262B3D] text-lg leading-relaxed">
          <p>
            From there it interviews you - what you do, what you are chasing,
            how you like to work - and it builds itself around your answers.
            Takes an evening, and most of that is just you talking.
          </p>
          <p>
            Or: you and me, one sitting in Google Meet, and you will have it
            running.{" "}
            <Link href="/schedule" className="k-link k-focus text-[#2B5D96]">
              Say the word and I will block the time.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
