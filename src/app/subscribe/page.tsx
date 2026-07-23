import Link from "next/link";
import type { Metadata } from "next";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "The Kerzie AI Newsletter | Kerzie AI",
  description:
    "Twice a week, what actually worked. Wade Kerzie writes up the real build notes from running AI inside his own businesses: what got made, what broke, what it cost. Tuesday and Thursday, 1:00 PM Central.",
};

const RECENT = [
  "The Xbox Problem",
  "Bye-Bye, Digital Marketing Agencies",
  "The intelligence is moving inside the building",
  "The work is moving into one window",
];

export default function SubscribePage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#AABBCC]/70 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#E8896A]">.</span>AI
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-20">
        <p className="k-label mb-8">The Kerzie AI Newsletter</p>

        <h1 className="text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.5rem)] max-w-3xl">
          What actually worked{" "}
          <span className="k-serif font-normal">this week</span>
          <span className="text-[#E8896A]">.</span>
        </h1>

        <p className="mt-6 text-[#AABBCC] text-lg lg:text-xl max-w-xl leading-relaxed">
          I run my businesses on AI. Twice a week I write down what I built,
          what broke, what it cost, and what I would do differently. If I have
          not done it myself, it does not go in.
        </p>

        <p className="mt-6 text-[#AABBCC] text-lg max-w-xl leading-relaxed">
          No predictions. No tool roundups. No breathless take on whatever
          shipped that morning. Just the working notes of someone building in
          public, sent Tuesday and Thursday at 1:00 PM Central.
        </p>

        <div className="mt-10">
          <SubscribeForm source="subscribe-page" />
          <p className="mt-4 text-sm text-[#6d7585]">
            Free. Unsubscribe any time. I do not sell the list.
          </p>
        </div>

        <div className="mt-16 border-t border-[rgba(170,187,204,0.15)] pt-10 max-w-xl">
          <p className="k-label mb-5">Recent issues</p>
          <ul className="flex flex-col gap-3">
            {RECENT.map((title) => (
              <li
                key={title}
                className="border-l-2 border-[#E8896A] pl-4 text-[#AABBCC] leading-relaxed"
              >
                {title}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 max-w-xl">
          <p className="k-label mb-4">Who writes it</p>
          <p className="text-[#AABBCC] leading-relaxed">
            Wade Kerzie. Thirty years selling and leading enterprise sales
            teams, now building AI systems for my own companies and for
            clients. I am not reporting on this from the outside. I am the one
            with the receipts.
          </p>
        </div>
      </section>
    </div>
  );
}
