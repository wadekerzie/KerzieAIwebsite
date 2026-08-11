"use client";

import { useState } from "react";

// The buyer's whole job is copy and paste. These make that one click with
// visible confirmation, so nobody has to select 7,000 words by hand or wonder
// whether it worked.

async function toClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function CopyButton({
  text,
  label = "Copy it",
  className = "k-btn-solid k-focus inline-block",
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [state, setState] = useState<"idle" | "done" | "failed">("idle");

  return (
    <span className="inline-flex items-center gap-3 flex-wrap">
      <button
        type="button"
        className={className}
        onClick={async () => {
          const ok = await toClipboard(text);
          setState(ok ? "done" : "failed");
          if (ok) setTimeout(() => setState("idle"), 2500);
        }}
      >
        {state === "done" ? "Copied" : label}
      </button>
      {state === "failed" ? (
        <span className="text-[#E8896A] text-sm">
          Your browser blocked the copy - select the text above and copy it by hand.
        </span>
      ) : null}
    </span>
  );
}

// Fallback path for anyone whose AI cannot reach the web: pulls the hosted
// document and copies only the half written to the AI, so the buyer still
// never has to find where their own part ends.
export function CopyBuilderButton({
  url = "/downloads/one-window-setup.md",
  marker = "# PART 2",
  label = "Copy the builder instead",
}: {
  url?: string;
  marker?: string;
  label?: string;
}) {
  const [state, setState] = useState<"idle" | "working" | "done" | "failed">("idle");

  return (
    <span className="inline-flex items-center gap-3 flex-wrap">
      <button
        type="button"
        className="k-focus underline underline-offset-4 text-[#6B9FD4] text-[15px] hover:text-white transition-colors"
        onClick={async () => {
          setState("working");
          try {
            const res = await fetch(url);
            const full = await res.text();
            const at = full.indexOf(marker);
            const payload = at >= 0 ? full.slice(at) : full;
            const ok = await toClipboard(payload);
            setState(ok ? "done" : "failed");
            if (ok) setTimeout(() => setState("idle"), 3000);
          } catch {
            setState("failed");
          }
        }}
      >
        {state === "working" ? "Getting it..." : state === "done" ? "Copied - now paste it into the Code tab" : label}
      </button>
      {state === "failed" ? (
        <span className="text-[#E8896A] text-sm">
          That did not work.{" "}
          <a href={url} download className="underline">
            Download the file
          </a>{" "}
          and attach it instead.
        </span>
      ) : null}
    </span>
  );
}
