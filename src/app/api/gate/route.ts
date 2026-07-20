// Email gate for free lead magnets: subscribes the email to the Kerzie AI
// newsletter (Beehiiv), tagged by magnet, and returns the magnet's access
// page. One list, many doors.

import { NextResponse } from "next/server";

const MAGNETS: Record<string, string> = {
  "capture-kit": "/free/capture-kit/access",
  "first-reps": "/free/first-reps/access",
};

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const magnet = typeof body?.magnet === "string" ? body.magnet : "";

  const redirect = MAGNETS[magnet];
  if (!redirect) {
    return NextResponse.json({ error: "unknown magnet" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
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
