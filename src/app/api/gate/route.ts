// Email gate for free lead magnets: subscribes the email to the Kerzie AI
// newsletter (Beehiiv), tagged by magnet, and returns the magnet's access
// page. One list, many doors.

import { NextResponse } from "next/server";
import { botGuard, clientIp } from "@/lib/botGuard";

// The magnet slug doubles as the Beehiiv utm_source, so it stays "capture-kit"
// even though the product is now the Mobile Capture Kit. Renaming it would
// split one lead magnet's subscriber attribution across two tags for a change
// no subscriber ever sees. The public path moved; the tag did not.
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

  const key = process.env.BEEHIIV_API_KEY;
  const pub = process.env.BEEHIIV_PUBLICATION_ID;
  if (key && pub) {
    try {
      const res = await fetch(
        `https://api.beehiiv.com/v2/publications/${pub}/subscriptions`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            utm_source: magnet,
            utm_medium: "gate",
            reactivate_existing: true,
            send_welcome_email: true,
            // Name fields ride as Beehiiv custom fields when the gate collects
            // them (the one-window door does; the older gates send none).
            ...(firstName || lastName
              ? {
                  custom_fields: [
                    ...(firstName ? [{ name: "First Name", value: firstName }] : []),
                    ...(lastName ? [{ name: "Last Name", value: lastName }] : []),
                  ],
                }
              : {}),
          }),
        }
      );
      if (!res.ok) {
        console.error("beehiiv subscribe failed", res.status, await res.text());
        // Deliberate: never strand a reader over a list hiccup. They still
        // get the magnet; the subscribe failure is logged for follow-up.
      }
    } catch (err) {
      console.error("beehiiv subscribe error", err);
    }
  } else {
    console.error("gate: Beehiiv env vars missing; magnet delivered ungated");
  }

  return NextResponse.json({ ok: true, redirect });
}
