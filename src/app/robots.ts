import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/siteFacts";

// Added 2026-08-12 with the sitemap. Two jobs:
//
// 1. Point every crawler at the sitemap, which is what makes the deliberately
//    unlinked pages findable.
// 2. Explicitly ALLOW /llms.txt. The Back Cover only works if the file is
//    unlisted for humans and openly readable by machines - the exact opposite
//    of hiding it. Gated pages stay excluded via their own `index: false`
//    metadata rather than being named here, so this file never becomes a
//    public directory of the private routes.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
