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
      <div className="container mx-auto pb-12 lg:pb-16" style={{ paddingTop: '3rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="https://storage.googleapis.com/msgsndr/Dg5W9eZap2oolpBTgwTZ/media/6948b098aca6ab2c5901f57a.png"
              alt="Kerzie AI Logo"
              className="h-10 mb-4"
            />
            <p className="text-[var(--foreground-muted)] max-w-sm">
              AI-powered customer communication that works 24/7. One knowledge base, every channel, instant answers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/how-it-works" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/try-unison" className="font-bold text-gradient hover:brightness-110 transition-all">
                  Try Unison
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/zapier-partner" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors">
                  Zapier Partner
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-[var(--foreground-muted)] hover:text-[var(--accent-blue)] transition-colors">
                  Book Your Setup Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-4">Get Started</h4>
            <p className="text-[var(--foreground-muted)] mb-4">
              Ready to transform your customer communications?
            </p>
            <Link href="/schedule" className="btn-primary text-sm px-5 py-2">
              <span>Book Your Setup Call</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="divider mt-12 mb-6" />
        <div className="flex flex-col items-center gap-4 text-sm text-[var(--foreground-muted)]">
          {/* DBA Statement */}
          <p className="text-center">
            Kerzie AI Solutions (kerzie.ai) is a DBA of Kerzie Consulting LLC
          </p>
          {/* Copyright and Links */}
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

