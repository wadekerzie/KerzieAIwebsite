import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your First Reps Guide | Kerzie AI",
  robots: { index: false, follow: false },
};

export default function FirstRepsAccessPage() {
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
        <p className="k-label mb-8">Here Is Your Guide</p>
        <h1 className="text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.5vw,3.25rem)]">
          Five reps. This week
          <span className="text-[#E8896A]">.</span>
        </h1>
        <p className="mt-6 text-[#AABBCC] text-lg max-w-xl leading-relaxed">
          One page, five real tasks with the exact prompts to start them. Run
          one per day with the model you already have. Do not read it and file
          it; the reps are the point.
        </p>
        <div className="mt-10">
          <a
            href="/downloads/first-reps-guide.pdf"
            download
            className="k-btn-solid k-focus inline-block"
          >
            Download the First Reps Guide <span className="k-arrow">&rarr;</span>
          </a>
        </div>
        <p className="mt-8 text-[#AABBCC] text-lg max-w-xl leading-relaxed">
          When you finish the five, the natural next step is the free{" "}
          <Link href="/free/capture-kit" className="k-link k-focus text-[#6B9FD4]">
            Capture Kit
          </Link>
          , then the full working environment at{" "}
          <Link href="/one-window" className="k-link k-focus text-[#6B9FD4]">
            kerzie.ai/one-window
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
