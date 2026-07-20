"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Email gate for free lead magnets. One list, many doors: every gate
// subscribes to the Kerzie AI newsletter, tagged by magnet, then routes to
// that magnet's access page.
export default function GateForm({
  magnet,
  buttonLabel,
}: {
  magnet: string;
  buttonLabel: string;
}) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();
    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, magnet }),
      });
      const data = await res.json();
      if (!res.ok || !data.redirect) throw new Error("gate failed");
      router.push(data.redirect);
    } catch {
      setError(
        "Something went wrong. Try again, or email wade@kerzie.ai and I will send it directly."
      );
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
      <input
        type="email"
        name="email"
        required
        placeholder="you@company.com"
        className="flex-1 bg-[#1E2035] border border-[rgba(170,187,204,0.25)] px-4 py-3 text-white placeholder-[#6d7585] focus:outline-none focus:border-[#6B9FD4]"
      />
      <button
        type="submit"
        disabled={sending}
        className="k-btn-solid k-focus disabled:opacity-60"
      >
        {sending ? "One second..." : buttonLabel}
      </button>
      {error && <p className="text-[#E8896A] text-sm sm:col-span-2">{error}</p>}
    </form>
  );
}
