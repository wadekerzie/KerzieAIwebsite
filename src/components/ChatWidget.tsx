"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// Unison chat + voice widget (GHL). Site-wide since 2026-01-12, dropped by the
// 2026-06-14 footer redesign, restored 2026-10-28 (Wade: "put them both back
// on the site now"). Moved out of Footer.tsx 2026-11-13 so one route family
// can opt out: the Back Cover scores pages (/scores/*) are client reports and
// carry no chat bubble (Wade 11/13). Every other page loads it exactly as
// before.
const NO_WIDGET_PREFIXES = ["/scores"];

export default function ChatWidget() {
  const pathname = usePathname() || "";
  if (NO_WIDGET_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null;
  }
  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6963fcc35c8c5be17f8f0a9d"
      strategy="lazyOnload"
    />
  );
}
