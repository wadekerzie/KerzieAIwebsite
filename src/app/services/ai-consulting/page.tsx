// STUB: expand with final copy
import Link from "next/link";
import { ArrowRight, BarChart3, Target, Brain, Settings } from "lucide-react";

export const metadata = {
  title: "AI Consulting & Implementation | Kerzie AI",
  description:
    "ROI-first AI strategy and systems architecture. We implement what we recommend—no slide decks, no 18-month discovery phases.",
};

export default function AIConsultingService() {
  return (
    <>
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge mb-6 inline-block">AI Consulting & Implementation</span>
            <h1 className="heading-xl mb-6">
              AI Strategy That{" "}
              <span className="text-gradient">Ships</span>
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto mb-6">
              We don&apos;t write reports about what AI could do for your business.
              We build the systems, deploy them, and measure the&nbsp;ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule" className="btn-primary btn-lg">
                <span>
                  Book a Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </Link>
              <Link href="/" className="btn-secondary btn-lg">
                <span>Back to Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="heading-lg mb-4">
                How We <span className="text-gradient">Work</span>
              </h2>
            </div>
            <div className="space-y-6">
              <div className="card card-hover flex items-start gap-6">
                <div className="icon-box flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Identify High-ROI Opportunities
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    We audit your operations to find where AI delivers the
                    fastest, most measurable return—not the most impressive
                    demo.
                  </p>
                </div>
              </div>
              <div className="card card-hover flex items-start gap-6">
                <div className="icon-box flex-shrink-0">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Design the Architecture
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    Systems architecture that fits your existing stack, your
                    team&apos;s capabilities, and your budget. No
                    over-engineering.
                  </p>
                </div>
              </div>
              <div className="card card-hover flex items-start gap-6">
                <div className="icon-box flex-shrink-0">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Build and Deploy
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    We implement what we recommend. Same team, same engagement.
                    No handoff to a separate dev shop.
                  </p>
                </div>
              </div>
              <div className="card card-hover flex items-start gap-6">
                <div className="icon-box flex-shrink-0">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Measure and Optimize
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    Every deployment gets measured against the ROI targets we
                    set together. If it doesn&apos;t move the needle, we adjust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-compact section-blush">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-4 text-[var(--foreground)]">
            Ready for an AI Strategy That Actually Ships?
          </h2>
          <p className="text-xl text-[var(--foreground)] opacity-80 mb-6 max-w-2xl mx-auto">
            Schedule a discovery call and we&apos;ll show you where AI fits in
            your operation—and what ROI to expect.
          </p>
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
