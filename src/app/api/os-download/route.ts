// OS Library download gate: registers which upgrade an OS owner pulled
// (GHL contact tag per download - this is how "who runs what" stays visible
// with no phone-home from anyone's OS), then hands back the file.
//
// Same never-strand principle as the lead-magnet gate: if GHL is down or the
// env is missing, the owner still gets their file and the miss is logged.

import { NextResponse } from "next/server";
import library from "@/data/os_library.json";

const FILES: Record<string, string> = Object.fromEntries(
  [library.baseline, ...library.upgrades].map((u) => [u.slug, u.file])
);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const slug = typeof body?.slug === "string" ? body.slug : "";

  const file = FILES[slug];
  if (!file) {
    return NextResponse.json({ error: "unknown upgrade" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (token && locationId) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
      };
      // Upsert WITHOUT tags - GHL's upsert replaces the contact's whole tag
      // set when tags are passed (verified live 2026-08-10, it wiped a tag).
      // Tags go through the additive per-contact endpoint instead.
      const up = await fetch(
        "https://services.leadconnectorhq.com/contacts/upsert",
        {
          method: "POST",
          headers,
          body: JSON.stringify({ locationId, email }),
        }
      );
      const contact = up.ok ? (await up.json())?.contact : null;
      if (!contact?.id) {
        console.error("os-download GHL upsert failed", up.status);
      } else {
        const tag = await fetch(
          `https://services.leadconnectorhq.com/contacts/${contact.id}/tags`,
          {
            method: "POST",
            headers,
            body: JSON.stringify({ tags: [`os-download-${slug}`] }),
          }
        );
        if (!tag.ok) {
          console.error("os-download GHL tag failed", tag.status, await tag.text());
        }
      }
    } catch (err) {
      console.error("os-download GHL register error", err);
    }
  } else {
    console.error("os-download: GHL env vars missing; download delivered unregistered");
  }

  return NextResponse.json({ url: `/downloads/${file}` });
}
