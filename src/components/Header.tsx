"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NavChild = { label: string; href: string; hint?: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  {
    label: "Our Work",
    href: "/ventures",
    children: [
      { label: "GotaGuy", href: "/ventures/gotaguy" },
      { label: "Unison", href: "/ventures/unison" },
      { label: "TrueSeat", href: "/ventures/trueseat" },
      { label: "Zorli", href: "/ventures/zorli" },
      { label: "Ad2Action", href: "/ventures/ad2action" },
      { label: "Executive Legacy", href: "/ventures/executive-legacy" },
      { label: "TrueNorth", href: "/ventures/truenorth" },
      { label: "AI Operating System", href: "/ventures/ai-os" },
    ],
  },
  { label: "The People", href: "/team" },
  {
    label: "Work With Us",
    href: "/services",
    children: [
      { label: "The One-Window Setup", href: "/one-window", hint: "$99" },
      { label: "AI Fast-Track Session", href: "/services/fast-track", hint: "$750" },
      { label: "AI Implementation", href: "/services/implementation", hint: "Scoped" },
      { label: "For Sales Teams", href: "/services/sales-teams", hint: "Book a call" },
    ],
  },
];

function Caret() {
  return (
    <svg
      className="w-3 h-3 opacity-60 transition-transform duration-200 group-hover:rotate-180"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#2D3154] transition-shadow duration-300"
      style={{
        boxShadow: scrolled ? "0 1px 0 rgba(170,187,204,0.13)" : "none",
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

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <Link
                    href={link.href}
                    className="k-link inline-flex items-center gap-1.5 text-[#AABBCC] text-sm font-medium hover:text-white transition-colors duration-200 k-focus"
                    aria-haspopup="true"
                  >
                    {link.label}
                    <Caret />
                  </Link>

                  {/* Dropdown */}
                  <div className="absolute left-0 top-full pt-3 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 transition-all duration-200">
                    <div
                      className={`bg-[#2D3154] border border-[rgba(170,187,204,0.13)] rounded-lg shadow-xl shadow-black/40 p-2 ${
                        link.children.length > 5
                          ? "grid grid-cols-2 gap-x-1 w-[32rem]"
                          : "flex flex-col w-72"
                      }`}
                    >
                      {link.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="flex items-center justify-between gap-6 rounded-md px-3 py-2 text-[#AABBCC] hover:text-white hover:bg-[rgba(170,187,204,0.08)] transition-colors duration-150 k-focus"
                        >
                          <span className="text-sm font-medium">{c.label}</span>
                          {c.hint && (
                            <span className="k-mono text-[#E8896A] text-[10px] tracking-[0.12em] flex-shrink-0">
                              {c.hint}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="k-link text-[#AABBCC] text-sm font-medium hover:text-white transition-colors duration-200 k-focus"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/#whats-broken"
              className="k-btn-ghost !px-5 !py-2 k-focus"
            >
              Tell Us What Hurts
            </Link>
            <Link
              href="/speaking"
              className="k-btn-solid !px-5 !py-2 k-focus"
            >
              Book Wade
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-[#6B9FD4] k-focus"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M2 6.5H20M2 15.5H20" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#2D3154] w-full px-6 pt-6 pb-12 border-t border-[rgba(170,187,204,0.13)] max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-2xl font-medium k-focus flex items-baseline"
                >
                  <span className="k-mono text-[#E8896A] text-xs mr-4 align-middle">
                    0{i + 1}
                  </span>
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mt-4 ml-10 flex flex-col gap-4">
                    {link.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-[#AABBCC] text-lg k-focus flex items-center justify-between gap-4"
                      >
                        <span>{c.label}</span>
                        {c.hint && (
                          <span className="k-mono text-[#E8896A] text-[10px] tracking-[0.12em] flex-shrink-0">
                            {c.hint}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/#whats-broken"
              onClick={() => setMobileOpen(false)}
              className="k-btn-ghost self-start mt-2 k-focus"
            >
              Tell Us What Hurts
            </Link>
            <Link
              href="/speaking"
              onClick={() => setMobileOpen(false)}
              className="k-btn-solid self-start k-focus"
            >
              Book Wade
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
