import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

// Link preview for /blast-radius. Same pattern as /team: canvas color, coral
// kicker, ink title, kerzie.ai path in coral, built from a file in /public.
// The diagram PNG is rendered from kerzie_ai_content/essays/blast_radius_assets
// in Wade OS (diagram.svg is the source); regenerate there, then copy here.
export const alt =
  "The Blast Radius: a person at a desk with five arrows leaving it, straight down to your desk, sideways to your peers, across the building, down the pyramid, and up to the people above you";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const buf = await readFile(
    path.join(process.cwd(), "public", "og", "blast-radius-diagram.png")
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
            The Blast Radius.
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
            Not how well AI works for you. How far its effect travels from
            where you sit.
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
            kerzie.ai/blast-radius
          </div>
        </div>
        <img src={diagram} width={540} height={540} alt="" />
      </div>
    ),
    { ...size }
  );
}
