import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// The Back Cover scores page: the ONE standard page every Back Cover client
// gets (Wade's ruling 2026-11-13). One JSON file per client in
// src/data/scores/, one statically generated page per file. The file name
// (minus .json) is the URL slug.
//
// UNLISTED and noindex, same recipe as /shortline-log and /partners/danny:
// not in any menu, not in PUBLIC_ROUTES (so not in the sitemap), shared by
// link only. scripts/gen-llms-full.mjs skips noindex pages on its own.
//
// The reader is a business owner, not an engineer. Plain words, one screen,
// no alarm colors on a low score. The section order below is the standard:
// do not add sections. The page also prints to ONE US Letter page, which is
// the before/after report PDF.

const DATA_DIR = path.join(process.cwd(), "src", "data", "scores");

type Scores = Record<string, number | null | undefined>;
type Column = {
  label: string;
  date?: string | null;
  lighthouse?: string | null;
  phone?: Scores | null;
  computer?: Scores | null;
};
type AiPage = {
  name: string;
  path?: string | null;
  what?: string | null;
  status?: string | null;
  lastRefresh?: string | null;
};
type ListingLocation = {
  name: string;
  address?: string | null;
  rating?: number | null;
  reviews?: number | null;
  status?: string | null;
  hoursListed?: boolean | null;
  mapsUrl?: string | null;
};
// Added 2026-11-15: one row of the multi-rooftop table (dealer groups). Each
// site carries its own timeline, its matched Google listing and its AI pages
// line, so the page needs no separate listing cards.
type Rooftop = {
  name: string;
  short?: string | null;
  site?: string | null;
  kind?: "rooftop" | "group" | string | null;
  timeline?: Timeline | null;
  listing?: ListingLocation | null;
  aiPagesStatus?: string | null;
  aiPagesChecked?: string | null;
};
// The starting baseline, the new baseline once the work is live, then a short
// running view.
type Timeline = {
  // null when Kerzie AI started before scores were saved. The Before slot
  // then reads "Not measured" and beforeNote (optional) explains why.
  before?: Column | null;
  beforeNote?: string | null;
  after?: Column | null;
  monthly?: Column[] | null;
  pendingLabel?: string | null;
};
type Fixed = string | { what: string; date?: string | null };
type Next = { what: string; who?: string | null };
type ScoresPage = {
  slug?: string;
  business: string;
  site?: string | null;
  updated?: string | null;
  stage?: "before" | "live" | string | null;
  aiPages?: AiPage[] | null;
  logUrl?: string | null;
  fixed?: Fixed[] | null;
  next?: Next[] | null;
  chatgpt?: {
    status?: string | null;
    // Added 2026-11-13 (Wade, after the Aaron call): the profile shows even
    // before it is claimed, as an open gap we keep watching. Older files
    // without \`claimed\` fall back to status + numbers only.
    claimed?: boolean | null;
    why?: string | null;
    yourStep?: string | null;
    monitoring?: string | null;
    numbers?: Record<string, string | number | null> | null;
  } | null;
  // Added 2026-11-13: Google's own listing facts, one entry per location.
  // Optional. Files without it render no section at all.
  googleListing?: {
    checked?: string | null;
    source?: string | null;
    locations?: ListingLocation[] | null;
    note?: string | null;
  } | null;
  // Added 2026-11-13 (Wade): the starting baseline, the new baseline once the
  // work is live, then a short running view. When present it replaces
  // \`columns\`, which stays only as the fallback for older files.
  timeline?: Timeline | null;
  // Added 2026-11-15: multi-rooftop mode. When present, the scores section is
  // ONE table (a row per site) and the Google listing folds into the rows.
  rooftops?: Rooftop[] | null;
  nextCheck?: string | null;
  // How often the scores are rechecked, per the client's agreement (Wade 11/15).
  cadence?: string | null;
  categories?: { key: string; label: string }[] | null;
  columns?: Column[] | null;
  source?: string | null;
};

function slugs(): string[] {
  if (!fs.existsSync(DATA_DIR)) return [];
  return fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.slice(0, -".json".length));
}

function load(slug: string): ScoresPage | null {
  // Only ever read a file that the directory listing itself returned.
  if (!slugs().includes(slug)) return null;
  try {
    return JSON.parse(
      fs.readFileSync(path.join(DATA_DIR, `${slug}.json`), "utf8"),
    ) as ScoresPage;
  } catch {
    return null;
  }
}

export const dynamicParams = false;

export function generateStaticParams() {
  return slugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = load(slug);
  return {
    title: data ? `${data.business} - Google scores | Kerzie AI` : "Kerzie AI",
    description: data
      ? `Google's scores and AI page status for ${data.business}.`
      : undefined,
    robots: { index: false, follow: false },
  };
}

// "2026-11-13" -> "Nov 13, 2026". Parsed by hand so a time zone can never
// move the date. Anything that is not a plain date is shown as written.
function pretty(d?: string | null, long = false): string {
  if (!d) return "";
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(d);
  if (!m) return d;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])).toLocaleDateString(
    "en-US",
    { month: long ? "long" : "short", day: "numeric", year: "numeric" },
  );
}

// "2026-11-13" -> "Nov". Falls back to the column's own label.
function monthLabel(c: Column): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(c.date ?? "");
  if (!m) return c.label;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])).toLocaleDateString(
    "en-US",
    { month: "short" },
  );
}

function score(v: number | null | undefined): string {
  return typeof v === "number" && Number.isFinite(v) ? String(Math.round(v)) : "-";
}

// "4.8 stars from 132 Google reviews", in Google's numbers and plain words.
function reviewLine(l: ListingLocation): string {
  const n = typeof l.reviews === "number" ? l.reviews : 0;
  if (n <= 0) return "No Google reviews yet";
  const count = `${n.toLocaleString("en-US")} Google review${n === 1 ? "" : "s"}`;
  return typeof l.rating === "number" ? `${l.rating.toFixed(1)} stars from ${count}` : count;
}

// The calm tag for anything we are still watching. Never red.
const GAP_TAG =
  "rounded-full bg-[#eef2fa] border border-[#7B9FE8]/50 text-[#1a1a2e] px-2 py-0.5 text-xs font-medium print:text-[9px]";

const DEFAULT_CATEGORIES = [
  { key: "performance", label: "Speed" },
  { key: "accessibility", label: "Accessibility" },
  { key: "best-practices", label: "Best practices" },
  { key: "seo", label: "SEO" },
  { key: "agentic-browsing", label: "AI readiness" },
];

const PRINT_CSS = `
@media print {
  @page { size: Letter; margin: 0.45in 0.5in; }
  html, body { background: #fff !important; }
  .scores-page, .scores-page * {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .scores-page { min-height: 0 !important; background: #fff !important; }
  .scores-page section, .scores-page .scores-keep { break-inside: avoid; page-break-inside: avoid; }
  .scores-page a { text-decoration: none; }
  /* Multi-rooftop table: the PDF shows the rows only, never the drill-down. */
  .scores-page .roof-detail, .scores-page .roof-chevron { display: none !important; }
}
.scores-page summary.roof-row { list-style: none; }
.scores-page summary.roof-row::-webkit-details-marker { display: none; }
.scores-page details[open] > summary .roof-chevron { transform: rotate(90deg); }
/* No chat bubble on a client report, on screen or in print. ChatWidget.tsx
   does not load it here; this covers a widget already loaded on another page
   before an in-app navigation. */
chat-widget, [data-chat-widget] { display: none !important; }
`;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[#1a1a2e] text-[15px] font-bold tracking-[-0.01em] print:text-[12px]">
      {children}
    </h2>
  );
}

const CARD =
  "bg-white border border-[#e8e0d8] rounded-lg p-4 sm:p-5 print:p-3 print:rounded-md";

// WITH_BLUE = #3F63C7: the Kerzie blue family, dark enough for text on a
// white tile (5.5:1, WCAG AA). #7B9FE8 stays for bars and accents only.
// One slot of the before / with pair. A pending slot keeps the same footprint
// so the pair reads as a pair even before go-live.
function PairSlot({
  title,
  column,
  catKey,
  pending,
  strong,
  accent,
}: {
  title: string;
  column?: Column | null;
  catKey: string;
  pending: string;
  strong?: boolean;
  accent?: boolean;
}) {
  // The "Back Cover" slot is set in WITH_BLUE end to end (label, number,
  // date, pending text) so it stands apart from the navy/gray "Before" slot.
  const small = accent ? "text-[#3F63C7]" : "text-[#6b6560]";
  const big = accent ? "text-[#3F63C7]" : strong ? "text-[#1a1a2e]" : "text-[#6b6560]";
  return (
    <div>
      <p
        className={`text-[10px] leading-tight print:text-[7.5px] whitespace-nowrap ${small} ${
          accent ? "font-semibold" : ""
        }`}
      >
        {title}
      </p>
      <div className="h-9 print:h-7 flex items-center">
        {column ? (
          <p
            className={`tabular-nums leading-none tracking-[-0.03em] font-bold text-3xl print:text-[22px] ${big}`}
          >
            {score(column.phone?.[catKey])}
          </p>
        ) : (
          <p
            className={`max-w-[4.75rem] text-xs leading-tight print:text-[8.5px] ${
              accent ? "text-[#3F63C7]" : "text-[#6b6560]/80"
            }`}
          >
            {pending}
          </p>
        )}
      </div>
      <p className={`text-[10px] leading-tight print:text-[8px] min-h-[1.25em] ${small}`}>
        {column?.date ? pretty(column.date) : ""}
      </p>
    </div>
  );
}

function TimelineTiles({
  timeline,
  categories,
}: {
  timeline: NonNullable<ScoresPage["timeline"]>;
  categories: { key: string; label: string }[];
}) {
  const before = timeline.before ?? null;
  const after = timeline.after ?? null;
  const monthly = (timeline.monthly ?? []).slice(-3);
  const pending = timeline.pendingLabel || "To be completed";
  const latest = after ?? before;
  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-5 print:grid-cols-5 gap-2 sm:gap-3 print:gap-2">
      {categories.map((cat) => {
        const b = before?.phone?.[cat.key];
        const a = after?.phone?.[cat.key];
        const now = latest?.phone?.[cat.key];
        const pct = typeof now === "number" ? Math.max(0, Math.min(100, now)) : 0;
        const delta =
          typeof a === "number" && typeof b === "number" ? Math.round(a) - Math.round(b) : null;
        const comp = latest?.computer?.[cat.key];
        return (
          <div key={cat.key} className={`${CARD} !p-3 print:!p-2.5`}>
            <div className="flex items-baseline justify-between gap-2 mb-2 print:mb-1">
              <p className="text-sm font-semibold whitespace-nowrap print:text-[10.5px]">
                {cat.label}
              </p>
              {delta !== null ? (
                /* Calm either way: brand blue for a gain, neutral for a dip. */
                <p
                  className={`tabular-nums text-xs font-semibold rounded-full py-0.5 print:text-[8.5px] ${
                    delta > 0 ? "px-1.5 bg-[#eef2fa] text-[#3F63C7]" : "text-[#6b6560]"
                  }`}
                >
                  {delta > 0 ? `+${delta}` : delta === 0 ? "Same" : String(delta)}
                </p>
              ) : null}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-[auto_auto] sm:justify-between print:grid-cols-[auto_auto] print:justify-between gap-x-1">
              <PairSlot
                title="Before"
                column={before}
                catKey={cat.key}
                pending="Not measured"
                strong={!after}
              />
              <PairSlot
                title="Back Cover"
                column={after}
                catKey={cat.key}
                pending={pending}
                accent
              />
            </div>
            {/* Brand blue, whatever the number is. No alarm colors. */}
            <div className="mt-2 print:mt-1.5 h-1 rounded-full bg-[#e8e0d8]/70 overflow-hidden">
              <div className="h-full rounded-full bg-[#7B9FE8]" style={{ width: `${pct}%` }} />
            </div>
            <p className="mt-2 print:mt-1.5 text-xs sm:text-[11px] leading-snug text-[#6b6560] print:text-[8.5px] tabular-nums">
              <span className="block text-[10px] print:text-[8px]">Last 3 months</span>
              {monthly.length === 0 ? (
                <span className="text-[#6b6560]/80">{pending}</span>
              ) : (
                monthly.map((c, i) => (
                  <span key={i} className="whitespace-nowrap">
                    {i > 0 ? <span className="mx-0.5">&middot;</span> : null}
                    {monthLabel(c)}{" "}
                    <span className="text-[#1a1a2e] font-semibold">
                      {score(c.phone?.[cat.key])}
                    </span>
                  </span>
                ))
              )}
            </p>
            {latest?.computer ? (
              <p className="mt-1.5 print:mt-1 text-xs text-[#6b6560] print:text-[8.5px] tabular-nums">
                On a computer:{" "}
                <span className="text-[#1a1a2e] font-semibold">{score(comp)}</span>
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

// ---- Multi-rooftop mode (2026-11-15) --------------------------------------
// One compact table instead of five tiles: a row per site, a column per
// score. The cell tint is Google's own PageSpeed band (0-49, 50-89, 90-100),
// kept soft so a low number reads as a fact, not an alarm.
const BANDS = {
  low: { bg: "bg-[#f8e6e1]", text: "text-[#9c3a2a]" },
  mid: { bg: "bg-[#fbeeda]", text: "text-[#8a5a12]" },
  high: { bg: "bg-[#e3f1e9]", text: "text-[#1f6b49]" },
};
function band(v: number | null | undefined) {
  if (typeof v !== "number" || !Number.isFinite(v)) return null;
  return v >= 90 ? BANDS.high : v >= 50 ? BANDS.mid : BANDS.low;
}

// Site label + five score columns + the expand arrow. The header, every row
// and every drill-down line share it, so the numbers stay in their columns.
const ROOF_GRID =
  "grid grid-cols-[minmax(0,1fr)_repeat(5,2.75rem)_0.75rem] sm:grid-cols-[minmax(0,1fr)_repeat(5,5.75rem)_1rem] print:grid-cols-[minmax(0,1fr)_repeat(5,5.25rem)_0.25rem] gap-x-1 sm:gap-x-2 items-center";

// Phone-width headers break on a soft hyphen instead of being abbreviated.
const ROOF_HEAD: Record<string, React.ReactNode> = {
  accessibility: <>Access&shy;ibility</>,
};

function BandCell({
  value,
  delta,
  accent,
  small,
}: {
  value: number | null | undefined;
  delta?: number | null;
  accent?: boolean;
  small?: boolean;
}) {
  const b = band(value);
  return (
    <span
      className={`mx-auto flex flex-col sm:flex-row print:flex-row items-center justify-center sm:gap-1 print:gap-1 rounded-md tabular-nums leading-none w-full sm:w-[4.5rem] print:w-[4rem] ${
        small ? "py-1 print:py-0.5 text-xs print:text-[9px] font-semibold" : "py-1.5 print:py-[3px] text-[15px] sm:text-base print:text-[11px] font-bold"
      } ${b ? b.bg : "bg-[#f3efe9]"} ${accent ? "text-[#3F63C7]" : b ? b.text : "text-[#6b6560]"}`}
    >
      {score(value)}
      {typeof delta === "number" && delta !== 0 ? (
        <span className="text-[9px] sm:text-[10px] print:text-[7.5px] font-semibold mt-0.5 sm:mt-0 print:mt-0">
          {delta > 0 ? `+${delta}` : String(delta)}
        </span>
      ) : null}
    </span>
  );
}

function RoofLine({
  label,
  scores,
  categories,
}: {
  label: React.ReactNode;
  scores?: Scores | null;
  categories: { key: string; label: string }[];
}) {
  return (
    <div className={`${ROOF_GRID} py-0.5`}>
      <p className="text-[11px] sm:text-xs leading-tight text-[#6b6560]">{label}</p>
      {categories.map((cat) => (
        <BandCell key={cat.key} value={scores?.[cat.key]} small />
      ))}
      <span />
    </div>
  );
}

function RooftopRow({
  r,
  categories,
}: {
  r: Rooftop;
  categories: { key: string; label: string }[];
}) {
  const t = r.timeline ?? {};
  const before = t.before ?? null;
  const after = t.after ?? null;
  const monthly = (t.monthly ?? []).slice(-3);
  // The row shows the Back Cover number once there is one, else the Before.
  const shown = after ?? before;
  const l = r.listing ?? null;
  const status = l ? l.status || "Not found" : "";
  const open = status.trim().toLowerCase() === "open";
  const runs = [
    before?.date ? `Before: ${pretty(before.date)}` : null,
    after?.date ? `Back Cover: ${pretty(after.date)}` : null,
    ...monthly.map((c) => (c.date ? `Monthly check: ${pretty(c.date)}` : null)),
  ].filter(Boolean) as string[];
  return (
    <details className="border-t border-[#e8e0d8]/80 first:border-t-0">
      <summary
        className={`roof-row ${ROOF_GRID} cursor-pointer select-none px-2 sm:px-4 print:px-2 py-1.5 sm:py-2 print:py-[3px] hover:bg-[#faf8f5]`}
      >
        <span className="min-w-0 pr-1">
          <span className="block text-[13px] sm:text-sm print:text-[10.5px] font-semibold leading-tight">
            <span className="sm:hidden print:hidden">{r.short || r.name}</span>
            <span className="hidden sm:inline print:inline">{r.name}</span>
          </span>
          {r.site ? (
            <span className="hidden sm:block print:block text-[11px] print:text-[8px] leading-tight text-[#6b6560] truncate">
              {r.site}
            </span>
          ) : null}
        </span>
        {categories.map((cat) => {
          const a = after?.phone?.[cat.key];
          const b = before?.phone?.[cat.key];
          const delta =
            typeof a === "number" && typeof b === "number" ? Math.round(a) - Math.round(b) : null;
          return (
            <BandCell
              key={cat.key}
              value={shown?.phone?.[cat.key]}
              delta={after ? delta : null}
              accent={!!after}
            />
          );
        })}
        <span
          aria-hidden
          className="roof-chevron justify-self-end text-[#7B9FE8] text-sm leading-none transition-transform"
        >
          &rsaquo;
        </span>
      </summary>
      <div className="roof-detail bg-[#faf8f5]/70 border-t border-[#e8e0d8]/60 px-2 sm:px-4 py-3 text-sm leading-snug">
        <p className="sm:hidden text-xs mb-2">
          <span className="font-semibold">{r.name}</span>
          {r.site ? <span className="text-[#6b6560]"> &middot; {r.site}</span> : null}
        </p>
        {shown ? (
          <div>
            {after && before ? (
              <RoofLine label="Before, on a phone" scores={before.phone} categories={categories} />
            ) : null}
            {shown.computer ? (
              <RoofLine label="On a computer" scores={shown.computer} categories={categories} />
            ) : null}
            {monthly.map((c, i) => (
              <RoofLine
                key={i}
                label={`${monthLabel(c)} check, phone`}
                scores={c.phone}
                categories={categories}
              />
            ))}
          </div>
        ) : (
          <p className="text-xs text-[#6b6560]">The first check has not run yet.</p>
        )}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {l ? (
            <div>
              <p className="text-[11px] text-[#6b6560]">Google listing</p>
              <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-semibold">{reviewLine(l)}</span>
                {open ? (
                  <span className="rounded-full bg-[#eef2fa] px-2 py-0.5 text-xs font-medium">
                    Open
                  </span>
                ) : (
                  <>
                    <span className="text-xs font-medium">{status}</span>
                    <span className={GAP_TAG}>Open gap</span>
                  </>
                )}
                {l.hoursListed === false ? (
                  <span className="text-xs font-medium">No hours on Google</span>
                ) : null}
              </p>
              {l.address ? <p className="mt-0.5 text-xs text-[#6b6560]">{l.address}</p> : null}
              {l.mapsUrl ? (
                <p className="mt-1 text-xs">
                  <a
                    href={l.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline decoration-[#7B9FE8] decoration-2 underline-offset-4"
                  >
                    See on Google Maps
                  </a>
                </p>
              ) : null}
            </div>
          ) : null}
          {r.aiPagesStatus ? (
            <div>
              <p className="text-[11px] text-[#6b6560]">
                AI pages
                {r.aiPagesChecked ? <> &middot; checked {pretty(r.aiPagesChecked)}</> : null}
              </p>
              <p className="mt-0.5">{r.aiPagesStatus}</p>
            </div>
          ) : null}
        </div>
        {runs.length ? (
          <p className="mt-3 text-[11px] text-[#6b6560]">Google score runs. {runs.join(" · ")}</p>
        ) : null}
      </div>
    </details>
  );
}

function RooftopTable({
  rooftops,
  categories,
}: {
  rooftops: Rooftop[];
  categories: { key: string; label: string }[];
}) {
  const stores = rooftops.filter((r) => r.kind !== "group");
  const group = rooftops.filter((r) => r.kind === "group");
  return (
    <div className="mt-2 bg-white border border-[#e8e0d8] rounded-lg print:rounded-md overflow-hidden">
      <div
        className={`${ROOF_GRID} !items-end px-2 sm:px-4 print:px-2 py-2 print:py-1 border-b border-[#e8e0d8] text-[9px] sm:text-xs print:text-[8.5px] font-semibold leading-tight text-[#6b6560]`}
      >
        <p>
          Site
          <span className="roof-chevron font-normal"> &middot; tap a row for more</span>
        </p>
        {categories.map((cat) => (
          <p key={cat.key} className="text-center hyphens-manual">
            {ROOF_HEAD[cat.key] ?? cat.label}
          </p>
        ))}
        <span />
      </div>
      {stores.map((r, i) => (
        <RooftopRow key={`s${i}`} r={r} categories={categories} />
      ))}
      {group.length ? (
        <p className="px-2 sm:px-4 print:px-2 py-1 print:py-0.5 bg-[#faf8f5] border-y border-[#e8e0d8]/80 text-[10px] print:text-[8px] font-semibold uppercase tracking-[0.06em] text-[#6b6560]">
          Group sites
        </p>
      ) : null}
      {group.map((r, i) => (
        <RooftopRow key={`g${i}`} r={r} categories={categories} />
      ))}
    </div>
  );
}

export default async function ScoresPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = load(slug);
  if (!data) notFound();

  const categories = data.categories?.length ? data.categories : DEFAULT_CATEGORIES;
  const timeline = data.timeline ?? null;
  // With a timeline, the footnote's Lighthouse versions come from its columns.
  const rooftops = data.rooftops?.length ? data.rooftops : null;
  const columns = rooftops
    ? (rooftops.flatMap((r) => [
        r.timeline?.before,
        r.timeline?.after,
        ...(r.timeline?.monthly ?? []),
      ]).filter(Boolean) as Column[])
    : timeline
    ? ([timeline.before, timeline.after, ...(timeline.monthly ?? [])].filter(Boolean) as Column[])
    : (data.columns ?? []);
  const last = columns.length - 1;
  const multi = columns.length > 1;
  const hasComputer = columns.some((c) => c.computer);
  const versions = Array.from(
    new Set(columns.map((c) => c.lighthouse).filter(Boolean) as string[]),
  );
  const aiPages = data.aiPages ?? [];
  const fixed = data.fixed ?? [];
  const next = (data.next ?? []).slice(0, 3);
  const numbers = data.chatgpt?.numbers
    ? Object.entries(data.chatgpt.numbers).filter(([, v]) => v !== null && v !== "")
    : [];
  const live = data.stage === "live";
  const listing = data.googleListing;
  const locations = listing?.locations ?? [];
  const gpt = data.chatgpt;
  const gptNew = typeof gpt?.claimed === "boolean";
  const gptGap = gpt?.claimed === false;

  return (
    <div className="scores-page bg-[#faf8f5] min-h-screen text-[#1a1a2e]">
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-10 print:p-0 print:max-w-none">
        {/* 1. Header. A div, not <header>: the site print CSS hides <header>. */}
        <div className="scores-keep">
          <div className="flex items-center justify-end print:justify-between gap-4">
            {/* Print only: the site header (and its logo) is hidden in the
                PDF, and a client deliverable carries the Kerzie AI brand. On
                screen the site header already shows it. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/kerzie-ai-logo-transparent.png"
              alt="Kerzie AI"
              width={2800}
              height={850}
              className="hidden print:block print:h-6 w-auto"
            />
            <p className="text-[#6b6560] text-xs sm:text-sm print:text-[10px] text-right">
              {data.updated ? <>Updated {pretty(data.updated, true)}</> : null}
            </p>
          </div>
          <div className="mt-4 print:mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h1 className="font-bold tracking-[-0.025em] leading-[1.1] text-[clamp(1.6rem,4.5vw,2.25rem)] print:text-[22px]">
              {data.business}
            </h1>
            {data.site ? (
              <p className="text-[#6b6560] text-sm sm:text-base print:text-[11px]">
                {data.site}
              </p>
            ) : null}
          </div>
          <p className="mt-1.5 text-[15px] sm:text-base print:text-[11.5px]">
            These are Google&apos;s own scores, not ours.
          </p>
        </div>

        {/* 2. Google's scores */}
        <section className="mt-5 print:mt-3">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <SectionTitle>Google&apos;s scores, on a phone</SectionTitle>
            {/* Wade 11/15: the status lives here, so the tile labels stay short. */}
            {timeline || rooftops ? (
              <p className="flex items-center gap-1.5 text-xs print:text-[9.5px] text-[#6b6560]">
                <span
                  aria-hidden
                  className={`inline-block h-2 w-2 rounded-full ${
                    live ? "bg-[#2e9e6b]" : "bg-[#e8e0d8]"
                  }`}
                />
                {live ? (
                  <span>
                    <span className="font-semibold text-[#1a1a2e]">Back Cover is live.</span>{" "}
                    Scores rechecked {data.cadence || "monthly"}, as agreed.
                  </span>
                ) : (
                  <span>The Back Cover scores fill in at go-live.</span>
                )}
              </p>
            ) : null}
            {columns.length && !timeline && !rooftops ? (
              <p className="text-[#6b6560] text-xs print:text-[9.5px]">
                {columns.map((c, i) => (
                  <span key={i}>
                    {i > 0 ? <span className="mx-1.5 text-[#e8e0d8]">|</span> : null}
                    <span className={i === last ? "text-[#1a1a2e] font-semibold" : ""}>
                      {c.label}
                    </span>
                    {c.date ? <>: {pretty(c.date)}</> : null}
                  </span>
                ))}
              </p>
            ) : null}
          </div>

          {rooftops ? (
            <RooftopTable rooftops={rooftops} categories={categories} />
          ) : timeline ? (
            <TimelineTiles timeline={timeline} categories={categories} />
          ) : columns.length === 0 ? (
            <p className={`${CARD} mt-2 text-sm text-[#6b6560]`}>
              The first check has not run yet.
            </p>
          ) : (
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-5 print:grid-cols-5 gap-2 sm:gap-3 print:gap-2">
              {categories.map((cat) => {
                const latest = columns[last]?.phone?.[cat.key];
                const pct =
                  typeof latest === "number" ? Math.max(0, Math.min(100, latest)) : 0;
                return (
                  <div
                    key={cat.key}
                    className={`${CARD} !p-3 sm:!p-4 print:!p-2.5 grid grid-cols-[1fr_auto] sm:grid-cols-1 print:grid-cols-1 items-center content-start gap-x-4`}
                  >
                    <p className="text-sm font-semibold print:text-[10.5px] sm:mb-2 print:mb-1">
                      {cat.label}
                    </p>
                    {multi ? (
                      /* Several checks: side by side on a phone, stacked rows
                         in the narrower desktop and print tiles. */
                      <div
                        className="grid gap-x-3 items-end text-right grid-cols-[repeat(var(--cols),minmax(2.75rem,auto))] sm:grid-cols-1 sm:gap-y-1 print:grid-cols-1 print:gap-y-0.5"
                        style={{ "--cols": columns.length } as React.CSSProperties}
                      >
                        {columns.map((c, i) => (
                          <div
                            key={i}
                            className="sm:flex sm:items-baseline sm:justify-between sm:gap-2 print:flex print:items-baseline print:justify-between print:gap-2"
                          >
                            <p className="text-[10px] sm:text-xs leading-tight text-[#6b6560] print:text-[8.5px] sm:text-left print:text-left">
                              {c.label}
                            </p>
                            <p
                              className={`tabular-nums leading-none tracking-[-0.03em] font-bold ${
                                i === last
                                  ? "text-3xl print:text-[20px] text-[#1a1a2e]"
                                  : "text-3xl sm:text-xl print:text-[13px] text-[#6b6560]/70"
                              }`}
                            >
                              {score(c.phone?.[cat.key])}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="tabular-nums leading-none tracking-[-0.03em] font-bold text-3xl sm:text-4xl print:text-[24px] text-right sm:text-left print:text-left">
                        {score(columns[0]?.phone?.[cat.key])}
                      </p>
                    )}
                    {/* Brand blue, whatever the number is. No alarm colors. */}
                    <div className="col-span-2 sm:col-span-1 print:col-span-1 mt-2 print:mt-1.5 h-1 rounded-full bg-[#e8e0d8]/70 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#7B9FE8]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    {hasComputer ? (
                      <p className="col-span-2 sm:col-span-1 print:col-span-1 mt-2 print:mt-1.5 text-xs text-[#6b6560] print:text-[9px] tabular-nums">
                        On a computer:{" "}
                        {columns.map((c, i) => (
                          <span key={i}>
                            {i > 0 ? ", " : null}
                            <span className={i === last ? "text-[#1a1a2e] font-semibold" : ""}>
                              {score(c.computer?.[cat.key])}
                            </span>
                          </span>
                        ))}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
          {rooftops ? (
            <p className="mt-2 print:mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] leading-snug text-[#6b6560] print:text-[8.5px]">
              <span>The colors are Google&apos;s own bands:</span>
              {(
                [
                  ["0-49", BANDS.low],
                  ["50-89", BANDS.mid],
                  ["90-100", BANDS.high],
                ] as const
              ).map(([label, b]) => (
                <span
                  key={label}
                  className={`rounded px-1.5 py-0.5 font-semibold tabular-nums ${b.bg} ${b.text}`}
                >
                  {label}
                </span>
              ))}
              {live ? (
                <span>
                  <span className="font-semibold text-[#3F63C7]">Blue numbers</span> are with the
                  Back Cover, with the change from Before.
                </span>
              ) : null}
            </p>
          ) : null}
          <p className="mt-2 text-[11px] leading-snug text-[#6b6560] print:text-[8.5px] print:mt-1.5">
            {timeline && !timeline.before && timeline.beforeNote ? (
              <>{timeline.beforeNote} </>
            ) : null}
            Scores run from 0 to 100. Higher is better.
            {data.source ? <> {data.source}</> : null}
            {versions.length ? <> Lighthouse version {versions.join(", ")}.</> : null}
            {rooftops && listing?.locations?.length ? (
              <span className="print:hidden">
                {" "}
                Each store&apos;s Google listing is inside its row
                {listing.source ? <>, from {listing.source}</> : null}
                {listing.checked ? <>, checked {pretty(listing.checked)}</> : null}.
              </span>
            ) : null}
          </p>
        </section>

        {/* Your Google listing: Google's own facts per location. Optional. */}
        {listing && !rooftops ? (
          <section className="mt-5 print:mt-3">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <SectionTitle>Your Google listing</SectionTitle>
              <p className="text-[#6b6560] text-xs print:text-[9.5px]">
                Google&apos;s numbers, not ours.
              </p>
            </div>
            {locations.length === 0 ? (
              <p className={`${CARD} !py-3 print:!py-2 mt-2 text-sm text-[#6b6560] print:text-[10px]`}>
                {listing.note || "Checking soon."}
              </p>
            ) : (
              <>
                <div
                  className={`mt-2 grid grid-cols-1 gap-2 sm:gap-3 print:gap-2 ${
                    locations.length > 1 ? "sm:grid-cols-2 print:grid-cols-2" : ""
                  } ${locations.length > 2 ? "lg:grid-cols-3 print:grid-cols-3" : ""}`}
                >
                  {locations.map((l, i) => {
                    const status = l.status || "Not found";
                    const open = status.trim().toLowerCase() === "open";
                    return (
                      <div
                        key={i}
                        className={`${CARD} !p-3 sm:!p-4 print:!p-2.5 scores-keep text-sm leading-snug print:text-[10px]`}
                      >
                        <p className="font-semibold">{l.name}</p>
                        {l.address ? (
                          <p className="text-[#6b6560] text-xs print:text-[9px]">{l.address}</p>
                        ) : null}
                        <p className="mt-1.5 print:mt-1">{reviewLine(l)}</p>
                        <p className="mt-1.5 print:mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs print:text-[9px]">
                          {open ? (
                            <span className="rounded-full bg-[#eef2fa] px-2 py-0.5 font-medium">
                              Open
                            </span>
                          ) : (
                            <>
                              <span className="font-medium">{status}</span>
                              <span className={GAP_TAG}>Open gap</span>
                            </>
                          )}
                          {l.hoursListed === true ? (
                            <span className="text-[#6b6560]">Hours listed</span>
                          ) : l.hoursListed === false ? (
                            <span className="font-medium">No hours on Google</span>
                          ) : null}
                          {l.mapsUrl ? (
                            <a
                              href={l.mapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold underline decoration-[#7B9FE8] decoration-2 underline-offset-4 sm:ml-auto print:ml-auto"
                            >
                              See on Google Maps
                            </a>
                          ) : null}
                        </p>
                      </div>
                    );
                  })}
                </div>
                {listing.note ? (
                  <p className="mt-2 text-xs text-[#6b6560] print:text-[9px]">{listing.note}</p>
                ) : null}
              </>
            )}
            {listing.source || listing.checked ? (
              <p className="mt-2 text-[11px] leading-snug text-[#6b6560] print:text-[8.5px] print:mt-1.5">
                {listing.source ? <>Source: {listing.source}. </> : null}
                {listing.checked ? <>Checked {pretty(listing.checked)}.</> : null}
              </p>
            ) : null}
          </section>
        ) : null}

        <div className="mt-5 print:mt-3 grid grid-cols-1 lg:grid-cols-3 print:grid-cols-3 gap-3 print:gap-2 items-start">
          {/* 3. Your AI pages */}
          <section className={CARD}>
            <SectionTitle>Your AI pages</SectionTitle>
            {aiPages.length === 0 ? (
              <p className="mt-2 text-sm text-[#6b6560] print:text-[10px]">
                Not built yet. They are first on the list.
              </p>
            ) : (
              <ul className="mt-2 space-y-3 print:space-y-2">
                {aiPages.map((p, i) => (
                  <li key={i} className="text-sm leading-snug print:text-[10px]">
                    <p className="font-semibold">
                      {p.name}
                      {p.path ? (
                        <span className="k-mono font-normal text-[#6b6560] text-xs print:text-[9px] ml-2">
                          {p.path}
                        </span>
                      ) : null}
                    </p>
                    {p.what ? <p className="mt-0.5">{p.what}</p> : null}
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#6b6560] print:text-[9px]">
                      <span className="rounded-full bg-[#eef2fa] text-[#1a1a2e] px-2 py-0.5 font-medium">
                        {p.status || "In progress"}
                      </span>
                      <span className="whitespace-nowrap">
                        Last refresh: {p.lastRefresh ? pretty(p.lastRefresh) : "not yet"}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            )}
            {data.logUrl ? (
              <p className="mt-3 text-sm print:text-[10px]">
                <a
                  href={data.logUrl}
                  className="font-semibold underline decoration-[#7B9FE8] decoration-2 underline-offset-4"
                >
                  See every update
                </a>
              </p>
            ) : null}
          </section>

          {/* 4. What we fixed, and what's next */}
          <section className={CARD}>
            <SectionTitle>What we fixed</SectionTitle>
            {fixed.length === 0 ? (
              <p className="mt-2 text-sm text-[#6b6560] print:text-[10px]">
                {live ? "Nothing new since the last check." : "Nothing yet. Work starts now."}
              </p>
            ) : (
              <ul className="mt-2 space-y-2 print:space-y-1">
                {fixed.map((f, i) => {
                  const what = typeof f === "string" ? f : f.what;
                  const date = typeof f === "string" ? null : f.date;
                  return (
                    <li key={i} className="flex gap-2 text-sm leading-snug print:text-[10px]">
                      <span aria-hidden className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7B9FE8]" />
                      <span>
                        {what}
                        {date ? (
                          <span className="text-[#6b6560] text-xs print:text-[9px]">
                            {" "}
                            ({pretty(date)})
                          </span>
                        ) : null}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          <section className={CARD}>
            <SectionTitle>What&apos;s next</SectionTitle>
            {next.length === 0 ? (
              <p className="mt-2 text-sm text-[#6b6560] print:text-[10px]">
                Nothing open right now.
              </p>
            ) : (
              <ol className="mt-2 space-y-2.5 print:space-y-1.5">
                {next.map((n, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-snug print:text-[10px]">
                    <span className="tabular-nums font-bold text-[#7B9FE8]">{i + 1}</span>
                    <span>
                      {n.what}
                      {n.who ? (
                        <span className="block mt-0.5 text-xs text-[#6b6560] print:text-[9px]">
                          Who: {n.who}
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </section>
        </div>

        <div className="mt-3 print:mt-2 grid grid-cols-1 lg:grid-cols-3 print:grid-cols-3 gap-3 print:gap-2 items-start">
          {/* 5. ChatGPT profile */}
          <section
            className={`${CARD} ${
              gptGap ? "lg:col-span-3 print:col-span-3" : "lg:col-span-2 print:col-span-2"
            }`}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <SectionTitle>
                {gptNew ? "ChatGPT business profile" : "ChatGPT profile"}
              </SectionTitle>
              {gptGap ? (
                /* Calm on purpose: an item we track, not a failure. */
                <span className={GAP_TAG}>
                  Open gap
                </span>
              ) : null}
              <p className="text-sm print:text-[10px]">
                {gpt?.status || (gpt?.claimed ? "Claimed" : "Not claimed yet")}
              </p>
            </div>
            {gptGap ? (
              <div className="mt-2 print:mt-1.5 space-y-1.5 print:space-y-1 text-sm leading-snug print:text-[10px] max-w-3xl print:max-w-none">
                {gpt?.why ? <p>{gpt.why}</p> : null}
                {gpt?.yourStep ? (
                  <p>
                    <span className="font-semibold">Your step:</span> {gpt.yourStep}
                  </p>
                ) : null}
                {gpt?.monitoring ? (
                  <p className="text-[#6b6560] text-xs print:text-[9px]">{gpt.monitoring}</p>
                ) : null}
              </div>
            ) : null}
            {numbers.length ? (
              <div className="mt-2">
                <p className="text-xs text-[#6b6560] print:text-[9px]">
                  ChatGPT&apos;s numbers
                </p>
                <dl className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
                  {numbers.map(([label, value]) => (
                    <div key={label}>
                      <dd className="text-xl font-bold tabular-nums leading-tight print:text-[15px]">
                        {String(value)}
                      </dd>
                      <dt className="text-xs text-[#6b6560] print:text-[9px]">{label}</dt>
                    </div>
                  ))}
                </dl>
                {gptNew ? (
                  <p className="mt-1.5 text-xs text-[#6b6560] print:text-[9px]">
                    These are ChatGPT&apos;s own numbers, not ours.
                  </p>
                ) : null}
              </div>
            ) : null}
          </section>

          {/* 6. Next check */}
          <section
            className={`${CARD} ${
              gptGap
                ? "lg:col-span-3 print:col-span-3 flex flex-wrap items-baseline gap-x-3 gap-y-1"
                : ""
            }`}
          >
            <SectionTitle>Next check</SectionTitle>
            <p className={`text-sm print:text-[10px] ${gptGap ? "" : "mt-1"}`}>
              {data.nextCheck || "To be scheduled"}
            </p>
          </section>
        </div>

        {/* Footer. A div, not <footer>: the site print CSS hides <footer>. */}
        <div className="scores-keep mt-6 print:mt-3 pt-3 print:pt-2 border-t border-[#e8e0d8] flex flex-wrap justify-between gap-x-6 gap-y-1 text-xs text-[#6b6560] print:text-[9px]">
          <p>
            Prepared by Kerzie AI Solutions &middot;{" "}
            <a href="https://kerzie.ai" className="text-[#1a1a2e]">
              kerzie.ai
            </a>
          </p>
          <p>
            Questions? Email Wade:{" "}
            <a href="mailto:wade@kerzie.ai" className="text-[#1a1a2e]">
              wade@kerzie.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
