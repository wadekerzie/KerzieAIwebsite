"use client";

import Link from "next/link";
import {
  SHOW_HOME_BANNER,
  DEALER_PLAYBOOK_PATH,
  EPISODE,
  BANNER_COPY,
} from "@/content/dealerPlaybook";
import { trackEvent } from "@/lib/analytics";

// HOME PAGE BANNER for The Dealer Playbook episode (Oct 2026).
//
// A dealer who heard Wade say "Kerzie dot AI" types it in and lands on the
// home page. They will not hunt. This strip sits at the very top of the body,
// under the fixed header, on every screen size, and the whole thing is one
// link to /dealerplaybook.
//
// Removal: flip SHOW_HOME_BANNER in src/content/dealerPlaybook.ts. When it is
// false this renders nothing and the home page is exactly as it was.
export default function DealerPlaybookBanner() {
  if (!SHOW_HOME_BANNER) return null;

  return (
    <Link
      href={DEALER_PLAYBOOK_PATH}
      onClick={() => trackEvent("dealer_playbook_banner_click")}
      className="k-focus group block bg-[#1A1B2E] text-[#FAF8F4] hover:bg-[#23253D] transition-colors duration-200"
      aria-label={`${BANNER_COPY.headline} ${BANNER_COPY.action}`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-3 lg:py-3.5 flex items-center gap-4 lg:gap-6">
        {/* The episode still, kept 16:9 so the real file drops in cleanly. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={EPISODE.image}
          alt=""
          aria-hidden="true"
          className="w-[88px] lg:w-[128px] aspect-video object-cover flex-shrink-0 border border-[#FAF8F4]/20"
        />
        <div className="min-w-0 flex-1">
          <p className="text-[15px] lg:text-lg font-semibold leading-snug">
            {BANNER_COPY.headline}
          </p>
          {/* Episode title: desktop only. On a phone it truncated to nothing useful. */}
          <p className="hidden md:block k-mono text-[12px] lg:text-[13px] text-[#FAF8F4]/70 leading-snug mt-0.5 truncate">
            {EPISODE.title}
          </p>
        </div>
        <span className="flex-shrink-0 text-[#6B9FD4] group-hover:text-[#FAF8F4] font-semibold text-[15px] lg:text-base whitespace-nowrap transition-colors duration-200">
          {BANNER_COPY.action} <span className="k-arrow">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
