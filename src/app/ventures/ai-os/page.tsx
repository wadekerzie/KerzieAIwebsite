import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AI Operating System | Kerzie AI Ventures",
  description:
    "A small business AI operating system built AI-native from day one. Coming soon from Kerzie AI.",
};

export default function AiOsPage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#AABBCC]/70 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#E8896A]">.</span>AI
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-20">
        <p className="k-rise k-rise-1 mb-8">
          <span className="inline-block k-mono text-[#E8896A] text-[11px] tracking-[0.18em] uppercase border border-[rgba(232,137,106,0.35)] rounded-full px-3 py-1">
            Coming Soon
          </span>
        </p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
          AI Operating System<span className="text-[#E8896A]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#AABBCC] text-lg lg:text-xl max-w-2xl leading-relaxed">
          A small business AI operating system built{" "}
          <span className="k-serif font-normal">AI-native from day one</span>.
        </p>
        <p className="k-rise k-rise-3 mt-4 text-[#AABBCC] text-lg max-w-2xl leading-relaxed">
          Connecting your tools, your team, and your data into a single AI-native
          layer. Designed around how AI works, not how legacy software works.
        </p>

        {/* STUB: wire email capture to GHL when the AI OS page is finalized */}
        <div className="k-rise k-rise-4 mt-10">
          <a
            href="mailto:wade@kerzie.ai?subject=AI%20Operating%20System%20Interest"
            className="k-btn-solid k-focus inline-block"
          >
            Get early access <span className="k-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* Explore live ventures */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(170,187,204,0.13)]">
        <Reveal>
          <p className="text-white text-xl font-medium mb-6 max-w-xl">
            While this one is still in the shop,{" "}
            <span className="k-serif font-normal">
              see what we already have live today
            </span>
            .
          </p>
          <Link href="/ventures" className="k-btn-ghost k-focus inline-block">
            See all ventures <span className="k-arrow">&rarr;</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
