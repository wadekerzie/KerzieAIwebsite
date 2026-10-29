import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

// Link preview for /crossfire. Same pattern as /blast-radius and /shrapnel:
// canvas color, coral kicker, ink title, kerzie.ai path in coral, built from
// a file in /public. The two-circles diagram (two desks, the coral overlap,
// the coral desk standing in it) is rendered from
// kerzie_ai_content/essays/crossfire/crossfire_circles.svg in Wade OS, the
// same drawing the video thumbnail uses; regenerate there, then copy here.
export const alt =
  "The Crossfire: two overlapping circles, a person at a desk in each, and a third desk standing in the overlap where the two circles cross";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const buf = await readFile(
    path.join(process.cwd(), "public", "og", "crossfire-circles.png")
  );
  const diagram = `data:image/png;base64,${buf.toString("base64")}`;
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
              fontSize: 84,
              fontWeight: 800,
              color: "#1A1B2E",
              letterSpacing: "-0.025em",
              lineHeight: 1.02,
              marginTop: 18,
            }}
          >
            The Crossfire.
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
            The risk isn&rsquo;t that you didn&rsquo;t learn AI. The risk is
            that the people around you did.
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
            kerzie.ai/crossfire
          </div>
        </div>
        <img src={diagram} width={540} height={540} alt="" />
      </div>
    ),
    { ...size }
  );
}
