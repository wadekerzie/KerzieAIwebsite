import { readFile } from "fs/promises";
import path from "path";

// The demo behind the "Open the demo" button on the hidden /shortline
// presentation. Same shape as /bayway/proposal: serve a static HTML file from
// public/, never listed in the sitemap, and kept out of search twice over
// (the <meta name="robots"> tag inside the file plus the X-Robots-Tag header
// here). Its images live in public/shortline-demo/.
export async function GET() {
  const html = await readFile(
    path.join(process.cwd(), "public", "shortline-demo.html"),
    "utf-8"
  );
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
