"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/zapier-partner", label: "Zapier Partner" },
];

const scoutLink = {
  href: "https://kerzieconsulting.com/ai-scout-opportunity",
  label: "Become an Applied AI Scout",
  external: true,
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Logo section with warm blush background */}
      <div style={{ backgroundColor: '#f0d5c4' }} className="py-4 px-4 lg:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="https://storage.googleapis.com/msgsndr/Dg5W9eZap2oolpBTgwTZ/media/6948b098aca6ab2c5901f57a.png"
              alt="Kerzie AI Logo"
              className="h-12 md:h-14"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#3d2c29]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation bar - light warm theme */}
      <div className="hidden lg:block bg-white border-b border-[var(--border)] shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Navigation */}
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? "nav-link-active" : ""
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={scoutLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link font-semibold text-gradient hover:brightness-110 hover:scale-105 transition-all"
              >
                {scoutLink.label}
              </a>
            </nav>

            {/* CTA Button */}
            <Link href="/schedule" className="btn-primary text-sm px-6 py-2.5">
              <span>Book Your Setup Call</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[var(--border)] shadow-md animate-fade-in">
          <div className="container mx-auto py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-lg ${pathname === link.href ? "nav-link-active" : ""
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={scoutLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-lg font-semibold text-gradient hover:brightness-110 hover:scale-105 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {scoutLink.label}
              </a>
              <div className="pt-4 mt-2 border-t border-[var(--border)]">
                <Link
                  href="/schedule"
                  className="btn-primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Book Your Setup Call</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
