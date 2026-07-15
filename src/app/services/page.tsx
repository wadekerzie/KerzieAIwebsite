import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work With Us | Kerzie AI",
  description:
    "Two ways to work with Kerzie AI: the AI Fast-Track Session and end-to-end AI implementation.",
};

const offers = [
  {
    label: "01",
    title: "AI Fast-Track Session",
    price: "$750 flat",
    body: "Three hours at your computer, in your business, on your own $20 AI subscription. One painful workflow moved from manual to working before we are done. You leave with it working.",
    href: "/services/fast-track",
    cta: "Read how it works",
  },
  {
    label: "02",
    title: "AI Implementation",
    price: "Scoped per project",
    body: "We map, build, and deploy AI systems inside your business operations end-to-end. From workflow analysis to live production deployment. No slide decks. No proofs of concept. And if you are already running an AI agent you are not sure you can trust, that is an implementation problem too. Bring it to us.",
    href: "/services/implementation",
    cta: "What we build",
  },
];

export default function ServicesPage() {
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

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-14">
        <p className="k-rise k-rise-1 k-label mb-8">Work With Us</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.5vw,3.25rem)]">
          Two ways in<span className="text-[#E8896A]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#AABBCC] text-lg max-w-xl leading-relaxed">
          Start small and leave with something working, or bring us a workflow
          worth rebuilding end-to-end. Either way: shipping, not slide decks.
        </p>
      </section>

      {/* Evidence */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-14">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/evidence/workbench.jpg"
            alt="A builder's workbench at night: worn hand tools on a pegboard beside an open laptop, one warm shop lamp"
            className="k-photo"
          />
        </Reveal>
      </section>

      {/* Offers */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
        <div className="space-y-0">
          {offers.map((o, i) => (
            <Reveal key={o.title} delay={i * 80}>
              <div className="border-t border-[rgba(170,187,204,0.13)] py-12 lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-3 mb-4 lg:mb-0">
                  <p className="k-label">{o.label}</p>
                  <p className="k-mono text-[#E8896A] text-xs tracking-[0.15em] mt-3">
                    {o.price}
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-white text-2xl font-bold tracking-tight mb-3">
                    {o.title}
                  </h2>
                  <p className="text-[#AABBCC] text-lg leading-relaxed max-w-2xl mb-5">
                    {o.body}
                  </p>
                  <Link href={o.href} className="k-link k-focus text-[#6B9FD4] font-medium">
                    {o.cta} <span className="k-arrow">&rarr;</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closer */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-24 border-t border-[rgba(170,187,204,0.13)] pt-14">
        <Reveal>
          <p className="text-white text-xl font-medium mb-6 max-w-xl">
            Not sure which one fits?{" "}
            <span className="k-serif font-normal">Tell us what hurts</span> and
            we will point you at the smallest thing that fixes it.
          </p>
          <Link href="/schedule" className="k-btn-ghost k-focus inline-block">
            Pick a time <span className="k-arrow">&rarr;</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
