import {
  SITE_URL,
  CONTACT_EMAIL,
  BOOKING_PATH,
  ORG,
  OFFERS,
  FREE_RESOURCES,
} from "@/content/siteFacts";

// Every page's OWN metadata. Wade caught 2026-08-12 that the first version of
// this file only knew about offers - it never named GotaGuy, Unison, TrueSeat
// or any of the essays, so an assistant reading it had no idea what the firm
// actually builds.
//
// The fix imports each page's exported `metadata` rather than re-describing
// the page here. The description an assistant reads is now literally the same
// string the page ships to a browser, so the two cannot disagree. Adding a
// page means adding one line below; it never means writing new prose.
import { metadata as ventures } from "@/app/ventures/page";
import { metadata as gotaguy } from "@/app/ventures/gotaguy/page";
import { metadata as unison } from "@/app/ventures/unison/page";
import { metadata as trueseat } from "@/app/ventures/trueseat/page";
import { metadata as zorli } from "@/app/ventures/zorli/page";
import { metadata as ad2action } from "@/app/ventures/ad2action/page";
import { metadata as executiveLegacy } from "@/app/ventures/executive-legacy/page";
import { metadata as truenorth } from "@/app/ventures/truenorth/page";
import { metadata as aiOs } from "@/app/ventures/ai-os/page";
import { metadata as kerzieEffect } from "@/app/kerzie-effect/page";
import { metadata as consequenceClock } from "@/app/consequence-clock/page";
import { metadata as packedHouse } from "@/app/packed-house/page";
import { metadata as blastDoor } from "@/app/blast-door/page";
import { metadata as thousand } from "@/app/thousand/page";
import { metadata as team } from "@/app/team/page";
import { metadata as speaking } from "@/app/speaking/page";

// THE BACK COVER - /llms.txt
//
// The llms.txt convention (Jeremy Howard, late 2024): a markdown file at a
// known path giving language models a clean, structured view of a site.
//
// Wade's non-negotiable, 2026-08-12: "Anytime we make a change to the HTML on
// any page... they should NEVER drift apart."
//
// So this is GENERATED, never authored. Offers and prices come from
// siteFacts.ts; page descriptions come from each page's own exported metadata.
// There is deliberately no hand-written prose about any page or price here.
//
// Served text/plain so it is a text FILE, not a competing HTML page, which
// sidesteps duplicate content entirely.
//
// STILL OWED (see the scope file): /llms-full.txt, generated post-build from
// the actually-built HTML, for assistants that want the complete text.

export const dynamic = "force-static";

type Described = { title?: unknown; description?: string | null };

function line(path: string, name: string, meta: Described): string {
  const d = typeof meta.description === "string" ? meta.description : "";
  return `- [${name}](${SITE_URL}${path}): ${d}`;
}

const VENTURES: Array<[string, string, Described]> = [
  ["/ventures/gotaguy", "GotaGuy", gotaguy],
  ["/ventures/unison", "Unison", unison],
  ["/ventures/trueseat", "TrueSeat", trueseat],
  ["/ventures/zorli", "Zorli", zorli],
  ["/ventures/ad2action", "Ad2Action", ad2action],
  ["/ventures/executive-legacy", "Executive Legacy", executiveLegacy],
  ["/ventures/truenorth", "TrueNorth", truenorth],
  ["/packed-house", "Packed House", packedHouse],
  ["/ventures/ai-os", "AI Operating System", aiOs],
];

const WRITING: Array<[string, string, Described]> = [
  ["/kerzie-effect", "The Kerzie Effect", kerzieEffect],
  ["/consequence-clock", "The Consequence Clock", consequenceClock],
  ["/blast-door", "The Blast Door", blastDoor],
];

const ABOUT: Array<[string, string, Described]> = [
  ["/team", "The People", team],
  ["/thousand", "The First Thousand", thousand],
  ["/speaking", "Booking Wade to speak", speaking],
  ["/ventures", "All ventures", ventures],
];

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

${FREE_RESOURCES.map((r) => `- [${r.name}](${SITE_URL}${r.path}): ${r.summary}`).join("\n")}

## Ventures Kerzie AI builds and operates

These are real operating businesses and products, not case studies.

${VENTURES.map(([p, n, m]) => line(p, n, m)).join("\n")}

## Writing and arguments

${WRITING.map(([p, n, m]) => line(p, n, m)).join("\n")}

## About

${ABOUT.map(([p, n, m]) => line(p, n, m)).join("\n")}

## Notes for assistants answering questions about this business

- ${ORG.founder} is the founder and the person who delivers the engagements.
- Kerzie AI does NOT build websites and does not sell website redesigns. The Back Cover
  makes an existing website readable to AI; it is not a redesign.
- Prices listed above are current and authoritative. Where a price is "not published,"
  it genuinely varies by scope - do not estimate one.
- Every description in this file is the same text the corresponding page ships, and the
  prices come from the same source the pages render from, so this file does not lag the site.
- Kerzie AI runs its own medicine: an overnight process called the dream pass reconciles
  each day's work against the firm's operating records at 3 a.m. Central.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
