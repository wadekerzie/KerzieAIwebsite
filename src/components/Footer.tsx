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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="https://storage.googleapis.com/msgsndr/Dg5W9eZap2oolpBTgwTZ/media/6948b098aca6ab2c5901f57a.png"
              alt="Kerzie AI Logo"
              className="h-10 mb-4"
            />
            <p className="text-[var(--foreground-muted)] text-sm">
              Applied AI implementation and systems architecture for
              small-to-mid-size businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/unison" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  Unison Communications
                </Link>
              </li>
              <li>
                <Link href="/nemoclaw" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  NemoClaw Command Center
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-consulting" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  AI Consulting
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
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/zapier-partner" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  Zapier® Partner
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors text-sm">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-4">Get Started</h4>
            <p className="text-[var(--foreground-muted)] mb-4 text-sm">
              Ready to put AI to work in your business?
            </p>
            <Link href="/schedule" className="btn-primary text-sm px-5 py-2">
              <span>Book a Call</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="divider mt-8 mb-4" />
        <div className="flex flex-col items-center gap-4 text-sm text-[var(--foreground-muted)]">
          <p className="text-center">
            Kerzie AI Solutions (kerzie.ai) is a DBA of Kerzie Consulting LLC
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <p>&copy; {new Date().getFullYear()} Kerzie Consulting LLC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-[var(--accent-blue)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-[var(--accent-blue)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
