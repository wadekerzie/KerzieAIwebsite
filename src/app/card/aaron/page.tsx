import type { Metadata } from "next";
import CardClient from "./CardClient";

// Aaron's digital business card - the same homemade Popl replacement as
// Wade's at /card (see ../page.tsx for the full reasoning). Added 2026-08-23.
//
// INDEXED on purpose, same rationale as Wade's: a company that sells AI
// readability should have team pages an AI can actually read - hence the
// Person JSON-LD below, which matches his /team entry.
export const metadata: Metadata = {
  title: "Aaron Jones | Kerzie AI Solutions",
  description:
    "Contact card for Aaron Jones, Technical Specialist at Kerzie AI Solutions in Aurora, Colorado. Save his contact.",
  alternates: { canonical: "https://kerzie.ai/card/aaron" },
  openGraph: {
    type: "profile",
    title: "Aaron Jones | Kerzie AI Solutions",
    description:
      "Technical Specialist, Kerzie AI Solutions. Aurora, Colorado. Save my contact.",
    url: "https://kerzie.ai/card/aaron",
    images: [{ url: "/aaron-card.jpg", width: 321, height: 321, alt: "Aaron Jones" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aaron Jones",
  jobTitle: "Technical Specialist",
  telephone: "+1-720-749-9474",
  email: "aaron@kerzie.ai",
  url: "https://kerzie.ai/card/aaron",
  image: "https://kerzie.ai/aaron-card.jpg",
  sameAs: ["https://aaronpjones.com/"],
  worksFor: {
    "@type": "Organization",
    name: "Kerzie AI Solutions",
    url: "https://kerzie.ai",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aurora",
    addressRegion: "CO",
    addressCountry: "US",
  },
};

export default function AaronCardPage() {
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
