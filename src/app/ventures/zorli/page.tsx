import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zorli | Kerzie AI Ventures",
  description: "Zorli is an AI-powered consumer app by Kerzie AI, available on the Apple App Store.",
};

export default function ZorliPage() {
  /* <!-- STUB: expand with final copy --> */
  return (
    <>
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge mb-6 inline-flex">
              <span className="bg-[var(--background-accent)] text-[var(--accent-blue)] text-xs font-medium px-2 py-1 rounded-full">
                Live on App Store
              </span>
            </span>
            <h1 className="heading-xl mb-4 animate-fade-in-up">Zorli</h1>
            <p className="text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
              AI-powered consumer app, now available on the Apple App Store.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <a
                href="https://apps.apple.com/us/app/zorli-ai-vault/id6757083833"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg"
              >
                <span>
                  Download on the App Store
                  <ExternalLink className="w-5 h-5 ml-2" />
                </span>
              </a>
              <Link href="/schedule" className="btn-secondary btn-lg">
                <span>Book a Call</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-compact section-blush">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-6">More from Kerzie AI</h2>
          <Link href="/ventures" className="btn-secondary btn-lg">
            <span>
              See All Ventures
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
