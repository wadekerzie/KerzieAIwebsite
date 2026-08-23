// Aaron's contact card as a downloadable .vcf - the same mechanism as Wade's
// at ../route.ts, which carries the full commentary (vCard 3.0 on purpose,
// CRLF endings required, why the QR points at a page and not at data). Added
// 2026-08-23 so Aaron hands out a URL instead of a paper card.

import { AARON_PHOTO_B64_FOLDED } from "@/data/aaron_vcard_photo";

// One place to change a phone number or title. If Aaron's details change, edit
// HERE - the QR code and every phone that already scanned it keep working,
// because they point at this URL rather than carrying data.
export const AARON = {
  first: "Aaron",
  last: "Jones",
  org: "Kerzie AI Solutions",
  title: "Technical Specialist",
  // E.164 so international dialers and Android both parse it.
  tel: "+17207499474",
  telDisplay: "720-749-9474",
  email: "aaron@kerzie.ai",
  url: "https://aaronpjones.com",
  city: "Aurora",
  region: "CO",
  country: "USA",
  note: "Making sure the work actually gets done. https://kerzie.ai/team",
};

function buildVCard(): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${AARON.last};${AARON.first};;;`,
    `FN:${AARON.first} ${AARON.last}`,
    `ORG:${AARON.org}`,
    `TITLE:${AARON.title}`,
    `TEL;TYPE=CELL,VOICE:${AARON.tel}`,
    `EMAIL;TYPE=INTERNET,WORK:${AARON.email}`,
    `URL:${AARON.url}`,
    `ADR;TYPE=WORK:;;;${AARON.city};${AARON.region};;${AARON.country}`,
    `NOTE:${AARON.note}`,
    `PHOTO;ENCODING=b;TYPE=JPEG:${AARON_PHOTO_B64_FOLDED}`,
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
      "Content-Disposition": 'attachment; filename="aaron-jones.vcf"',
      // Long cache is safe: the QR points at the PAGE, and the page always
      // links here. A details change ships with a deploy, which busts this.
      "Cache-Control": "public, max-age=3600",
    },
  });
}
