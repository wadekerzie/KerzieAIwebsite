import type { Metadata } from "next";
import Link from "next/link";
import DealerPlaybookForm from "@/components/DealerPlaybookForm";
import { EPISODE, EPISODE_LINKS } from "@/content/dealerPlaybook";

// /dealerplaybook: the landing page for dealers who heard Wade on The Dealer
// Playbook (Michael Cirillo), Oct 2026. Public, indexable.
//
// The page is short on purpose. Above the fold: the episode still, the
// episode title, the byline, and ONE form (free AI visibility check). Many
// of these visitors just heard the whole episode, so the Back Cover offer
// page is NOT the first click; it is one quiet line at the bottom.
// Copy and links live in src/content/dealerPlaybook.ts.
export const metadata: Metadata = {
  title: "Heard Wade on The Dealer Playbook? | Kerzie AI",
  description:
    "Free AI visibility check for your store. We run the same check from the episode and email you what ChatGPT and Google's AI can and cannot read on your dealership site, within one business day.",
  openGraph: {
    title: "Heard Wade on The Dealer Playbook? Start here.",
    description:
      "Free AI visibility check for your store: what ChatGPT and Google's AI can and cannot read on your dealership website, within one business day.",
    url: "https://kerzie.ai/dealerplaybook",
    siteName: "Kerzie AI",
    type: "website",
    images: [
      {
        url: `https://kerzie.ai${EPISODE.image}`,
        width: EPISODE.imageWidth,
        height: EPISODE.imageHeight,
        alt: EPISODE.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heard Wade on The Dealer Playbook? Start here.",
    description:
      "Free AI visibility check for your store, within one business day.",
    images: [`https://kerzie.ai${EPISODE.image}`],
  },
};

export default function DealerPlaybookPage() {
  const liveLinks = EPISODE_LINKS.filter((l) => l.href.trim().length > 0);

  return (
    <div className="bg-[#FAF8F4]">
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-6 lg:pt-14 pb-16 lg:pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
          {/* The episode */}
          <div className="lg:col-span-6">
            <figure className="k-rise k-rise-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={EPISODE.image}
                alt={EPISODE.imageAlt}
                className="k-photo aspect-video"
              />
              <figcaption className="k-mono mt-2 text-[11px] lg:text-xs tracking-[0.08em] text-[#262B3D]/50">
                {EPISODE.imageCredit}
              </figcaption>
            </figure>
            <p className="k-rise k-rise-2 k-label mt-5 lg:mt-7">{EPISODE.show}</p>
            <h1 className="k-rise k-rise-2 mt-2 text-[#1A1B2E] font-bold tracking-[-0.02em] leading-[1.1] text-[clamp(1.5rem,3vw,2.375rem)]">
              {EPISODE.title}
            </h1>
            <p className="k-rise k-rise-3 mt-2 text-[#262B3D] text-base lg:text-lg">
              with {EPISODE.host}, {EPISODE.show}
            </p>

            {/* Episode links: only the ones with a URL filled in. */}
            {liveLinks.length > 0 && (
              <p className="k-rise k-rise-3 mt-4 text-sm lg:text-[15px] text-[#262B3D]/70">
                The episode:{" "}
                {liveLinks.map((l, i) => (
                  <span key={l.label}>
                    {i > 0 && <span className="text-[#B04E2B]/60"> / </span>}
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener"
                      className="k-link text-[#2B5D96] font-medium"
                    >
                      {l.label}
                    </a>
                  </span>
                ))}
              </p>
            )}
          </div>

          {/* The one thing to do */}
          <div className="lg:col-span-6 mt-6 lg:mt-0 k-rise k-rise-2">
            <DealerPlaybookForm />
          </div>
        </div>

        {/* Quiet, at the bottom: how the fix works. Not the first click. */}
        <p className="mt-14 lg:mt-16 text-sm lg:text-[15px] text-[#262B3D]/60">
          Want to see how the fix works once the check comes back?{" "}
          <Link href="/back-cover" className="k-link text-[#262B3D]/80 hover:text-[#1A1B2E]">
            The Back Cover
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
