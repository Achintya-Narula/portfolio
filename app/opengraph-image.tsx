import { ImageResponse } from "next/og";

export const alt = "Achintya Narula, Computer Science, AI and Software Development";
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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#FAF8F3",
          color: "#171717",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#4056A1", letterSpacing: "0.08em" }}>
          COMPUTER SCIENCE · AI/ML · SOFTWARE DEVELOPMENT
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 74, fontWeight: 700 }}>Achintya Narula</div>
          <div style={{ display: "flex", maxWidth: 980, fontSize: 34, lineHeight: 1.3, color: "#66635E" }}>
            I build software, AI tools, and learning experiences around real problems and the people using them.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
