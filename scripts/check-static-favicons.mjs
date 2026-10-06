// Fails the build when a raw HTML page in public/ is missing the favicon set.
// Without the three links the browser tab falls back to a grainy favicon.ico
// (Wade caught it on /tagproposal 8/27 and again on /salesos/kyle 10/6).
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const missing = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".html") && !readFileSync(p, "utf8").includes("favicon-32.png")) missing.push(p);
  }
}
walk("public");

if (missing.length) {
  console.error("Static pages missing the favicon links (favicon-32, favicon-16, apple-touch-icon):");
  for (const p of missing) console.error("  " + p);
  process.exit(1);
}
