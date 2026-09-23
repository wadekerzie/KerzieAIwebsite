// Email gate for free lead magnets: subscribes the email to the Kerzie AI
// newsletter on Substack (news.kerzie.ai, since the 2026-09-22 cutover) and
// returns the magnet's access page. One list, many doors.

import { NextResponse } from "next/server";
import { botGuard, clientIp } from "@/lib/botGuard";
import { subscribeToSubstack, notifySignupFailure, copySignupToWade } from "@/lib/substack";

// The magnet slug doubles as the signup source path (kerzie.ai/<slug>) that
// Substack records as first_url. "capture-kit" stays as the slug even though
// the product is now the Mobile Capture Kit; the public path moved, the slug
// did not.
const MAGNETS: Record<string, string> = {
  "capture-kit": "/free/mobile-capture-kit/access",
  "first-reps": "/free/first-reps/access",
  // One-Window went free 2026-09-05. This gate is the front door: capture
  // first/last/email, land on the welcome page, count toward the thousand.
  "one-window": "/one-window/welcome",
};

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const magnet = typeof body?.magnet === "string" ? body.magnet : "";
  const firstName =
    typeof body?.firstName === "string" ? body.firstName.trim().slice(0, 100) : "";
  const lastName =
    typeof body?.lastName === "string" ? body.lastName.trim().slice(0, 100) : "";

  const redirect = MAGNETS[magnet];
  if (!redirect) {
    return NextResponse.json({ error: "unknown magnet" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const guard = botGuard({ body, ip: clientIp(req), nameLikeFields: ["firstName", "lastName"] });
  if (guard.reject) {
    console.warn("gate: bot signature rejected", guard.reasons);
    return NextResponse.json({ ok: true, redirect });
  }

  // Deliberate: never strand a reader over a list hiccup. They still get the
  // magnet; a Substack refusal emails Wade the address (with the name, which
  // Substack's form does not take) so it can be added by hand.
  const result = await subscribeToSubstack(email, magnet);
  if (!result.ok) {
    console.error("substack subscribe failed", result.detail);
    const name = [firstName, lastName].filter(Boolean).join(" ");
    await notifySignupFailure(email, `gate: ${magnet}`, result.detail || "unknown", name ? `Name: ${name}` : undefined);
  }
  else {
    const name = [firstName, lastName].filter(Boolean).join(" ");
    await copySignupToWade(email, `gate: ${magnet}`, name ? `Name: ${name}` : undefined);
  }
  return NextResponse.json({ ok: true, redirect });
}
