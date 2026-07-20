import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your One-Window Setup | Kerzie AI",
  robots: { index: false, follow: false },
};

export default function OneWindowAccessPage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#AABBCC]/70 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#E8896A]">.</span>AI
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-20">
        <p className="k-label mb-8">Purchase Complete</p>
        <h1 className="text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.5vw,3.25rem)]">
          Here is your setup<span className="text-[#E8896A]">.</span>
        </h1>
        <div className="mt-8 max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
          <p>Download the document, then do exactly this:</p>
          <ol className="list-decimal list-outside ml-5 space-y-3">
            <li>Open your AI: Claude (best fit), ChatGPT, Codex, or Gemini.</li>
            <li>Paste the entire document in, or attach the file.</li>
            <li>
              Say:{" "}
              <span className="k-serif text-white">
                &quot;Walk me through this setup, step by step. Ask me the
                questions as you go.&quot;
              </span>
            </li>
            <li>Give it about an hour. The first-week plan inside paces the rest.</li>
          </ol>
        </div>
        <div className="mt-10">
          <a
            href="/downloads/one-window-setup.md"
            download
            className="k-btn-solid k-focus inline-block"
          >
            Download the One-Window Setup <span className="k-arrow">&rarr;</span>
          </a>
        </div>
        <p className="mt-8 text-[#AABBCC] text-lg max-w-2xl leading-relaxed">
          Bookmark this page; your download lives here. Stall points or wins:{" "}
          <a href="mailto:wade@kerzie.ai" className="k-link k-focus text-[#6B9FD4]">
            wade@kerzie.ai
          </a>
          . I read everything.
        </p>
      </section>
    </div>
  );
}
