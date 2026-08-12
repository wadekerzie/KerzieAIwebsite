import {
  SITE_URL,
  CONTACT_EMAIL,
  BOOKING_PATH,
  ORG,
  OFFERS,
  type Offer,
} from "./siteFacts";

// schema.org JSON-LD, built entirely from siteFacts.
//
// This is the load-bearing half of The Back Cover and the least glamorous.
// llms.txt is a bet on an emerging convention; THIS is what search engines
// and the assistants built on them already parse today, with certainty. The
// site shipped 36 routes with none of it until 2026-08-12.
//
// Everything here derives from siteFacts, so the structured data cannot claim
// a price the page does not show.

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: ORG.name,
        alternateName: ORG.shortName,
        url: SITE_URL,
        email: CONTACT_EMAIL,
        description: ORG.founderCredential,
        areaServed: ORG.areaServed,
        founder: { "@id": `${SITE_URL}/#founder` },
availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${SITE_URL}${BOOKING_PATH}`,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder`,
        name: ORG.founder,
        jobTitle: ORG.founderTitle,
        description: ORG.founderCredential,
        worksFor: { "@id": `${SITE_URL}/#organization` },
        url: SITE_URL,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: ORG.shortName,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };
}

/**
 * Per-service structured data. Only emits an `offers` block when the price is
 * actually published - a schema.org Offer with a made-up price is worse than
 * no Offer, and "book a call" is a real answer, not a missing one.
 */
export function serviceJsonLd(o: Offer) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${o.path}/#service`,
    name: o.name,
    description: o.summary,
    url: `${SITE_URL}${o.path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ORG.areaServed,
  };

  if (o.price !== null) {
    base.offers = {
      "@type": "Offer",
      price: String(o.price),
      priceCurrency: "USD",
      url: `${SITE_URL}${o.path}`,
      availability: "https://schema.org/InStock",
    };
  }

  return base;
}

/** Every service that has a published price, for the services index page. */
export function servicesListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: OFFERS.map((o, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: serviceJsonLd(o),
    })),
  };
}
