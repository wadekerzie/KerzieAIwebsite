"use client";

import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all";

const labelClass = "block text-sm font-medium text-[var(--foreground)] mb-1";

export default function FastTrackIntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/fast-track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("send failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong sending the intake. Email wade@kerzie.ai directly.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="card text-center py-12">
        <div className="icon-box w-16 h-16 rounded-2xl mx-auto mb-4">
          <Send className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">Intake received</h3>
        <p className="text-[var(--foreground-muted)]">
          I read every one of these myself. You will hear back within one business day, either
          with a booking link or a straight answer about why the session is not the right fit
          yet.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input type="text" id="name" name="name" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input type="email" id="email" name="email" required className={inputClass} />
          </div>
        </div>

        <div>
          <label htmlFor="business" className={labelClass}>
            What is your business?
          </label>
          <input type="text" id="business" name="business" required className={inputClass} />
        </div>

        <div>
          <label htmlFor="role" className={labelClass}>
            What is your role in it? Are you the person who can make this decision?
          </label>
          <input type="text" id="role" name="role" required className={inputClass} />
        </div>

        <div>
          <label htmlFor="workflow" className={labelClass}>
            What is the one workflow that hurts the most right now? Describe the pain, not the
            technology.
          </label>
          <textarea id="workflow" name="workflow" rows={4} required className={inputClass} />
        </div>

        <div>
          <label htmlFor="tools" className={labelClass}>
            What tools and accounts does the business run on today? Website host, email, social
            accounts, scheduling, invoicing or accounting.
          </label>
          <textarea id="tools" name="tools" rows={3} required className={inputClass} />
        </div>

        <div>
          <label htmlFor="computer" className={labelClass}>
            What computer will we work on, and is it yours? Mac or PC.
          </label>
          <input type="text" id="computer" name="computer" required className={inputClass} />
        </div>

        <div>
          <label htmlFor="ai_experience" className={labelClass}>
            Have you tried AI at all yet? What happened?
          </label>
          <textarea id="ai_experience" name="ai_experience" rows={3} required className={inputClass} />
        </div>

        <div>
          <span className={labelClass}>
            Before the session you will need an active $20 per month Claude subscription and your
            account logins ready. Are you good with that?
          </span>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 text-[var(--foreground-muted)]">
              <input type="radio" name="prerequisite" value="yes" required /> Yes
            </label>
            <label className="flex items-center gap-2 text-[var(--foreground-muted)]">
              <input type="radio" name="prerequisite" value="no" /> No
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="referral" className={labelClass}>
            How did you hear about this?
          </label>
          <input type="text" id="referral" name="referral" className={inputClass} />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button type="submit" disabled={sending} className="btn-primary btn-lg w-full">
          <span>
            {sending ? "Sending..." : "Send The Intake"}
            <ArrowRight className="w-5 h-5 ml-2" />
          </span>
        </button>
      </div>
    </form>
  );
}
