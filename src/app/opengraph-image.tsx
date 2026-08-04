import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Nexoorix — AI Automation & Custom Software Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #1a1a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(120,90,255,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(60,180,255,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Brand pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "14px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            nexoorix.vercel.app
          </span>
        </div>

        {/* Main brand name */}
        <div
          style={{
            fontSize: "96px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1,
            marginBottom: "24px",
          }}
        >
          Nexoorix
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "-0.3px",
            maxWidth: "720px",
            lineHeight: 1.4,
          }}
        >
          AI Automation &amp; Custom Software Solutions
        </div>

        {/* Bottom divider + descriptor */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div style={{ width: "40px", height: "2px", background: "rgba(255,255,255,0.2)" }} />
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "16px" }}>
            Build · Automate · Grow · Intelligence
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
