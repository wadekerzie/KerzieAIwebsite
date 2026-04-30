import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Training | Kerzie AI Services",
  description:
    "Hands-on AI training for teams and leadership. Kerzie AI upskills your people so AI becomes a competitive advantage.",
};

export default function TrainingPage() {
  /* <!-- STUB: expand with final copy --> */
  return (
    <>
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge mb-6 inline-flex">AI Training</div>
            <h1 className="heading-xl mb-4 animate-fade-in-up">AI Training</h1>
            <p className="text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Hands-on AI training for teams and leadership. We upskill your people so AI becomes
              a competitive advantage, not a liability.
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
