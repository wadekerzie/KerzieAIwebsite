"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// The One-Window front door: first name, last name, email. Every operator
// through this gate lands on the newsletter list (tagged one-window) and the
// count toward the thousand. Free product, real names - that is the trade,
// and the page above this form says so out loud.
export default function OneWindowGate() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          magnet: "one-window",
          firstName: String(data.get("firstName") ?? "").trim(),
          lastName: String(data.get("lastName") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.redirect) throw new Error("gate failed");
      router.push(json.redirect);
    } catch {
      setError(
        "Something went wrong. Try again, or email wade@kerzie.ai and I will send it directly."
      );
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          name="firstName"
          required
          autoComplete="given-name"
          placeholder="First name"
          className="flex-1 bg-[#FFFFFF] border border-[rgba(26,27,46,0.25)] px-4 py-3 text-[#1A1B2E] placeholder-[#5B6B77] focus:outline-none focus:border-[#2B5D96]"
        />
        <input
          type="text"
          name="lastName"
          required
          autoComplete="family-name"
          placeholder="Last name"
          className="flex-1 bg-[#FFFFFF] border border-[rgba(26,27,46,0.25)] px-4 py-3 text-[#1A1B2E] placeholder-[#5B6B77] focus:outline-none focus:border-[#2B5D96]"
        />
      </div>
      <input
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
        className="w-full bg-[#FFFFFF] border border-[rgba(26,27,46,0.25)] px-4 py-3 text-[#1A1B2E] placeholder-[#5B6B77] focus:outline-none focus:border-[#2B5D96]"
      />
      <button
        type="submit"
        disabled={sending}
        className="k-btn-solid k-focus disabled:opacity-60 w-full sm:w-auto"
      >
        {sending ? "One second..." : "Send me One-Window"}
      </button>
      <p className="text-[#262B3D]/70 text-sm leading-relaxed">
        You also land on the Kerzie AI newsletter: one operator to another,
        twice a week. Unsubscribe any time and keep everything.
      </p>
      {error && <p className="text-[#B04E2B] text-sm">{error}</p>}
    </form>
  );
}
