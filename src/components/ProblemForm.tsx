"use client";

import { useState } from "react";

export default function ProblemForm() {
  const [submitted, setSubmitted] = useState(false);
  const [mountedAt] = useState(() => Date.now());
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const problem = (
      form.elements.namedItem("problem") as HTMLTextAreaElement
    ).value.trim();
    if (!problem) return;
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problem, hp: String(new FormData(form).get("company_website") ?? ""), elapsed: Date.now() - mountedAt }),
      });
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <p className="text-[#2B5D96] text-lg">
        Got it. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      {/* Bot trap: hidden from people, filled by scripts. Never remove. */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] w-px h-px opacity-0" />
      <textarea
        name="problem"
        rows={6}
        placeholder="Describe the problem..."
        className="k-field"
      />
      <p className="mt-3 text-[#262B3D]/60 text-sm k-serif">
        If you want us to respond, tell us how to reach you.
      </p>
      <button type="submit" disabled={sending} className="k-btn-solid mt-6">
        {sending ? "Sending..." : "Send it"}
      </button>
    </form>
  );
}
