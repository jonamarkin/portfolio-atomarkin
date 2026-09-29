import { existsSync, readdirSync, readFileSync } from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { posts as externalPosts } from "@/lib/site"

/**
 * Posts live in content/writing/<slug>.mdx with frontmatter:
 *
 *   title:   string            (required)
 *   date:    YYYY-MM-DD        (required)
 *   summary: string            (required, one or two sentences)
 *   kind:    technical | essay (default: technical)
 *   tags:    [string]          (optional)
 *   draft:   true              (optional; drafts only show in `next dev`)
 *
 * Files starting with "_" are ignored.
 */

export type Kind = "technical" | "essay"

export type LocalPost = {
  slug: string
  title: string
  date: string
  summary: string
  kind: Kind
  tags: string[]
  draft: boolean
  readMinutes: number
  body: string
}

/** Anything that appears in the writing list: local posts and articles published elsewhere. */
export type Entry = {
  title: string
  summary: string
  date: string
  kind: Kind
  href: string
  external: boolean
  /** Where it lives: "atomarkin.com", "Dev.to", "GitHub" */
  platform: string
  topic: string
  readMinutes?: number
  draft?: boolean
}

export const kindLabel: Record<Kind, string> = { technical: "Technical", essay: "Essay" }

const DIR = path.join(process.cwd(), "content/writing")
const showDrafts = process.env.NODE_ENV === "development"

function toDate(value: unknown, file: string) {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value
  throw new Error(`content/writing/${file}: "date" must be YYYY-MM-DD`)
}

function readingMinutes(body: string) {
  const words = body
    .replace(/```[\s\S]*?```/g, " ") // code blocks read faster than prose
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}

function parse(file: string): LocalPost {
  const raw = readFileSync(path.join(DIR, file), "utf8")
  const { data, content } = matter(raw)
  for (const key of ["title", "date", "summary"]) {
    if (!data[key]) throw new Error(`content/writing/${file}: missing "${key}" in frontmatter`)
  }
  const kind: Kind = data.kind === "essay" ? "essay" : "technical"
  return {
    slug: file.replace(/\.mdx?$/, ""),
    title: String(data.title),
    date: toDate(data.date, file),
    summary: String(data.summary),
    kind,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: data.draft === true,
    readMinutes: readingMinutes(content),
    body: content,
  }
}

export function getPosts(): LocalPost[] {
  if (!existsSync(DIR)) return []
  return readdirSync(DIR)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith("_"))
    .map(parse)
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(slug: string): LocalPost | undefined {
  return getPosts().find((p) => p.slug === slug)
}

/** Local posts and external articles together, newest first. */
export function getAllWriting(): Entry[] {
  const local: Entry[] = getPosts().map((p) => ({
    title: p.title,
    summary: p.summary,
    date: p.date,
    kind: p.kind,
    href: `/writing/${p.slug}`,
    external: false,
    platform: "atomarkin.com",
    topic: p.tags[0] ?? kindLabel[p.kind],
    readMinutes: p.readMinutes,
    draft: p.draft,
  }))
  const external: Entry[] = externalPosts.map((p) => ({
    title: p.title,
    summary: p.description,
    date: p.date,
    kind: "technical",
    href: p.url,
    external: true,
    platform: p.platform,
    topic: p.topic,
    readMinutes: p.readMinutes,
  }))
  return [...local, ...external].sort((a, b) => b.date.localeCompare(a.date))
}
