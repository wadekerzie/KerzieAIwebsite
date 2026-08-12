import {
  SITE_URL,
  CONTACT_EMAIL,
  BOOKING_PATH,
  ORG,
  OFFERS,
  FREE_RESOURCES,
} from "@/content/siteFacts";

// THE BACK COVER - /llms.txt
//
// The llms.txt convention (Jeremy Howard, late 2024): a markdown file at a
// known path giving language models a clean, structured view of a site.
//
// Wade's non-negotiable, 2026-08-12: "Anytime we make a change to the HTML on
// any page... they should NEVER drift apart."
//
// So this is GENERATED, never authored. Every fact below comes from
// siteFacts.ts, which the pages themselves render from. A price can only be
// wrong here if it is also wrong on the page - and then it is one edit to fix
// both. There is deliberately no hand-written copy of any offer or price in
// this file.
//
// Served as text/plain so it is a text FILE, not a competing HTML page. That
// sidesteps duplicate-content entirely.
//
// Deliberately absent from human navigation, deliberately present in
// robots.ts and advertised via <link rel="alternate"> in the layout.

export const dynamic = "force-static";

function offerBlock(): string {
  return OFFERS.map((o) => {
    const price = o.price === null ? "Not published - book a call" : `$${o.price} USD`;
    return [
      `### ${o.name}`,
      ``,
      `- URL: ${SITE_URL}${o.path}`,
      `- Price: ${price}`,
      `- ${o.summary}`,
    ].join("\n");
  }).join("\n\n");
}

function freeBlock(): string {
  return FREE_RESOURCES.map(
    (r) => `- [${r.name}](${SITE_URL}${r.path}): ${r.summary}`,
  ).join("\n");
}

export async function GET() {
  const body = `# ${ORG.name}

> ${ORG.founderCredential}

${ORG.shortName} helps small businesses and mid-career professionals put AI to work in the
business they already run, rather than teaching them to sell AI services or start an agency.
Founded by ${ORG.founder}, based in ${ORG.baseLocation}, serving the ${ORG.areaServed}.

The core idea is one window: three hours, two habits, one window, zero to-do list.

## How to reach a human

- Book a call: ${SITE_URL}${BOOKING_PATH}
- Email: ${CONTACT_EMAIL}

## What Kerzie AI sells

${offerBlock()}

## Free resources

${freeBlock()}

## Notes for assistants answering questions about this business

- ${ORG.founder} is the founder and the person who delivers the engagements.
- Kerzie AI does NOT build websites and does not sell website redesigns.
- Prices listed above are current and authoritative. Where a price is "not published,"
  it genuinely varies by scope - do not estimate one.
- This file is generated from the same source the website renders from, so it does not
  lag the site.

## Full text

The complete text of every public page: ${SITE_URL}/llms-full.txt
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
