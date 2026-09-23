// Newsletter signups go to Substack (news.kerzie.ai) since the 2026-09-22
// cutover from Beehiiv. Substack has no official subscriber API; this posts
// to the same public endpoint Substack's own embed form uses. If Substack
// refuses or times out, notifySignupFailure emails Wade the address so it can
// be added by hand (Subscribers > Add subscribers), and nobody is lost.

import { Resend } from "resend";

const SUBSTACK_ORIGIN = "https://news.kerzie.ai";

export async function subscribeToSubstack(
  email: string,
  source: string
): Promise<{ ok: boolean; detail?: string }> {
  const form = new URLSearchParams({
    email,
    first_url: `https://kerzie.ai/${source}`,
    first_referrer: "https://kerzie.ai/",
    current_url: `https://kerzie.ai/${source}`,
    current_referrer: "https://kerzie.ai/",
    referral_code: "",
    source: "embed",
  });
  try {
    const res = await fetch(`${SUBSTACK_ORIGIN}/api/v1/free?nojs=true`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
      signal: AbortSignal.timeout(8000),
    });
    if (res.ok) return { ok: true };
    return { ok: false, detail: `${res.status} ${(await res.text()).slice(0, 300)}` };
  } catch (err) {
    return { ok: false, detail: String(err).slice(0, 300) };
  }
}

export async function notifySignupFailure(
  email: string,
  source: string,
  detail: string,
  extra?: string
) {
  if (!process.env.RESEND_API_KEY) {
    console.error("signup failure and no RESEND_API_KEY", email, source, detail);
    return;
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Kerzie AI <onboarding@resend.dev>",
      to: "wade@kerzie.ai",
      subject: `Add to Substack by hand: ${email}`,
      text: [
        `A kerzie.ai signup did not reach Substack.`,
        ``,
        `Email: ${email}`,
        `Source: ${source}`,
        extra ? extra : "",
        `Substack said: ${detail}`,
        ``,
        `Add it: news.kerzie.ai dashboard > Subscribers > Add subscribers.`,
      ].filter(Boolean).join("\n"),
    });
  } catch (err) {
    console.error("notifySignupFailure failed", err);
  }
}

// Until a kerzie.ai signup is seen landing in the Substack subscriber list
// (unverified as of 2026-09-23: Substack answers the form with its welcome
// redirect, but the test address did not appear in the list), every signup
// also emails Wade a copy so nobody can be lost silently.
export async function copySignupToWade(email: string, source: string, extra?: string) {
  if (!process.env.RESEND_API_KEY) return;
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Kerzie AI <onboarding@resend.dev>",
      to: "wade@kerzie.ai",
      subject: `New kerzie.ai signup: ${email}`,
      text: [
        `Someone signed up on kerzie.ai and was sent to Substack.`,
        ``,
        `Email: ${email}`,
        `Source: ${source}`,
        extra ? extra : "",
        ``,
        `Check news.kerzie.ai dashboard > Subscribers. If the address is missing, add it there by hand.`,
      ].filter(Boolean).join("\n"),
    });
  } catch (err) {
    console.error("copySignupToWade failed", err);
  }
}
