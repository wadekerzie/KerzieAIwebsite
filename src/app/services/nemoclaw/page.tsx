import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "NemoClaw / OpenClaw | Kerzie AI",
  description:
    "AI command center installation and strategy. NemoClaw deploys in one week for $22,500. OpenClaw covers enterprise AI architecture and strategy.",
};

export default function NemoClawService() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/services"
          className="k-mono text-[#AABBCC]/70 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200 k-focus"
        >
          &larr; WORK WITH US
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-14">
        <p className="k-rise k-rise-1 k-label mb-8">AI Command Center</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.5vw,3.25rem)]">
          NemoClaw <span className="k-serif font-normal">and</span> OpenClaw
          <span className="text-[#E8896A]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#AABBCC] text-lg max-w-xl leading-relaxed">
          AI command center installation and enterprise strategy. For companies
          ready to move now, not explore for 18 months.
        </p>
      </section>

      {/* NemoClaw Install */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3 mb-4 lg:mb-0">
              <p className="k-label">01 &mdash; Install</p>
              <p className="k-mono text-[#E8896A] text-xs tracking-[0.15em] mt-3">
                $22,500 flat
              </p>
            </div>
            <div className="lg:col-span-9 max-w-2xl">
              <h2 className="text-white text-2xl font-bold tracking-tight mb-3">
                NemoClaw Install
              </h2>
              <p className="text-[#AABBCC] text-lg leading-relaxed mb-5">
                A full AI agent infrastructure deployed inside your business in
                one week. On-site installation in DFW. Fixed scope. Flat fee.
                Runs on your infrastructure.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "One week: strategy, install, and hands-on enablement.",
                  "$22,500 flat fee, fixed scope.",
                  "Runs on your infrastructure.",
                  "On-site installation in DFW.",
                ].map((t) => (
                  <li
                    key={t}
                    className="border-l border-[#E8896A] pl-5 text-[#AABBCC] leading-relaxed"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="/nemoclaw" className="k-link k-focus text-[#6B9FD4] font-medium">
                  Full NemoClaw details <span className="k-arrow">&rarr;</span>
                </a>
                <Link
                  href="/nemoclaw/construction"
                  className="k-link k-focus text-[#AABBCC] font-medium"
                >
                  For construction <span className="k-arrow">&rarr;</span>
                </Link>
                <Link
                  href="/nemoclaw/logistics"
                  className="k-link k-focus text-[#AABBCC] font-medium"
                >
                  For logistics <span className="k-arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* OpenClaw Strategy */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3 mb-4 lg:mb-0">
              <p className="k-label">02 &mdash; Strategy</p>
              <p className="k-mono text-[#E8896A] text-xs tracking-[0.15em] mt-3">
                Scoped per engagement
              </p>
            </div>
            <div className="lg:col-span-9 max-w-2xl">
              <h2 className="text-white text-2xl font-bold tracking-tight mb-3">
                OpenClaw Strategy
              </h2>
              <p className="text-[#AABBCC] text-lg leading-relaxed mb-5">
                OpenClaw is the enterprise-grade AI command center strategy
                behind NemoClaw. For companies outside DFW or with enterprise
                requirements: architecture, roadmap, and multi-department agent
                strategy. Available nationally.
              </p>
              <Link href="/schedule" className="k-link k-focus text-[#6B9FD4] font-medium">
                Book a strategy call <span className="k-arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Closer */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-24 border-t border-[rgba(170,187,204,0.13)] pt-14">
        <Reveal>
          <p className="text-white text-xl font-medium mb-6 max-w-xl">
            One conversation is all it takes to know{" "}
            <span className="k-serif font-normal">if you are a fit</span>.
          </p>
          <Link href="/schedule" className="k-btn-ghost k-focus inline-block">
            Pick a time <span className="k-arrow">&rarr;</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
