import type { Metadata } from "next";
import log from "@/data/shortline_change_log.json";

// Shortline Buick GMC daily refresh log. UNLISTED and noindex, same recipe as
// /field-guide: not in any menu, shared by link only. This is the page the
// service agreement promises - Danny glances at it, he never logs in.
// Data lives in src/data/shortline_change_log.json; the daily refresh job
// appends an entry and pushes, and Vercel redeploys.
// HONESTY RULE: a missed day gets a row saying so. A silent gap is the one
// thing this page exists to prevent.
//
// BRANDED FOR SHORTLINE 2026-09-04 (Wade's request): this page reads as a
// Shortline product, not a Kerzie AI report card. Colors and wordmark are
// modeled on shortlinebuickgmc.com's own header (navy + red), so it can be
// screenshotted straight into a reference proposal for other dealers (e.g.
// the Phil McTaggart / Johnson Auto Plaza nudge, and the Josh Frakes / Gabe
// Montano referral proposals). Kerzie AI Solutions stays the small footer
// credit, same as every other daughter page - it is still our work product,
// just not the visual star of the page Danny bookmarks.
export const metadata: Metadata = {
  title: "Shortline Buick GMC - Daily AI File Refresh",
  description: "Daily refresh log for the Shortline Buick GMC AI files.",
  robots: { index: false, follow: false },
};

type Entry = {
  date: string;
  status: string;
  kind?: string;
  added: number | null;
  removed: number | null;
  total: number | null;
  ran_at?: string;
  note?: string;
};

const entries = log.entries as Entry[];
const latest = entries[0];

function pretty(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return new Date(y, m - 1, day).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function Cell({ v }: { v: number | null }) {
  if (v === null) return <span className="text-[#262B3D]/40">-</span>;
  return <>{v}</>;
}

export default function ShortlineLogPage() {
  return (
    <div className="bg-[#F4F1EA] min-h-screen">
      {/* Shortline masthead - navy + red, styled after shortlinebuickgmc.com's
          own header so this reads as a Shortline product, not a vendor report. */}
      <div className="bg-[#0B1D33] border-b-4 border-[#C8102E]">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-baseline justify-between flex-wrap gap-2">
          <div>
            <p className="text-[#C8102E] font-black tracking-[-0.02em] text-2xl leading-none">
              SHORTLINE<span className="text-white"> BUICK GMC</span>
            </p>
            <p className="k-mono text-white/60 text-[10px] tracking-[0.2em] uppercase mt-1">
              We Have Something For Everyone
            </p>
          </div>
          <p className="k-mono text-white/50 text-[10px] tracking-[0.15em] uppercase">
            AI File Status
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-10 pb-20">
        <p className="k-label mt-2 mb-4 text-[#C8102E]">Daily Refresh Log</p>
        <h1 className="text-[#0B1D33] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(1.75rem,4.5vw,2.5rem)]">
          Your AI Files<span className="text-[#C8102E]">.</span>
        </h1>
        <p className="mt-4 text-[#262B3D] text-lg leading-relaxed">
          Your AI files are rebuilt from your live site once a day. This page is
          the receipt.{" "}
          <span className="text-[#0B1D33] font-medium">
            One line per day - what came on the lot, what came off, and what the
            file says now.
          </span>{" "}
          Nothing to log into. Bookmark this page.
        </p>

        {latest ? (
          <div className="mt-8 rounded-lg border-2 border-[#0B1D33] bg-white px-5 py-4">
            <p className="k-mono text-[#C8102E] text-xs tracking-[0.12em] font-semibold">
              LAST REFRESH
            </p>
            <p className="mt-2 text-[#0B1D33] text-lg font-medium">
              {pretty(latest.date)}
              {latest.ran_at ? ` at ${latest.ran_at}` : ""}
            </p>
            <p className="mt-1 text-[#262B3D]">
              {latest.total !== null
                ? `${latest.total} vehicles currently in the file.`
                : "Refresh did not complete."}
            </p>
          </div>
        ) : null}

        <h2 className="k-mono text-[#0B1D33] text-xs tracking-[0.15em] mt-10 mb-4 font-semibold">
          DAY BY DAY
        </h2>
        <div className="overflow-x-auto rounded-lg border border-[rgba(11,29,51,0.2)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[rgba(11,29,51,0.2)] bg-[#0B1D33]/[0.04]">
                {["Date", "Added", "Came off", "In the file", "Ran"].map((h) => (
                  <th
                    key={h}
                    className="k-mono text-[#0B1D33]/70 text-[10px] tracking-[0.1em] uppercase px-4 py-3 whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr
                  key={e.date}
                  className="border-b border-[rgba(11,29,51,0.12)] last:border-0 align-top"
                >
                  <td className="px-4 py-3 text-[#0B1D33] whitespace-nowrap">
                    {pretty(e.date)}
                    {e.note ? (
                      <span className="block text-[#262B3D]/70 text-xs mt-1 max-w-[26rem] whitespace-normal">
                        {e.note}
                      </span>
                    ) : null}
                  </td>
                  {e.status === "missed" ? (
                    <td className="px-4 py-3 text-[#C8102E]" colSpan={4}>
                      No refresh ran this day.
                    </td>
                  ) : (
                    <>
                      <td className="px-4 py-3 text-[#1B7A43]">
                        <Cell v={e.added} />
                      </td>
                      <td className="px-4 py-3 text-[#262B3D]">
                        <Cell v={e.removed} />
                      </td>
                      <td className="px-4 py-3 text-[#0B1D33]">
                        <Cell v={e.total} />
                      </td>
                      <td className="px-4 py-3 text-[#262B3D]/70 whitespace-nowrap">
                        {e.ran_at ?? "-"}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-[#262B3D]/70 text-sm leading-relaxed">
          If a day is missed, it gets a row saying so rather than disappearing.
          Counts describe the AI file we publish, not your DMS.
        </p>
        <p className="mt-8 k-mono text-[#262B3D]/50 text-xs tracking-[0.12em]">
          BUILT AND MAINTAINED BY KERZIE AI SOLUTIONS
        </p>
      </div>
    </div>
  );
}
