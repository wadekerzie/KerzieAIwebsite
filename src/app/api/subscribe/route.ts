// Newsletter signup for /subscribe. Same list as the lead-magnet gates, but
// tagged so we can tell the subscribe page apart from the magnets in Beehiiv.

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const source = typeof body?.source === "string" ? body.source.slice(0, 60) : "";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const key = process.env.BEEHIIV_API_KEY;
  const pub = process.env.BEEHIIV_PUBLICATION_ID;
  if (!key || !pub) {
    console.error("subscribe: Beehiiv env vars missing");
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

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
          utm_source: "subscribe-page",
          utm_medium: source || "kerzie.ai",
          reactivate_existing: true,
          send_welcome_email: true,
        }),
      }
    );
    if (!res.ok) {
      console.error("beehiiv subscribe failed", res.status, await res.text());
      return NextResponse.json({ error: "failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("beehiiv subscribe error", err);
    return NextResponse.json({ error: "failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
