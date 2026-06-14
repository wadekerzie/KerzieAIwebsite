"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function GotaGuy() {
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
          Finding a contractor is a part-time job.
        </h1>
        <p className="text-[#AABBCC] text-base leading-relaxed">
          You post on Nextdoor. You call three numbers. One voicemail. One quote that feels made up. One guy who never shows. The repair takes an hour. Finding someone takes a week.
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
            The existing platforms make money whether your job gets done or not.
          </p>
          <p className="text-[#AABBCC] text-base leading-relaxed">
            Angi, Thumbtack, HomeAdvisor charge contractors for leads. Whether the job gets done or not. They built a bidding war because bidding wars generate revenue. The homeowner experience being slow and frustrating is not a bug. It is the business model.
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
            So we built GotaGuy.
          </p>
          <p className="text-[#AABBCC] text-base leading-relaxed">
            You text. We scope it. A contractor shows up. You pay when it is done. No app. No account. No forms. No bidding. The whole thing happens in your text messages.
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
              "Quote in 90 seconds.",
              "Confirm.",
              "Schedule on your timeframe.",
              "Contractor shows up when you said.",
              "Work gets done. Pay on your phone.",
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
            See GotaGuy in action.
          </h2>
          <p className="text-[#AABBCC] mb-8">
            Live in McKinney/Dallas TX and Aurora/Denver CO. More markets coming.
          </p>
          <a
            href="https://gotaguy.chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#6B9FD4] text-[#6B9FD4] px-8 py-3 text-sm font-semibold hover:bg-[#6B9FD4] hover:text-[#1A1B2E] transition-colors duration-200"
          >
            Visit GotaGuy
          </a>
        </div>
      </section>

    </div>
  );
}
