// Custom events for Vercel Web Analytics (@vercel/analytics, added 2026-10-03).
// Never throws, never blocks the click or the submit.
import { track } from "@vercel/analytics";

export function trackEvent(
  name: string,
  data?: Record<string, string | number | boolean>
) {
  try {
    track(name, data);
  } catch {
    // analytics must never break the page
  }
}
