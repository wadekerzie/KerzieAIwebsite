"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

// Two views of the same engagement on one page. The leader's view is the
// default because the leader is the one who lands here from the mandate.
// Tabs follow the WAI-ARIA tabs pattern: arrow keys move between tabs, the
// panel that is not selected is hidden from the tree, aria-selected carries
// the state. No state leaves the page.

type ViewKey = "leader" | "seller";

const TABS: { key: ViewKey; label: string }[] = [
  { key: "leader", label: "For the leader" },
  { key: "seller", label: "For each seller" },
];

export default function SalesTeamsViews({
  leader,
  seller,
}: {
  leader: ReactNode;
  seller: ReactNode;
}) {
  const [active, setActive] = useState<ViewKey>("leader");
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const idx = TABS.findIndex((t) => t.key === active);
    let next = idx;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % TABS.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    else return;
    e.preventDefault();
    setActive(TABS[next].key);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Choose a view"
        onKeyDown={onKeyDown}
        className="flex gap-2 border-b border-[rgba(26,27,46,0.13)] mb-10"
      >
        {TABS.map((tab, i) => {
          const selected = tab.key === active;
          return (
            <button
              key={tab.key}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`${baseId}-tab-${tab.key}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.key)}
              className={`k-focus -mb-px px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold border-b-2 transition-colors duration-200 ${
                selected
                  ? "border-[#B04E2B] text-[#1A1B2E]"
                  : "border-transparent text-[#262B3D]/60 hover:text-[#1A1B2E]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-leader`}
        aria-labelledby={`${baseId}-tab-leader`}
        hidden={active !== "leader"}
        tabIndex={0}
        className="k-focus"
      >
        {leader}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel-seller`}
        aria-labelledby={`${baseId}-tab-seller`}
        hidden={active !== "seller"}
        tabIndex={0}
        className="k-focus"
      >
        {seller}
      </div>
    </div>
  );
}

// A screenshot seated into the canvas the way the site seats its photos:
// hairline border, no glow. Width and height are the file's real pixels so
// the layout never shifts while the image loads.
export function ExampleShot({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1152px) 1056px, calc(100vw - 48px)"
        className="k-photo h-auto"
      />
      <figcaption className="k-mono mt-3 text-[11px] tracking-[0.12em] uppercase text-[#262B3D]/60">
        {caption}
      </figcaption>
    </figure>
  );
}
