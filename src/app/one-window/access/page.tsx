import Link from "next/link";
import type { Metadata } from "next";
import { CopyButton, CopyBuilderButton } from "@/components/CopyButton";

// THIS PAGE IS THE SETUP. It is not a pointer to a document.
//
// Rewritten 2026-08-10 after the first customer (user #6) read the .md file
// cover to cover. He was following instructions: the old page said "read Part
// 1" and handed him an 8,500-word download, ~85% of which is written to his
// AI rather than to him. The buyer should never open that file. Part 1 lives
// here as steps; the file is plumbing his AI fetches for itself.
export const metadata: Metadata = {
  title: "Your One-Window | Kerzie AI",
  robots: { index: false, follow: false },
};

const HANDOFF_LINE =
  "Read https://kerzie.ai/downloads/one-window-setup.md and follow it in order to set up One-Window - my own personal OS. Interview me first, before you build anything.";

function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 sm:gap-7">
      <div
        aria-hidden
        className="k-mono shrink-0 w-9 h-9 rounded-full border border-[rgba(232,137,106,0.45)] text-[#E8896A] flex items-center justify-center text-sm font-bold"
      >
        {n}
      </div>
      <div className="flex-1 min-w-0 pb-12">
        <h2 className="text-white font-semibold text-xl sm:text-2xl tracking-[-0.01em]">
          {title}
        </h2>
        <div className="mt-4 space-y-4 text-[#AABBCC] text-[17px] leading-relaxed max-w-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function OneWindowAccessPage() {
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

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-12">
        <p className="k-label mb-8">Purchase Complete</p>
        <h1 className="text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.5vw,3.25rem)]">
          Let&apos;s get you set up<span className="text-[#E8896A]">.</span>
        </h1>
        <div className="mt-8 max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
          <p>
            Five steps on this page. The first four get your Mac ready and take
            about twenty minutes, most of it waiting on a download. The fifth
            hands the work to your AI, and that is where the hour goes.
          </p>
          <p>
            <span className="text-white">You do not need to read anything technical.</span>{" "}
            Everything you have to do is on this page, in order. Do them in
            order and do not skip ahead.
          </p>
        </div>

        <div className="mt-10 max-w-2xl rounded-lg border border-[rgba(170,187,204,0.15)] bg-[rgba(170,187,204,0.04)] p-6">
          <p className="k-label mb-4">Before You Start</p>
          <ul className="space-y-2 text-[#AABBCC] text-[16px] leading-relaxed">
            <li>
              <span className="text-white">A Mac.</span> This version is Mac
              only. Windows is a different install path and is not in this
              version.
            </li>
            <li>
              <span className="text-white">A paid Claude plan.</span> Claude Pro
              at $20 a month is the minimum. The free plan does not include the
              part you are about to use.
            </li>
            <li>
              <span className="text-white">About an hour, once.</span> You do
              not need to be technical. You do not need to have ever opened
              Terminal.
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-8 border-t border-[rgba(170,187,204,0.13)] pt-14">
        <Step n="1" title="The two Claudes, and why one of them can't help you">
          <p>
            Most people who have used Claude have used it in a browser tab. You
            ask, it answers, you close the tab. That is Claude{" "}
            <span className="text-white">chat</span>, and it is good at talking
            about your business. It cannot touch anything in it. No access to
            your files, your numbers, your calendar, or your accounts. Every
            conversation starts from nothing and ends the same way.
          </p>
          <p>
            The desktop app is different. It has three tabs across the top:{" "}
            <span className="text-white">Chat</span> (what you have been using),{" "}
            <span className="text-white">Cowork</span> (ignore it for now), and{" "}
            <span className="text-white">Code</span>.
          </p>
          <p className="text-white">
            Code is where the work gets done. It is the only tab that can
            actually change anything in your business.
          </p>
          <p>
            I know how that name sounds. Read it as a bad name, not as a
            warning. You are not going to write code, read code, or learn what
            code is. In my own business that tab drafts newsletters, triages my
            inbox, tracks deals, and updates my project files. None of that is
            programming. The tab is named for what it was originally built for,
            not for what you are about to use it for.
          </p>
          <p>
            Everything in this setup lives in the Code tab. That is what one
            window means.
          </p>
        </Step>

        <Step n="2" title="Install the desktop app">
          <ol className="list-decimal list-outside ml-5 space-y-2">
            <li>
              Download it:{" "}
              <a
                href="https://claude.ai/download"
                target="_blank"
                rel="noopener"
                className="k-link k-focus text-[#6B9FD4]"
              >
                claude.ai/download
              </a>
            </li>
            <li>Open the file and drag Claude into your Applications folder.</li>
            <li>
              Launch it from Applications and sign in with the account your
              subscription is on.
            </li>
            <li>
              Click the <span className="text-white">Code</span> tab at the top.
            </li>
          </ol>
          <p>
            If clicking Code asks you to upgrade, you are on the free plan. You
            need Claude Pro at $20 a month before you can go further.
          </p>
          <p>Leave the app open.</p>
        </Step>

        <Step n="3" title="One command in Terminal">
          <p>
            This is the step people quit on, so here is exactly what it is and
            why.
          </p>
          <p>
            <span className="text-white">Terminal</span> is a plain text window
            that came with your Mac. No buttons. You type an instruction, press
            return, your Mac does it. You are going to use it once today and you
            may never open it again.
          </p>
          <p>
            <span className="text-white">Why you have to.</span> Your Mac ships
            with part of the developer toolkit missing, including a tool the
            Code tab needs. The confusing part is that your Mac looks like it
            already has it. It does not. Skip this and the Code tab will appear
            to start working, then fail with an error, and nothing will explain
            why.
          </p>
          <ol className="list-decimal list-outside ml-5 space-y-2">
            <li>
              Press <span className="text-white">Command + Space</span>, type{" "}
              <span className="k-mono text-white">Terminal</span>, press return.
              A plain window opens.
            </li>
            <li>Copy this line, paste it into that window, press return:</li>
          </ol>
          <div className="rounded-md bg-[#12131F] border border-[rgba(170,187,204,0.2)] px-4 py-3 k-mono text-white text-[15px] overflow-x-auto">
            xcode-select --install
          </div>
          <div>
            <CopyButton
              text="xcode-select --install"
              label="Copy the command"
              className="k-focus rounded-md border border-[rgba(232,137,106,0.5)] text-[#E8896A] px-4 py-2 text-sm font-semibold hover:bg-[rgba(232,137,106,0.1)] transition-colors"
            />
          </div>
          <ol className="list-decimal list-outside ml-5 space-y-2" start={3}>
            <li>
              A normal Mac installer window appears. Click{" "}
              <span className="text-white">Install</span>, accept the agreement,
              let it run. A few minutes.
            </li>
            <li>When it finishes, close Terminal. You are done with it.</li>
          </ol>
          <p>
            If you instead get a message saying the tools are already installed,
            that is fine. Your Mac already has them. Move on.
          </p>
          <details className="rounded-md border border-[rgba(170,187,204,0.15)] p-4">
            <summary className="k-focus cursor-pointer text-white text-[16px]">
              If the Code tab still reports a problem with Git
            </summary>
            <div className="mt-4 space-y-3 text-[16px]">
              <p>
                Rare, but it happens, and it is the road I took the first two
                times I did this with a client. It ends in the same place.
              </p>
              <ol className="list-decimal list-outside ml-5 space-y-2">
                <li>
                  Go to{" "}
                  <a
                    href="https://brew.sh"
                    target="_blank"
                    rel="noopener"
                    className="k-link k-focus text-[#6B9FD4]"
                  >
                    brew.sh
                  </a>{" "}
                  and copy the install command at the top of the page. Paste it
                  into Terminal, press return, enter your Mac password when it
                  asks.
                </li>
                <li>
                  When it finishes it prints a short block titled{" "}
                  <span className="text-white">Next steps</span> with two or
                  three commands. Copy each one, paste it into the same window,
                  press return, one at a time. Nothing visible happens. That is
                  expected.
                </li>
                <li>Restart the Claude app and try the Code tab again.</li>
              </ol>
            </div>
          </details>
        </Step>

        <Step n="4" title="Your folder, and why it is the whole foundation">
          <p>The most important step so far, and it takes 30 seconds.</p>
          <p>
            <span className="text-white">
              Create one folder on your Mac and name it after yourself:
            </span>{" "}
            <span className="k-mono">Maria&apos;s OS</span>,{" "}
            <span className="k-mono">Dave&apos;s Operating System</span>,
            whatever reads right to you. Put it somewhere ordinary, like inside
            Documents. Do not put it in a shared team drive.
          </p>
          <p>
            That folder is your business. Not a copy of it, not notes about it.
            Everything your AI builds with you lives there: your operating
            manual, your action tracker, your playbooks, your record of what
            happened and why. Open a session six months from now, on a model
            that does not exist yet, and that folder is what makes it useful in
            five minutes instead of five hours.
          </p>
          <p>Now point your AI at it:</p>
          <ol className="list-decimal list-outside ml-5 space-y-2">
            <li>
              In the Claude app, click the{" "}
              <span className="text-white">Code</span> tab.
            </li>
            <li>
              Choose <span className="text-white">Local</span>.
            </li>
            <li>
              Click <span className="text-white">Select folder</span> and pick
              the folder you just created.
            </li>
          </ol>
          <p>
            <span className="text-white">
              If you have used the Code tab before,
            </span>{" "}
            it opens straight into whatever folder you had last, so there is no{" "}
            <span className="text-white">Select folder</span> button sitting
            there waiting for you. Click the folder name at the top of the Code
            panel instead. That opens the folder switcher, and your new folder
            goes in from there. Your existing setup is untouched, and you can
            switch back and forth whenever you want.
          </p>
          <p>
            <span className="text-white">
              Expect a pop-up asking whether you trust this folder.
            </span>{" "}
            Say yes. It asks because a folder can hold instructions that run
            automatically, so the app checks the first time it sees a new one.
            This is a folder you made yourself thirty seconds ago on your own
            Mac, and it is empty. There is nothing in it yet to trust or not
            trust.
          </p>
          <p className="text-white">
            You now have one window that can see your business.
          </p>
        </Step>

        <Step n="5" title="Hand it over">
          <p>
            Your part is done. Copy the line below, paste it into the Code tab,
            and press return. Your AI goes and gets its own instructions from
            there.
          </p>
          <div className="rounded-md bg-[#12131F] border border-[rgba(232,137,106,0.35)] px-4 py-4 text-white text-[15px] leading-relaxed">
            {HANDOFF_LINE}
          </div>
          <div className="flex flex-col gap-3">
            <CopyButton text={HANDOFF_LINE} label="Copy this line" />
            <span className="text-[#AABBCC]/70 text-[15px]">
              If your AI says it cannot reach the web:{" "}
              <CopyBuilderButton />
            </span>
          </div>
        </Step>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-20 border-t border-[rgba(170,187,204,0.13)] pt-14">
        <p className="k-label mb-6">What Happens In That Hour</p>
        <div className="max-w-2xl space-y-4 text-[#AABBCC] text-[17px] leading-relaxed">
          <p>
            Your AI starts by asking about your business. Answer in plain
            language. There are no wrong answers and it is not a test. It is
            building the thing around what you say.
          </p>
          <p>
            It will stop at several points and tell you to go click something or
            connect an account.{" "}
            <span className="text-white">Those stops are on purpose.</span> Do
            the thing, tell it you are done, and it picks back up.
          </p>
          <p>
            Budget about an hour for the first sitting. It tells you what to do
            next when the hour is up.
          </p>
          <p className="text-[#AABBCC]/70 text-base pt-4">
            Bookmark this page - your setup lives here. Stall points or wins:{" "}
            <a
              href="mailto:wade@kerzie.ai"
              className="k-link k-focus text-[#6B9FD4]"
            >
              wade@kerzie.ai
            </a>
            . I read everything. Prefer the raw file?{" "}
            <a
              href="/downloads/one-window-setup.md"
              download
              className="k-link k-focus text-[#6B9FD4]"
            >
              Download it here
            </a>{" "}
            - but you do not need it.
          </p>
        </div>
      </section>
    </div>
  );
}
