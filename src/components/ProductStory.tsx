import Link from "next/link";
import Reveal from "@/components/Reveal";

export type ProductStoryProps = {
  clock: string;
  hook: string;
  problemBody: string;
  image?: string;
  imageAlt?: string;
  whyLabel: string;
  whyHook: string;
  whyBody: string;
  builtHook: string;
  builtBody: string;
  steps: string[];
  ctaHook: string;
  ctaSub: string;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
};

export default function ProductStory(props: ProductStoryProps) {
  return (
    <div className="bg-[#1A1B2E]">

      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#AABBCC]/70 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#E8896A]">.</span>AI
        </Link>
      </div>

      {/* The problem, before the product has a name */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-20 lg:pb-28">
        <p className="k-rise k-rise-1 k-mono text-[clamp(1.25rem,2.4vw,1.875rem)] text-[#AABBCC]/40 leading-none tracking-tight mb-8">
          {props.clock}
        </p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5.5vw,4rem)] max-w-4xl">
          {props.hook}
        </h1>
        <p className="k-rise k-rise-3 mt-8 text-[#AABBCC] text-lg leading-relaxed max-w-2xl">
          {props.problemBody}
        </p>

        {props.image && (
          <figure className="k-rise k-rise-4 mt-14 lg:mt-16">
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
      <section className="bg-[#1E2035]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <Reveal>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3 mb-8 lg:mb-0">
                <p className="k-label">
                  <span className="idx">01</span>{props.whyLabel}
                </p>
              </div>
              <div className="lg:col-span-9 border-l-2 border-[#E8896A] pl-6 lg:pl-8">
                <h2 className="text-white text-[clamp(1.375rem,2.3vw,1.75rem)] font-semibold leading-snug mb-4">
                  {props.whyHook}
                </h2>
                <p className="text-[#AABBCC] text-base leading-relaxed max-w-2xl">
                  {props.whyBody}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What got built */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3 mb-8 lg:mb-0">
              <p className="k-label">
                <span className="idx">02</span>What Got Built
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-white text-[clamp(1.5rem,2.8vw,2.125rem)] font-semibold leading-snug mb-4">
                {props.builtHook}
              </h2>
              <p className="text-[#AABBCC] text-base leading-relaxed max-w-2xl">
                {props.builtBody}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="bg-[#1E2035]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
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
                      <span className="k-mono text-[#E8896A] text-xs shrink-0 w-6">
                        0{i + 1}
                      </span>
                      <span className="text-white text-lg font-medium leading-snug">
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

      {/* The invitation */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center">
        <Reveal>
          <div className="w-12 h-0.5 bg-[#E8896A] mx-auto mb-10" />
          <h2 className="text-white text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.02em] mb-4">
            {props.ctaHook}
          </h2>
          <p className="text-[#AABBCC] mb-10">{props.ctaSub}</p>
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
