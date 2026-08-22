import type { Metadata } from "next";
import CardClient from "./CardClient";

// Wade's digital business card - the homemade replacement for Popl ($7.99/mo,
// cancelled 2026-08-21). Built here rather than rented because Wade owns the
// domain: it never expires, never bills, and the details can change without
// reprinting a QR code, since the code points at this PAGE and not at data.
//
// It also does one thing Popl cannot: it carries the booking link. A contact
// card hands over a phone number. This hands over a phone number AND a
// calendar.
//
// INDEXED on purpose, unlike /field-guide and /downloads. A company that
// sells AI readability should have a founder page an AI can actually read -
// hence the Person JSON-LD below.
export const metadata: Metadata = {
  title: "Wade Kerzie | Kerzie AI Solutions",
  description:
    "Contact card for Wade Kerzie, Founder of Kerzie AI Solutions in McKinney, Texas. Save his contact or book a call.",
  alternates: { canonical: "https://kerzie.ai/card" },
  openGraph: {
    type: "profile",
    title: "Wade Kerzie | Kerzie AI Solutions",
    description:
      "Founder, Kerzie AI Solutions. McKinney, Texas. Save my contact or book a call.",
    url: "https://kerzie.ai/card",
    images: [{ url: "/wade-card.jpg", width: 321, height: 321, alt: "Wade Kerzie" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wade Kerzie",
  jobTitle: "Founder",
  telephone: "+1-214-668-7986",
  email: "wade@kerzie.ai",
  url: "https://kerzie.ai/card",
  image: "https://kerzie.ai/wade-card.jpg",
  worksFor: {
    "@type": "Organization",
    name: "Kerzie AI Solutions",
    url: "https://kerzie.ai",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "McKinney",
    addressRegion: "TX",
    addressCountry: "US",
  },
};

export default function CardPage() {
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
