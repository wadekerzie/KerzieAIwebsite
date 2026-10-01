"use client";

import { useState } from "react";

export type Entry = {
  date: string;
  status: string;
  kind?: string;
  added: number | null;
  removed: number | null;
  price_changed?: number | null;
  total: number | null;
  ran_at?: string;
  engines?: Record<string, string>;
  note?: string;
};

export type Store = {
  slug: string;
  name: string;
  short: string;
  city: string;
  brands: string;
  sites: string[];
  entries: Entry[];
};

function pretty(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return new Date(y, m - 1, day).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function Cell({ v }: { v: number | null | undefined }) {
  if (v === null || v === undefined) return <span className="text-[#262B3D]/40">-</span>;
  return <>{v}</>;
}

// Rolling seven-day window per store, anchored on that store's newest entry
// (Wade's rule 2026-09-06: a heartbeat, not an archive).
function lastSeven(entries: Entry[]) {
  if (!entries.length) return [];
  const anchor = new Date(entries[0].date + "T00:00:00");
  const cutoff = new Date(anchor);
  cutoff.setDate(cutoff.getDate() - 6);
  return entries.filter((e) => new Date(e.date + "T00:00:00") >= cutoff);
}

export default function MarooneLogTabs({
  stores,
  isSample,
  engines,
  group,
}: {
  stores: Store[];
  isSample: boolean;
  engines: string[];
  group: string;
}) {
  const [active, setActive] = useState(stores[0]?.slug ?? "");
  const store = stores.find((s) => s.slug === active) ?? stores[0];
  const entries = lastSeven(store.entries);
  const latest = entries[0];

  // Group line for the top card: today's totals across every rooftop.
  const todayDate = stores
    .map((s) => s.entries[0]?.date)
    .filter(Boolean)
    .sort()
    .reverse()[0];
  const groupToday = stores.reduce(
    (acc, s) => {
      const e = s.entries[0];
      if (!e || e.date !== todayDate) return acc;
      acc.added += e.added ?? 0;
      acc.removed += e.removed ?? 0;
      acc.total += e.total ?? 0;
      return acc;
    },
    { added: 0, removed: 0, total: 0 }
  );

  return (
    <div className="bg-[#F4F1EA] min-h-screen">
      {isSample ? (
        <div className="bg-[#7A5A14] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-2.5 text-sm leading-snug">
            <span className="k-mono text-[11px] tracking-[0.15em] uppercase font-semibold mr-2">
              Sample
            </span>
            Illustrative numbers built for the Maroone USA proposal. Not live inventory. The
            real page replaces this one the morning the first rooftop goes live.
          </div>
        </div>
      ) : null}

      {/* Masthead: text wordmark only, dark navy with a red rule, so it reads
          as the group's own status page, not a vendor report card. */}
      <div className="bg-[#101418] border-b-4 border-[#B3382C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 flex items-baseline justify-between flex-wrap gap-2">
          <div>
            <p className="text-white font-black tracking-[-0.02em] text-2xl leading-none">
              {group.toUpperCase()}
            </p>
            <p className="k-mono text-white/60 text-[10px] tracking-[0.2em] uppercase mt-1">
              Mike Maroone Auto &middot; Eight Rooftops
            </p>
          </div>
          <p className="k-mono text-white/50 text-[10px] tracking-[0.15em] uppercase">
            AI Page Status{isSample ? " (Sample)" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <p className="k-label mt-2 mb-3 text-[#B3382C]">Daily Refresh Log</p>
        <h1 className="text-[#101418] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(1.6rem,4.5vw,2.5rem)]">
          Your AI Pages, every rooftop<span className="text-[#B3382C]">.</span>
        </h1>
        <p className="mt-4 text-[#262B3D] text-base sm:text-lg leading-relaxed">
          Each store&apos;s AI pages are rebuilt from your inventory feed once a day. This page is
          the receipt.{" "}
          <span className="text-[#101418] font-medium">
            One tab per rooftop. One line per day: what came on the lot, what came off, what was
            repriced, and what the page says now.
          </span>{" "}
          Nothing to log into. Bookmark this page.
        </p>

        {todayDate ? (
          <div className="mt-6 rounded-lg border border-[rgba(16,20,24,0.2)] bg-white px-4 sm:px-5 py-3 text-sm text-[#262B3D]">
            <span className="k-mono text-[#B3382C] text-[11px] tracking-[0.12em] font-semibold mr-2">
              GROUP TODAY
            </span>
            {pretty(todayDate)}: {groupToday.added} vehicles added and {groupToday.removed} came
            off across {stores.length} rooftops; {groupToday.total.toLocaleString()} vehicles on
            the pages.
          </div>
        ) : null}

        {/* Tab strip: scrolls sideways on a phone. */}
        <div className="mt-8 -mx-4 sm:mx-0 overflow-x-auto">
          <div
            role="tablist"
            aria-label="Rooftops"
            className="flex gap-2 px-4 sm:px-0 min-w-max border-b border-[rgba(16,20,24,0.2)] pb-2"
          >
            {stores.map((s) => {
              const on = s.slug === store.slug;
              return (
                <button
                  key={s.slug}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(s.slug)}
                  className={
                    "k-mono text-[11px] tracking-[0.08em] uppercase whitespace-nowrap rounded-full px-3.5 py-2 border transition-colors " +
                    (on
                      ? "bg-[#101418] text-white border-[#101418]"
                      : "bg-white text-[#101418] border-[rgba(16,20,24,0.25)] hover:border-[#101418]")
                  }
                >
                  {s.short}
                </button>
              );
            })}
          </div>
        </div>

        <div role="tabpanel" className="mt-6">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <div>
              <h2 className="text-[#101418] font-bold text-xl sm:text-2xl tracking-[-0.02em]">
                {store.name}
              </h2>
              <p className="text-[#262B3D]/80 text-sm mt-1">
                {store.city} &middot; {store.brands} &middot;{" "}
                {store.sites.map((site, i) => (
                  <span key={site} className="k-mono text-[12px]">
                    {site}
                    {i < store.sites.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>
            {isSample ? (
              <span className="k-mono text-[10px] tracking-[0.15em] uppercase bg-[#FFF6E5] text-[#7A5A14] border border-[#D4A24C] rounded px-2 py-1">
                Sample data
              </span>
            ) : null}
          </div>

          {latest ? (
            <div className="mt-5 rounded-lg border-2 border-[#101418] bg-white px-4 sm:px-5 py-4">
              <p className="k-mono text-[#B3382C] text-xs tracking-[0.12em] font-semibold">
                LAST REFRESH
              </p>
              <p className="mt-2 text-[#101418] text-lg font-medium">
                {pretty(latest.date)}
                {latest.ran_at ? ` at ${latest.ran_at}` : ""}
              </p>
              <p className="mt-1 text-[#262B3D]">
                {latest.total !== null
                  ? `${latest.total} vehicles currently on the page.`
                  : "Refresh did not complete."}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {engines.map((eng) => {
                  const ok = latest.engines?.[eng] === "ok";
                  return (
                    <span
                      key={eng}
                      className={
                        "k-mono text-[11px] tracking-[0.06em] rounded px-2 py-1 border " +
                        (ok
                          ? "bg-[#E8F5EE] text-[#1B7A43] border-[#1B7A43]/30"
                          : "bg-[#FDECEA] text-[#B3382C] border-[#B3382C]/30")
                      }
                    >
                      {eng}: {ok ? "read OK" : "not confirmed"}
                    </span>
                  );
                })}
              </div>
            </div>
          ) : null}

          <h3 className="k-mono text-[#101418] text-xs tracking-[0.15em] mt-8 mb-3 font-semibold">
            DAY BY DAY
          </h3>
          <div className="overflow-x-auto rounded-lg border border-[rgba(16,20,24,0.2)] bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(16,20,24,0.2)] bg-[#101418]/[0.04]">
                  {["Date", "Added", "Came off", "Repriced", "On the page", "Ran"].map((h) => (
                    <th
                      key={h}
                      className="k-mono text-[#101418]/70 text-[10px] tracking-[0.1em] uppercase px-3 sm:px-4 py-3 whitespace-nowrap"
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
                    className="border-b border-[rgba(16,20,24,0.12)] last:border-0 align-top"
                  >
                    <td className="px-3 sm:px-4 py-3 text-[#101418] whitespace-nowrap">
                      {pretty(e.date)}
                      {e.note ? (
                        <span className="block text-[#262B3D]/70 text-xs mt-1 max-w-[26rem] whitespace-normal">
                          {e.note}
                        </span>
                      ) : null}
                    </td>
                    {e.status === "missed" ? (
                      <td className="px-3 sm:px-4 py-3 text-[#B3382C]" colSpan={5}>
                        No refresh ran this day.
                      </td>
                    ) : (
                      <>
                        <td className="px-3 sm:px-4 py-3 text-[#1B7A43]">
                          <Cell v={e.added} />
                        </td>
                        <td className="px-3 sm:px-4 py-3 text-[#262B3D]">
                          <Cell v={e.removed} />
                        </td>
                        <td className="px-3 sm:px-4 py-3 text-[#262B3D]">
                          <Cell v={e.price_changed} />
                        </td>
                        <td className="px-3 sm:px-4 py-3 text-[#101418]">
                          <Cell v={e.total} />
                        </td>
                        <td className="px-3 sm:px-4 py-3 text-[#262B3D]/70 whitespace-nowrap">
                          {e.ran_at ?? "-"}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-6 text-[#262B3D]/70 text-sm leading-relaxed">
          If a day is missed, it gets a row saying so rather than disappearing. Counts describe the
          AI page we publish for each store, not your DMS.
          {isSample ? " Every number on this sample page is illustrative." : ""}
        </p>
        <p className="mt-8 k-mono text-[#262B3D]/50 text-xs tracking-[0.12em]">
          BUILT AND MAINTAINED BY KERZIE AI SOLUTIONS
        </p>
      </div>
    </div>
  );
}
