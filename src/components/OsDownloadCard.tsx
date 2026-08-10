"use client";

import { useEffect, useState } from "react";

// One card per library entry. The email is asked once and remembered locally,
// so an owner pulling five upgrades types it a single time.
const EMAIL_KEY = "kerzie-os-owner-email";

type Props = {
  slug: string;
  name: string;
  was: string;
  description: string;
  note?: string;
};

export default function OsDownloadCard({ slug, name, was, description, note }: Props) {
  const [email, setEmail] = useState("");
  const [asking, setAsking] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(EMAIL_KEY);
    if (saved) setEmail(saved);
  }, []);

  async function pull(withEmail: string) {
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
      setAsking(false);
      window.open(data.url, "_blank", "noopener");
    } catch {
      setError("That did not work - try again in a moment.");
    } finally {
      setBusy(false);
    }
  }

  function onGet() {
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      void pull(email);
    } else {
      setAsking(true);
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
              void pull(email);
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
              {busy ? "Getting it..." : "Get the file"}
            </button>
          </form>
        ) : (
          <button
            onClick={onGet}
            disabled={busy}
            className="k-focus rounded-md bg-[#E8896A] px-4 py-2 text-[#1A1B2E] text-sm font-semibold hover:opacity-90 disabled:opacity-50"
          >
            {busy ? "Getting it..." : "Get the file"}
          </button>
        )}
        {error ? <p className="mt-2 text-[#E8896A] text-[13px]">{error}</p> : null}
      </div>
    </div>
  );
}
