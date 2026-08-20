import type { Metadata } from "next";
import log from "@/data/shortline_change_log.json";

// Shortline Buick GMC daily refresh log. UNLISTED and noindex, same recipe as
// /field-guide: not in any menu, shared by link only. This is the page the
// service agreement promises - Danny glances at it, he never logs in.
// Data lives in src/data/shortline_change_log.json; the daily refresh job
// appends an entry and pushes, and Vercel redeploys.
// HONESTY RULE: a missed day gets a row saying so. A silent gap is the one
// thing this page exists to prevent.
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
  if (v === null) return <span className="text-[#AABBCC]/40">-</span>;
  return <>{v}</>;
}

export default function ShortlineLogPage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-20">
        <p className="k-label mt-6 mb-4">Daily Refresh Log</p>
        <h1 className="text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(1.75rem,4.5vw,2.5rem)]">
          {log.dealer}<span className="text-[#E8896A]">.</span>
        </h1>
        <p className="mt-4 text-[#AABBCC] text-lg leading-relaxed">
          Your AI files are rebuilt from your live site once a day. This page is
          the receipt.{" "}
          <span className="text-white font-medium">
            One line per day - what came on the lot, what came off, and what the
            file says now.
          </span>{" "}
          Nothing to log into.
        </p>

        {latest ? (
          <div className="mt-8 rounded-lg border border-[rgba(170,187,204,0.2)] bg-[rgba(170,187,204,0.06)] px-5 py-4">
            <p className="k-mono text-[#5DBB87] text-xs tracking-[0.12em]">
              LAST REFRESH
            </p>
            <p className="mt-2 text-white text-lg font-medium">
              {pretty(latest.date)}
              {latest.ran_at ? ` at ${latest.ran_at}` : ""}
            </p>
            <p className="mt-1 text-[#AABBCC]">
              {latest.total !== null
                ? `${latest.total} vehicles currently in the file.`
                : "Refresh did not complete."}
            </p>
          </div>
        ) : null}

        <h2 className="k-mono text-[#6B9FD4] text-xs tracking-[0.15em] mt-10 mb-4">
          DAY BY DAY
        </h2>
        <div className="overflow-x-auto rounded-lg border border-[rgba(170,187,204,0.2)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[rgba(170,187,204,0.2)]">
                {["Date", "Added", "Came off", "In the file", "Ran"].map((h) => (
                  <th
                    key={h}
                    className="k-mono text-[#AABBCC]/70 text-[10px] tracking-[0.1em] uppercase px-4 py-3 whitespace-nowrap"
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
                  className="border-b border-[rgba(170,187,204,0.12)] last:border-0 align-top"
                >
                  <td className="px-4 py-3 text-white whitespace-nowrap">
                    {pretty(e.date)}
                    {e.note ? (
                      <span className="block text-[#AABBCC]/70 text-xs mt-1 max-w-[26rem] whitespace-normal">
                        {e.note}
                      </span>
                    ) : null}
                  </td>
                  {e.status === "missed" ? (
                    <td className="px-4 py-3 text-[#E07B70]" colSpan={4}>
                      No refresh ran this day.
                    </td>
                  ) : (
                    <>
                      <td className="px-4 py-3 text-[#5DBB87]">
                        <Cell v={e.added} />
                      </td>
                      <td className="px-4 py-3 text-[#AABBCC]">
                        <Cell v={e.removed} />
                      </td>
                      <td className="px-4 py-3 text-white">
                        <Cell v={e.total} />
                      </td>
                      <td className="px-4 py-3 text-[#AABBCC]/70 whitespace-nowrap">
                        {e.ran_at ?? "-"}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-[#AABBCC]/70 text-sm leading-relaxed">
          If a day is missed, it gets a row saying so rather than disappearing.
          Counts describe the AI file we publish, not your DMS.
        </p>
        <p className="mt-8 k-mono text-[#AABBCC]/50 text-xs tracking-[0.12em]">
          KERZIE AI SOLUTIONS
        </p>
      </div>
    </div>
  );
}
