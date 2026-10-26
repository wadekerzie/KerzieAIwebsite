// Predecessor path for the ARD manifest. The current spec publishes at
// /.well-known/ard.json; consumers (and PageSpeed Insights' Lighthouse, as of
// 2026-10-26) that still probe /.well-known/ai-catalog.json get the identical
// document here. One source, two doors. See ../ard.json/route.ts.
export { GET } from "../ard.json/route";
export const dynamic = "force-static";
