// Loose website validation, shared by the /dealerplaybook form (client) and
// /api/dealer-playbook (server). Accepts "yourdealership.com",
// "www.x.com/inventory", or a full https URL; returns the normalized URL or
// null. A dealer GM should never be bounced for leaving off "https://".
export function normalizeWebsite(raw: string): string | null {
  const t = raw.trim().replace(/\s+/g, "");
  if (!t || t.length > 300) return null;
  const withScheme = /^https?:\/\//i.test(t) ? t : `https://${t}`;
  try {
    const u = new URL(withScheme);
    if (!/^https?:$/.test(u.protocol)) return null;
    const host = u.hostname;
    if (!host.includes(".") || host.startsWith(".") || host.endsWith(".") || host.includes("..")) return null;
    if (!/^[a-z0-9.-]+$/i.test(host)) return null;
    return u.toString();
  } catch {
    return null;
  }
}
