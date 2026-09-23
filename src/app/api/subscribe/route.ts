// Newsletter signup for /subscribe. Goes to Substack (news.kerzie.ai), the same
// list the lead-magnet gates feed. A Substack refusal emails Wade the address.

import { NextResponse } from "next/server";
import { botGuard, clientIp } from "@/lib/botGuard";
import { subscribeToSubstack, notifySignupFailure, copySignupToWade } from "@/lib/substack";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const source = typeof body?.source === "string" ? body.source.slice(0, 60) : "";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const guard = botGuard({ body, ip: clientIp(req) });
  if (guard.reject) {
    console.warn("subscribe: bot signature rejected", guard.reasons);
    return NextResponse.json({ ok: true });
  }

  const result = await subscribeToSubstack(email, "subscribe");
  if (!result.ok) {
    console.error("substack subscribe failed", result.detail);
    await notifySignupFailure(email, `subscribe page (${source || "kerzie.ai"})`, result.detail || "unknown");
    return NextResponse.json({ error: "failed" }, { status: 502 });
  }

  await copySignupToWade(email, `subscribe page (${source || "kerzie.ai"})`);
  return NextResponse.json({ ok: true });
}
