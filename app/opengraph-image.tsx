import { readFile } from "node:fs/promises"
import path from "node:path"
import { ImageResponse } from "next/og"
import { profile } from "@/lib/site"

// The link preview shown when the site is shared (LinkedIn, X, WhatsApp, Slack…).
// Rendered once at build time in the site's own style.

export const alt = "Jonathan Ato Markin — Distributed systems researcher and PhD student in Cyber-Physical Systems"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const root = process.cwd()
const font = (file: string) => readFile(path.join(root, "node_modules/geist/dist/fonts", file))

export default async function OpengraphImage() {
  const [regular, medium, mono, portrait] = await Promise.all([
    font("geist-sans/Geist-Regular.ttf"),
    font("geist-sans/Geist-Medium.ttf"),
    font("geist-mono/GeistMono-Regular.ttf"),
    readFile(path.join(root, "public/images/hero-1.jpg")),
  ])
  const photo = `data:image/jpeg;base64,${portrait.toString("base64")}`

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#ffffff", padding: 64, fontFamily: "Geist" }}>
        {/* Left: text */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", paddingRight: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 26, color: "#111111", letterSpacing: "-0.02em" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M3 21 12 3l9 18" stroke="#111111" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="square" />
              <path d="M7.2 14.2h9.6" stroke="#111111" strokeWidth="2.6" />
            </svg>
            {profile.shortName}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 20, color: "#111111", fontWeight: 500 }}>
              <div style={{ width: 8, height: 8, borderRadius: 8, background: "#111111" }} />
              Distributed systems researcher
            </div>
            <div style={{ marginTop: 22, fontSize: 74, lineHeight: 1.04, letterSpacing: "-0.04em", color: "#111111" }}>
              {profile.name}
            </div>
            <div style={{ display: "flex", marginTop: 20, fontSize: 30, letterSpacing: "-0.015em" }}>
              <span style={{ color: "#111111" }}>{profile.role}</span>
              <span style={{ color: "#b3b3b3", marginLeft: 10 }}>· {profile.field}</span>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Geist Mono", fontSize: 18, color: "#8a8a8a" }}>
            <span>atomarkin.com</span>
            <span>{profile.affiliation}</span>
          </div>
        </div>

        {/* Right: portrait in a grey well */}
        <div style={{ width: 420, height: "100%", display: "flex", borderRadius: 14, overflow: "hidden", background: "#f5f5f5" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} width={420} height={502} style={{ width: 420, height: 502, objectFit: "cover" }} alt="" />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: medium, weight: 500, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  )
}
