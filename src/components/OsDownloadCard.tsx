"use client";

import { useEffect, useState } from "react";

// One card per library entry.
//
// The PRIMARY action is a line the owner pastes into their AI, not a file they
// open. Same reason the setup page was rewritten 2026-08-10: these documents
// are written TO the AI, and a human who opens one reads thousands of words
// addressed to somebody else. The file download stays as the fallback.
//
// Either action registers the pull in GHL, so "who runs what" survives the
// change of format. The email is asked once and remembered locally.
const EMAIL_KEY = "kerzie-os-owner-email";

type Props = {
  slug: string;
  name: string;
  was: string;
  description: string;
  note?: string;
};

type Mode = "line" | "file";

export default function OsDownloadCard({ slug, name, was, description, note }: Props) {
  const [email, setEmail] = useState("");
  const [asking, setAsking] = useState<Mode | null>(null);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(EMAIL_KEY);
    if (saved) setEmail(saved);
  }, []);

  async function run(mode: Mode, withEmail: string) {
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/os-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: withEmail, slug }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.url) {
        setError("That did not work - check the email and try again.");
        return;
      }
      window.localStorage.setItem(EMAIL_KEY, withEmail);
      setAsking(null);

      if (mode === "file") {
        window.open(data.url, "_blank", "noopener");
        return;
      }

      const line =
        `Read https://kerzie.ai${data.url} and install this upgrade to my ` +
        `Personal OS. Describe what it changes before you apply anything.`;
      try {
        await navigator.clipboard.writeText(line);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch {
        setError("Your browser blocked the copy - use the file link instead.");
      }
    } catch {
      setError("That did not work - try again in a moment.");
    } finally {
      setBusy(false);
    }
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
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-white font-semibold text-lg">{name}</h3>
        <span className="k-mono text-[#AABBCC]/45 text-[11px] tracking-[0.12em] whitespace-nowrap">
          was {was}
        </span>
      </div>
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
              disabled={busy}
              className="k-focus rounded-md bg-[#E8896A] px-4 py-2 text-[#1A1B2E] text-sm font-semibold hover:opacity-90 disabled:opacity-50"
            >
              {busy ? "Working..." : asking === "line" ? "Copy the line" : "Get the file"}
            </button>
          </form>
        ) : (
          <div className="flex flex-col gap-2 items-start">
            <button
              onClick={() => start("line")}
              disabled={busy}
              className="k-focus rounded-md bg-[#E8896A] px-4 py-2 text-[#1A1B2E] text-sm font-semibold hover:opacity-90 disabled:opacity-50"
            >
              {copied ? "Copied - paste it into your Code tab" : busy ? "Working..." : "Copy the install line"}
            </button>
            <button
              onClick={() => start("file")}
              disabled={busy}
              className="k-focus text-[#AABBCC]/70 text-[13px] underline underline-offset-4 hover:text-white transition-colors"
            >
              or download the file
            </button>
          </div>
        )}
        {error ? <p className="mt-2 text-[#E8896A] text-[13px]">{error}</p> : null}
      </div>
    </div>
  );
}
