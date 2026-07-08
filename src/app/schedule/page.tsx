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
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-12">
        <p className="k-rise k-rise-1 k-label mb-8">Work With Us</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.5vw,3.25rem)]">
          Let&apos;s talk about{" "}
          <span className="k-serif font-normal">what hurts</span>
          <span className="text-[#E8896A]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#AABBCC] text-lg max-w-xl">
          Pick a time. Tell us the problem. We will come with ideas, not a
          pitch deck.
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
          title="Book Your Free Consultation"
        />
        {/* SMS Consent Disclosure */}
        <div className="mt-8 text-sm text-[#AABBCC]/50 leading-relaxed max-w-2xl">
          <p className="mb-2">
            By providing your phone number, you consent to receive SMS messages
            from Kerzie Consulting LLC (DBA Kerzie AI) regarding your scheduled
            appointment and work status updates. Message frequency: up to 5
            messages/month. Message and data rates may apply.
          </p>
          <p>
            Reply STOP to unsubscribe. Reply HELP for help. View our{" "}
            <Link
              href="/privacy-policy"
              className="hover:text-[#AABBCC] transition-colors duration-150"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms-of-service"
              className="hover:text-[#AABBCC] transition-colors duration-150"
            >
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </section>

    </div>
  );
}
