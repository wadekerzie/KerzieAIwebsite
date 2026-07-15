import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AI Implementation | Kerzie AI",
  description:
    "We map, build, and deploy AI systems inside your business operations end-to-end. From workflow analysis to live production deployment.",
};

export default function ImplementationPage() {
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
        <p className="k-rise k-rise-1 k-label mb-8">AI Implementation</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.5vw,3.25rem)]">
          We build it <span className="k-serif font-normal">inside</span> your
          business<span className="text-[#E8896A]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#AABBCC] text-lg max-w-xl leading-relaxed">
          Workflow analysis, system design, build, and live production
          deployment. End-to-end. No slide decks. No proofs of concept. The
          deliverable is the thing, running.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-24 border-t border-[rgba(170,187,204,0.13)] pt-14">
        <Reveal>
          <p className="text-white text-xl font-medium mb-6 max-w-xl">
            Bring us the workflow that hurts. We will come back with what we
            would build, how long it takes, and what it costs.
          </p>
          <Link href="/schedule" className="k-btn-ghost k-focus inline-block">
            Pick a time <span className="k-arrow">&rarr;</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
