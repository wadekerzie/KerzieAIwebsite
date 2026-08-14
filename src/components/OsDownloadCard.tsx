"use client";

import { useEffect, useState } from "react";

// One card per library entry.
//
// The PRIMARY action is a line the owner pastes into their AI, not a file they
// open. Rewritten 2026-08-14 to the capability-note model: the line hands the
// AI the IDEA and lets it build the capability to fit that owner's OS, instead
// of instructing it to install our document verbatim. The document stays
// linked as a reference the AI may consult - the owner never reads it. The
// baseline (One-Window Setup) keeps the read-and-run line, because it IS the
// build document for a new OS.
//
// Either action registers the pull in GHL, so "who runs what" survives the
// change of format. The email is asked once and remembered locally.
const EMAIL_KEY = "kerzie-os-owner-email";

// "was" (the old version label) is accepted but no longer rendered - the
// no-versions mindset on the page makes version residue a contradiction.
type Props = {
  slug: string;
  name: string;
  was?: string;
  description: string;
  file: string;
  note?: string;
  baseline?: boolean;
};

type Mode = "line" | "file";

// Why the clipboard write comes FIRST (fixed 2026-08-11, found live in front of
// a customer): browsers only allow a clipboard write while the user's click is
// still "active," and that permission expires across an awaited network call.
// The old order was fetch -> writeText, so Safari and some Chrome contexts
// refused every copy. Nobody could use this button from the day it shipped.
// The line does not need the server - it is derivable from the file name - so
// we copy inside the gesture and register the pull afterward.
function copySync(text: string): boolean {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.top = "0";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
}

export default function OsDownloadCard({ slug, name, description, file, note, baseline }: Props) {
  const [email, setEmail] = useState("");
  const [asking, setAsking] = useState<Mode | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [manualLine, setManualLine] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(EMAIL_KEY);
    if (saved) setEmail(saved);
  }, []);

  const installLine = baseline
    ? `Read https://kerzie.ai/downloads/${file} and build my Personal OS from it. ` +
      `Describe each phase in plain words before you do it.`
    : `I want to add a capability to my OS: "${name}". Build it your own way, ` +
      `fitted to what I already have - break nothing I've built. For implementation ` +
      `detail you can read https://kerzie.ai/downloads/${file} (it's written to you, ` +
      `not me). Before you change anything, tell me in plain words what you'll add. ` +
      `When you're done, show me what you built and how I use it.`;

  // Fire-and-forget: the pull still registers in GHL, but nothing the user sees
  // waits on it. A registration failure must never cost them the line.
  function register(withEmail: string) {
    window.localStorage.setItem(EMAIL_KEY, withEmail);
    void fetch("/api/os-download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: withEmail, slug }),
    }).catch(() => {});
  }

  function run(mode: Mode, withEmail: string) {
    setError("");
    setManualLine("");
    setAsking(null);

    if (mode === "file") {
      window.open(`/downloads/${file}`, "_blank", "noopener");
      register(withEmail);
      return;
    }

    // Copy inside the click, before anything async touches the event.
    let ok = copySync(installLine);
    if (!ok && navigator.clipboard) {
      void navigator.clipboard.writeText(installLine).then(
        () => {
          setCopied(true);
          setTimeout(() => setCopied(false), 4000);
        },
        () => setManualLine(installLine),
      );
      ok = true;
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } else {
      // Last resort: show it so it can always be selected by hand.
      setManualLine(installLine);
    }
    register(withEmail);
  }

  function start(mode: Mode) {
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      void run(mode, email);
    } else {
      setAsking(mode);
    }
  }

  return (
    <div className="rounded-lg border border-[rgba(170,187,204,0.15)] bg-[rgba(170,187,204,0.04)] p-6 flex flex-col">
      <h3 className="text-white font-semibold text-lg">{name}</h3>
      <p className="mt-3 text-[#AABBCC] text-[15px] leading-relaxed flex-1">{description}</p>
      {note ? (
        <p className="mt-3 text-[#E8896A]/85 text-[13px] leading-relaxed">{note}</p>
      ) : null}

      <div className="mt-5">
        {asking ? (
          <form
            className="flex flex-col sm:flex-row gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              void run(asking, email);
            }}
          >
            <input
              type="email"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="the email you bought with"
              className="k-focus flex-1 rounded-md bg-[#1A1B2E] border border-[rgba(170,187,204,0.3)] px-3 py-2 text-white text-sm placeholder:text-[#AABBCC]/40"
            />
            <button
              type="submit"
              className="k-focus rounded-md bg-[#E8896A] px-4 py-2 text-[#1A1B2E] text-sm font-semibold hover:opacity-90"
            >
              {asking === "line" ? "Copy the line" : "Get the file"}
            </button>
          </form>
        ) : (
          <div className="flex flex-col gap-2 items-start">
            <button
              onClick={() => start("line")}
              className="k-focus rounded-md bg-[#E8896A] px-4 py-2 text-[#1A1B2E] text-sm font-semibold hover:opacity-90"
            >
              {copied
                ? "Copied - paste it into your Code tab"
                : baseline
                  ? "Copy the setup line"
                  : "Copy the line for your AI"}
            </button>
            <button
              onClick={() => start("file")}
              className="k-focus text-[#AABBCC]/70 text-[13px] underline underline-offset-4 hover:text-white transition-colors"
            >
              {baseline ? "or download the document" : "or open the reference (written to your AI)"}
            </button>
          </div>
        )}
        {manualLine ? (
          <div className="mt-3">
            <p className="text-[#AABBCC]/70 text-[12px] mb-2">
              Your browser blocked the copy. Select this and copy it by hand:
            </p>
            <textarea
              readOnly
              rows={3}
              value={manualLine}
              onFocus={(e) => e.currentTarget.select()}
              className="k-focus w-full rounded-md bg-[#1A1B2E] border border-[rgba(170,187,204,0.3)] px-3 py-2 text-white text-[12px] leading-relaxed k-mono"
            />
          </div>
        ) : null}
        {error ? <p className="mt-2 text-[#E8896A] text-[13px]">{error}</p> : null}
      </div>
    </div>
  );
}
