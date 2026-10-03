"use client";

import { useState } from "react";
import Link from "next/link";
import { CHECK_HEADLINE, CHECK_PROMISE } from "@/content/dealerPlaybook";
import { CONTACT_EMAIL, BOOKING_PATH } from "@/content/siteFacts";
import { normalizeWebsite } from "@/lib/website";
import { trackEvent } from "@/lib/analytics";

const labelClass = "block text-sm lg:text-[15px] font-medium text-[#1A1B2E] mb-1.5";
const fieldClass = "k-field k-focus !py-3 !px-4";

// THE ONE CTA on /dealerplaybook: name, email, dealership website. Posts to
// /api/dealer-playbook, which emails Wade with source "dealer-playbook".
export default function DealerPlaybookForm() {
  const [submitted, setSubmitted] = useState<{ name: string; host: string } | null>(null);
  const [mountedAt] = useState(() => Date.now());
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const websiteRaw = String(data.get("website") ?? "");
    const website = normalizeWebsite(websiteRaw);

    if (!name || !email) {
      setError("Name and email are both required.");
      return;
    }
    if (!website) {
      setError("That website does not look right. Try the form yourdealership.com.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/dealer-playbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          website: websiteRaw.trim(),
          hp: String(data.get("company_website") ?? ""),
          elapsed: Date.now() - mountedAt,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      trackEvent("dealer_playbook_form_submit");
      setSubmitted({ name, host: new URL(website).hostname.replace(/^www\./, "") });
    } catch {
      setError(`Something went wrong on our end. Email ${CONTACT_EMAIL} with your website and we will run it from there.`);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-[rgba(26,27,46,0.13)] bg-[#FFFFFF] p-6 lg:p-8">
        <p className="k-label mb-4">Got it</p>
        <p className="text-[#1A1B2E] text-lg lg:text-xl font-semibold leading-snug mb-3">
          Thanks, {submitted.name}. Your check is in the queue.
        </p>
        <p className="text-[#262B3D] text-base lg:text-lg leading-relaxed">
          We run the same check from the episode on {submitted.host} and email
          you what ChatGPT and Google&apos;s AI can and cannot read on your
          site, within one business day. Watch for a note from {CONTACT_EMAIL}.
        </p>
        <p className="mt-6 text-[#262B3D]/70 text-sm lg:text-base">
          Want to talk before then?{" "}
          <Link href={BOOKING_PATH} className="k-link text-[#2B5D96] font-medium">
            Pick a time
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="border border-[rgba(26,27,46,0.13)] bg-[#FFFFFF] p-6 lg:p-8">
      <h2 className="text-[#1A1B2E] text-xl lg:text-2xl font-bold tracking-[-0.01em] leading-snug">
        {CHECK_HEADLINE}
      </h2>
      <p className="mt-2 text-[#262B3D] text-[15px] lg:text-base leading-relaxed">
        {CHECK_PROMISE}
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
        {/* Bot trap: hidden from people, filled by scripts. Never remove. */}
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] w-px h-px opacity-0"
        />
        <div>
          <label htmlFor="dp-name" className={labelClass}>
            Name
          </label>
          <input
            type="text"
            id="dp-name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="dp-email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            id="dp-email"
            name="email"
            required
            autoComplete="email"
            inputMode="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="dp-website" className={labelClass}>
            Dealership website
          </label>
          <input
            type="text"
            id="dp-website"
            name="website"
            required
            autoComplete="url"
            inputMode="url"
            placeholder="yourdealership.com"
            className={fieldClass}
          />
        </div>

        {error && (
          <p role="alert" className="text-[#B04E2B] text-sm lg:text-[15px] leading-relaxed">
            {error}
          </p>
        )}

        <button type="submit" disabled={sending} className="k-btn-solid k-focus w-full sm:w-auto">
          {sending ? "Sending..." : "Run my check"}
        </button>
      </form>

      {/* Secondary, small: keeps the on-air promise (calendar and email). */}
      <p className="mt-5 text-[#262B3D]/70 text-sm lg:text-[15px] leading-relaxed">
        Rather just talk?{" "}
        <Link href={BOOKING_PATH} className="k-link text-[#2B5D96] font-medium">
          Pick a time
        </Link>{" "}
        or email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="k-link text-[#2B5D96] font-medium">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </div>
  );
}
