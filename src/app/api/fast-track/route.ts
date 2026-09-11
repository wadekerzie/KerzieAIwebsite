import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { botGuard, clientIp } from "@/lib/botGuard";

const resend = new Resend(process.env.RESEND_API_KEY);

const FIELDS = [
  ["name", "Name"],
  ["email", "Email"],
  ["business", "Business"],
  ["role", "Role / decision maker"],
  ["workflow", "Workflow that hurts"],
  ["tools", "Tools and accounts"],
  ["computer", "Computer"],
  ["ai_experience", "AI experience so far"],
  ["prerequisite", "OK with subscription prerequisite"],
  ["referral", "How they heard about it"],
] as const;

export async function POST(req: NextRequest) {
  const body = await req.json();

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const workflow = typeof body.workflow === "string" ? body.workflow.trim() : "";

  if (!name || !email || !workflow) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Bot guard: honeypot, fill time, random-token fields, dotted Gmail, per-IP
  // throttle. Rejects answer with the normal success shape on purpose.
  const guard = botGuard({ body, ip: clientIp(req), nameLikeFields: ["name", "business", "role"] });
  if (guard.reject) {
    console.warn("fast-track: bot signature rejected", guard.reasons);
    return NextResponse.json({ ok: true });
  }

  const text = FIELDS.map(([key, label]) => {
    const value = typeof body[key] === "string" ? body[key].trim() : "";
    return `${label}:\n${value || "(blank)"}`;
  }).join("\n\n");

  const { error } = await resend.emails.send({
    from: "Kerzie AI <onboarding@resend.dev>",
    to: "wade@kerzie.ai",
    subject: `Fast-Track intake: ${name} (${body.business || "no business given"})`,
    text,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
