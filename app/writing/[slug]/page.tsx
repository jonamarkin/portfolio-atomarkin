import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Container, DotTag } from "@/components/section"
import { Mdx } from "@/components/mdx"
import { formatDay, profile } from "@/lib/site"
import { getPost, getPosts, kindLabel } from "@/lib/writing"

export const dynamicParams = false

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: `/writing/${post.slug}`,
      publishedTime: post.date,
      authors: [profile.name],
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.summary },
    robots: post.draft ? { index: false } : undefined,
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const posts = getPosts()
  const i = posts.findIndex((p) => p.slug === params.slug)
  if (i === -1) notFound()
  const post = posts[i]
  const newer = posts[i - 1]
  const older = posts[i + 1]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    url: `https://atomarkin.com/writing/${post.slug}`,
    author: { "@type": "Person", name: profile.name, url: "https://atomarkin.com" },
  }

  return (
    <main className="pt-12 pb-28 lg:pt-20 lg:pb-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Container className="max-w-[720px]">
        <Link href="/writing" className="text-[12px] text-mute transition-colors hover:text-ink">
          ← Writing
        </Link>

        <header className="mt-10">
          <DotTag>
            {kindLabel[post.kind]}
            {post.tags.length ? <span className="text-mute">· {post.tags.join(", ")}</span> : null}
          </DotTag>
          <h1 className="mt-5 text-[clamp(2rem,1.4rem+2.2vw,2.875rem)] leading-[1.12] tracking-[-0.035em] text-balance">
            {post.title}
          </h1>
          <p className="mt-5 text-[18px] leading-[1.55] text-pretty text-mute">{post.summary}</p>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11.5px] text-mute">
            <time dateTime={post.date}>{formatDay(post.date)}</time>
            <span className="text-faint">·</span>
            <span>{post.readMinutes} min read</span>
            {post.draft ? (
              <span className="rounded-[3px] bg-soft px-1.5 py-0.5 text-[10.5px]">draft · only visible in dev</span>
            ) : null}
          </p>
        </header>

        <hr className="my-10" />

        <article>
          <Mdx source={post.body} />
        </article>

        <hr className="mt-16 mb-8" />

        <div className="flex items-center gap-3">
          <Image
            src="/images/hero-1.jpg"
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-full bg-well object-cover"
          />
          <div className="text-[12.5px] leading-[1.4]">
            <p className="text-ink">{profile.name}</p>
            <p className="text-mute">
              {profile.role} · {profile.field}, {profile.affiliation}
            </p>
          </div>
        </div>

        {newer || older ? (
          <nav aria-label="More writing" className="mt-12 grid gap-3 sm:grid-cols-2">
            {older ? (
              <Link href={`/writing/${older.slug}`} className="rounded-[6px] bg-panel p-4 ring-1 ring-hairline transition-colors hover:bg-soft">
                <p className="font-mono text-[10.5px] text-mute">← Older</p>
                <p className="mt-2 text-[13.5px] leading-[1.4] tracking-[-0.01em]">{older.title}</p>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            {newer ? (
              <Link
                href={`/writing/${newer.slug}`}
                className="rounded-[6px] bg-panel p-4 text-right ring-1 ring-hairline transition-colors hover:bg-soft"
              >
                <p className="font-mono text-[10.5px] text-mute">Newer →</p>
                <p className="mt-2 text-[13.5px] leading-[1.4] tracking-[-0.01em]">{newer.title}</p>
              </Link>
            ) : null}
          </nav>
        ) : null}
      </Container>
    </main>
  )
}
