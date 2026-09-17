import type { Metadata } from "next";
import CardClient from "./CardClient";

// Jordan's digital business card - the same homemade Popl replacement as
// Wade's at /card and Aaron's at /card/aaron. Added 2026-09-17. Photo is an
// initials tile until Jordan sends a headshot (swap public/jordan-card.jpg).
//
// INDEXED on purpose, same rationale as Wade's: a company that sells AI
// readability should have team pages an AI can actually read - hence the
// Person JSON-LD below, (Jordan is not on /team yet).
export const metadata: Metadata = {
  title: "Jordan Holzmiller | Kerzie AI Solutions",
  description:
    "Contact card for Jordan Holzmiller, Account Executive at Kerzie AI Solutions in Dallas, Texas. Save his contact.",
  alternates: { canonical: "https://kerzie.ai/card/jordan" },
  openGraph: {
    type: "profile",
    title: "Jordan Holzmiller | Kerzie AI Solutions",
    description:
      "Account Executive, Kerzie AI Solutions. Dallas, Texas. Save my contact.",
    url: "https://kerzie.ai/card/jordan",
    images: [{ url: "/jordan-card.jpg", width: 321, height: 321, alt: "Jordan Holzmiller" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jordan Holzmiller",
  jobTitle: "Account Executive",
  telephone: "+1-214-862-1505",
  email: "jordan@kerzie.ai",
  url: "https://kerzie.ai/card/jordan",
  image: "https://kerzie.ai/jordan-card.jpg",
  sameAs: ["https://jordanholzmiller.vercel.app/"],
  worksFor: {
    "@type": "Organization",
    name: "Kerzie AI Solutions",
    url: "https://kerzie.ai",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
};

export default function JordanCardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <CardClient />
    </>
  );
}
