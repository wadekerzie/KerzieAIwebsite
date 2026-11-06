import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// The "Accept and Request Agreement" button on the hidden Bayway proposal
// page (/bayway/proposal). Same mail plumbing as /api/contact: Resend,
// RESEND_API_KEY, straight to wade@kerzie.ai.
//
// POST only, so a crawler or a link preview that fetches the page can't fire
// it. The page collects nothing about the visitor and this route logs nothing
// about them: no IP, no headers, no body echo. It returns ok only when Resend
// accepted the message, and the page shows "sent" on nothing else.
//
// botGuard is deliberately not used here: its reject path answers with a fake
// success so scripts learn nothing, and this page must never show success
// unless the mail went out.
//
// Resend is constructed inside the handler, not at module load: the SDK
// throws when the key is missing, and a missing key should be a clean 500
// (the page shows its failure note) rather than a crash on every request.

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || body.source !== "bayway-proposal") {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("bayway-accept: RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
  const resend = new Resend(key);

  const now = new Date();
  const central = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    dateStyle: "full",
    timeStyle: "long",
  }).format(now);

  const text = [
    "Bayway clicked Accept and Request Agreement on kerzie.ai/bayway/proposal.",
    "",
    `Time: ${central}`,
    `UTC: ${now.toISOString()}`,
    "",
    "The page told them Wade will send the agreement today. Nothing is signed.",
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: "Kerzie AI <onboarding@resend.dev>",
      to: "wade@kerzie.ai",
      subject: "Bayway accepted the proposal and asked for the agreement",
      text,
      tags: [{ name: "source", value: "bayway-proposal" }],
    });

    if (error) {
      console.error("bayway-accept: resend failed", error.name, error.message);
      return NextResponse.json({ error: "Failed to send." }, { status: 500 });
    }
  } catch {
    console.error("bayway-accept: resend threw");
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
