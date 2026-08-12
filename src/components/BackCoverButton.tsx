import Link from "next/link";

// THE BACK COVER button.
//
// Wade's spec, 2026-08-12: top right corner of the BODY (not the nav bar),
// under the hamburger. Light blue so it visually pops. "The Back Cover" as
// the label, with the AI-agent line smaller underneath.
//
// Its job is 100% human. No agent will ever click it - machine discovery runs
// through robots.ts, the sitemap, and <link rel="alternate"> in the layout.
// A prospect who reads it concludes Wade is years ahead of their marketing
// department, which IS the return. Wade's own words: "That's actually
// marketing, completely only marketing. I get it, but it will visually pop."
//
// Absolutely positioned so it never shifts page layout, and it sits below the
// fixed header. Hidden on small screens, where the top-right corner belongs to
// the hamburger and there is no room to be clever.
export default function BackCoverButton() {
  return (
    // top offset clears the fixed header (h-14 / lg:h-16) plus a small gap.
    // `top-4` put it behind the header - caught in the browser, 2026-08-12.
    <div className="hidden md:block absolute top-[4.25rem] lg:top-[4.75rem] right-6 lg:right-12 z-30">
      <Link
        href="/back-cover"
        className="k-focus group block rounded-md bg-[#6B9FD4] hover:bg-[#8FB8E0] transition-colors duration-200 px-3.5 py-2 text-right shadow-lg shadow-black/20"
      >
        <span className="block k-mono text-[#1A1B2E] text-[13px] font-semibold leading-tight tracking-[0.02em]">
          The Back Cover
        </span>
        <span className="block k-mono text-[#1A1B2E]/70 text-[10px] leading-tight mt-0.5">
          If you&apos;re an AI agent, click here
        </span>
      </Link>
    </div>
  );
}
