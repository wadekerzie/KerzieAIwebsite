import Link from "next/link";
import { ArrowRight, ExternalLink, Terminal, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NemoClaw / OpenClaw | Kerzie AI Services",
  description:
    "AI command center installation and strategy. NemoClaw deploys in one week for $22,500. OpenClaw covers enterprise AI architecture and strategy.",
};

export default function NemoClawService() {
  return (
    <>
      {/* Hero */}
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="badge mb-6 inline-flex">AI Command Center</div>
            <h1 className="heading-xl mb-4 animate-fade-in-up">
              NemoClaw / OpenClaw
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto animate-fade-in-up delay-100">
              AI command center installation and enterprise strategy. For companies ready to move
              now, not explore for 18 months.
            </p>
          </div>
        </div>
      </section>

      {/* Two Offerings */}
      <section className="section section-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* NemoClaw Install */}
            <div className="card card-hover flex flex-col justify-between">
              <div>
                <div className="icon-box-lg mb-4">
                  <Terminal className="w-6 h-6" />
                </div>
                <h2 className="heading-md mb-3">NemoClaw Install</h2>
                <p className="text-[var(--foreground-muted)] mb-4">
                  A full AI agent infrastructure deployed inside your business in one week.
                  On-site installation in DFW. Fixed scope. Flat fee.
                </p>
                <ul className="space-y-2 text-[var(--foreground-muted)] text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-blue)]">-</span>
                    1 week: strategy, install, and training
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-blue)]">-</span>
                    $22,500 flat fee, fixed scope
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-blue)]">-</span>
                    Runs on your infrastructure
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-blue)]">-</span>
                    On-site installation in DFW
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="/nemoclaw"
                  className="text-[var(--accent-blue)] text-sm font-semibold hover:underline flex items-center gap-1"
                >
                  Full NemoClaw Details <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/nemoclaw/construction"
                  className="text-[var(--foreground-muted)] text-sm hover:text-[var(--accent-blue)] transition-colors flex items-center gap-1"
                >
                  NemoClaw for Construction <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  href="/nemoclaw/logistics"
                  className="text-[var(--foreground-muted)] text-sm hover:text-[var(--accent-blue)] transition-colors flex items-center gap-1"
                >
                  NemoClaw for Logistics <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* OpenClaw Strategy */}
            <div className="card card-hover flex flex-col justify-between">
              <div>
                <div className="icon-box-lg mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h2 className="heading-md mb-3">OpenClaw Strategy</h2>
                {/* <!-- STUB: expand with final copy --> */}
                <p className="text-[var(--foreground-muted)] mb-4">
                  OpenClaw is the enterprise-grade AI command center strategy behind NemoClaw.
                  For companies outside DFW or with enterprise requirements, we offer OpenClaw
                  strategy advisory engagements.
                </p>
                <ul className="space-y-2 text-[var(--foreground-muted)] text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-blue)]">-</span>
                    Enterprise AI architecture and roadmap
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-blue)]">-</span>
                    Multi-department agent strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-blue)]">-</span>
                    Available nationally, not DFW-only
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--accent-blue)]">-</span>
                    Scoped per engagement
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  href="/schedule"
                  className="text-[var(--accent-blue)] text-sm font-semibold hover:underline flex items-center gap-1"
                >
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-compact section-blush">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-4">Ready to deploy an AI command center?</h2>
          <p className="text-xl text-[var(--foreground-muted)] mb-6 max-w-2xl mx-auto">
            One conversation is all it takes to know if you are a fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule" className="btn-primary btn-lg">
              <span>
                Book a Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
            <a href="/nemoclaw" className="btn-secondary btn-lg">
              <span>Full NemoClaw Details</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
