import { getAllWriting } from "@/lib/writing"

export const dynamic = "force-static"

const SITE = "https://atomarkin.com"

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

export function GET() {
  const items = getAllWriting()
    .filter((e) => !e.draft)
    .map((e) => {
      const link = e.external ? e.href : `${SITE}${e.href}`
      return `    <item>
      <title>${esc(e.title)}</title>
      <link>${esc(link)}</link>
      <guid isPermaLink="true">${esc(link)}</guid>
      <pubDate>${new Date(`${e.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${esc(e.summary)}</description>
      <category>${e.kind === "essay" ? "Essay" : "Technical"}</category>
    </item>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Writing — Jonathan Ato Markin</title>
    <link>${SITE}/writing</link>
    <atom:link href="${SITE}/writing/rss.xml" rel="self" type="application/rss+xml" />
    <description>Notes on distributed systems, engineering, and everything around them.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } })
}
