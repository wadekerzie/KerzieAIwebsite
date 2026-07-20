import Link from "next/link";
import type { Metadata } from "next";
import GateForm from "@/components/GateForm";

export const metadata: Metadata = {
  title: "The First Reps Guide (Free) | Kerzie AI",
  description:
    "Five real tasks to run with the AI model you already have. One page, free. Stop waiting for the next model and get your reps this week.",
};

export default function FirstRepsGatePage() {
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

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-16">
        <p className="k-label mb-8">The First Reps Guide &middot; Free</p>
        <h1 className="text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.5rem)]">
          The model was never the bottleneck
          <span className="text-[#E8896A]">.</span>{" "}
          <span className="k-serif font-normal">Reps are.</span>
        </h1>
        <p className="mt-6 text-[#AABBCC] text-lg lg:text-xl max-w-xl leading-relaxed">
          One page, five real tasks to run this week with the AI subscription
          you already have. No waitlist, no new model, no theory. Each rep is
          something from your actual work, with the exact prompt to start it.
        </p>
        <div className="mt-10">
          <GateForm magnet="first-reps" buttonLabel="Send me the guide" />
          <p className="mt-4 text-sm text-[#6d7585]">
            You get the guide instantly plus the Kerzie AI newsletter, one real
            operator note a week. Unsubscribe any time.
          </p>
        </div>
      </section>
    </div>
  );
}
