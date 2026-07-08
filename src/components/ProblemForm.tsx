"use client";

import { useState } from "react";

export default function ProblemForm() {
  const [submitted, setSubmitted] = useState(false);
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
        body: JSON.stringify({ problem }),
      });
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <p className="text-[#6B9FD4] text-lg">
        Got it. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <textarea
        name="problem"
        rows={6}
        placeholder="Describe the problem..."
        className="k-field"
      />
      <p className="mt-3 text-[#AABBCC]/60 text-sm k-serif">
        If you want us to respond, tell us how to reach you.
      </p>
      <button type="submit" disabled={sending} className="k-btn-solid mt-6">
        {sending ? "Sending..." : "Send it"}
      </button>
    </form>
  );
}
