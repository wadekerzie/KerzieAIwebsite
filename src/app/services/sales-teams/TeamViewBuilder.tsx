"use client";

import Link from "next/link";
import { useState } from "react";

// The centerpiece. A leader types their own pipeline stages and a few
// account names, and the Monday team view rerenders with their words in it.
// Everything is local React state: no fetch, no storage, no analytics call.
// The example reps, quotes and reasons are fixed and labeled as example data.

const STAGE_PLACEHOLDERS = ["Discovery", "Evaluation", "Proposal", "Commit"];
const DEAL_PLACEHOLDERS = ["Northwind Logistics", "Harbor Dental Group", "Summit Credit Union"];

const REPS = [
  { name: "Priya", answers: [true, true, true, true, true] },
  { name: "Dana", answers: [true, true, true, true, false] },
  { name: "Marcus", answers: [true, true, false, true, false] },
];

const QUESTION_COLUMNS = ["Calls", "Briefs", "Report", "CRM", "Acted"];

const fieldClass =
  "k-field !py-3 !px-4 !text-base !leading-normal bg-white";

export default function TeamViewBuilder() {
  const [stages, setStages] = useState<string[]>(["", "", "", ""]);
  const [deals, setDeals] = useState<string[]>(["", "", ""]);

  const stage = (i: number) => stages[i].trim() || STAGE_PLACEHOLDERS[i];
  const deal = (i: number) => deals[i].trim() || DEAL_PLACEHOLDERS[i];

  const revisions = [
    {
      deal: deal(0),
      from: stage(1),
      to: stage(2),
      tone: "up" as const,
      why: "Sponsor named a path this quarter, gated on the security review",
    },
    {
      deal: deal(1),
      from: stage(3),
      to: stage(2),
      tone: "down" as const,
      why: "Budget moved to next fiscal year, per the buyer on Wednesday's call",
    },
    {
      deal: deal(2),
      from: "New",
      to: stage(0),
      tone: "new" as const,
      why: `Referral from ${deal(0)}, first call booked`,
    },
  ];

  const outcomes = [
    {
      deal: deal(0),
      rep: "Priya",
      meeting: "sponsor meeting",
      outcome: "Advanced",
      tone: "up" as const,
      quote: "If security signs off by the 9th, we can do this this quarter.",
    },
    {
      deal: deal(1),
      rep: "Marcus",
      meeting: "pricing review",
      outcome: "Slipped",
      tone: "down" as const,
      quote: "Budget moved to next fiscal year. Keep us warm.",
    },
    {
      deal: deal(2),
      rep: "Dana",
      meeting: "discovery",
      outcome: "No change",
      tone: "flat" as const,
      quote: "We are also talking to two others. Timeline is loose.",
    },
  ];

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-10">
      {/* The form */}
      <form
        className="lg:col-span-4 mb-10 lg:mb-0"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Your pipeline stages and deal names"
      >
        <fieldset className="mb-8">
          <legend className="k-mono text-[#B04E2B] text-xs tracking-[0.15em] uppercase mb-3">
            Your pipeline stages
          </legend>
          <div className="space-y-2">
            {STAGE_PLACEHOLDERS.map((ph, i) => (
              <label key={ph} className="block">
                <span className="sr-only">Stage {i + 1}</span>
                <input
                  type="text"
                  value={stages[i]}
                  placeholder={ph}
                  maxLength={32}
                  autoComplete="off"
                  onChange={(e) =>
                    setStages((s) => s.map((v, j) => (j === i ? e.target.value : v)))
                  }
                  className={fieldClass}
                />
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="k-mono text-[#B04E2B] text-xs tracking-[0.15em] uppercase mb-3">
            Up to three deals
          </legend>
          <div className="space-y-2">
            {DEAL_PLACEHOLDERS.map((ph, i) => (
              <label key={ph} className="block">
                <span className="sr-only">Deal {i + 1}</span>
                <input
                  type="text"
                  value={deals[i]}
                  placeholder={ph}
                  maxLength={40}
                  autoComplete="off"
                  onChange={(e) =>
                    setDeals((d) => d.map((v, j) => (j === i ? e.target.value : v)))
                  }
                  className={fieldClass}
                />
              </label>
            ))}
          </div>
        </fieldset>

        <p className="mt-5 text-[#262B3D]/70 text-sm leading-relaxed">
          Nothing you type leaves this page.
        </p>
      </form>

      {/* The rendered team view */}
      <div className="lg:col-span-8">
        <div
          className="bg-white border border-[rgba(26,27,46,0.13)] p-5 sm:p-7"
          aria-live="polite"
        >
          <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
            <div>
              <p className="k-mono text-[#2B5D96] text-[11px] tracking-[0.2em] uppercase mb-2">
                Team view
              </p>
              <h3 className="text-[#1A1B2E] text-xl sm:text-2xl font-bold tracking-tight leading-tight">
                Monday morning, before the forecast call
              </h3>
            </div>
            <span className="k-mono text-[10px] tracking-[0.15em] uppercase bg-[#FBF1DD] text-[#8A5A14] px-2.5 py-1.5 whitespace-nowrap">
              Example, built from what you typed
            </span>
          </div>

          {/* Pipeline revisions */}
          <section className="mb-8" aria-label="Pipeline revisions">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <h4 className="text-[#1A1B2E] font-semibold">Pipeline revisions</h4>
              <p className="text-[#262B3D]/60 text-xs">every change carries its reason</p>
            </div>
            {/* Stacked rows on a phone, a real table from sm up. */}
            <table className="w-full text-sm block sm:table">
              <thead className="hidden sm:table-header-group">
                <tr className="k-mono text-[10px] tracking-[0.12em] uppercase text-[#262B3D]/60 border-b border-[rgba(26,27,46,0.13)]">
                  <th scope="col" className="text-left font-medium py-2 pr-3">Deal</th>
                  <th scope="col" className="text-left font-medium py-2 pr-3">Change</th>
                  <th scope="col" className="text-left font-medium py-2">Why, from the capture</th>
                </tr>
              </thead>
              <tbody className="block sm:table-row-group border-t border-[rgba(26,27,46,0.13)] sm:border-0">
                {revisions.map((r) => (
                  <tr
                    key={r.deal + r.to}
                    className="block sm:table-row py-3 sm:py-0 border-b border-[rgba(26,27,46,0.08)] align-top"
                  >
                    <td className="block sm:table-cell sm:py-3 pr-3 font-semibold text-[#1A1B2E] break-words">
                      {r.deal}
                    </td>
                    <td className="block sm:table-cell sm:py-3 pr-3 sm:whitespace-nowrap text-[#262B3D]">
                      {r.from} <span aria-hidden="true">&rarr;</span>
                      <span className="sr-only">to</span>{" "}
                      <span
                        className={
                          r.tone === "down" ? "text-[#B04E2B]" : r.tone === "up" ? "text-[#1F6B4E]" : ""
                        }
                      >
                        {r.to}
                      </span>
                    </td>
                    <td className="block sm:table-cell sm:py-3 text-[#262B3D] mt-1 sm:mt-0">
                      <span className="sm:hidden k-mono text-[10px] tracking-[0.12em] uppercase text-[#262B3D]/60 mr-2">
                        Why
                      </span>
                      {r.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Meeting outcomes */}
          <section className="mb-8" aria-label="Meeting outcomes">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <h4 className="text-[#1A1B2E] font-semibold">Meeting outcomes</h4>
              <p className="text-[#262B3D]/60 text-xs">what the customer actually said</p>
            </div>
            <ul className="divide-y divide-[rgba(26,27,46,0.08)] border-t border-[rgba(26,27,46,0.13)]">
              {outcomes.map((o) => (
                <li key={o.deal + o.rep} className="py-3 sm:grid sm:grid-cols-12 sm:gap-3">
                  <div className="sm:col-span-9">
                    <p className="font-semibold text-[#1A1B2E] break-words">{o.deal}</p>
                    <p className="text-[#262B3D]/70 text-xs mt-0.5">
                      {o.rep} &middot; {o.meeting}
                    </p>
                    <p className="k-serif text-[#262B3D] text-sm mt-1.5">&ldquo;{o.quote}&rdquo;</p>
                  </div>
                  <div className="sm:col-span-3 sm:text-right mt-2 sm:mt-0">
                    <span
                      className={`k-mono inline-block text-[10px] tracking-[0.12em] uppercase px-2 py-1 ${
                        o.tone === "up"
                          ? "bg-[#E4F1EA] text-[#1F6B4E]"
                          : o.tone === "down"
                            ? "bg-[#F7E4DD] text-[#B04E2B]"
                            : "bg-[#FBF1DD] text-[#8A5A14]"
                      }`}
                    >
                      {o.outcome}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Five questions per rep */}
          <section aria-label="Five questions per rep">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <h4 className="text-[#1A1B2E] font-semibold">&ldquo;Using AI,&rdquo; per rep</h4>
              <p className="text-[#262B3D]/60 text-xs">five questions, yes or no</p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="k-mono text-[10px] tracking-[0.12em] uppercase text-[#262B3D]/60 border-b border-[rgba(26,27,46,0.13)]">
                  <th scope="col" className="text-left font-medium py-2">Rep</th>
                  {QUESTION_COLUMNS.map((c) => (
                    <th key={c} scope="col" className="text-center font-medium py-2 px-1">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {REPS.map((rep) => (
                  <tr key={rep.name} className="border-b border-[rgba(26,27,46,0.08)]">
                    <th scope="row" className="text-left font-semibold text-[#1A1B2E] py-3">
                      {rep.name}
                    </th>
                    {rep.answers.map((yes, i) => (
                      <td key={QUESTION_COLUMNS[i]} className="text-center py-3 px-1">
                        <span
                          className={`inline-block w-3.5 h-3.5 rounded-[3px] border-2 ${
                            yes ? "bg-[#1F6B4E] border-[#1F6B4E]" : "bg-transparent border-[#B87A1C]"
                          }`}
                          role="img"
                          aria-label={`${QUESTION_COLUMNS[i]}: ${yes ? "yes" : "no"}`}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[#262B3D]/70 text-xs mt-3">
              Filled = yes. Outlined = where to coach this week.
            </p>
          </section>
        </div>

        <div className="mt-10">
          <p className="text-[#1A1B2E] text-lg font-medium mb-5 leading-relaxed">
            Want the real one, built from your team&apos;s actual calls?
          </p>
          <Link href="/schedule" className="k-btn-solid k-focus inline-block">
            Book a call <span className="k-arrow">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
