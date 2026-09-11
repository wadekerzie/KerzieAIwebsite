import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { botGuard, clientIp } from "@/lib/botGuard";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const problem = body?.problem;

  if (!problem || typeof problem !== "string" || problem.trim().length === 0) {
    return NextResponse.json({ error: "No problem submitted." }, { status: 400 });
  }

  const guard = botGuard({ body, ip: clientIp(req) });
  if (guard.reject) {
    console.warn("contact: bot signature rejected", guard.reasons);
    return NextResponse.json({ ok: true });
  }

  const { error } = await resend.emails.send({
    from: "Kerzie AI <onboarding@resend.dev>",
    to: "wade@kerzie.ai",
    subject: "New problem submission from kerzie.ai",
    text: problem.trim(),
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
