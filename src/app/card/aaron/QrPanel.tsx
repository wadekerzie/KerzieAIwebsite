"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

// The dismissible QR overlay on /card/aaron. This is Wade's ../QrPanel.tsx
// with Aaron's code and name - read THAT file before changing this one: it
// carries the reasons this portals to document.body (the .k-page-enter
// animation makes any fixed descendant clip under the site header) and why
// the backdrop is white (phone cameras lock onto high contrast faster).

// Client detection without a setState-in-effect (which cascades a render and
// the lint rule rejects). The server snapshot is false, the client snapshot is
// true, and nothing ever changes after that, so subscribe is a no-op.
const noopSubscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );

export default function QrPanel({ onClose }: { onClose: () => void }) {
  const isClient = useIsClient();
  const [locked, setLocked] = useState(false);

  // Escape closes on desktop; on a phone the tap handler does the work.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Hold the screen awake while the code is up, so iOS does not dim mid-scan.
  // Best-effort - every failure is swallowed, because a page that throws is
  // worse than a screen that dims.
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
        setLocked(true);
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
      role="dialog"
      aria-modal="true"
      aria-label="Aaron Jones contact QR code"
      onClick={onClose}
      // z-[100] clears the site header's z-50.
      className="fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center bg-white px-6"
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
        src="/aaron-card-qr.svg"
        alt="QR code linking to Aaron Jones's contact card"
        className="h-auto w-full max-w-[20rem]"
      />

      <p className="mt-6 text-center text-base font-semibold text-[#1A1B2E]">
        Aaron Jones
      </p>
      <p className="mt-0.5 text-center text-sm text-[#6b6560]">
        Kerzie AI Solutions
      </p>
      <p className="mt-4 text-center text-xs text-[#8b857f]">
        {locked ? "Screen stays awake. Tap anywhere to close." : "Tap anywhere to close"}
      </p>
    </div>,
    document.body
  );
}
