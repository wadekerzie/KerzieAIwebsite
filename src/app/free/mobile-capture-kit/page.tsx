import Link from "next/link";
import type { Metadata } from "next";
import GateForm from "@/components/GateForm";

export const metadata: Metadata = {
  title: "The Voice Command Center (Free) | Kerzie AI",
  description:
    "A free 10-minute phone setup: talk your thoughts into your phone, two taps, and your AI processes them into next steps. Works with Claude, ChatGPT, or Gemini.",
  openGraph: {
    type: "article",
    title: "The Voice Command Center (Free)",
    description:
      "A free 10-minute phone setup: talk your thoughts into your phone, two taps, and your AI processes them into next steps. Works with Claude, ChatGPT, or Gemini.",
    url: "https://kerzie.ai/free/mobile-capture-kit",
    images: [{ url: "/og/mobile-capture-kit.jpg", width: 1200, height: 630, alt: "A man walking on a park path, talking into his phone." }],
  },
  twitter: { card: "summary_large_image", images: ["/og/mobile-capture-kit.jpg"] },
};

export default function CaptureKitGatePage() {
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
        <p className="k-label mb-8">The Voice Command Center &middot; Free</p>
        <h1 className="text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.5rem)]">
          You never have to remember what you were thinking{" "}
          <span className="k-serif font-normal">an hour ago</span>
          <span className="text-[#B04E2B]">.</span>
        </h1>
        <p className="mt-6 text-[#262B3D] text-lg lg:text-xl max-w-xl leading-relaxed">
          A 10-minute phone setup: talk your thoughts into your phone, two
          taps, and the transcript is waiting for your AI the next time you sit
          down. Claude, ChatGPT, or Gemini. No new device, no new app, no
          subscription.
        </p>
        <p className="mt-6 text-[#262B3D] text-lg max-w-xl leading-relaxed">
          The first person I gave this to texted me on day one, unprompted:{" "}
          <span className="k-serif text-[#1A1B2E]">
            &quot;I absolutely love this new voice memos to Claude so far. Done
            4 items and a couple of them while doing other task.&quot;
          </span>
        </p>
        <div className="mt-10">
          <GateForm magnet="capture-kit" buttonLabel="Send me the Voice Command Center" />
          <p className="mt-4 text-sm text-[#5B6B77]">
            You get it instantly plus the Kerzie AI newsletter, one real
            operator note a week. Unsubscribe any time.
          </p>
        </div>
      </section>
    </div>
  );
}
