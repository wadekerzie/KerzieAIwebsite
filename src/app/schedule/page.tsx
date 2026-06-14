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
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          href="/"
          className="text-[#AABBCC] text-sm hover:text-white transition-colors duration-150"
        >
          &larr; Back to kerzie.ai
        </Link>
      </div>

      {/* Header */}
      <section className="px-6 pt-12 pb-10 max-w-3xl mx-auto">
        <h1 className="text-white text-[32px] font-black leading-tight tracking-tight mb-3">
          Let&apos;s talk about what hurts.
        </h1>
        <p className="text-[#AABBCC] text-base">
          Pick a time. Tell us the problem. We will come with ideas, not a pitch deck.
        </p>
      </section>

      {/* Calendar embed */}
      <section className="px-6 pb-24 max-w-3xl mx-auto">
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
        <div className="mt-6 text-sm text-[#AABBCC]/60">
          <p className="mb-2">
            By providing your phone number, you consent to receive SMS messages from Kerzie Consulting LLC (DBA Kerzie AI)
            regarding your scheduled appointment and work status updates. Message frequency: up to 5 messages/month.
            Message and data rates may apply.
          </p>
          <p>
            Reply STOP to unsubscribe. Reply HELP for help. View our{" "}
            <Link href="/privacy-policy" className="hover:text-[#AABBCC] transition-colors duration-150">Privacy Policy</Link>{" "}
            and{" "}
            <Link href="/terms-of-service" className="hover:text-[#AABBCC] transition-colors duration-150">Terms of Service</Link>.
          </p>
        </div>
      </section>

    </div>
  );
}
