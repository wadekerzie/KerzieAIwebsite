// Custom event hook for Vercel Web Analytics.
//
// As of 2026-10-03 this site does not ship the @vercel/analytics package, so
// window.va is normally undefined and this is a no-op. If the package (or the
// Vercel inject script) is ever added, every call here starts reporting with
// no other change. Never throws, never blocks the click or the submit.
export function trackEvent(
  name: string,
  data?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  const va = (window as unknown as { va?: (...args: unknown[]) => void }).va;
  if (typeof va !== "function") return;
  try {
    va("event", { name, data });
  } catch {
    // analytics must never break the page
  }
}
