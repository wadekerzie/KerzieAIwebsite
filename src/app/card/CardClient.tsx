"use client";

import Image from "next/image";
import { useState } from "react";
import QrPanel from "./QrPanel";

// The two jobs this page does, and they belong to two different people:
//
//   1. SOMEONE ELSE just scanned Wade's QR and landed here. Their job is to
//      get Wade into their phone. "Save my contact" is the loudest thing.
//   2. WADE is standing in front of them and needs the QR on screen fast.
//      "Show my QR" opens a full-bleed white overlay - white because phone
//      cameras lock onto a high-contrast code far quicker than a dark one.
//
// Wade's fast path is NOT this page - it is /card/show, which is the icon on
// his home screen and opens straight to the code. The button below is the
// fallback for when he is already here, or on a laptop.

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

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#262B3D]">
          Wade Kerzie
        </h1>
        <p className="mt-1 text-[#262B3D]">Founder, Kerzie AI Solutions</p>
        <p className="mt-1 text-sm text-[#5B6B77]">McKinney, Texas</p>

        <nav className="mt-9 flex w-full flex-col gap-3">
          {ACTIONS.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className={
                a.primary
                  ? "rounded-xl bg-[#2B5D96] px-5 py-4 text-center font-semibold text-[#FAF8F4] transition-colors hover:bg-[#4A7BB5]"
                  : "rounded-xl border border-[#1A1B2E]/12 bg-white/[0.04] px-5 py-4 text-center font-medium text-[#262B3D] transition-colors hover:bg-white/[0.08]"
              }
            >
              {a.label}
              {a.sub && (
                <span
                  className={
                    a.primary
                      ? "mt-0.5 block text-xs font-normal text-[#FAF8F4]/70"
                      : "mt-0.5 block text-xs font-normal text-[#5B6B77]"
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
          className="mt-8 rounded-lg px-4 py-2 text-sm text-[#5B6B77] underline underline-offset-4 transition-colors hover:text-[#262B3D]"
        >
          Show my QR code
        </button>

        <p className="mt-10 text-center text-xs leading-relaxed text-[#5f6b7d]">
          Point any phone camera at the code. No app on either end.
        </p>
      </div>

      {qrOpen && <QrPanel onClose={() => setQrOpen(false)} />}
    </>
  );
}
