"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const products = [
  {
    name: "GotaGuy",
    hook: "Your faucet has been dripping for three days.",
    body: "You Googled plumbers. First one: voicemail. Second one: booked until next Thursday. Third gave you a number over the phone that felt made up. You said you'd call back. You haven't. The faucet is still dripping.",
    href: "/ventures/gotaguy",
  },
  {
    name: "Unison",
    hook: "Someone calls your law firm at 7:05pm.",
    body: "They get voicemail. They needed an answer tonight. They'll call someone else in the morning. You never knew they called.",
    href: "/ventures/unison",
  },
  {
    name: "Zorli",
    hook: "Your teenager calls while you're watching a movie.",
    body: "They need the Netflix password. You know you saved it somewhere. Notes app, maybe. Or was it that email from three years ago. You pause the movie. You search. You try four things. You find it eight minutes later in a note called Misc. The movie is still paused. This happens every week.",
    href: "/ventures/zorli",
  },
  {
    name: "Ad2Action",
    hook: "You paid for the ad.",
    body: "Someone clicked at 7pm on a Thursday. They filled out the form. Your autoresponder fired. By Friday morning when you followed up, they didn't remember why they clicked. You bought their attention at peak interest and responded at zero interest.",
    href: "/ventures/ad2action",
  },
];

export default function Home() {
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bridgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (bridgeRef.current) observer.observe(bridgeRef.current);
    blockRefs.current.forEach((el) => {
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

      {/* Act One: The Belief */}
      <section className="px-6 pt-10 lg:pt-16 pb-8 max-w-3xl mx-auto">
        <h1 className="text-white text-[40px] lg:text-[64px] leading-none font-black tracking-tight mb-4">
          The world is best when technology just works.
        </h1>
        <p className="text-[#6B9FD4] text-2xl font-semibold leading-snug mb-3">
          The best tech should feel the easiest.
        </p>
        <p className="text-[#AABBCC] text-lg sm:text-xl leading-relaxed max-w-2xl">
          We build products that fix things people stopped expecting to get fixed.
          No courses. No explanations. No consulting decks.
          We ship and it works.
        </p>
      </section>

      {/* Bridge: why the products are possible */}
      <section className="px-6 pt-8 pb-6 max-w-3xl mx-auto text-center">
        <div ref={bridgeRef} className="scroll-reveal">
          <p className="text-[#AABBCC] text-sm font-medium tracking-widest uppercase mb-3">
            Built on the world&apos;s most advanced AI
          </p>
          <p className="text-white text-2xl font-medium leading-relaxed">
            Anthropic, OpenAI, Google, and DeepSeek spent billions building the most powerful reasoning engines in history. We use them to fix a leaky faucet, answer your phone at 7pm, and find your Netflix password.
          </p>
        </div>
      </section>

      {/* Coral divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="w-12 h-0.5 bg-[#E8896A]" />
      </div>

      {/* Act Two: The Problems */}
      <section id="what-we-built" className="bg-[#1E2035] w-full">
        <div className="px-6 pt-12 pb-20 max-w-3xl mx-auto">
          <p className="text-[#6B9FD4] text-xs font-semibold tracking-[0.2em] uppercase mb-14">
            What we fixed
          </p>
          <div className="space-y-8">
            {products.map((product, i) => (
              <div
                key={product.name}
                ref={(el) => { blockRefs.current[i] = el; }}
                className="border-l-2 border-[#E8896A] pl-6 scroll-reveal"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <p className="text-white text-[26px] font-semibold leading-snug mb-3">
                  {product.hook}
                </p>
                <p className="text-[#AABBCC] text-base leading-relaxed mb-5">
                  {product.body}
                </p>
                <Link
                  href={product.href}
                  className="text-[#6B9FD4] text-sm font-semibold hover:text-white transition-colors duration-150"
                >
                  {product.name} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Act Three: The Question */}
      <section id="whats-broken" className="w-full px-8 sm:px-16 lg:px-24 pt-12 pb-36">
        <div className="w-12 h-0.5 bg-[#E8896A] my-6" />
        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
          What problem hurts the most?
        </h2>
        <p className="text-[#AABBCC] text-base mb-10">
          Don't worry about the solution. Just tell us the problem. The longer the better.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="max-w-2xl">
          <textarea
            name="problem"
            rows={7}
            placeholder="Describe the problem..."
            className="w-full bg-transparent border border-[#AABBCC]/20 text-[#AABBCC] placeholder:text-[#AABBCC]/30 px-4 py-3 text-base focus:outline-none focus:border-[#6B9FD4] resize-none transition-colors duration-150"
          />
          <button
            type="submit"
            className="mt-4 px-8 py-3 bg-[#6B9FD4] text-[#1A1B2E] font-semibold text-sm tracking-wide hover:bg-white transition-colors duration-150"
          >
            Send it
          </button>
        </form>
      </section>

    </div>
  );
}
