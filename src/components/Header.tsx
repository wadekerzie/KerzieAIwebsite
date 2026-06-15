"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Work", href: "/ventures", anchor: false },
  { label: "The People", href: "/team", anchor: false },
  { label: "Work With Us", href: "https://kerzie.ai/schedule", anchor: false },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2D3154]">
      <div className="px-6 lg:px-10">
        <div className="flex items-center justify-between h-14 lg:h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="https://storage.googleapis.com/msgsndr/Dg5W9eZap2oolpBTgwTZ/media/6948b098aca6ab2c5901f57a.png"
              alt="Kerzie AI Logo"
              className="h-8 md:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.anchor ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#AABBCC] text-sm font-medium no-underline hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#AABBCC] text-sm font-medium no-underline hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("whats-broken")}
            className="hidden lg:block border border-[#6B9FD4] text-[#6B9FD4] text-sm font-medium px-5 py-2 hover:bg-[#6B9FD4] hover:text-[#1A1B2E] transition-all duration-200 ease-in-out"
          >
            Tell Us What Hurts
          </button>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-[#6B9FD4]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#2D3154] w-full px-6 pt-4 pb-10">
          <nav className="flex flex-col gap-7">
            <Link
              href="/ventures"
              onClick={() => setMobileOpen(false)}
              className="text-[#AABBCC] text-lg font-medium no-underline hover:text-white transition-colors duration-200"
            >
              Our Work
            </Link>
            <Link
              href="/team"
              onClick={() => setMobileOpen(false)}
              className="text-[#AABBCC] text-lg font-medium no-underline hover:text-white transition-colors duration-200"
            >
              The People
            </Link>
            <a
              href="https://kerzie.ai/schedule"
              onClick={() => setMobileOpen(false)}
              className="text-[#AABBCC] text-lg font-medium no-underline hover:text-white transition-colors duration-200"
            >
              Work With Us
            </a>
            <button
              onClick={() => scrollTo("whats-broken")}
              className="self-start border border-[#6B9FD4] text-[#6B9FD4] text-sm font-medium px-5 py-2 hover:bg-[#6B9FD4] hover:text-[#1A1B2E] transition-all duration-200 ease-in-out"
            >
              Tell Us What Hurts
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
