import { readFile } from "fs/promises";
import path from "path";

// Unlisted GotaGuy pre-seed overview, built 2026-09-22 for the True North
// Advisory call. Same content as the deck submitted to NVIDIA Capital Connect
// on 2026-09-15, with two deliberate changes on Wade's ruling that morning:
// the ask is softened to a range with no valuation cap, and an end-game
// section is appended as labeled thesis, not forecast.
//
// noindex is enforced twice: the meta tag inside the HTML and the
// X-Robots-Tag header here, because robots.ts deliberately does not name
// private routes.
export async function GET() {
  const html = await readFile(
    path.join(process.cwd(), "public", "gotaguy-deck.html"),
    "utf-8"
  );
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}
