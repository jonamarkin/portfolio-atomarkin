import { readFile } from "node:fs/promises"
import path from "node:path"
import { ImageResponse } from "next/og"
import { profile } from "@/lib/site"
import { getPost, getPosts, kindLabel } from "@/lib/writing"

// Link preview for a single post: its title, in the site's style.

export const alt = "Writing by Jonathan Ato Markin"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }))
}

const fonts = path.join(process.cwd(), "node_modules/geist/dist/fonts")

export default async function PostImage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  const [regular, mono] = await Promise.all([
    readFile(path.join(fonts, "geist-sans/Geist-Regular.ttf")),
    readFile(path.join(fonts, "geist-mono/GeistMono-Regular.ttf")),
  ])
  const title = post?.title ?? "Writing"
  const titleSize = title.length > 70 ? 56 : title.length > 40 ? 66 : 76

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 72,
          fontFamily: "Geist",
          color: "#111111",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 26, letterSpacing: "-0.02em" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M3 21 12 3l9 18" stroke="#111111" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="square" />
              <path d="M7.2 14.2h9.6" stroke="#111111" strokeWidth="2.6" />
            </svg>
            {profile.shortName}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22 }}>
            <div style={{ width: 8, height: 8, borderRadius: 8, background: "#111111" }} />
            {post ? kindLabel[post.kind] : "Writing"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: titleSize, lineHeight: 1.08, letterSpacing: "-0.04em", maxWidth: 1000 }}>{title}</div>
          {post ? (
            <div style={{ marginTop: 26, fontSize: 28, lineHeight: 1.4, color: "#8a8a8a", maxWidth: 960 }}>
              {post.summary.length > 140 ? `${post.summary.slice(0, 137)}…` : post.summary}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Geist Mono", fontSize: 20, color: "#8a8a8a" }}>
          <span>atomarkin.com/writing</span>
          <span>{post ? `${post.readMinutes} min read · ${profile.name}` : profile.name}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  )
}
