import type { Metadata } from "next";
import pipeline from "@/data/danny_pipeline.json";

export const metadata: Metadata = {
  title: "Danny's Pipeline | Kerzie AI",
  description: "Referral pipeline and payments - Danny Madigan x Kerzie AI.",
  robots: { index: false, follow: false },
};

// Partner dashboard v1 (Wade's go, 8/27 debrief: "one for Aaron, one for Danny
// showing per-lead status"). Danny sees HIS leads and HIS money - never ops
// internals or margins. Data: src/data/danny_pipeline.json, mirrored from
// Wade OS 00_system/back_cover_crm/danny_payout_ledger.json.

type Lead = {
  rooftop: string;
  contact?: string;
  referred?: string;
  stage: string;
  note?: string;
  since?: string;
};
type Payment = {
  date: string;
  rooftop: string;
  amount: number;
  paid_date?: string;
  status: string;
};

export default function DannyPartnerPage() {
  const leads = pipeline.leads as Lead[];
  const payments = pipeline.payments as Payment[];
  const paying = leads.filter((l) => l.stage === "Paying").length;
  const monthly = paying * 300;
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-20">
        <p className="k-mono text-[#262B3D]/70 text-xs tracking-[0.15em]">
          KERZIE<span className="text-[#B04E2B]">.</span>AI &middot; PARTNER
          VIEW
        </p>
        <h1 className="text-[#1A1B2E] font-bold tracking-[-0.02em] text-[clamp(2rem,5vw,3rem)] mt-6">
          Danny&apos;s pipeline<span className="text-[#B04E2B]">.</span>
        </h1>
        <p className="text-[#262B3D] text-lg mt-4 max-w-2xl leading-relaxed">
          Every rooftop you bring in, from intro to paying - and every dollar
          on its way to you. Updated {pipeline.updated}.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          <div className="border border-[rgba(26,27,46,0.2)] rounded p-5">
            <p className="k-mono text-[#2B5D96] text-xs tracking-[0.15em]">
              ROOFTOPS PAYING
            </p>
            <p className="text-[#1A1B2E] text-4xl font-bold mt-2">{paying}</p>
          </div>
          <div className="border border-[rgba(26,27,46,0.2)] rounded p-5">
            <p className="k-mono text-[#2B5D96] text-xs tracking-[0.15em]">
              YOUR MONTHLY RUN RATE
            </p>
            <p className="text-[#1A1B2E] text-4xl font-bold mt-2">
              ${monthly.toLocaleString()}
            </p>
          </div>
          <div className="border border-[rgba(26,27,46,0.2)] rounded p-5">
            <p className="k-mono text-[#2B5D96] text-xs tracking-[0.15em]">
              PER ROOFTOP
            </p>
            <p className="text-[#1A1B2E] text-4xl font-bold mt-2">$300/mo</p>
          </div>
        </div>

        <h2 className="k-mono text-[#B04E2B] text-xs tracking-[0.15em] mt-14 mb-4">
          THE PIPELINE
        </h2>
        {leads.length === 0 ? (
          <p className="text-[#262B3D] text-lg leading-relaxed border border-dashed border-[rgba(26,27,46,0.25)] rounded p-6">
            Your first intros land here the moment they happen - rooftop name,
            stage, and what is next. Stages: {pipeline.stages.join(" → ")}.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[#262B3D]">
              <thead className="k-mono text-xs tracking-[0.1em] text-[#2B5D96]">
                <tr>
                  <th className="py-2 pr-6">ROOFTOP</th>
                  <th className="py-2 pr-6">CONTACT</th>
                  <th className="py-2 pr-6">REFERRED</th>
                  <th className="py-2 pr-6">STAGE</th>
                  <th className="py-2">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr
                    key={l.rooftop}
                    className="border-t border-[rgba(26,27,46,0.13)]"
                  >
                    <td className="py-3 pr-6 text-[#1A1B2E]">{l.rooftop}</td>
                    <td className="py-3 pr-6">{l.contact ?? ""}</td>
                    <td className="py-3 pr-6 whitespace-nowrap">
                      {l.referred ?? ""}
                    </td>
                    <td className="py-3 pr-6 whitespace-nowrap">{l.stage}</td>
                    <td className="py-3">{l.note ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <h2 className="k-mono text-[#B04E2B] text-xs tracking-[0.15em] mt-14 mb-4">
          YOUR PAYMENTS
        </h2>
        {payments.length === 0 ? (
          <p className="text-[#262B3D] text-lg leading-relaxed border border-dashed border-[rgba(26,27,46,0.25)] rounded p-6">
            Each customer payment triggers your $300 the same day or the next
            day. Every one shows here with its date and reference.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[#262B3D]">
              <thead className="k-mono text-xs tracking-[0.1em] text-[#2B5D96]">
                <tr>
                  <th className="py-2 pr-6">DATE</th>
                  <th className="py-2 pr-6">ROOFTOP</th>
                  <th className="py-2 pr-6">AMOUNT</th>
                  <th className="py-2">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p, i) => (
                  <tr
                    key={i}
                    className="border-t border-[rgba(26,27,46,0.13)]"
                  >
                    <td className="py-3 pr-6">{p.date}</td>
                    <td className="py-3 pr-6 text-[#1A1B2E]">{p.rooftop}</td>
                    <td className="py-3 pr-6">${p.amount}</td>
                    <td className="py-3">{p.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-14 border-t border-[rgba(26,27,46,0.13)] pt-6 text-[#262B3D]/80 text-base leading-relaxed max-w-2xl">
          <p>
            The terms, in one place: {pipeline.terms.recurring};{" "}
            {pipeline.terms.payout_timing}. No share of setup fees, by
            agreement. Excluded: {pipeline.terms.exclusions}.
          </p>
        </div>
      </div>
    </div>
  );
}
