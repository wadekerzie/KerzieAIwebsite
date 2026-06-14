"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Unison() {
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
          Someone calls your business after hours.
        </h1>
        <p className="text-[#AABBCC] text-base leading-relaxed">
          They get voicemail. They needed an answer tonight. They will call someone else in the morning. You never knew they called.
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
            Most businesses respond when it is convenient for them.
          </p>
          <p className="text-[#AABBCC] text-base leading-relaxed">
            The lead does not wait. The window between someone reaching out and someone else answering them is measured in minutes not hours. Every hour you wait cuts your odds of closing that lead in half.
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
            So we built Unison.
          </p>
          <p className="text-[#AABBCC] text-base leading-relaxed">
            Omnichannel lead response that answers immediately across every channel. Phone, text, web form, email. The lead gets a real response in seconds. You get the conversation in your inbox.
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
              "Lead comes in on any channel.",
              "Unison responds immediately.",
              "Qualifies and routes to you.",
              "You pick up a warm conversation. Not a cold inquiry.",
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
            Ready to stop losing leads?
          </h2>
          <p className="text-[#AABBCC] mb-8">
            Unison deploys in days. Not months.
          </p>
          <a
            href="https://kerzie.ai/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#6B9FD4] text-[#6B9FD4] px-8 py-3 text-sm font-semibold hover:bg-[#6B9FD4] hover:text-[#1A1B2E] transition-colors duration-200"
          >
            Talk to Us About Unison
          </a>
        </div>
      </section>

    </div>
  );
}
