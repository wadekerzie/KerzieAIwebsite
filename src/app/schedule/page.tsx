"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function SchedulePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://link.msgsndr.com/js/form_embed.js"]'
      );
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="bg-[#FAF8F4] min-h-screen">

      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#262B3D]/70 text-xs lg:text-sm tracking-[0.15em] lg:tracking-[0.12em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#B04E2B]">.</span>AI
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-12">
        <p className="k-rise k-rise-1 k-label mb-8 lg:mb-6">Schedule</p>
        <h1 className="k-rise k-rise-2 text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.5vw,3.25rem)]">
          Let&apos;s put it{" "}
          <span className="k-serif font-normal">on the calendar</span>
          <span className="text-[#B04E2B]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#262B3D] text-lg max-w-xl">
          What&apos;s the biggest problem in your business right now? Pick a
          time and we start there. Podcast and speaking asks go on the same
          calendar.
        </p>
        <p className="k-rise k-rise-3 mt-4 text-[#262B3D] text-lg max-w-xl">
          Rather talk or write first? Call or text{" "}
          <a href="tel:+14699330930" className="k-link text-[#1A1B2E] font-medium">
            469-933-0930
          </a>
          {" "}(our AI answers and can book you in), or email me directly at{" "}
          <a href="mailto:wade@kerzie.ai" className="k-link text-[#1A1B2E] font-medium">
            wade@kerzie.ai
          </a>
          .
        </p>
      </section>

      {/* Calendar embed */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-24">
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/WUgRL3oHU40oA05SIaVT"
          style={{
            width: "100%",
            minHeight: "700px",
            border: "none",
            overflow: "hidden",
          }}
          scrolling="no"
          id="WUgRL3oHU40oA05SIaVT_1767737997591"
          title="Schedule time with Wade"
        />
      </section>

    </div>
  );
}
