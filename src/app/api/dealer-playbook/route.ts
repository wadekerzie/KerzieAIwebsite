// Lead handler for /dealerplaybook (The Dealer Playbook episode, Oct 2026).
//
// Same plumbing as /api/contact and /api/fast-track: Resend emails the lead
// to wade@kerzie.ai, botGuard screens scripts. The subject, body and Resend
// tags all carry source "dealer-playbook". Reply-to is the lead's address so
// Wade can answer the check straight from his inbox.
//
// Env: RESEND_API_KEY (already set in Vercel production; .env.local carries a
// placeholder so local builds pass and local submits fail at Resend instead of
// sending anything).

import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { botGuard, clientIp } from "@/lib/botGuard";
import { CONTACT_EMAIL } from "@/content/siteFacts";
import { CHECK_PROMISE, DEALER_PLAYBOOK_SOURCE, EPISODE } from "@/content/dealerPlaybook";
import { normalizeWebsite } from "@/lib/website";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 120) : "";
  const email = typeof body.email === "string" ? body.email.trim().slice(0, 320) : "";
  const websiteRaw = typeof body.website === "string" ? body.website : "";
  const website = normalizeWebsite(websiteRaw);

  if (!name) return NextResponse.json({ error: "Name is required." }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "A real email is required." }, { status: 400 });
  if (!website) return NextResponse.json({ error: "A dealership website is required." }, { status: 400 });

  const guard = botGuard({ body, ip: clientIp(req), nameLikeFields: ["name"] });
  if (guard.reject) {
    console.warn("dealer-playbook: bot signature rejected", guard.reasons);
    return NextResponse.json({ ok: true });
  }

  const host = new URL(website).hostname.replace(/^www\./, "");
  const submitted = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });

  const text = [
    `Source: ${DEALER_PLAYBOOK_SOURCE}`,
    `Episode: ${EPISODE.title} (${EPISODE.show}, ${EPISODE.host})`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Dealership website: ${website}`,
    `As typed: ${websiteRaw.trim()}`,
    `Submitted: ${submitted} CT`,
    "",
    `Promise made on the page: ${CHECK_PROMISE}`,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: "Kerzie AI <onboarding@resend.dev>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Dealer Playbook lead: ${name} (${host})`,
    text,
    tags: [{ name: "source", value: DEALER_PLAYBOOK_SOURCE }],
  });

  if (error) {
    console.error("dealer-playbook: resend failed", error);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
