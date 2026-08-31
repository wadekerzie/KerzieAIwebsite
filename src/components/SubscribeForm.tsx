"use client";

import { useState } from "react";

// Newsletter signup. Confirms in place rather than routing to a thank-you
// page: nothing to read next, so there is nowhere useful to send them.
export default function SubscribeForm({ source }: { source?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) throw new Error("subscribe failed");
      setState("done");
    } catch {
      setError(
        "That did not go through. Try again, or email wade@kerzie.ai and I will add you myself."
      );
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <div
        className="border-l-2 border-[#B04E2B] pl-5 py-1 max-w-lg"
        role="status"
        aria-live="polite"
      >
        <p className="text-[#1A1B2E] text-lg">You are on the list.</p>
        <p className="mt-2 text-[#262B3D] leading-relaxed">
          The next one goes out Tuesday at 1:00 PM Central. Check your inbox
          for a confirmation, and move it out of Promotions if it landed there.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="subscribe-email" className="sr-only">
          Email address
        </label>
        <input
          id="subscribe-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="flex-1 bg-[#FFFFFF] border border-[rgba(26,27,46,0.25)] px-4 py-3 text-[#1A1B2E] placeholder-[#5B6B77] focus:outline-none focus:border-[#2B5D96]"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="k-btn-solid k-focus disabled:opacity-60"
        >
          {state === "sending" ? "One second..." : "Send it to me"}
        </button>
      </div>
      {error && <p className="mt-3 text-[#B04E2B] text-sm">{error}</p>}
    </form>
  );
}
