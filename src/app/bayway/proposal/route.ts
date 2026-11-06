import { readFile } from "fs/promises";
import path from "path";

// The proposal tab of the hidden Bayway prospect page. Same shape as /bayway:
// serve a static HTML file from public/, never listed in the sitemap, and
// kept out of search twice over (the <meta name="robots"> tag inside the
// file plus the X-Robots-Tag header here).
export async function GET() {
  const html = await readFile(
    path.join(process.cwd(), "public", "bayway-proposal.html"),
    "utf-8"
  );
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
