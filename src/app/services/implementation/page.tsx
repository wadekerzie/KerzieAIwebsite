import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Implementation | Kerzie AI Services",
  description:
    "Kerzie AI embeds AI into your business operations end-to-end. From workflow analysis to live production deployment.",
};

export default function ImplementationPage() {
  /* <!-- STUB: expand with final copy --> */
  return (
    <>
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge mb-6 inline-flex">AI Implementation</div>
            <h1 className="heading-xl mb-4 animate-fade-in-up">AI Implementation</h1>
            <p className="text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
              We embed AI into your business operations end-to-end. Workflow analysis, system
              design, build, and live production deployment. No slide decks. No proofs of concept.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <Link href="/schedule" className="btn-primary btn-lg">
                <span>
                  Book a Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </Link>
              <Link href="/services" className="btn-secondary btn-lg">
                <span>All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-compact section-blush">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to put AI to work?</h2>
          <Link href="/schedule" className="btn-primary btn-lg">
            <span>
              Book a Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
