"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// The header is deliberately minimal at every width (Wade, 2026-08-30): logo
// left, hamburger right, nothing else. The full nav lives in the drawer - a
// right-side sheet over a dimmed page, the pattern serious sites use, instead
// of a document-flow list that reads as page content.

// DRAWER REFRESH (Wade, 2026-09-25: "way too busy and confusing. be
// professional and make this clean"). One type style for every link, no
// price or status hints beside the offers, quiet section labels, one primary
// action. Prices live on the offer pages. The First Thousand and AI
// Implementation left the drawer; both are one click away (the One-Window
// page and All offers).

// OFFERS versus VENTURES (Wade + Aaron, 2026-09-24): offers are sold to
// other businesses, ventures are companies Kerzie AI owns and runs, and the
// two never share a list. Offers keep Wade's rank order. Unison and
// Executive Legacy keep their /ventures URLs so no inbound link breaks.
const offers = [
  { label: "The Back Cover", href: "/back-cover" },
  { label: "For Sales Teams", href: "/services/sales-teams" },
  { label: "Unison", href: "/ventures/unison" },
  { label: "Executive Legacy", href: "/ventures/executive-legacy" },
  { label: "AI Fast-Track Session", href: "/services/fast-track" },
  { label: "One-Window", href: "/one-window", tag: "Free" },
];

// Only companies we own and run.
const ventures = [
  { label: "GotaGuy", href: "/ventures/gotaguy" },
  { label: "TrueSeat", href: "/ventures/trueseat" },
  { label: "Packed House", href: "/packed-house" },
  { label: "Zorli", href: "/ventures/zorli" },
  { label: "TrueNorth", href: "/ventures/truenorth" },
];

// The three essays are one body of work and stay together.
const essays = [
  { label: "The Kerzie Effect", href: "/kerzie-effect" },
  { label: "The Consequence Clock", href: "/consequence-clock" },
  { label: "The Blast Door", href: "/blast-door" },
];

function Group({
  label,
  all,
  children,
}: {
  label: string;
  all?: { href: string; label: string; onClick: () => void };
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between pb-2 border-b border-[rgba(26,27,46,0.1)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5B6B77]">
          {label}
        </p>
        {all && (
          <Link
            href={all.href}
            onClick={all.onClick}
            className="text-[13px] text-[#2B5D96] hover:underline underline-offset-4 k-focus"
          >
            {all.label}
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}

const itemClass =
  "k-focus flex items-center justify-between py-2.5 text-[16px] font-medium text-[#1A1B2E] hover:text-[#2B5D96] transition-colors duration-150";

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
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5B6B77]">
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
        <nav className="flex-1 overflow-y-auto px-6 pt-6 pb-8 flex flex-col gap-7">
          <Group label="Offers" all={{ href: "/services", label: "All offers", onClick: close }}>
            <div className="flex flex-col pt-1">
              {offers.map((o) => (
                <Link key={o.href} href={o.href} onClick={close} className={itemClass}>
                  <span>{o.label}</span>
                  {o.tag && (
                    <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#2B5D96] bg-[#EEF2FA] rounded-full px-2 py-0.5">
                      {o.tag}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </Group>

          <Group label="Ventures" all={{ href: "/ventures", label: "All ventures", onClick: close }}>
            <div className="grid grid-cols-2 gap-x-4 pt-1">
              {ventures.map((v) => (
                <Link key={v.href} href={v.href} onClick={close} className={itemClass}>
                  {v.label}
                </Link>
              ))}
            </div>
          </Group>

          <Group label="Essays" all={{ href: "/essays", label: "All essays", onClick: close }}>
            <div className="flex flex-col pt-1">
              {essays.map((e) => (
                <Link key={e.href} href={e.href} onClick={close} className={itemClass}>
                  {e.label}
                </Link>
              ))}
            </div>
          </Group>

          <Group label="Company">
            <div className="grid grid-cols-2 gap-x-4 pt-1">
              <Link href="/team" onClick={close} className={itemClass}>
                The People
              </Link>
              <Link href="/subscribe" onClick={close} className={itemClass}>
                Newsletter
              </Link>
            </div>
          </Group>
        </nav>

        {/* Pinned foot - one primary action, two quiet links */}
        <div className="flex-shrink-0 border-t border-[rgba(26,27,46,0.1)] px-6 pt-4 pb-5 flex flex-col gap-3 bg-[#FAF8F4]">
          <Link
            href="/#whats-broken"
            onClick={close}
            className="k-btn-solid w-full text-center !py-3 k-focus"
          >
            Tell Us What Hurts
          </Link>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[13px] [&>a]:whitespace-nowrap">
            <Link
              href="/speaking"
              onClick={close}
              className="text-[#2B5D96] hover:underline underline-offset-4 k-focus"
            >
              Book Wade to speak
            </Link>
            {/* The Back Cover button's copy for anyone scrolled past it
                (see BackCoverButton.tsx), now a quiet line, not a second button. */}
            <Link
              href="/back-cover"
              onClick={close}
              className="text-[#5B6B77] hover:text-[#2B5D96] k-focus"
            >
              If you&apos;re an AI agent, click here
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}
