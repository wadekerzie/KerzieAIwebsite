"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const ventureLinks = [
  { href: "/ventures/unison", label: "Unison" },
  { href: "/ventures/zorli", label: "Zorli" },
  { href: "/ventures/gotaguy", label: "GotaGuy" },
  { href: "/services/nemoclaw", label: "NemoClaw / OpenClaw" },
  { href: "/ventures/ai-os", label: "AI Operating System" },
];

const serviceMenuLinks = [
  { href: "/services", label: "Services Overview" },
  { href: "/services/implementation", label: "AI Implementation" },
  { href: "/services/training", label: "AI Training" },
  { href: "/services/nemoclaw", label: "NemoClaw" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [venturesOpen, setVenturesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileVenturesOpen, setMobileVenturesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const venturesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (venturesRef.current && !venturesRef.current.contains(event.target as Node)) {
        setVenturesOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileVenturesOpen(false);
    setMobileServicesOpen(false);
    setVenturesOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isVentureActive = pathname.startsWith("/ventures");
  const isServiceActive = pathname.startsWith("/services") || pathname === "/nemoclaw";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/80 backdrop-blur-md border-b border-[var(--border)] shadow-sm">
        <div className="container mx-auto">
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
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className={`nav-link ${pathname === "/" ? "nav-link-active" : ""}`}
              >
                Home
              </Link>

              {/* Ventures Dropdown */}
              <div ref={venturesRef} className="relative">
                <button
                  onClick={() => { setVenturesOpen(!venturesOpen); setServicesOpen(false); }}
                  className={`nav-link flex items-center gap-1 ${isVentureActive ? "nav-link-active" : ""}`}
                >
                  Ventures
                  <ChevronDown className={`w-4 h-4 transition-transform ${venturesOpen ? "rotate-180" : ""}`} />
                </button>
                {venturesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl border border-[var(--border)] shadow-lg overflow-hidden animate-fade-in z-50">
                    {ventureLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-5 py-3 text-sm transition-colors hover:bg-[var(--background-secondary)] ${
                          pathname === link.href
                            ? "text-[var(--accent-blue)] font-semibold bg-[var(--background-secondary)]"
                            : "text-[var(--foreground-muted)]"
                        }`}
                        onClick={() => setVenturesOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => { setServicesOpen(!servicesOpen); setVenturesOpen(false); }}
                  className={`nav-link flex items-center gap-1 ${isServiceActive ? "nav-link-active" : ""}`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl border border-[var(--border)] shadow-lg overflow-hidden animate-fade-in z-50">
                    {serviceMenuLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-5 py-3 text-sm transition-colors hover:bg-[var(--background-secondary)] ${
                          pathname === link.href
                            ? "text-[var(--accent-blue)] font-semibold bg-[var(--background-secondary)]"
                            : "text-[var(--foreground-muted)]"
                        }`}
                        onClick={() => setServicesOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`nav-link ${pathname === "/about" ? "nav-link-active" : ""}`}
              >
                About
              </Link>

              <Link
                href="/partner"
                className={`nav-link ${pathname === "/partner" ? "nav-link-active" : ""}`}
              >
                Partner With Us
              </Link>
            </nav>

            {/* Desktop CTA */}
            <Link href="/schedule" className="hidden lg:inline-flex btn-primary text-sm px-5 py-2">
              <span>Book a Call</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[var(--foreground)]"
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
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-[var(--border)] shadow-md animate-fade-in">
          <div className="container mx-auto py-4">
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                className={`nav-link text-lg ${pathname === "/" ? "nav-link-active" : ""}`}
              >
                Home
              </Link>

              {/* Mobile Ventures Accordion */}
              <button
                onClick={() => setMobileVenturesOpen(!mobileVenturesOpen)}
                className={`nav-link text-lg flex items-center justify-between w-full text-left ${isVentureActive ? "nav-link-active" : ""}`}
              >
                Ventures
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileVenturesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileVenturesOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  {ventureLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`nav-link text-base ${pathname === link.href ? "nav-link-active" : ""}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mobile Services Accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`nav-link text-lg flex items-center justify-between w-full text-left ${isServiceActive ? "nav-link-active" : ""}`}
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  {serviceMenuLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`nav-link text-base ${pathname === link.href ? "nav-link-active" : ""}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/about"
                className={`nav-link text-lg ${pathname === "/about" ? "nav-link-active" : ""}`}
              >
                About
              </Link>

              <Link
                href="/partner"
                className={`nav-link text-lg ${pathname === "/partner" ? "nav-link-active" : ""}`}
              >
                Partner With Us
              </Link>

              <div className="pt-4 mt-2 border-t border-[var(--border)]">
                <Link
                  href="/schedule"
                  className="btn-primary w-full text-center"
                >
                  <span>Book a Call</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
