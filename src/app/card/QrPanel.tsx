"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

// Client detection without a setState-in-effect (which cascades a render and
// the lint rule rejects). The server snapshot is false, the client snapshot is
// true, and nothing ever changes after that, so the subscribe callback is a
// no-op.
const noopSubscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );

// The white, full-bleed QR panel. Shared by /card (tap "Show my QR code") and
// /card/show (Wade's home-screen icon, always open).
//
// WHY THIS PORTALS TO document.body, and do not "simplify" it back:
// every page is wrapped by app/template.tsx in .k-page-enter, which runs a
// keyframe animation over transform and opacity. That does two things to any
// `position: fixed` descendant - it becomes the containing block, so inset-0
// stops meaning "the viewport", and it opens a stacking context, so no
// z-index inside it can ever beat the site header's own z-50. Rendered inline
// the panel came out clipped under the header with the footer showing through
// (caught on screen 2026-08-22). A portal moves the node out to <body>, above
// both, where fixed and z-index mean what they say.
//
// White on purpose: phone cameras lock onto a high-contrast code noticeably
// faster than a dark one.

type Props = {
  // Supplied by /card, where the panel is a dismissible overlay. Omitted by
  // /card/show, where the panel IS the page and there is nothing to go back to.
  onClose?: () => void;
};

export default function QrPanel({ onClose }: Props) {
  const isClient = useIsClient();
  const [copied, setCopied] = useState(false);

  // Escape closes on desktop; on a phone the tap handler does the work.
  useEffect(() => {
    if (!onClose) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Hold the screen awake. A QR is useless if iOS dims the display while
  // someone lines up their camera. Best-effort: every failure is swallowed,
  // because a page that throws is worse than a screen that dims. The lock is
  // dropped whenever the tab is backgrounded, so it is re-taken on return.
  useEffect(() => {
    type WakeLockSentinel = { release: () => Promise<void> };
    let lock: WakeLockSentinel | null = null;
    let cancelled = false;

    const acquire = async () => {
      const wl = (
        navigator as Navigator & {
          wakeLock?: { request: (t: "screen") => Promise<WakeLockSentinel> };
        }
      ).wakeLock;
      if (!wl) return;
      try {
        const got = await wl.request("screen");
        if (cancelled) {
          void got.release().catch(() => {});
          return;
        }
        lock = got;
      } catch {
        // Denied, unsupported, or hidden tab. The code is on screen anyway.
      }
    };

    void acquire();
    const onVisible = () => {
      if (document.visibilityState === "visible") void acquire();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisible);
      void lock?.release().catch(() => {});
    };
  }, []);

  // Portals need a real DOM - nothing renders server-side.
  if (!isClient) return null;

  return createPortal(
    <div
      role={onClose ? "dialog" : undefined}
      aria-modal={onClose ? true : undefined}
      aria-label="Wade Kerzie contact QR code"
      onClick={onClose}
      // z-[100] clears the site header's z-50. Safe-area padding keeps the
      // code clear of the notch when this launches standalone.
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white px-6 ${
        onClose ? "cursor-pointer" : ""
      }`}
      style={{
        paddingTop: "max(2rem, env(safe-area-inset-top))",
        paddingBottom: "max(2rem, env(safe-area-inset-bottom))",
      }}
    >
      {/* Plain img, not next/image: a 1-bit QR must render at its own pixels
          with no optimizer resampling, or the modules soften and the scan
          takes longer. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/card-qr.svg"
        alt="QR code linking to Wade Kerzie's contact card"
        className="h-auto w-full max-w-[20rem]"
      />

      <p className="mt-6 text-center text-base font-semibold text-[#1A1B2E]">
        Wade Kerzie
      </p>
      <p className="mt-0.5 text-center text-sm text-[#6b6560]">
        Kerzie AI Solutions
      </p>
      <p className="mt-4 text-center text-xs text-[#8b857f]">
        {onClose ? "Tap anywhere to close" : "Point a camera at the code"}
      </p>

      {!onClose && (
        // Wade's own escape hatches, deliberately quiet so they never compete
        // with the code. stopPropagation is not needed here - the panel has no
        // click handler when it is the page rather than an overlay.
        <div className="mt-10 flex items-center gap-5 text-xs text-[#a39d97]">
          <Link
            href="/card"
            className="underline underline-offset-4 transition-colors hover:text-[#6b6560]"
          >
            Open my card
          </Link>
          <button
            type="button"
            onClick={() => {
              void navigator.clipboard
                ?.writeText("https://kerzie.ai/card")
                .then(() => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1800);
                })
                .catch(() => {});
            }}
            className="underline underline-offset-4 transition-colors hover:text-[#6b6560]"
          >
            {copied ? "Link copied" : "Copy my link"}
          </button>
        </div>
      )}
    </div>,
    document.body
  );
}
