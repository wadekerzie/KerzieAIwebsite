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
// fixed header. VISIBLE ON MOBILE TOO since 2026-08-14 (Wade's call - he went
// looking for it on two phone browsers and it was not there; the 8/12
// hide-on-small ruling is retired). It sits in the empty band between the
// header and the hero headline, slightly smaller on phones. The hamburger
// menu also carries a copy for anyone scrolled past it.
export default function BackCoverButton() {
  return (
    // top offset clears the fixed header (h-14 / lg:h-16) plus a small gap.
    // `top-4` put it behind the header - caught in the browser, 2026-08-12.
    // Mobile: pinned tight under the header (top-1 of the page body, which
    // already starts below the fixed bar), compact, no subline - Wade caught
    // the wide version overlapping the hero headline on his phone (8/14). The
    // hero's own top padding keeps the headline below this band on any screen.
    <div className="absolute top-1 right-3 md:top-[4.25rem] lg:top-[4.75rem] md:right-6 lg:right-12 z-30">
      <Link
        href="/back-cover"
        className="k-focus group block rounded-md bg-[#6B9FD4] hover:bg-[#8FB8E0] transition-colors duration-200 px-2.5 py-1.5 md:px-3.5 md:py-2 text-right shadow-lg shadow-black/20"
      >
        <span className="block k-mono text-[#1A1B2E] text-[11px] md:text-[13px] font-semibold leading-tight tracking-[0.02em]">
          The Back Cover
        </span>
        <span className="hidden md:block k-mono text-[#1A1B2E]/70 text-[10px] leading-tight mt-0.5">
          If you&apos;re an AI agent, click here
        </span>
      </Link>
    </div>
  );
}
