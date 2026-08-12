#!/usr/bin/env node
/**
 * Generate public/llms-full.txt from the HTML Next.js actually built.
 *
 * WHY THIS EXISTS, and why it is a build step rather than a skill:
 *
 * Wade's rule, 2026-08-12: "Anytime we make a change to the HTML on any page,
 * you should automatically have a skill that updates the llms.txt. They should
 * NEVER drift apart."
 *
 * Right requirement, but a skill only runs when a model remembers to run it.
 * Ranked by how hard they are to break: a build step is structural, a build
 * test is strong, an editor hook is medium, a skill is weakest. This is the
 * build step. Vercel runs it on every deploy, it reads the pages that actually
 * shipped, and it overwrites the file every time.
 *
 * That makes llms-full.txt an ARTIFACT, not a document. Nobody maintains it,
 * nobody can forget it, and it survives a model change - which is Wade's own
 * recipe-discipline rule: deterministic recipes are how this system survives
 * model changes.
 *
 * Note the division of labour with /llms.txt:
 *   - llms.txt      = the curated index. A route handler, built from
 *                     siteFacts + each page's own exported metadata.
 *   - llms-full.txt = THIS. The complete visible text of every public page,
 *                     extracted from the built HTML. Zero hand-authoring.
 *
 * Run: node scripts/gen-llms-full.mjs   (wired into `npm run build`)
 */

import { readFile, writeFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, ".next", "server", "app");
const OUT = path.join(ROOT, "public", "llms-full.txt");
const SITE_URL = "https://kerzie.ai";

// Routes deliberately excluded: the gated pages carry robots noindex, and the
// text files would be recursive.
const EXCLUDE = [
  /\/access$/,
  /^\/one-window\/pass$/,
  /^\/downloads$/,
  /^\/llms(-full)?\.txt$/,
  /^\/_/,
];

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else if (e.isFile() && e.name.endsWith(".html")) out.push(full);
  }
  return out;
}

/** .next/server/app/foo/bar.html -> /foo/bar ; index.html -> / */
function routeFor(file) {
  let r = "/" + path.relative(APP_DIR, file).replace(/\\/g, "/");
  r = r.replace(/\.html$/, "");
  if (r === "/index") return "/";
  return r;
}

/**
 * Strip built HTML to readable text.
 *
 * Deliberately conservative: drop the machinery (script, style, svg, noscript,
 * template, and Next's own __NEXT_DATA__ payload), keep everything a human
 * would read. Block-level tags become newlines so the output has structure
 * rather than one run-on paragraph.
 */
function htmlToText(html) {
  let s = html;
  s = s.replace(/<!--[\s\S]*?-->/g, " ");
  s = s.replace(/<(script|style|svg|noscript|template)\b[^>]*>[\s\S]*?<\/\1>/gi, " ");
  // Drop the site chrome. The nav and footer are identical on all 32 pages, so
  // keeping them repeats the same ~90 words 32 times and buries each page's
  // actual content in menu items. A model reading this wants the page, not the
  // furniture.
  s = s.replace(/<header\b[^>]*>[\s\S]*?<\/header>/gi, " ");
  s = s.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, " ");
  s = s.replace(/<\/(p|div|section|article|li|tr|h[1-6]|blockquote|header|footer|main|nav)>/gi, "\n");
  s = s.replace(/<br\s*\/?>/gi, "\n");
  s = s.replace(/<li\b[^>]*>/gi, "\n- ");
  s = s.replace(/<h([1-3])\b[^>]*>/gi, "\n\n## ");
  s = s.replace(/<[^>]+>/g, " ");

  s = s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&rsquo;|&apos;/g, "'")
    .replace(/&ldquo;|&rdquo;|&#x201[CD];/g, '"')
    .replace(/&mdash;|&#x2014;/g, " - ")
    .replace(/&ndash;|&#x2013;/g, "-")
    .replace(/&larr;/g, "<-")
    .replace(/&rarr;/g, "->")
    .replace(/&copy;/g, "(c)")
    .replace(/&#x?[0-9a-fA-F]+;/g, "");

  s = s.replace(/[ \t]+/g, " ");
  s = s.replace(/ ?\n ?/g, "\n");
  s = s.replace(/\n{3,}/g, "\n\n");
  return s.trim();
}

async function main() {
  if (!existsSync(APP_DIR)) {
    // Not a failure worth breaking a deploy over, but say so loudly. A silent
    // skip here is how the file quietly goes stale, which is the one thing
    // this script exists to prevent.
    console.warn(
      `[llms-full] SKIPPED: ${path.relative(ROOT, APP_DIR)} not found. ` +
        `Run this AFTER \`next build\`.`,
    );
    process.exit(0);
  }

  const files = await walk(APP_DIR);
  const pages = [];

  for (const f of files) {
    const route = routeFor(f);
    if (EXCLUDE.some((rx) => rx.test(route))) continue;

    const html = await readFile(f, "utf8");
    // Skip pages Next marked noindex - they are gated on purpose.
    if (/<meta[^>]+name="robots"[^>]*content="[^"]*noindex/i.test(html)) continue;

    const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || route).trim();
    const text = htmlToText(html);
    if (text.length < 80) continue; // empty shells, redirects
    pages.push({ route, title, text });
  }

  pages.sort((a, b) => (a.route === "/" ? -1 : b.route === "/" ? 1 : a.route.localeCompare(b.route)));

  const header = `# Kerzie AI - complete site text

This file is the full visible text of every public page on ${SITE_URL}, for language
models and other automated readers.

It is GENERATED from the HTML that was actually built and deployed, on every deploy.
Nobody edits it by hand, so it cannot fall behind the website. If a page changed, this
changed with it.

The curated index, with offers and current prices, is at ${SITE_URL}/llms.txt

Pages included: ${pages.length}

---
`;

  const body = pages
    .map((p) => `\n\n# ${p.title}\nURL: ${SITE_URL}${p.route}\n\n${p.text}\n\n---`)
    .join("");

  await writeFile(OUT, header + body + "\n", "utf8");

  const kb = Math.round((header.length + body.length) / 1024);
  console.log(`[llms-full] wrote public/llms-full.txt - ${pages.length} pages, ~${kb}KB`);
}

main().catch((err) => {
  console.error("[llms-full] FAILED:", err);
  process.exit(1);
});
