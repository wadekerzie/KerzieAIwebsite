import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

// Link preview for /website-breaking-apart. Same pattern as /blast-radius:
// canvas color, coral kicker, ink title, kerzie.ai path in coral, built from
// a file in /public. The exploding-website graphic lives in Wade OS at
// brand/kerzie_ai/assets/exploding_website (SVG is the source); regenerate
// there, then copy here.
export const alt =
  "Your Website Is Breaking Apart: a website exploding into pieces, each job flying off to somewhere new";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const buf = await readFile(
    path.join(process.cwd(), "public", "og", "website-breaking-apart-exploding.png")
  );
  const picture = `data:image/png;base64,${buf.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "56px 64px",
          backgroundColor: "#FAF8F4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            paddingRight: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.3em",
              color: "#B04E2B",
              fontWeight: 700,
            }}
          >
            ESSAY
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              color: "#1A1B2E",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              marginTop: 18,
            }}
          >
            Your Website Is Breaking Apart.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#262B3D",
              lineHeight: 1.35,
              marginTop: 26,
              maxWidth: 520,
            }}
          >
            Six jobs the website used to do. Six places they&rsquo;re landing
            now.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 24,
              color: "#B04E2B",
              fontWeight: 700,
            }}
          >
            kerzie.ai/website-breaking-apart
          </div>
        </div>
        <img src={picture} width={518} height={518} alt="" />
      </div>
    ),
    { ...size }
  );
}
