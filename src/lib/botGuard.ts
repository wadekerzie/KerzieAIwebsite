// Shared bot guard for the public POST routes (/api/fast-track, /api/contact,
// /api/subscribe, /api/gate). Added 2026-09-11 after a run of gibberish
// Fast-Track intakes ("fXfEPckLTEBpqPuDid", "Iswvl LLC") and dotted-Gmail
// newsletter signups. No dependencies. Callers return the NORMAL success shape
// when `reject` is true, so a script learns nothing from the response.
//
// Signals (any hard signal, or two soft ones, rejects):
//   hard  - honeypot field filled (a person never sees it)
//   hard  - form submitted faster than a person can type (elapsed < 2000 ms)
//   hard  - per-IP throttle tripped (in-memory, per warm instance: a speed bump)
//   soft  - a "name-like" field is a random token (no spaces, mixed case
//           switches, almost no vowels)
//   soft  - Gmail local part with 3+ dots (the duplicate-mailbox trick)
//   soft  - elapsed missing entirely (our forms always send it)

const hits = new Map<string, number[]>();
const WINDOW_MS = 3600_000;
const MAX_PER_WINDOW = 6;

export function looksRandom(s: string): boolean {
  const t = s.trim();
  if (t.length < 8 || /\s/.test(t)) return false; // real names/companies have spaces or are short
  const letters = t.replace(/[^A-Za-z]/g, "");
  if (letters.length < 8) return false;
  const vowels = (letters.match(/[aeiouAEIOU]/g) ?? []).length;
  const vowelRatio = vowels / letters.length;
  let switches = 0;
  for (let i = 1; i < letters.length; i++) {
    const a = letters[i - 1], b = letters[i];
    if ((a === a.toLowerCase()) !== (b === b.toLowerCase())) switches++;
  }
  // "fXfEPckLTEBpqPuDid": 12 case switches, 3 vowels of 18. A real single word
  // ("Kerzie", "Shortline") has 0-1 switches and a vowel ratio near 0.4.
  return switches >= 4 || vowelRatio < 0.2;
}

export function dottedGmail(email: string): boolean {
  const m = /^([^@]+)@gmail\.com$/i.exec(email.trim());
  if (!m) return false;
  return (m[1].match(/\./g) ?? []).length >= 3;
}

export type GuardInput = {
  body: Record<string, unknown> | null;
  ip: string;
  nameLikeFields?: string[]; // keys whose values should read like a name or company
  emailField?: string;
};

export function botGuard({ body, ip, nameLikeFields = [], emailField = "email" }: GuardInput): { reject: boolean; reasons: string[] } {
  const reasons: string[] = [];
  const b = body ?? {};

  const hp = typeof b.hp === "string" ? b.hp : "";
  if (hp.length > 0) reasons.push("honeypot");

  const elapsed = typeof b.elapsed === "number" ? b.elapsed : null;
  if (elapsed !== null && elapsed < 2000) reasons.push("too-fast");
  if (elapsed === null) reasons.push("soft:no-elapsed");

  for (const k of nameLikeFields) {
    const v = typeof b[k] === "string" ? (b[k] as string) : "";
    if (v && looksRandom(v)) reasons.push(`soft:random:${k}`);
  }
  const email = typeof b[emailField] === "string" ? (b[emailField] as string) : "";
  if (email && dottedGmail(email)) reasons.push("soft:dotted-gmail");

  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (recent.length > MAX_PER_WINDOW) reasons.push("throttle");

  const hard = reasons.filter((r) => !r.startsWith("soft:")).length;
  const soft = reasons.filter((r) => r.startsWith("soft:")).length;
  return { reject: hard > 0 || soft >= 2, reasons };
}

export function clientIp(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}
