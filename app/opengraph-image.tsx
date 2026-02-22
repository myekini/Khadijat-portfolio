import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Khadijat Muhammad · QA Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 96px",
          background: "linear-gradient(135deg, #050910 0%, #0D0620 55%, #08040F 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow orbs */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,194,255,0.18) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: 200,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#00c2ff",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#00c2ff",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            QA Engineer · Open to Remote
          </span>
        </div>

        {/* Name — two spans stacked, no <br /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 82,
            fontWeight: 800,
            color: "#f1f5f9",
            lineHeight: 1.05,
            marginBottom: 28,
            letterSpacing: -2,
          }}
        >
          <span style={{ display: "flex" }}>Khadijat</span>
          <span style={{ display: "flex" }}>Muhammad</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#94a3b8",
            marginBottom: 56,
            maxWidth: 620,
            lineHeight: 1.4,
          }}
        >
          The eyes between developers and users — catching bugs before your users do.
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48 }}>
          {[
            { value: "200+", label: "Test Cases" },
            { value: "98%", label: "Pass Rate" },
            { value: "500+", label: "RPS Tested" },
            { value: "50+", label: "Bugs Caught" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <span
                style={{
                  display: "flex",
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#00c2ff",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span style={{ display: "flex", fontSize: 15, color: "#64748b" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom right — domain */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 48,
            right: 96,
            fontSize: 18,
            color: "#334155",
            letterSpacing: 1,
          }}
        >
          github.com/myekini
        </div>
      </div>
    ),
    { ...size },
  );
}
