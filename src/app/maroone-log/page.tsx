import type { Metadata } from "next";
import sample from "@/data/maroone_log_sample.json";
import MarooneLogTabs, { type Store } from "./MarooneLogTabs";

// Maroone USA daily refresh log, SAMPLE. UNLISTED and noindex, same recipe as
// /shortline-log: not in PUBLIC_ROUTES, not in the sitemap or the llms files,
// shared by link only (from the kerzie.ai/marooneusa proposal page).
//
// Maroone is a PROSPECT (proposal 2026-10-01), not a client. Every number in
// src/data/maroone_log_sample.json is illustrative and the page says so in a
// banner and on every tab. When the first rooftop goes live, the real data
// file replaces the sample, the `sample` flag flips, and the banner goes away.
//
// One tab per rooftop, named from the 10/1 call (four Colorado Springs, two
// Longmont, one Boulder with two sites, one West Palm Beach). Phone-first:
// the tab strip scrolls sideways, the table scrolls inside its own box.
// STYLE RULE (Wade, 2026-09-06): client-facing, outcomes only. Cars in, cars
// out, prices, timestamps, the read check. No internal machinery.
export const metadata: Metadata = {
  title: "Maroone USA - Daily AI Page Refresh (Sample)",
  description: "Sample daily refresh log for the Maroone USA AI pages, one tab per rooftop.",
  robots: { index: false, follow: false },
};

export default function MarooneLogPage() {
  const stores = sample.stores as Store[];
  const isSample = Boolean(sample.sample);
  const engines = sample.engines as string[];
  return (
    <MarooneLogTabs
      stores={stores}
      isSample={isSample}
      engines={engines}
      group={sample.group}
    />
  );
}
