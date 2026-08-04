import { ImageResponse } from "next/og";
import operators from "@/data/operators.json";

export const runtime = "edge";
export const alt = "The First Thousand - live operator count";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const pct = Math.max(1, (operators.count / operators.goal) * 100);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 84px",
          backgroundColor: "#1A1B2E",
          backgroundImage:
            "radial-gradient(900px 450px at 85% -10%, rgba(232,137,106,0.22), rgba(26,27,46,0))",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.3em",
            color: "#E8896A",
            fontWeight: 700,
          }}
        >
          THE FIRST THOUSAND
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginTop: 6,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 290,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            {operators.count}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 400,
              color: "rgba(170,187,204,0.55)",
              marginLeft: 28,
              letterSpacing: "-0.02em",
            }}
          >
            of 1,000
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 18,
            borderRadius: 99,
            backgroundColor: "rgba(170,187,204,0.16)",
            marginTop: 44,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              width: `${pct}%`,
              height: "100%",
              borderRadius: 99,
              backgroundColor: "#E8896A",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 28,
            fontSize: 30,
            color: "#AABBCC",
          }}
        >
          <div style={{ display: "flex" }}>
            Through the blast door before it closes.
          </div>
          <div style={{ display: "flex", color: "#E8896A", fontWeight: 700 }}>
            kerzie.ai/thousand
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
