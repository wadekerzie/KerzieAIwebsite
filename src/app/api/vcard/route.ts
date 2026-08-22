// Wade's contact card as a downloadable .vcf.
//
// This is the half of /card that Popl used to charge $7.99/mo for: someone
// taps "Save my contact" and Wade lands in their phone with a face, a number,
// and a company - no app on either end, no account, no expiry.
//
// vCard 3.0 on purpose, NOT 4.0. 3.0 is what iOS Contacts and Android import
// both accept without complaint; 4.0 still trips older Android importers.
//
// CRLF line endings are required by RFC 2426. Some Android importers silently
// drop the last property when a vCard is served with bare LF.

import { WADE_PHOTO_B64_FOLDED } from "@/data/wade_vcard_photo";

// One place to change a phone number or title. If Wade's details change, edit
// HERE - the QR code, the printed card and every phone that already scanned it
// all keep working, because they point at this URL rather than carrying data.
export const WADE = {
  first: "Wade",
  last: "Kerzie",
  org: "Kerzie AI Solutions",
  title: "Founder",
  // E.164 so international dialers and Android both parse it.
  tel: "+12146687986",
  telDisplay: "214-668-7986",
  email: "wade@kerzie.ai",
  url: "https://kerzie.ai",
  city: "McKinney",
  region: "TX",
  country: "USA",
  note: "AI that ships. Book time: https://kerzie.ai/schedule",
};

function buildVCard(): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${WADE.last};${WADE.first};;;`,
    `FN:${WADE.first} ${WADE.last}`,
    `ORG:${WADE.org}`,
    `TITLE:${WADE.title}`,
    `TEL;TYPE=CELL,VOICE:${WADE.tel}`,
    `EMAIL;TYPE=INTERNET,WORK:${WADE.email}`,
    `URL:${WADE.url}`,
    `ADR;TYPE=WORK:;;;${WADE.city};${WADE.region};;${WADE.country}`,
    `NOTE:${WADE.note}`,
    `PHOTO;ENCODING=b;TYPE=JPEG:${WADE_PHOTO_B64_FOLDED}`,
    "END:VCARD",
  ];
  return lines.join("\r\n") + "\r\n";
}

export async function GET() {
  return new Response(buildVCard(), {
    headers: {
      // text/vcard is the registered type; iOS Safari opens the Contacts
      // sheet on it directly rather than downloading a file the user then
      // has to find.
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="wade-kerzie.vcf"',
      // Long cache is safe: the QR points at the PAGE, and the page always
      // links here. A details change ships with a deploy, which busts this.
      "Cache-Control": "public, max-age=3600",
    },
  });
}
