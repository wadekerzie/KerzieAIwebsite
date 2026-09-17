// Jordan's contact card as a downloadable .vcf - the same mechanism as Wade's
// at ../route.ts and Aaron's at ../aaron/route.ts (vCard 3.0, CRLF endings,
// the QR points at the page, not at data). Added 2026-09-17. No PHOTO line
// yet: add one the way aaron/route.ts does once Jordan sends a headshot.

// One place to change a phone number or title. Edit HERE; every phone that
// already scanned the code keeps working because it points at the URL.
export const JORDAN = {
  first: "Jordan",
  last: "Holzmiller",
  org: "Kerzie AI Solutions",
  title: "Account Executive",
  // E.164 so international dialers and Android both parse it.
  tel: "+12148621505",
  telDisplay: "214-862-1505",
  email: "jordan@kerzie.ai",
  url: "https://jordanholzmiller.vercel.app",
  city: "Dallas",
  region: "TX",
  country: "USA",
  note: "Sales that starts with trust. https://kerzie.ai",
};

function buildVCard(): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${JORDAN.last};${JORDAN.first};;;`,
    `FN:${JORDAN.first} ${JORDAN.last}`,
    `ORG:${JORDAN.org}`,
    `TITLE:${JORDAN.title}`,
    `TEL;TYPE=CELL,VOICE:${JORDAN.tel}`,
    `EMAIL;TYPE=INTERNET,WORK:${JORDAN.email}`,
    `URL:${JORDAN.url}`,
    `ADR;TYPE=WORK:;;;${JORDAN.city};${JORDAN.region};;${JORDAN.country}`,
    `NOTE:${JORDAN.note}`,
    "END:VCARD",
  ];
  return lines.join("\r\n") + "\r\n";
}

export async function GET() {
  return new Response(buildVCard(), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="jordan-holzmiller.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
