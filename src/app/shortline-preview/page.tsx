import type { Metadata } from "next";
import preview from "@/data/shortline_llms_preview.json";

// Shortline Buick GMC - preview of the AI file we built, before anything is
// placed. UNLISTED and noindex, same recipe as /shortline-log and
// /field-guide: not in any menu, shared by link only.
//
// WHY noindex MATTERS HERE and not just as housekeeping: this page contains a
// car dealership's inventory sitting on kerzie.ai. If a crawler indexes it,
// the authority association we sell Danny points at OUR domain instead of his.
// K46 (2026-08-19) flagged exactly this failure mode for the redirect plan.
// The content renders inside the page - there is deliberately no raw .txt at a
// crawlable path.
//
// Data lives in src/data/shortline_llms_preview.json, regenerated from
// clients/shortline_buick_gmc/llms.txt in Wade OS.
export const metadata: Metadata = {
  title: "Shortline Buick GMC - AI File Preview",
  description: "Preview of the AI-readable file built for Shortline Buick GMC.",
  robots: { index: false, follow: false },
};

export default function ShortlinePreviewPage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-20">
        <p className="k-label mt-6 mb-4">Ready to place</p>
        <h1 className="text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(1.75rem,4.5vw,2.5rem)]">
          {preview.dealer}<span className="text-[#E8896A]">.</span>
        </h1>

        <p className="mt-4 text-[#AABBCC] text-lg leading-relaxed">
          This is the file. It is built and sitting here, on our side.{" "}
          <span className="text-white font-medium">
            Nothing has been placed on your website and nothing will be until
            you say go.
          </span>
        </p>

        <div className="mt-8 rounded-lg border border-[rgba(170,187,204,0.2)] bg-[rgba(170,187,204,0.06)] px-5 py-4">
          <p className="k-mono text-[#5DBB87] text-xs tracking-[0.12em]">
            WHAT YOU ARE LOOKING AT
          </p>
          <p className="mt-3 text-[#AABBCC] leading-relaxed">
            Your website is written for people. AI assistants read a different,
            plain-text version of a site. Shortline does not have one today, so
            we wrote it: the dealership facts up top, then the lot, with the
            price, the VIN and a link back to each vehicle&rsquo;s own page on
            your site.
          </p>
          <p className="mt-3 text-[#AABBCC] leading-relaxed">
            It is plain text on purpose. It is not meant to be pretty and no
            customer ever sees it. It sits at your web address and the AI tools
            read it there.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-lg border border-[rgba(170,187,204,0.2)] px-5 py-4">
            <p className="k-mono text-[#6B9FD4] text-[10px] tracking-[0.15em]">
              VEHICLES
            </p>
            <p className="mt-2 text-white text-2xl font-medium">
              {preview.vehicles}
            </p>
            <p className="mt-1 text-[#AABBCC]/70 text-sm">
              Price on every one
            </p>
          </div>
          <div className="rounded-lg border border-[rgba(170,187,204,0.2)] px-5 py-4">
            <p className="k-mono text-[#6B9FD4] text-[10px] tracking-[0.15em]">
              BUILT
            </p>
            <p className="mt-2 text-white text-2xl font-medium">Aug 20</p>
            <p className="mt-1 text-[#AABBCC]/70 text-sm">From your live site</p>
          </div>
          <div className="rounded-lg border border-[rgba(170,187,204,0.2)] px-5 py-4">
            <p className="k-mono text-[#6B9FD4] text-[10px] tracking-[0.15em]">
              REFRESH
            </p>
            <p className="mt-2 text-white text-2xl font-medium">Daily</p>
            <p className="mt-1 text-[#AABBCC]/70 text-sm">Once you are live</p>
          </div>
        </div>

        <p className="mt-8 text-[#AABBCC] leading-relaxed">
          This copy shows {preview.vehicles} vehicles, which is all your public
          feeds hand out at once. With the DealersLink feed you offered, the
          published file carries the full lot and rebuilds every day.
        </p>

        <h2 className="k-mono text-[#6B9FD4] text-xs tracking-[0.15em] mt-10 mb-4">
          THE FILE
        </h2>
        <div className="rounded-lg border border-[rgba(170,187,204,0.2)] bg-[rgba(0,0,0,0.25)] max-h-[36rem] overflow-auto">
          <pre className="k-mono text-[#AABBCC] text-xs leading-relaxed p-5 whitespace-pre-wrap break-words">
            {preview.content}
          </pre>
        </div>

        <p className="mt-6 text-[#AABBCC]/70 text-sm leading-relaxed">
          Built by Kerzie AI Solutions for Shortline Buick GMC. Not published,
          not live, and not indexed by anyone. Once it is placed, every refresh
          shows up on your log page.
        </p>

        <p className="mt-8 k-mono text-[#AABBCC]/50 text-xs tracking-[0.12em]">
          KERZIE AI SOLUTIONS
        </p>
      </div>
    </div>
  );
}
