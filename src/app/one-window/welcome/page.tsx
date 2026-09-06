import Link from "next/link";
import type { Metadata } from "next";

// The landing page behind the One-Window gate. The reader just gave a name
// and email; this page hands them the Foundation and points at what happens
// next. /downloads keeps serving the files - this page is the doorway to it.

export const metadata: Metadata = {
  title: "Welcome In | One-Window",
  description: "Your One-Window Foundation is ready to download.",
  robots: { index: false, follow: false },
};

export default function OneWindowWelcomePage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#262B3D]/70 text-xs tracking-[0.15em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#B04E2B]">.</span>AI
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-16">
        <p className="k-label mb-8">One-Window &mdash; you&apos;re in</p>
        <h1 className="text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.5rem)]">
          Welcome in<span className="text-[#B04E2B]">.</span>
        </h1>
        <div className="mt-6 max-w-xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
          <p>
            Everything is on the download page: the Foundation document, every
            capability note, and the plain-language install walkthrough. The
            same link is on its way to your email, so you can come back to it
            whenever the three hours fit.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/downloads" className="k-btn-solid k-focus inline-block">
            Open the download page <span className="k-arrow">&rarr;</span>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <p className="k-label mb-6">What To Do First</p>
        <div className="max-w-2xl space-y-6">
          {[
            {
              n: "1",
              t: "Get Claude running.",
              d: "The desktop app, on the $20 per month Pro plan. If you already have it, you are ahead.",
            },
            {
              n: "2",
              t: "Give it an honest hour.",
              d: "Paste the Foundation and let the interview run. The document does the driving; you answer questions about your own work.",
            },
            {
              n: "3",
              t: "Come back for the rest.",
              d: "The first-week plan inside paces everything else. Three hours total, spread however your week allows.",
            },
          ].map((s) => (
            <div key={s.n} className="flex gap-5">
              <p className="text-3xl font-bold text-[#B04E2B] leading-none pt-1">{s.n}</p>
              <div>
                <p className="text-[#1A1B2E] text-lg font-medium leading-snug">{s.t}</p>
                <p className="mt-1 text-[#262B3D]/85 text-lg leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <p className="k-label mb-6">One More Thing</p>
        <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
          <p>
            Operators running One-Window compare notes in a private community:
            wins, questions, and every release, answered once where everyone
            can see it.
          </p>
          <p className="text-[#1A1B2E] font-medium">
            Your invite comes by email once you are through the door. Watch for
            it.
          </p>
        </div>
      </section>
    </div>
  );
}
