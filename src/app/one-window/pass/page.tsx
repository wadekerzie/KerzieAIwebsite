import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're On The Upgrade Pass | Kerzie AI",
  description:
    "Your six months of One-Window upgrades starts now. The first upgrade arrives by email within a day.",
  robots: { index: false },
};

export default function UpgradePassWelcomePage() {
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
        <p className="k-label mb-8">The Upgrade Pass &middot; Confirmed</p>
        <h1 className="text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.5rem)]">
          You&apos;re in<span className="text-[#E8896A]">.</span>{" "}
          <span className="k-serif font-normal">Six months starts now.</span>
        </h1>
        <div className="mt-8 max-w-xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
          <p>
            Here is exactly what happens next, so nothing about this is a
            mystery:
          </p>
          <p>
            <span className="text-white font-medium">Within a day</span>, your
            first upgrade arrives by email from wade@kerzie.ai: the Living
            Pane. Save the file into your OS folder and tell your Claude to
            read it. It explains itself and asks before touching anything.
          </p>
          <p>
            <span className="text-white font-medium">Every month after</span>,
            the next one lands the same way: at least one upgrade a month for
            the full six months. The first four are already built; the rest
            come from what I build for my own OS as I keep running my
            businesses on it.
          </p>
          <p>
            <span className="text-white font-medium">Month six</span>, it ends,
            on purpose. By then you will be modifying your own OS, and that
            was the point all along.
          </p>
          <p>
            If the first email does not show inside a day, check spam for
            wade@kerzie.ai, then just reply to your Stripe receipt - it
            reaches me.
          </p>
        </div>
        <div className="mt-10">
          <Link href="/one-window" className="k-btn-solid k-focus inline-block">
            Back to the One-Window Setup <span className="k-arrow">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
