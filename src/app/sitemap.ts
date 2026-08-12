import type { MetadataRoute } from "next";
import { SITE_URL, PUBLIC_ROUTES } from "@/content/siteFacts";

// Until 2026-08-12 this site had no sitemap at all, which meant an unlinked
// page was not "unlisted" - it was undiscoverable. The Back Cover depends on
// the opposite: /llms.txt is deliberately absent from human navigation AND
// deliberately advertised to machines. The sitemap is what makes that
// difference real.
//
// Gated pages (the /access and /pass routes, /downloads) carry
// `robots: { index: false }` in their own metadata and are excluded here.
// PUBLIC_ROUTES is the single list; adding a page means adding it there.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PUBLIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
