import { readFile } from "fs/promises";
import path from "path";

// Daughter page of /gotaguy. The Flood the Market plan, built 2026-09-11 for
// the Jim Brinksma four-way and published then as an artifact. Served here
// unchanged apart from a noindex meta and a Kerzie AI bar with a back link,
// so the numbers and sourcing stay exactly as they were verified on 9/11.
export async function GET() {
  const html = await readFile(
    path.join(process.cwd(), "public", "gotaguy-flood.html"),
    "utf-8"
  );
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}
