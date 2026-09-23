import type { Metadata } from "next";
import AskWadeClient from "./AskWadeClient";

// "Wade Kerzie, on the record" - the Executive Legacy deliverable, shown on
// customer zero. Served at askwade.kerzie.ai (host rewrite in next.config)
// and at /legacy/wade. The site header and footer are hidden by the
// :has(#legacy-standalone) rule in globals.css so the page reads as the
// executive's own place, which is the point of the demo. Built 2026-09-17.
export const metadata: Metadata = {
  title: "Wade Kerzie, on the record",
  description:
    "The Executive Legacy deliverable, shown on Wade Kerzie's own record: ask thirty years of judgment, and every answer cites what he actually published.",
  alternates: { canonical: "https://askwade.kerzie.ai" },
  openGraph: {
    type: "profile",
    title: "Wade Kerzie, on the record",
    description: "Ask thirty years of judgment. Every answer cites its source.",
    url: "https://askwade.kerzie.ai",
    images: [{ url: "https://kerzie.ai/askwade/wade-portrait.jpg", width: 1000, height: 1400, alt: "Wade Kerzie" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wade Kerzie",
  jobTitle: "Founder, Kerzie AI Solutions",
  url: "https://askwade.kerzie.ai",
  image: "https://kerzie.ai/askwade/wade-portrait.jpg",
  worksFor: { "@type": "Organization", name: "Kerzie AI Solutions", url: "https://kerzie.ai" },
  address: { "@type": "PostalAddress", addressLocality: "McKinney", addressRegion: "TX", addressCountry: "US" },
};

export default function AskWadePage() {
  return (
    <div id="legacy-standalone">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <AskWadeClient />
    </div>
  );
}
