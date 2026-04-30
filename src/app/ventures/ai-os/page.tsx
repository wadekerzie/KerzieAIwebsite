import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Operating System | Kerzie AI Ventures",
  description:
    "A small business AI operating system built AI-native from day one. Coming soon from Kerzie AI.",
};

export default function AiOsPage() {
  /* <!-- STUB: expand with final copy --> */
  return (
    <>
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-[var(--background-secondary)] text-[var(--foreground-muted)] text-xs font-medium px-3 py-1 rounded-full mb-6">
              Coming Soon
            </span>
            <h1 className="heading-xl mb-4 animate-fade-in-up">AI Operating System</h1>
            <p className="text-xl text-[var(--foreground-muted)] mb-4 max-w-2xl mx-auto animate-fade-in-up delay-100">
              A small business AI operating system built AI-native from day one.
            </p>
            <p className="text-lg text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Connecting your tools, your team, and your data into a single AI-native layer.
              Designed around how AI works, not how legacy software works.
            </p>

            {/* <!-- STUB: wire email capture to GHL when AI OS page is finalized --> */}
            <div className="animate-fade-in-up delay-300">
              <a
                href="mailto:wade@kerzie.ai?subject=AI%20Operating%20System%20Interest"
                className="btn-primary btn-lg"
              >
                <span>
                  Get Early Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-compact section-blush">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-6">Explore What We Have Live Today</h2>
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
