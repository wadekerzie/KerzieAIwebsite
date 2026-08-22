"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// The two jobs this page does, and they belong to two different people:
//
//   1. SOMEONE ELSE just scanned Wade's QR and landed here. Their job is to
//      get Wade into their phone. "Save my contact" is the loudest thing.
//   2. WADE is standing in front of them and needs the QR on screen fast.
//      "Show my QR" opens a full-bleed white overlay - white because phone
//      cameras lock onto a high-contrast code far quicker than a dark one.
//
// Both live on one page on purpose. Wade taps his home-screen icon, taps
// Show my QR, and turns the phone around. That is the whole motion.

const ACTIONS = [
  {
    href: "/api/vcard",
    label: "Save my contact",
    sub: "Adds Wade to your phone",
    primary: true,
  },
  {
    href: "https://kerzie.ai/schedule",
    label: "Book a call",
    sub: "Straight onto the calendar",
    primary: false,
  },
  {
    href: "tel:+12146687986",
    label: "Call 214-668-7986",
    sub: null,
    primary: false,
  },
  {
    href: "mailto:wade@kerzie.ai",
    label: "wade@kerzie.ai",
    sub: null,
    primary: false,
  },
];

export default function CardClient() {
  const [qrOpen, setQrOpen] = useState(false);

  // Escape closes the overlay on desktop. On a phone the tap-anywhere
  // handler on the overlay itself does the work.
  useEffect(() => {
    if (!qrOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setQrOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [qrOpen]);

  return (
    <>
      {/* A div, not a <main> - the root layout already wraps every page in
          one, and nesting them is invalid HTML that screen readers land on
          twice. */}
      <div className="mx-auto flex w-full max-w-md flex-col items-center px-6 pb-16 pt-10">
        <Image
          src="/wade-card.jpg"
          alt="Wade Kerzie"
          width={321}
          height={321}
          priority
          className="h-28 w-28 rounded-full object-cover ring-1 ring-white/15"
        />

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#f0ece8]">
          Wade Kerzie
        </h1>
        <p className="mt-1 text-[#AABBCC]">Founder, Kerzie AI Solutions</p>
        <p className="mt-1 text-sm text-[#7d8ba0]">McKinney, Texas</p>

        <nav className="mt-9 flex w-full flex-col gap-3">
          {ACTIONS.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className={
                a.primary
                  ? "rounded-xl bg-[#7B9FE8] px-5 py-4 text-center font-semibold text-[#1A1B2E] transition-colors hover:bg-[#5A7FD6]"
                  : "rounded-xl border border-white/12 bg-white/[0.04] px-5 py-4 text-center font-medium text-[#f0ece8] transition-colors hover:bg-white/[0.08]"
              }
            >
              {a.label}
              {a.sub && (
                <span
                  className={
                    a.primary
                      ? "mt-0.5 block text-xs font-normal text-[#1A1B2E]/70"
                      : "mt-0.5 block text-xs font-normal text-[#7d8ba0]"
                  }
                >
                  {a.sub}
                </span>
              )}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setQrOpen(true)}
          className="mt-8 rounded-lg px-4 py-2 text-sm text-[#7d8ba0] underline underline-offset-4 transition-colors hover:text-[#AABBCC]"
        >
          Show my QR code
        </button>

        <p className="mt-10 text-center text-xs leading-relaxed text-[#5f6b7d]">
          Point any phone camera at the code. No app on either end.
        </p>
      </div>

      {qrOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Wade Kerzie contact QR code"
          onClick={() => setQrOpen(false)}
          className="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center bg-white p-8"
        >
          {/* Plain img, not next/image: this is a 1-bit PNG that must render
              at exactly its own pixels with no optimizer resampling, or the
              modules soften and slow the scan down. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/card-qr.svg"
            alt="QR code linking to kerzie.ai/card"
            className="h-auto w-full max-w-xs"
          />
          <p className="mt-6 text-center text-sm font-medium text-[#1A1B2E]">
            Wade Kerzie &middot; Kerzie AI Solutions
          </p>
          <p className="mt-1 text-center text-xs text-[#6b6560]">
            Tap anywhere to close
          </p>
        </div>
      )}
    </>
  );
}
