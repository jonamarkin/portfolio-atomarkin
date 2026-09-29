import type { MetadataRoute } from "next"
import { getPosts } from "@/lib/writing"

const SITE = "https://atomarkin.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts().filter((p) => !p.draft)
  const latest = posts[0]?.date
  return [
    { url: SITE, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/writing`, lastModified: latest, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({ url: `${SITE}/writing/${p.slug}`, lastModified: p.date, priority: 0.7 })),
  ]
}
