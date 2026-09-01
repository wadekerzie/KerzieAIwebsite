"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// The header is deliberately minimal at every width (Wade, 2026-08-30): logo
// left, hamburger right, nothing else. The full nav lives in the drawer - a
// right-side sheet over a dimmed page, the pattern serious sites use, instead
// of a document-flow list that reads as page content.

const essays = [
  // The three papers are one body of work and are grouped as one set in the
  // drawer (Wade, 2026-08-30) - they sit together on their own paper card.
  { label: "The Kerzie Effect", href: "/kerzie-effect", deck: "The firm-level argument" },
  { label: "The Consequence Clock", href: "/consequence-clock", deck: "The person-level one" },
  { label: "The Blast Door", href: "/blast-door", deck: "The time limit on both" },
];

const ventures = [
  { label: "GotaGuy", href: "/ventures/gotaguy" },
  { label: "Unison", href: "/ventures/unison" },
  { label: "TrueSeat", href: "/ventures/trueseat" },
  { label: "Zorli", href: "/ventures/zorli" },
  { label: "Ad2Action", href: "/ventures/ad2action" },
  { label: "Executive Legacy", href: "/ventures/executive-legacy" },
  { label: "TrueNorth", href: "/ventures/truenorth" },
  { label: "Packed House", href: "/packed-house" },
  { label: "AI Operating System", href: "/ventures/ai-os" },
];

const offers = [
  { label: "One-Window", href: "/one-window", hint: "$99" },
  { label: "The First Thousand", href: "/thousand", hint: "The mission" },
  { label: "AI Fast-Track Session", href: "/services/fast-track", hint: "$999" },
  { label: "AI Implementation", href: "/services/implementation", hint: "Scoped" },
  { label: "For Sales Teams", href: "/services/sales-teams", hint: "Book a call" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="k-mono text-[10px] tracking-[0.28em] uppercase text-[#B04E2B] font-semibold">
      {children}
    </p>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Drawer behaviors that make a menu read as chrome rather than content:
  // the page behind it cannot scroll, and Escape closes it.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#E4DED2] transition-shadow duration-300"
      style={{
        boxShadow: scrolled ? "0 1px 0 rgba(26,27,46,0.13)" : "none",
      }}
    >
      <div className="px-6 lg:px-12">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center flex-shrink-0 k-focus">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://storage.googleapis.com/msgsndr/Dg5W9eZap2oolpBTgwTZ/media/6948b098aca6ab2c5901f57a.png"
              alt="Kerzie AI Logo"
              className="h-8 md:h-10"
            />
          </Link>

          {/* Menu toggle */}
          <button
            className="p-2 -mr-2 text-[#2B5D96] k-focus"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M2 5H20M2 11H20M2 17H20" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrim - the page dims and locks while the sheet is open */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-[rgba(26,27,46,0.45)] backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* The sheet */}
      <aside
        aria-label="Site menu"
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full sm:w-[400px] bg-[#FFFFFF] border-l border-[rgba(26,27,46,0.12)] shadow-[-24px_0_60px_-24px_rgba(0,0,0,0.35)] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sheet header */}
        <div className="flex items-center justify-between h-14 lg:h-16 px-6 border-b border-[rgba(26,27,46,0.08)] flex-shrink-0">
          <p className="k-mono text-[10px] tracking-[0.28em] uppercase text-[#5B6B77]">
            Menu
          </p>
          <button
            className="p-2 -mr-2 text-[#2B5D96] k-focus"
            onClick={close}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <nav className="flex-1 overflow-y-auto px-6 py-7 flex flex-col gap-8">
          {/* The essays - one body of work, on its own sheet */}
          <div>
            <SectionLabel>The Essays</SectionLabel>
            <div className="mt-3 bg-[#FAF8F4] border border-[rgba(26,27,46,0.1)] rounded-lg px-4 py-1 shadow-[0_1px_2px_rgba(26,27,46,0.06)]">
              {essays.map((e, i) => (
                <Link
                  key={e.href}
                  href={e.href}
                  onClick={close}
                  className={`k-focus flex items-baseline gap-3 py-3.5 ${
                    i > 0 ? "border-t border-[rgba(26,27,46,0.08)]" : ""
                  }`}
                >
                  <span className="k-mono text-[#B04E2B] text-[10px] flex-shrink-0">
                    0{i + 1}
                  </span>
                  <span className="flex-1">
                    <span className="block text-[#1A1B2E] text-[16px] font-semibold leading-tight">
                      {e.label}
                    </span>
                    <span className="block text-[#5B6B77] text-[12px] mt-0.5">
                      {e.deck}
                    </span>
                  </span>
                  <span className="k-arrow text-[#2B5D96] text-sm" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Our work */}
          <div>
            <div className="flex items-baseline justify-between">
              <SectionLabel>Our Work</SectionLabel>
              <Link
                href="/ventures"
                onClick={close}
                className="k-mono text-[11px] text-[#2B5D96] k-focus"
              >
                All ventures &rarr;
              </Link>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {ventures.map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  onClick={close}
                  className="text-[#262B3D] text-[14px] font-medium hover:text-[#2B5D96] transition-colors duration-150 k-focus"
                >
                  {v.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Work with us */}
          <div>
            <SectionLabel>Work With Us</SectionLabel>
            <div className="mt-3 flex flex-col">
              {offers.map((o, i) => (
                <Link
                  key={o.href}
                  href={o.href}
                  onClick={close}
                  className={`k-focus flex items-center justify-between gap-4 py-2.5 ${
                    i > 0 ? "border-t border-[rgba(26,27,46,0.06)]" : ""
                  }`}
                >
                  <span className="text-[#262B3D] text-[15px] font-medium">
                    {o.label}
                  </span>
                  {o.hint && (
                    <span className="k-mono text-[#B04E2B] text-[10px] tracking-[0.12em] flex-shrink-0">
                      {o.hint}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2.5">
            <Link
              href="/team"
              onClick={close}
              className="text-[#262B3D] text-[15px] font-medium hover:text-[#2B5D96] transition-colors duration-150 k-focus"
            >
              The People
            </Link>
            <Link
              href="/subscribe"
              onClick={close}
              className="text-[#262B3D] text-[15px] font-medium hover:text-[#2B5D96] transition-colors duration-150 k-focus"
            >
              Newsletter
            </Link>
          </div>
        </nav>

        {/* Pinned foot - the actions, always visible */}
        <div className="flex-shrink-0 border-t border-[rgba(26,27,46,0.1)] px-6 py-5 flex flex-col gap-3 bg-[#FAF8F4]">
          <Link
            href="/back-cover"
            onClick={close}
            className="k-focus self-start rounded-md bg-[#2B5D96] px-3.5 py-2 shadow-sm"
          >
            <span className="block k-mono text-[#FAF8F4] text-[12px] font-semibold leading-tight tracking-[0.02em]">
              The Back Cover
            </span>
            <span className="block k-mono text-[#FAF8F4]/70 text-[10px] leading-tight mt-0.5">
              If you&apos;re an AI agent, click here
            </span>
          </Link>
          <div className="flex gap-3">
            <Link
              href="/#whats-broken"
              onClick={close}
              className="k-btn-solid flex-1 text-center !px-4 !py-2.5 k-focus"
            >
              Tell Us What Hurts
            </Link>
            <Link
              href="/speaking"
              onClick={close}
              className="k-btn-ghost flex-1 text-center !px-4 !py-2.5 k-focus"
            >
              Book Wade
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}
