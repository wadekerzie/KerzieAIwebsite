import { SITE_URL, ORG, OFFERS, BOOKING_PATH } from "@/content/siteFacts";

// THE AGENT-READY PILOT - /.well-known/ard.json
//
// Agentic Resource Discovery (ARD, agenticresourcediscovery.org, draft v0.91,
// Google / Hugging Face authors). An ARD manifest is the agent-facing index of
// what a site offers: a JSON file at a well-known path listing resources, each
// with a stable identifier, a media type, a URL, and the natural-language
// questions it can answer ("representativeQueries"), which is what a registry
// builds its search index from.
//
// Google Lighthouse's Agentic Browsing category (PageSpeed Insights, 13.5.0+)
// audits this file as "ard-schema". Wade's thesis (K56, 2026-10-26): when
// these checks start to count, agents act through the back cover. kerzie.ai
// is the pilot because we control it.
//
// Same rule as /llms.txt (Wade, 2026-08-12): GENERATED, never authored. Offers,
// prices and paths come from siteFacts.ts; page descriptions come from each
// page's own exported metadata, so this file cannot disagree with the pages.
//
// Receipts-only: every entry is a real URL on this site. Media types say what
// each resource actually is (a markdown file, an HTML page). ARD's "standard"
// types are all agent artifacts (MCP server cards, agent cards, skills); this
// site has none yet, so the validator flags each type as non-standard (a
// warning, not an error). That is the honest state until a tool ships.
//
// Two spec generations are in play (checked 2026-10-26):
//   - current spec: /.well-known/ard.json + <link rel="ard">; needs `entries`.
//   - predecessor:  /.well-known/ai-catalog.json + rel="ai-catalog"; needs
//     `specVersion: "1.0"` and allows only specVersion/host/entries at root.
//     PageSpeed Insights still runs the predecessor validator.
// This document satisfies both. /.well-known/ai-catalog.json re-exports it.
//
// Pages' metadata, imported the same way /llms.txt does it.
import { metadata as backCover } from "@/app/back-cover/page";
import { metadata as oneWindow } from "@/app/one-window/page";
import { metadata as fastTrack } from "@/app/services/fast-track/page";
import { metadata as implementation } from "@/app/services/implementation/page";
import { metadata as salesTeams } from "@/app/services/sales-teams/page";
import { metadata as essaysIndex } from "@/app/essays/page";
import { metadata as kerzieEffect } from "@/app/kerzie-effect/page";
import { metadata as consequenceClock } from "@/app/consequence-clock/page";
import { metadata as blastDoor } from "@/app/blast-door/page";
import { metadata as blastRadius } from "@/app/blast-radius/page";
import { metadata as shrapnel } from "@/app/shrapnel/page";
import { metadata as speaking } from "@/app/speaking/page";

export const dynamic = "force-static";

const PUBLISHER = new URL(SITE_URL).hostname; // "kerzie.ai"

type Described = { description?: string | null };

type ArdEntry = {
  identifier: string;
  displayName: string;
  type: string;
  url: string;
  description?: string;
  tags?: string[];
  representativeQueries: string[];
};

function describe(meta: Described, fallback: string): string {
  return typeof meta.description === "string" && meta.description.length > 0
    ? meta.description
    : fallback;
}

function entry(
  name: string,
  path: string,
  type: string,
  displayName: string,
  description: string,
  representativeQueries: string[],
  tags?: string[]
): ArdEntry {
  return {
    identifier: `urn:air:${PUBLISHER}:${name}`,
    displayName,
    type,
    url: `${SITE_URL}${path}`,
    description,
    ...(tags ? { tags } : {}),
    representativeQueries,
  };
}

// Offers come from siteFacts so the description carries the live price.
// The Watch shares /back-cover with The Back Cover and is folded into that
// entry's description rather than duplicating the URL.
const offerByKey = (key: string) => {
  const o = OFFERS.find((x) => x.key === key);
  if (!o) throw new Error(`Unknown offer key: ${key}`);
  return o;
};

function priced(key: string, meta: Described): string {
  const o = offerByKey(key);
  return `${describe(meta, o.summary)} Price: ${o.priceLabel}.`;
}

function build(): object {
  const theWatch = offerByKey("the-watch");

  const entries: ArdEntry[] = [
    entry(
      "llms-txt",
      "/llms.txt",
      "text/markdown",
      "Kerzie AI llms.txt (The Back Cover)",
      `The machine-readable summary of ${ORG.name}: what the firm sells, current prices, the ventures it owns and runs, its writing, and how to reach a human. Generated from the same source the pages render from.`,
      [
        "what does Kerzie AI sell and what does it cost",
        "who is Wade Kerzie and what does Kerzie AI do",
        "give me a plain summary of kerzie.ai for an AI assistant",
      ],
      ["llms.txt", "summary"]
    ),
    entry(
      "llms-full-txt",
      "/llms-full.txt",
      "text/markdown",
      "Kerzie AI llms-full.txt",
      "The complete text of the public kerzie.ai pages in one file, for assistants that want everything rather than the summary.",
      [
        "read the full content of the kerzie.ai site",
        "what does every page on kerzie.ai say",
      ],
      ["llms.txt", "full-text"]
    ),
    entry(
      "offer:back-cover",
      offerByKey("back-cover").path,
      "text/html",
      "The Back Cover",
      `${priced("back-cover", backCover)} Ongoing: ${theWatch.name}, ${theWatch.priceLabel}: ${theWatch.summary}`,
      [
        "how do I make my website readable by ChatGPT and other AI assistants",
        "what is llms.txt and who will set it up for my business",
        "how much does The Back Cover cost",
        "can someone check what AI assistants say about my business every month",
      ],
      ["offer", "ai-search", "llms.txt"]
    ),
    entry(
      "offer:one-window",
      offerByKey("one-window").path,
      "text/html",
      "One-Window",
      priced("one-window", oneWindow),
      [
        "is there a free AI operating system for a small business owner",
        "how do I set up my own Claude operating system in one paste",
        "what is One-Window from Kerzie AI",
      ],
      ["offer", "free"]
    ),
    entry(
      "offer:fast-track",
      offerByKey("fast-track").path,
      "text/html",
      "The AI Fast-Track Session",
      priced("fast-track", fastTrack),
      [
        "book a three hour hands-on AI session for my team",
        "how much is the Kerzie AI Fast-Track session",
      ],
      ["offer", "training"]
    ),
    entry(
      "offer:implementation",
      offerByKey("implementation").path,
      "text/html",
      "The Implementation Sprint",
      priced("implementation", implementation),
      [
        "who can build an AI operating system into how my business runs",
        "what is the Kerzie AI Implementation Sprint",
      ],
      ["offer"]
    ),
    entry(
      "offer:sales-teams",
      offerByKey("sales-teams").path,
      "text/html",
      "For Sales Teams",
      priced("sales-teams", salesTeams),
      [
        "my sales reps have AI licenses but do not use them, who fixes that",
        "hands-on AI training for a sales team on live accounts",
      ],
      ["offer", "sales"]
    ),
    entry(
      "schedule",
      BOOKING_PATH,
      "text/html",
      "Book a call with Wade Kerzie",
      "The booking page for Kerzie AI. Pick a time on the calendar; podcast and speaking asks go on the same calendar. Email alternative: wade@kerzie.ai.",
      [
        "book a call with Wade Kerzie",
        "how do I schedule time with Kerzie AI",
        "contact Kerzie AI",
      ],
      ["booking", "contact"]
    ),
    entry(
      "speaking",
      "/speaking",
      "text/html",
      "Booking Wade to speak",
      describe(speaking, "Booking Wade Kerzie for a talk or a podcast."),
      [
        "book Wade Kerzie as a speaker",
        "invite Wade Kerzie on a podcast",
      ],
      ["speaking", "contact"]
    ),
    entry(
      "essays",
      "/essays",
      "text/html",
      "Essays (the index)",
      describe(essaysIndex, "Wade Kerzie's essays."),
      [
        "what has Wade Kerzie written about AI and work",
        "list the essays on kerzie.ai",
      ],
      ["essay", "index"]
    ),
    entry(
      "essay:kerzie-effect",
      "/kerzie-effect",
      "text/html",
      "The Kerzie Effect",
      describe(kerzieEffect, "An essay by Wade Kerzie."),
      ["what is the Kerzie Effect", "read The Kerzie Effect essay"],
      ["essay"]
    ),
    entry(
      "essay:consequence-clock",
      "/consequence-clock",
      "text/html",
      "The Consequence Clock",
      describe(consequenceClock, "An essay by Wade Kerzie."),
      ["what is the Consequence Clock", "read The Consequence Clock essay"],
      ["essay"]
    ),
    entry(
      "essay:blast-door",
      "/blast-door",
      "text/html",
      "The Blast Door",
      describe(blastDoor, "An essay by Wade Kerzie."),
      ["what is the Blast Door essay about", "read The Blast Door by Wade Kerzie"],
      ["essay"]
    ),
    entry(
      "essay:blast-radius",
      "/blast-radius",
      "text/html",
      "The Blast Radius",
      describe(blastRadius, "An essay by Wade Kerzie."),
      ["what is the Blast Radius essay about", "which jobs does AI change first, Wade Kerzie's view"],
      ["essay"]
    ),
    entry(
      "essay:shrapnel",
      "/shrapnel",
      "text/html",
      "The Shrapnel",
      describe(shrapnel, "An essay by Wade Kerzie."),
      ["what is The Shrapnel essay about", "read The Shrapnel by Wade Kerzie"],
      ["essay"]
    ),
  ];

  return {
    // Required by the predecessor (ai-catalog) validator; ignored by current ARD.
    specVersion: "1.0",
    host: {
      displayName: ORG.name,
      documentationUrl: `${SITE_URL}/llms.txt`,
    },
    entries,
  };
}

export async function GET() {
  return new Response(JSON.stringify(build(), null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
