import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

// Link preview for /team (and /team/jordan, which inherits it). Wade 9/24: the
// iMessage preview showed the site-wide office photo and "Kerzie AI".
// Jordan is an initials circle until his headshot lands; then swap in his photo.
export const alt = "The people behind Kerzie AI: Wade Kerzie, Aaron Jones, Jordan Holzmiller";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function dataUrl(file: string) {
  const buf = await readFile(path.join(process.cwd(), "public", file));
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

export default async function Image() {
  const wade = await dataUrl("headshot.jpg");
  const aaron = await dataUrl("aaron.jpg");
  const people: { name: string; src?: string; initials?: string }[] = [
    { name: "Wade Kerzie", src: wade },
    { name: "Aaron Jones", src: aaron },
    { name: "Jordan Holzmiller", initials: "JH" },
  ];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 84px",
          backgroundColor: "#FAF8F4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: "0.3em", color: "#B04E2B", fontWeight: 700 }}>
          THE PEOPLE
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 800,
            color: "#1A1B2E",
            letterSpacing: "-0.025em",
            marginTop: 12,
          }}
        >
          The people behind the work.
        </div>
        <div style={{ display: "flex", marginTop: 52, gap: 64 }}>
          {people.map((p) => (
            <div key={p.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 260 }}>
              {p.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.src} width={180} height={180} style={{ borderRadius: 999, objectFit: "cover" }} alt="" />
              ) : (
                <div
                  style={{
                    display: "flex",
                    width: 180,
                    height: 180,
                    borderRadius: 999,
                    backgroundColor: "#2B5D96",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontSize: 64,
                  }}
                >
                  {p.initials}
                </div>
              )}
              <div style={{ display: "flex", marginTop: 20, fontSize: 30, color: "#1A1B2E", fontWeight: 600 }}>
                {p.name}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 26, color: "#B04E2B", fontWeight: 700 }}>
          kerzie.ai/team
        </div>
      </div>
    ),
    { ...size }
  );
}
