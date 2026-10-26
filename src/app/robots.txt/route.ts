import { SITE_URL } from "@/content/siteFacts";

// Added 2026-08-12 with the sitemap (as robots.ts). Converted to a plain text
// route 2026-10-26 for the agent-ready pilot, because Next's MetadataRoute.Robots
// cannot emit a directive it does not know about. The text below is the
// previous output byte for byte, plus one line.
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
//    Lighthouse reads this line before it probes the well-known path.
export const dynamic = "force-static";

export async function GET() {
  const body = `User-Agent: *
Allow: /
Allow: /llms.txt
Allow: /llms-full.txt

Host: ${SITE_URL}
Sitemap: ${SITE_URL}/sitemap.xml
Agentmap: ${SITE_URL}/.well-known/ard.json
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
