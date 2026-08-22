import type { Metadata } from "next";
import ShowClient from "./ShowClient";

// THE HOME-SCREEN DOOR. Added 2026-08-22 after Wade pointed out that tapping
// his icon still left him one tap from the QR.
//
// The reason /card cannot just open with the code up is that ONE URL serves
// TWO people facing opposite directions:
//
//   - A stranger arrives here by SCANNING the code. Showing them a QR would
//     be a loop - a code pointing at the page they are already looking at.
//     They need "Save my contact".
//   - Wade arrives from his HOME SCREEN and wants the code, instantly.
//
// So they get separate URLs instead of one page guessing. /card/show is the
// icon Wade taps; /card is where the code points. No detection, nothing to
// misfire, and a scanner can never land on the QR view by accident.
//
// appleWebApp.capable launches it standalone from the home screen - no Safari
// chrome stealing vertical space from the code - and appleWebApp.title is what
// iOS prints under the icon.
export const metadata: Metadata = {
  title: "My QR | Wade Kerzie",
  description: "Wade Kerzie's contact QR code.",
  // Wade's own utility surface. Keep it out of the index - /card is the page
  // that should rank for his name.
  robots: { index: false, follow: false },
  appleWebApp: {
    capable: true,
    title: "My QR",
    statusBarStyle: "default",
  },
  // Next's appleWebApp.capable emits only the modern `mobile-web-app-capable`
  // (verified against the built HTML 2026-08-22). iOS did not honour that name
  // until 17.4 and still reads the legacy one, so both ship or the icon may
  // open in a Safari tab with a URL bar eating the top of the code.
  other: { "apple-mobile-web-app-capable": "yes" },
};

export default function ShowQrPage() {
  return <ShowClient />;
}
