import { headers } from "next/headers";
import { SITE_URL } from "@/content/siteFacts";

// Added 2026-08-12 with the sitemap (as robots.ts). Converted to a plain text
// route 2026-10-26 for the agent-ready pilot, because Next's MetadataRoute.Robots
// cannot emit a directive it does not know about. The first seven lines are
// the previous output byte for byte; the Agentmap line is the addition.
//
// Three jobs:
//
// 1. Point every crawler at the sitemap, which is what makes the deliberately
//    unlinked pages findable.
// 2. Explicitly ALLOW /llms.txt. The Back Cover only works if the file is
//    unlisted for humans and openly readable by machines - the exact opposite
//    of hiding it. Gated pages stay excluded via their own `index: false`
//    metadata rather than being named here, so this file never becomes a
//    public directory of the private routes.
// 3. `Agentmap:` (Agentic Resource Discovery, agenticresourcediscovery.org
//    section 5.1) points agents and registries at the ARD manifest. Google
//    Lighthouse reads this line before it probes the well-known path, and
//    stops there if the URL does not load. So the Agentmap URL is built from
//    the host serving this file (production, a Vercel preview, localhost),
//    never hardcoded to production: a preview must point agents at its own
//    manifest, not at a production file that may not exist yet. Host and
//    Sitemap keep SITE_URL, exactly as before.
export const dynamic = "force-dynamic";

export async function GET() {
  const h = await headers();
  const siteHost = new URL(SITE_URL).host;
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? siteHost;
  const proto =
    h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = host === siteHost ? SITE_URL : `${proto}://${host}`;

  const body = `User-Agent: *
Allow: /
Allow: /llms.txt
Allow: /llms-full.txt

Host: ${SITE_URL}
Sitemap: ${SITE_URL}/sitemap.xml
Agentmap: ${origin}/.well-known/ard.json
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
