import { readFile } from "fs/promises";
import path from "path";

// Hidden prospect page for Bayway Auto Group. Same shape as /samesford:
// serve a static HTML file from public/, never listed in the sitemap, and
// kept out of search twice over (the <meta name="robots"> tag inside the
// file plus the X-Robots-Tag header here).
export async function GET() {
  const html = await readFile(
    path.join(process.cwd(), "public", "bayway-side-by-side.html"),
    "utf-8"
  );
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
