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
// EVERYTHING VISIBLE HERE IS SERVER RENDERED, deliberately. The first cut put
// the code in a client-side portal and the HTML came back with no QR in it at
// all - fine for an overlay you tap open, wrong for the one surface whose
// whole job is to be on screen before Wade has finished turning the phone
// around. The site header and footer are hidden by a :has(#qr-standalone)
// rule in globals.css instead of being out-stacked. See the note there.
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
  return (
    // The id is the hook the globals.css rule keys off. Renaming it silently
    // brings the site header back over the code.
    <div
      id="qr-standalone"
      className="flex w-full flex-col items-center justify-center bg-white px-6"
      style={{
        // svh, not vh: on iOS Safari vh counts the space behind the toolbars
        // and pushes the code below the fold.
        minHeight: "100svh",
        paddingTop: "max(2rem, env(safe-area-inset-top))",
        paddingBottom: "max(2rem, env(safe-area-inset-bottom))",
      }}
    >
      {/* Plain img, not next/image: a 1-bit QR must render at its own pixels
          with no optimizer resampling, or the modules soften and the scan
          takes longer. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/card-qr.svg"
        alt="QR code linking to Wade Kerzie's contact card"
        className="h-auto w-full max-w-[20rem]"
      />

      <p className="mt-6 text-center text-base font-semibold text-[#1A1B2E]">
        Wade Kerzie
      </p>
      <p className="mt-0.5 text-center text-sm text-[#6b6560]">
        Kerzie AI Solutions
      </p>
      <p className="mt-4 text-center text-xs text-[#8b857f]">
        Point a camera at the code
      </p>

      <ShowClient />
    </div>
  );
}
