import Link from "next/link";
import Script from "next/script";

export default function Footer() {
  return (
    <footer className="bg-[var(--background-secondary)] border-t border-[var(--border)]">
      {/* GHL Chat Widget */}
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6963fcc35c8c5be17f8f0a9d"
        strategy="lazyOnload"
      />
      <div className="container mx-auto py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="https://storage.googleapis.com/msgsndr/Dg5W9eZap2oolpBTgwTZ/media/6948b098aca6ab2c5901f57a.png"
              alt="Kerzie AI Logo"
              className="h-10 mb-3"
            />
            <p className="text-[var(--foreground-muted)] text-sm italic">
              AI-powered everything.
            </p>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-4">Ventures</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/ventures/unison" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  Unison
                </Link>
              </li>
              <li>
                <Link href="/ventures/zorli" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  Zorli
                </Link>
              </li>
              <li>
                <Link href="/ventures/gotaguy" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  GotaGuy
                </Link>
              </li>
              <li>
                <Link href="/services/nemoclaw" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  NemoClaw / OpenClaw
                </Link>
              </li>
              <li>
                <Link href="/ventures/ai-os" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  AI Operating System
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link href="/services/implementation" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  AI Implementation
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  AI Training
                </Link>
              </li>
              <li>
                <Link href="/services/nemoclaw" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  NemoClaw
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/zapier-partner" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  Zapier Partner
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="divider mt-8 mb-4" />
        <div className="flex flex-col items-center gap-3 text-sm text-[var(--foreground-muted)]">
          <p className="text-center">
            Kerzie AI Solutions is a DBA of Kerzie Consulting LLC
          </p>
          <p>&copy; {new Date().getFullYear()} Kerzie Consulting LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
