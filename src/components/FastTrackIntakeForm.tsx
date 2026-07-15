"use client";

import { useState } from "react";

const labelClass =
  "block text-sm font-medium text-white mb-2 leading-relaxed";

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
      <div className="border border-[rgba(170,187,204,0.13)] bg-[#1E2035] p-10">
        <p className="k-label mb-4">Intake Received</p>
        <p className="text-[#AABBCC] text-lg leading-relaxed">
          I read every one of these myself. You will hear back within one
          business day, either with a booking link or a straight answer about
          why the session is not the right fit yet.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid sm:grid-cols-2 gap-7">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input type="text" id="name" name="name" required className="k-field k-focus" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input type="email" id="email" name="email" required className="k-field k-focus" />
        </div>
      </div>

      <div>
        <label htmlFor="business" className={labelClass}>
          What is your business?
        </label>
        <input type="text" id="business" name="business" required className="k-field k-focus" />
      </div>

      <div>
        <label htmlFor="role" className={labelClass}>
          What is your role in it? Are you the person who can make this
          decision?
        </label>
        <input type="text" id="role" name="role" required className="k-field k-focus" />
      </div>

      <div>
        <label htmlFor="workflow" className={labelClass}>
          What is the one workflow that hurts the most right now? Describe the
          pain, not the technology.
        </label>
        <textarea id="workflow" name="workflow" rows={4} required className="k-field k-focus" />
      </div>

      <div>
        <label htmlFor="tools" className={labelClass}>
          What tools and accounts does the business run on today? Website host,
          email, social accounts, scheduling, invoicing or accounting.
        </label>
        <textarea id="tools" name="tools" rows={3} required className="k-field k-focus" />
      </div>

      <div>
        <label htmlFor="computer" className={labelClass}>
          What computer will we work on, and is it yours? Mac or PC.
        </label>
        <input type="text" id="computer" name="computer" required className="k-field k-focus" />
      </div>

      <div>
        <label htmlFor="ai_experience" className={labelClass}>
          Have you tried AI at all yet? What happened?
        </label>
        <textarea
          id="ai_experience"
          name="ai_experience"
          rows={3}
          required
          className="k-field k-focus"
        />
      </div>

      <div>
        <span className={labelClass}>
          Before the session you will need an active $20 per month Claude
          subscription and your account logins ready. Are you good with that?
        </span>
        <div className="flex gap-8 mt-3">
          <label className="flex items-center gap-2 text-[#AABBCC]">
            <input type="radio" name="prerequisite" value="yes" required className="accent-[#E8896A]" />{" "}
            Yes
          </label>
          <label className="flex items-center gap-2 text-[#AABBCC]">
            <input type="radio" name="prerequisite" value="no" className="accent-[#E8896A]" /> No
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="referral" className={labelClass}>
          How did you hear about this?
        </label>
        <input type="text" id="referral" name="referral" className="k-field k-focus" />
      </div>

      {error && <p className="text-sm text-[#E8896A]">{error}</p>}

      <button type="submit" disabled={sending} className="k-btn-solid k-focus w-full sm:w-auto">
        {sending ? "Sending..." : "Send the intake"} <span className="k-arrow">&rarr;</span>
      </button>
    </form>
  );
}
