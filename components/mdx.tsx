import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"

// A monochrome code theme to match the site: structure from weight and grey, not colour.
const monoTheme = {
  name: "mono",
  type: "light",
  colors: { "editor.background": "#fafafa", "editor.foreground": "#2b2b2b" },
  tokenColors: [
    { settings: { foreground: "#2b2b2b" } },
    { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: "#a3a3a3", fontStyle: "italic" } },
    {
      scope: ["keyword", "storage", "storage.type", "storage.modifier", "keyword.control", "keyword.operator.new"],
      settings: { foreground: "#111111", fontStyle: "bold" },
    },
    { scope: ["string", "string.quoted", "string.template", "constant.other.symbol"], settings: { foreground: "#707070" } },
    { scope: ["constant.numeric", "constant.language", "constant.character"], settings: { foreground: "#111111" } },
    { scope: ["entity.name.function", "support.function", "meta.function-call"], settings: { foreground: "#111111" } },
    { scope: ["entity.name.type", "entity.name.class", "support.type", "support.class"], settings: { foreground: "#3d3d3d" } },
    { scope: ["meta.annotation", "storage.type.annotation", "punctuation.definition.annotation"], settings: { foreground: "#707070" } },
    { scope: ["punctuation", "meta.brace"], settings: { foreground: "#8a8a8a" } },
    { scope: ["markup.deleted"], settings: { foreground: "#8a8a8a" } },
    { scope: ["markup.inserted"], settings: { foreground: "#111111" } },
  ],
}

/** An image (or anything) with a paper-style caption: <Figure src="/images/x.png" caption="Fig. 1 — …" /> */
function Figure({
  src,
  alt = "",
  caption,
  width = 1600,
  height = 900,
  children,
}: {
  src?: string
  alt?: string
  caption?: string
  width?: number
  height?: number
  children?: React.ReactNode
}) {
  return (
    <figure className="not-prose my-10">
      <div className="overflow-hidden rounded-[6px] bg-well ring-1 ring-hairline">
        {src ? <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" /> : children}
      </div>
      {caption ? <figcaption className="mt-3 font-mono text-[11px] text-mute">{caption}</figcaption> : null}
    </figure>
  )
}

function A({ href = "", children, ...rest }: React.ComponentProps<"a">) {
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}

function Img({ src = "", alt = "", title }: React.ComponentProps<"img">) {
  // Markdown images: ![alt](/images/x.png "Fig. 1 — caption"). Markdown wraps them
  // in a <p>, so this uses spans rather than <figure>.
  return (
    <span className="not-prose my-10 block">
      <span className="block overflow-hidden rounded-[6px] bg-well ring-1 ring-hairline">
        <Image src={typeof src === "string" ? src : ""} alt={alt} width={1600} height={900} className="h-auto w-full" />
      </span>
      {title ? <span className="mt-3 block font-mono text-[11px] text-mute">{title}</span> : null}
    </span>
  )
}

const components = { Figure, a: A, img: Img }

export function Mdx({ source }: { source: string }) {
  return (
    <div className="prose-mono">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [[rehypePrettyCode, { theme: monoTheme, keepBackground: true }]],
          },
        }}
      />
    </div>
  )
}
