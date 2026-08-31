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
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/services"
          className="k-mono text-[#262B3D]/70 text-xs tracking-[0.15em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; WORK WITH US
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-14">
        <p className="k-rise k-rise-1 k-label mb-8">AI Implementation</p>
        <h1 className="k-rise k-rise-2 text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.5vw,3.25rem)]">
          We build it <span className="k-serif font-normal">inside</span> your
          business<span className="text-[#B04E2B]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#262B3D] text-lg max-w-xl leading-relaxed">
          Workflow analysis, system design, build, and live production
          deployment. End-to-end. No slide decks. No proofs of concept. The
          deliverable is the thing, running.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/evidence/implementation-working.jpg"
            alt="A business owner working alone at her own desk in daylight, running the system herself"
            className="k-photo"
          />
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-24 border-t border-[rgba(26,27,46,0.13)] pt-14">
        <Reveal>
          <p className="text-[#262B3D] text-lg mb-4 max-w-xl">
            We only build things that make the technology disappear into the
            work. If it needs a training course afterward, we built the wrong
            thing.
          </p>
          <p className="text-[#1A1B2E] text-xl font-medium mb-6 max-w-xl">
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
