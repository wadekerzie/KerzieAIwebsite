"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// The only parts of /card/show that need the browser. Everything visible -
// the code, Wade's name, the caption - is server rendered by page.tsx so it
// paints the instant the icon is tapped, with nothing waiting on hydration.
//
// This component adds two things on top of that markup:
//   1. The screen wake lock, so iOS does not dim the display while someone
//      lines up their camera. Safari has had it since 16.4. Best-effort:
//      every failure path is swallowed, because a page that throws is worse
//      than a screen that dims. The lock is released whenever the tab is
//      backgrounded, so it is re-taken on visibilitychange.
//   2. The two quiet links under the code, one of which needs the clipboard.
export default function ShowClient() {
  const [copied, setCopied] = useState(false);

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

  return (
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
  );
}
