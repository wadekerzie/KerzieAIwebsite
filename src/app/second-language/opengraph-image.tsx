import { ImageResponse } from "next/og";

// Link preview for /second-language. Same canvas as /crossfire, /blast-radius
// and /shrapnel: canvas color, coral kicker, ink title, the deck, kerzie.ai
// path in coral. This essay has no diagram yet, so the card is type only; if
// a drawing lands in kerzie_ai_content/essays/second_language in Wade OS,
// add it the way /crossfire does (a PNG in /public/og read at render time).
export const alt =
  "The Second Language: an essay by Wade Kerzie. People who haven't crossed still describe the steps. People who have describe the result.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "56px 84px",
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
            The Second Language.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#262B3D",
              lineHeight: 1.35,
              marginTop: 26,
              maxWidth: 820,
            }}
          >
            People who haven&rsquo;t crossed still describe the steps. People
            who have describe the result.
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
            kerzie.ai/second-language
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
