"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Ad2Action() {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      <style>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          href="/"
          className="text-[#AABBCC] text-sm hover:text-white transition-colors duration-150"
        >
          &larr; Back to kerzie.ai
        </Link>
      </div>

      {/* Section 1: The Problem */}
      <section className="px-6 pt-16 pb-12 max-w-3xl mx-auto">
        <h1 className="text-white text-[40px] font-black leading-none tracking-tight mb-6">
          You paid for the ad.
        </h1>
        <p className="text-[#AABBCC] text-base leading-relaxed">
          Someone clicked at 7pm on a Thursday. They filled out the form. Your autoresponder fired a confirmation email. You followed up Friday morning. They did not remember why they clicked. You bought their attention at peak interest and responded at zero interest.
        </p>
      </section>

      {/* Coral divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="w-12 h-0.5 bg-[#E8896A]" />
      </div>

      {/* Section 2: Why it exists */}
      <section className="px-6 pt-12 pb-12 max-w-3xl mx-auto">
        <div
          ref={(el) => { revealRefs.current[0] = el; }}
          className="border-l-2 border-[#E8896A] pl-6 scroll-reveal"
          style={{ transitionDelay: "0ms" }}
        >
          <p className="text-white text-[26px] font-semibold leading-snug mb-3">
            Ad platforms optimize for the click. Nobody optimizes for what happens after.
          </p>
          <p className="text-[#AABBCC] text-base leading-relaxed">
            That window is where leads die. Not because your product is wrong. Because your response was late. Eight minutes after someone clicks is worth more than eight hours of follow up the next day.
          </p>
        </div>
      </section>

      {/* Coral divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="w-12 h-0.5 bg-[#E8896A]" />
      </div>

      {/* Section 3: What got built */}
      <section className="px-6 pt-12 pb-12 max-w-3xl mx-auto">
        <div
          ref={(el) => { revealRefs.current[1] = el; }}
          className="border-l-2 border-[#E8896A] pl-6 scroll-reveal"
          style={{ transitionDelay: "150ms" }}
        >
          <p className="text-white text-[26px] font-semibold leading-snug mb-3">
            So we built Ad2Action.
          </p>
          <p className="text-[#AABBCC] text-base leading-relaxed">
            Instant lead response the moment someone converts on your ad. Not an autoresponder. A real conversation that starts while they still remember clicking.
          </p>
        </div>
      </section>

      {/* Coral divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="w-12 h-0.5 bg-[#E8896A]" />
      </div>

      {/* Section 4: How it works */}
      <section className="px-6 pt-12 pb-12 max-w-3xl mx-auto">
        <div
          ref={(el) => { revealRefs.current[2] = el; }}
          className="scroll-reveal"
          style={{ transitionDelay: "300ms" }}
        >
          <p className="text-[#6B9FD4] text-sm font-medium tracking-widest uppercase mb-8">
            How it works
          </p>
          <div className="border-l-2 border-[#E8896A] pl-6 flex flex-col gap-4">
            {[
              "Lead converts on your ad.",
              "Ad2Action fires immediately.",
              "Qualifies the lead in real time.",
              "Books the appointment or routes to your team.",
              "By the time your competitor follows up manually, you already have the meeting.",
            ].map((step) => (
              <p key={step} className="text-white text-lg font-medium">
                {step}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Coral divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="w-12 h-0.5 bg-[#E8896A]" />
      </div>

      {/* Section 5: CTA */}
      <section className="px-6 pt-12 pb-24 max-w-3xl mx-auto text-center">
        <div
          ref={(el) => { revealRefs.current[3] = el; }}
          className="scroll-reveal"
          style={{ transitionDelay: "450ms" }}
        >
          <h2 className="text-white text-2xl font-bold mb-3">
            Stop losing leads you already paid for.
          </h2>
          <p className="text-[#AABBCC] mb-8">
            Ad2Action deploys in days. Not months.
          </p>
          <a
            href="https://kerzie.ai/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#6B9FD4] text-[#6B9FD4] px-8 py-3 text-sm font-semibold hover:bg-[#6B9FD4] hover:text-[#1A1B2E] transition-colors duration-200"
          >
            Talk to Us About Ad2Action
          </a>
        </div>
      </section>

    </div>
  );
}
