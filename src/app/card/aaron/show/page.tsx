import type { Metadata } from "next";
import ShowClient from "./ShowClient";

// AARON'S HOME-SCREEN DOOR - the same split as Wade's /card/show (see
// ../../show/page.tsx for the full reasoning): a stranger arrives at
// /card/aaron by SCANNING the code and needs "Save my contact"; Aaron arrives
// HERE from his home-screen icon and wants the code up instantly. Separate
// URLs, no detection, nothing to misfire.
//
// Everything visible is server rendered, deliberately - the code must be on
// screen before Aaron has finished turning the phone around. The site header
// and footer are hidden by the :has(#qr-standalone) rule in globals.css, which
// keys on the id and therefore covers this page too.
export const metadata: Metadata = {
  title: "My QR | Aaron Jones",
  description: "Aaron Jones's contact QR code.",
  // Aaron's own utility surface. Keep it out of the index - /card/aaron is
  // the page that should rank for his name.
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

export default function AaronShowQrPage() {
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
        src="/aaron-card-qr.svg"
        alt="QR code linking to Aaron Jones's contact card"
        className="h-auto w-full max-w-[20rem]"
      />

      <p className="mt-6 text-center text-base font-semibold text-[#1A1B2E]">
        Aaron Jones
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
