"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Our Work", href: "/ventures" },
  { label: "The People", href: "/team" },
  { label: "Work With Us", href: "/services" },
];

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
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="k-link text-[#AABBCC] text-sm font-medium hover:text-white transition-colors duration-200 k-focus"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/#whats-broken"
            className="hidden lg:inline-block k-btn-ghost !px-5 !py-2 k-focus"
          >
            Tell Us What Hurts
          </Link>

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
        <div className="lg:hidden bg-[#2D3154] w-full px-6 pt-6 pb-12 border-t border-[rgba(170,187,204,0.13)]">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-medium k-focus"
              >
                <span className="k-mono text-[#E8896A] text-xs mr-4 align-middle">
                  0{i + 1}
                </span>
                {link.label}
              </Link>
            ))}
            <Link
              href="/#whats-broken"
              onClick={() => setMobileOpen(false)}
              className="k-btn-ghost self-start mt-2 k-focus"
            >
              Tell Us What Hurts
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
