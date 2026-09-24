import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export type ProductStoryProps = {
  clock: string;
  hook: string;
  problemBody: string;
  // The problem photograph. Deliberately the pain, and deliberately dark:
  // each one is pinned to its hook copy, which is usually after hours.
  image?: string;
  imageAlt?: string;
  whyLabel: string;
  whyHook: string;
  whyBody: string;
  builtHook: string;
  builtBody: string;
  // The after. Without this the page shows the pain in a photograph and then
  // only describes the resolution in words, so every venture story ended on
  // its problem picture with nothing to answer it.
  builtImage?: string;
  builtImageAlt?: string;
  demo?: ReactNode;
  demoLabel?: string;
  steps: string[];
  // Optional fourth block after How It Works: who the deliverable reaches and
  // on what terms (first used on Executive Legacy, 2026-09-16).
  extra?: { label: string; hook: string; paragraphs: string[] };
  // Optional fifth block before the invitation: the engagement and what it
  // costs, as rows (first used on Executive Legacy, 2026-09-17).
  pricing?: {
    label: string;
    hook: string;
    rows: { price: string; body: string }[];
    fineprint?: string;
  };
  ctaHook: string;
  ctaSub: string;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
};

export default function ProductStory(props: ProductStoryProps) {
  return (
    <div className="bg-[#FAF8F4]">

      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#262B3D]/70 text-xs lg:text-sm tracking-[0.15em] lg:tracking-[0.12em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#B04E2B]">.</span>AI
        </Link>
      </div>

      {/* The problem, before the product has a name */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-16 pb-20 lg:pb-16">
        <p className="k-rise k-rise-1 k-mono text-[clamp(1.25rem,2.4vw,1.875rem)] text-[#262B3D]/40 leading-none tracking-tight mb-8">
          {props.clock}
        </p>
        <h1 className="k-rise k-rise-2 text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5.5vw,4rem)] max-w-4xl">
          {props.hook}
        </h1>
        <p className="k-rise k-rise-3 mt-8 text-[#262B3D] text-lg lg:text-xl leading-relaxed max-w-2xl">
          {props.problemBody}
        </p>

        {props.image && (
          <figure className="k-rise k-rise-4 mt-14 lg:mt-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={props.image}
              alt={props.imageAlt ?? ""}
              className="k-photo aspect-[21/9]"
            />
          </figure>
        )}
      </section>

      {/* Why nothing fixed it */}
      <section className="bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-16">
          <Reveal>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3 mb-8 lg:mb-0">
                <p className="k-label">
                  <span className="idx">01</span>{props.whyLabel}
                </p>
              </div>
              <div className="lg:col-span-9 border-l-2 border-[#B04E2B] pl-6 lg:pl-8">
                <h2 className="text-[#1A1B2E] text-[clamp(1.375rem,2.3vw,1.75rem)] font-semibold leading-snug mb-4">
                  {props.whyHook}
                </h2>
                <p className="text-[#262B3D] text-base lg:text-lg leading-relaxed max-w-2xl">
                  {props.whyBody}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What got built */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-16">
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3 mb-8 lg:mb-0">
              <p className="k-label">
                <span className="idx">02</span>What Got Built
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-[#1A1B2E] text-[clamp(1.5rem,2.8vw,2.125rem)] font-semibold leading-snug mb-4">
                {props.builtHook}
              </h2>
              <p className="text-[#262B3D] text-base lg:text-lg leading-relaxed max-w-2xl">
                {props.builtBody}
              </p>
              {props.builtImage && (
                <figure className="mt-10 lg:mt-12">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={props.builtImage}
                    alt={props.builtImageAlt ?? ""}
                    className="k-photo aspect-[21/9]"
                  />
                </figure>
              )}
            </div>
          </div>
        </Reveal>
      </section>

      {/* The live demo, when the product can show itself */}
      {props.demo && (
        <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-20 lg:pb-16">
          <Reveal>
            <p className="k-label text-center mb-10 lg:mb-8">
              {props.demoLabel ?? "Watch It Happen"}
            </p>
            {props.demo}
          </Reveal>
        </section>
      )}

      {/* How it works */}
      <section className="bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-16">
          <Reveal>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3 mb-10 lg:mb-0">
                <p className="k-label">
                  <span className="idx">03</span>How It Works
                </p>
              </div>
              <div className="lg:col-span-9">
                <ol className="space-y-6">
                  {props.steps.map((step, i) => (
                    <li key={step} className="flex items-baseline gap-5">
                      <span className="k-mono text-[#B04E2B] text-xs lg:text-sm shrink-0 w-6">
                        0{i + 1}
                      </span>
                      <span className="text-[#1A1B2E] text-lg lg:text-xl font-medium leading-snug">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who gets what (optional) */}
      {props.extra && (
        <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-16">
          <Reveal>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3 mb-8 lg:mb-0">
                <p className="k-label">
                  <span className="idx">04</span>{props.extra.label}
                </p>
              </div>
              <div className="lg:col-span-9 border-l-2 border-[#B04E2B] pl-6 lg:pl-8">
                <h2 className="text-[#1A1B2E] text-[clamp(1.375rem,2.3vw,1.75rem)] font-semibold leading-snug mb-6">
                  {props.extra.hook}
                </h2>
                <div className="space-y-4">
                  {props.extra.paragraphs.map((para) => (
                    <p key={para} className="text-[#262B3D] text-base lg:text-lg leading-relaxed max-w-2xl">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* The engagement and the price (optional) */}
      {props.pricing && (
        <section className="bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-16">
            <Reveal>
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-3 mb-8 lg:mb-0">
                  <p className="k-label">
                    <span className="idx">05</span>{props.pricing.label}
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-[#1A1B2E] text-[clamp(1.375rem,2.3vw,1.75rem)] font-semibold leading-snug mb-8">
                    {props.pricing.hook}
                  </h2>
                  <dl className="divide-y divide-[#1A1B2E]/10 border-y border-[#1A1B2E]/10 max-w-3xl">
                    {props.pricing.rows.map((row) => (
                      <div key={row.price + row.body} className="grid grid-cols-[8.5rem_1fr] gap-6 py-5">
                        <dt className="k-mono text-[#1A1B2E] font-semibold text-base whitespace-nowrap">
                          {row.price}
                        </dt>
                        <dd className="text-[#262B3D] text-base lg:text-lg leading-relaxed">
                          {row.body}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  {props.pricing.fineprint && (
                    <p className="mt-6 text-[#262B3D]/70 text-sm lg:text-base leading-relaxed max-w-3xl">
                      {props.pricing.fineprint}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* The invitation */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-20 text-center">
        <Reveal>
          <div className="w-12 h-0.5 bg-[#B04E2B] mx-auto mb-10 lg:mb-8" />
          <h2 className="text-[#1A1B2E] text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.02em] mb-4">
            {props.ctaHook}
          </h2>
          <p className="text-[#262B3D] lg:text-lg mb-10 lg:mb-8">{props.ctaSub}</p>
          {props.ctaExternal ? (
            <a
              href={props.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block k-btn-ghost k-focus"
            >
              {props.ctaLabel}
            </a>
          ) : (
            <Link href={props.ctaHref} className="inline-block k-btn-ghost k-focus">
              {props.ctaLabel}
            </Link>
          )}
        </Reveal>
      </section>

    </div>
  );
}
