import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — Kidney Stone Treatment in Ajmer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0B8F87 0%, #145DA0 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 28,
            background: "rgba(255,255,255,0.16)",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          KG
        </div>
        <div style={{ display: "flex", fontSize: 60, fontWeight: 700, marginTop: 40, maxWidth: 900 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 16, opacity: 0.9, maxWidth: 820 }}>
          Advanced Kidney Stone Care in Ajmer, Rajasthan
        </div>
        <div style={{ display: "flex", fontSize: 24, marginTop: 48, opacity: 0.85 }}>
          Laser Surgery · PCNL · URS · RIRS · ESWL
        </div>
      </div>
    ),
    { ...size }
  );
}
