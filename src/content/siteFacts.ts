// THE SINGLE SOURCE OF TRUTH FOR EVERY FACT THAT CAN GO STALE.
//
// Why this exists (added 2026-08-12): "$999" was hardcoded in six places
// across five files, with no single source. That is the same failure that
// left the Fast-Track price sitting at $750 in two record files for four days
// after it moved to $999. A price should be wrong in one place or no places,
// never five out of six.
//
// It also underpins The Back Cover: /llms.txt and the JSON-LD are GENERATED
// from this file plus each page's own metadata, so the machine-readable
// version of the site cannot drift from the human-readable one.
//
// RULE: if a number, price, offer name, or URL appears on a page AND would
// need changing when the business changes, it belongs here - not in the JSX.

export const SITE_URL = "https://kerzie.ai";
export const CONTACT_EMAIL = "wade@kerzie.ai";
export const BOOKING_PATH = "/schedule";

export const ORG = {
  name: "Kerzie AI Solutions",
  shortName: "Kerzie AI",
  founder: "Wade Kerzie",
  founderTitle: "Founder",
  // Receipts-only: this is the claim used across the site and it is literally true.
  founderCredential:
    "Thirty years leading enterprise sales teams, now building AI operating systems for small businesses and the people who run them.",
  areaServed: "United States",
  baseLocation: "McKinney, Texas",
} as const;

export type Offer = {
  key: string;
  name: string;
  path: string;
  /** Numeric price in USD. null = deliberately not published (book a call). */
  price: number | null;
  /** How the price is said out loud on the page. Keep in sync by using it. */
  priceLabel: string;
  summary: string;
};

// Prices here are the ONLY place a price should be authored. Pages render
// `priceLabel`; JSON-LD and /llms.txt read `price`.
export const OFFERS: Offer[] = [
  {
    key: "one-window",
    name: "One-Window",
    path: "/one-window",
    price: 99,
    priceLabel: "$99",
    summary:
      "The complete framework in one document. Three hours, two habits, one window, zero to-do list. You build your own AI operating system by following it.",
  },
  {
    key: "fast-track",
    name: "The AI Fast-Track Session",
    path: "/services/fast-track",
    price: 999,
    priceLabel: "$999 flat for the room",
    summary:
      "Three hours, done with you. One room, up to three people, each on your own machine and your own accounts. Everyone ships one real piece of their own work before we are done.",
  },
  {
    key: "implementation",
    name: "The Implementation Sprint",
    path: "/services/implementation",
    price: null,
    priceLabel: "Book a call",
    summary:
      "The flagship engagement. We build the operating system into how your business actually runs, not as a pilot on the side.",
  },
  {
    key: "sales-teams",
    name: "For Sales Teams",
    path: "/services/sales-teams",
    price: null,
    priceLabel: "Book a call",
    summary:
      "Your reps have AI licenses. That is not the same as using it. The whole team hands-on-keyboard on live accounts, leaders included, scored from the first session.",
  },
  {
    key: "back-cover",
    name: "The Back Cover",
    path: "/back-cover",
    price: 1500,
    priceLabel: "$1,500 one time",
    summary:
      "More than half of all internet traffic is now machines rather than people. We get your existing website ready to be read by them, in two halves: everything the AI tools can read today, and llms.txt for the standard that is coming. One time, whatever your site is built on. We do not build new websites.",
  },
  {
    key: "the-watch",
    name: "The Watch",
    path: "/back-cover",
    price: 99,
    priceLabel: "$99 a month",
    summary:
      "The ongoing half of The Back Cover. Every month we ask the major AI assistants the questions your customers ask, check their answers against what is actually true, correct whatever has drifted, and keep your machine-readable files current as the standards move. One page a month, in plain language. Requires The Back Cover setup first.",
  },
];

export const FREE_RESOURCES = [
  {
    name: "The Voice Command Center",
    path: "/free/mobile-capture-kit",
    summary:
      "Ten minutes of setup, one habit. Talk into your phone anywhere, and the thought is waiting in your workspace, already acted on, by the time you sit down.",
  },
  {
    name: "The First Reps Guide",
    path: "/free/first-reps",
    summary:
      "The first things to actually do with AI once it is set up, so it becomes a habit instead of a login you forget.",
  },
] as const;

export function offer(key: string): Offer {
  const found = OFFERS.find((o) => o.key === key);
  if (!found) throw new Error(`Unknown offer key: ${key}`);
  return found;
}

type RouteEntry = {
  path: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};

// Every publicly indexable route. Gated pages (/one-window/access,
// /one-window/pass, /free/*/access, /downloads) set `index: false` in their
// own metadata and are deliberately absent.
//
// /llms.txt is NOT listed here - it is a text file, not a page. It is
// advertised through robots.ts and a <link rel="alternate"> in the layout.
export const PUBLIC_ROUTES: RouteEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/back-cover", changeFrequency: "weekly", priority: 0.9 },
  { path: "/one-window", changeFrequency: "weekly", priority: 0.9 },
  { path: "/one-window/business", changeFrequency: "weekly", priority: 0.9 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/fast-track", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/implementation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/sales-teams", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/nemoclaw", changeFrequency: "monthly", priority: 0.6 },
  { path: "/free/first-reps", changeFrequency: "monthly", priority: 0.7 },
  { path: "/free/mobile-capture-kit", changeFrequency: "monthly", priority: 0.7 },
  { path: "/schedule", changeFrequency: "monthly", priority: 0.8 },
  { path: "/speaking", changeFrequency: "monthly", priority: 0.6 },
  { path: "/team", changeFrequency: "monthly", priority: 0.5 },
  // The contact cards are indexed on purpose (see their page.tsx comments);
  // /card was omitted here at its 8/22 creation - caught 8/23 when Aaron's
  // card was added. The /show variants are noindex utility surfaces.
  { path: "/card", changeFrequency: "monthly", priority: 0.5 },
  { path: "/card/aaron", changeFrequency: "monthly", priority: 0.5 },
  { path: "/ventures", changeFrequency: "monthly", priority: 0.6 },
  { path: "/ventures/ad2action", changeFrequency: "monthly", priority: 0.4 },
  { path: "/ventures/ai-os", changeFrequency: "monthly", priority: 0.4 },
  { path: "/ventures/executive-legacy", changeFrequency: "monthly", priority: 0.4 },
  { path: "/ventures/gotaguy", changeFrequency: "monthly", priority: 0.4 },
  { path: "/ventures/truenorth", changeFrequency: "monthly", priority: 0.4 },
  { path: "/ventures/trueseat", changeFrequency: "monthly", priority: 0.4 },
  { path: "/ventures/unison", changeFrequency: "monthly", priority: 0.4 },
  { path: "/ventures/zorli", changeFrequency: "monthly", priority: 0.4 },
  { path: "/kerzie-effect", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blast-door", changeFrequency: "monthly", priority: 0.5 },
  { path: "/consequence-clock", changeFrequency: "monthly", priority: 0.5 },
  { path: "/the-line", changeFrequency: "monthly", priority: 0.5 },
  { path: "/thousand", changeFrequency: "weekly", priority: 0.6 },
  { path: "/try-unison", changeFrequency: "monthly", priority: 0.4 },
  { path: "/subscribe", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.2 },
];
