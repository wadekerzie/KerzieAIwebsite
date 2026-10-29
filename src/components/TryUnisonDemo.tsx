"use client";

import { Instagram, MessageCircle, Phone, MessageSquare } from "lucide-react";

// Globals the page may find on window: GA's gtag and the GHL chat widget loader.
type DemoWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  leadConnector?: { chatWidget?: { openWidget?: () => void } };
  GHLChatWidget?: { open?: () => void };
};

// Track analytics events
const trackDemoClick = (channel: string) => {
  const w = typeof window !== "undefined" ? (window as DemoWindow) : undefined;
  if (w?.gtag) {
    w.gtag("event", `demo_click_${channel}`, {
      event_category: "Demo Interaction",
      event_label: `Try Demo - ${channel}`,
    });
  }
  console.log(`Demo click tracked: ${channel}`);
};

// Open the Unison chat widget (GHL loader, restored site-wide in Footer.tsx
// 2026-10-28). Verified on the live loader: it exposes
// window.leadConnector.chatWidget.openWidget(); there is no GHLChatWidget global.
const openChatbot = (channel: string = "chat") => {
  trackDemoClick(channel);
  if (typeof window === "undefined") return;
  const w = window as DemoWindow;
  const lc = w.leadConnector?.chatWidget;
  if (lc && typeof lc.openWidget === "function") {
    lc.openWidget();
    return;
  }
  // Older loader builds exposed GHLChatWidget.open()
  const legacy = w.GHLChatWidget;
  if (legacy && typeof legacy.open === "function") {
    legacy.open();
    return;
  }
  // Last resort: click the bubble button inside the <chat-widget> shadow root
  const host = document.querySelector("chat-widget") as HTMLElement | null;
  const bubble =
    (host?.shadowRoot?.querySelector("button") as HTMLElement | null) ??
    (document.querySelector("[data-chat-widget]") as HTMLElement | null);
  bubble?.click();
};

export default function TryUnisonDemo() {
  return (
    <section className="section section-blush">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">
              Try <span className="text-gradient">Unison</span> Right Now
            </h2>
            <p className="text-xl text-[var(--foreground)] mb-4">
              Want proof Unison actually works? Test it yourself. Right now.
            </p>
            <p className="text-lg text-[var(--foreground-muted)] max-w-3xl mx-auto mb-6">
              Pick <span className="font-semibold text-[var(--foreground)]">ANY</span> channel below and ask us a question about Kerzie AI.
              You&apos;ll get the same fast, helpful response every time—because it&apos;s all powered by Unison&apos;s unified knowledge base.
            </p>

            {/* Example Questions */}
            <div className="card text-left max-w-3xl mx-auto mb-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                Try asking us:
              </h3>
              <ul className="space-y-2 text-[var(--foreground-muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-blue)] mt-1">•</span>
                  &quot;Can you tell me about Unison?&quot;
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-blue)] mt-1">•</span>
                  &quot;What does Unison cost?&quot;
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-blue)] mt-1">•</span>
                  &quot;Can I schedule a call to talk about Unison in my business?&quot;
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-blue)] mt-1">•</span>
                  &quot;What channels does Unison support?&quot;
                </li>
              </ul>
            </div>

            <p className="text-lg text-[var(--foreground)] font-semibold">
              Go ahead. We&apos;re waiting.
            </p>
          </div>

          {/* 2x2 Grid of Channel Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Call or Text Us - Top left */}
            <div className="card card-hover text-center">
              <div className="flex flex-col items-center justify-between h-full">
                <div className="mb-6">
                  <div className="icon-box w-20 h-20 mx-auto mb-4 rounded-2xl shadow-lg">
                    <Phone className="w-10 h-10" />
                  </div>
                  <h3 className="heading-md mb-2">Call or Text Us</h3>
                  <p className="text-[var(--foreground-muted)]">
                    Talk to us directly
                  </p>
                </div>
                {/* 469-933-0930 is the GHL location's default number ("Sophie",
                    voice AI inbound), confirmed via the GHL API 2026-10-28. */}
                <a
                  href="tel:+14699330930"
                  onClick={() => trackDemoClick("phone")}
                  className="btn-primary w-full"
                >
                  <span>469-933-0930</span>
                </a>
              </div>
            </div>

            {/* Website Chat and Voice - Top right */}
            <div className="card card-hover text-center">
              <div className="flex flex-col items-center justify-between h-full">
                <div className="mb-6">
                  <div className="icon-box w-20 h-20 mx-auto mb-4 rounded-2xl shadow-lg">
                    <MessageSquare className="w-10 h-10" />
                  </div>
                  <h3 className="heading-md mb-2">Website Chat & Voice</h3>
                  <p className="text-[var(--foreground-muted)]">
                    Click the chat widget to the right to use either text or call us with your voice directly using the chat widget.
                  </p>
                </div>
                <button
                  onClick={() => openChatbot("chat")}
                  className="btn-primary w-full"
                >
                  <span>Open the chat widget</span>
                </button>
              </div>
            </div>

            {/* Instagram DM - Bottom left */}
            <div className="card card-hover text-center">
              <div className="flex flex-col items-center justify-between h-full">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shadow-lg">
                    <Instagram className="w-10 h-10 text-[#1A1B2E]" />
                  </div>
                  <h3 className="heading-md mb-2">Instagram DM</h3>
                  <p className="text-[var(--foreground-muted)]">
                    Message us on Instagram
                  </p>
                </div>
                <a
                  href="https://ig.me/m/kerzieai"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackDemoClick("instagram")}
                  className="btn-primary w-full"
                >
                  <span>Message on Instagram</span>
                </a>
              </div>
            </div>

            {/* Facebook Messenger - Bottom right */}
            <div className="card card-hover text-center">
              <div className="flex flex-col items-center justify-between h-full">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#0084FF] flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-10 h-10 text-[#1A1B2E]" />
                  </div>
                  <h3 className="heading-md mb-2">Facebook Message</h3>
                  <p className="text-[var(--foreground-muted)]">
                    Reach us via Facebook
                  </p>
                </div>
                <a
                  href="https://m.me/61572165790203"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackDemoClick("facebook")}
                  className="btn-primary w-full"
                >
                  <span>Message on Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Proof Statement */}
          <div className="card text-center bg-[var(--background-card)]">
            <p className="text-xl text-[var(--foreground)] mb-4">
              Every single one of these channels connects to the same Unison system.
            </p>
            <p className="text-lg text-[var(--foreground-muted)] mb-4">
              Same knowledge base. Same instant response. Same value.
            </p>
            <p className="text-xl text-[var(--foreground)] font-semibold">
              That&apos;s what Unison does for <span className="text-gradient">your business</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
