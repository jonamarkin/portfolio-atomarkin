"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export type WorkSlide = {
  name: string
  tagline: string
  description: string
  technologies: string[]
  href: string
  linkLabel: string
  /** Shown in the window's address bar */
  address: string
  image: string | null
  repo?: { files: [name: string, dir: boolean][]; languages: [name: string, pct: number][] }
}

export function WorkCarousel({ slides }: { slides: WorkSlide[] }) {
  const [index, setIndex] = useState(0)
  const count = slides.length
  const current = slides[index]
  const go = (step: number) => setIndex((i) => (i + step + count) % count)

  // Keep the active tab in view when the row scrolls on small screens
  const tabs = useRef<HTMLUListElement>(null)
  const first = useRef(true)
  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const tab = tabs.current?.children[index] as HTMLElement | undefined
    const row = tabs.current?.parentElement
    if (tab && row) row.scrollTo({ left: tab.offsetLeft - 20, behavior: "smooth" })
  }, [index])

  return (
    <div>
      {/* Project index */}
      <div className="-mx-5 mb-4 overflow-x-auto px-5 max-sm:[mask-image:linear-gradient(90deg,black_80%,transparent)] sm:mx-0 sm:px-0">
        <ul ref={tabs} className="flex min-w-max gap-6 border-b" aria-label="Projects">
          {slides.map((slide, i) => (
            <li key={slide.name}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                className={cn(
                  "-mb-px border-b pb-2.5 text-[12px] transition-colors duration-200",
                  i === index ? "border-ink text-ink" : "border-transparent text-mute hover:text-ink",
                )}
              >
                <span className="mr-1.5 text-faint tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                {slide.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Stage */}
      <div className="grid grid-cols-1 gap-4 rounded-[6px] bg-well p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-8 lg:p-10">
        <div className="grid min-w-0 grid-cols-1">
          {slides.map((slide, i) => (
            <div
              key={slide.name}
              aria-hidden={i !== index}
              className={cn(
                "min-w-0 [grid-area:1/1] transition-opacity duration-500",
                i === index ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <ProjectWindow slide={slide} priority={i === 0} />
            </div>
          ))}
        </div>

        <article className="flex flex-col rounded-[6px] bg-page p-5 ring-1 ring-hairline" aria-live="polite">
          <p className="text-[10.5px] text-mute tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
          <h3 className="mt-4 text-[17px] tracking-[-0.02em]">{current.name}</h3>
          <p className="mt-1 text-[11.5px] text-mute">{current.tagline}</p>
          <p className="mt-4 text-[12px] leading-[1.65] text-body">{current.description}</p>
          <p className="mt-4 text-[11px] leading-[1.6] text-mute">{current.technologies.join(" · ")}</p>

          <div className="mt-6 flex items-center justify-between border-t pt-4 lg:mt-auto">
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous project"
                className="grid size-8 place-items-center rounded-[4px] bg-soft text-ink transition-colors hover:bg-hairline"
              >
                <ArrowLeft strokeWidth={1.5} className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next project"
                className="grid size-8 place-items-center rounded-[4px] bg-soft text-ink transition-colors hover:bg-hairline"
              >
                <ArrowRight strokeWidth={1.5} className="size-3.5" />
              </button>
            </div>
            <a
              href={current.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] underline decoration-ink/30 underline-offset-2 transition-colors hover:decoration-ink"
            >
              {current.linkLabel} ↗
            </a>
          </div>
        </article>
      </div>
    </div>
  )
}

/** The same window frame for every project: a screenshot for live products, the repository for code. */
function ProjectWindow({ slide, priority }: { slide: WorkSlide; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[8px] bg-page shadow-[0_1px_2px_rgb(0_0_0/0.04),0_18px_40px_-24px_rgb(0_0_0/0.25)] ring-1 ring-hairline">
      <div className="flex h-8 items-center gap-3 border-b px-3">
        <span aria-hidden className="flex w-10 gap-1.5">
          {[0, 1, 2].map((d) => (
            <span key={d} className="size-2 rounded-full bg-[#e2e2e2]" />
          ))}
        </span>
        <span className="mx-auto max-w-[70%] truncate rounded-[4px] bg-soft px-3 py-0.5 font-mono text-[10px] text-mute">
          {slide.address}
        </span>
        <span aria-hidden className="w-10" />
      </div>
      <div className="relative aspect-[4/3] sm:aspect-[16/10]">
        {slide.image ? (
          <Image
            src={slide.image}
            alt={`${slide.name} website`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 660px, 100vw"
            className="object-cover object-top"
          />
        ) : slide.repo ? (
          <RepoView slide={slide} />
        ) : null}
      </div>
    </div>
  )
}

function RepoView({ slide }: { slide: WorkSlide }) {
  const repo = slide.repo!
  const [owner, name] = slide.address.replace("github.com/", "").split("/")
  const shades = ["bg-ink", "bg-[#9a9a9a]", "bg-[#cfcfcf]"]

  return (
    <div className="absolute inset-0 flex flex-col p-4 font-mono text-[10px] sm:p-6 sm:text-[11px]">
      <div className="flex items-center justify-between">
        <p>
          <span className="text-mute">{owner} / </span>
          <span className="text-ink">{name}</span>
        </p>
        <span className="rounded-[3px] px-1.5 py-0.5 text-mute ring-1 ring-hairline ring-inset">main</span>
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 border-t pt-4 sm:mt-5 sm:gap-y-1.5 sm:pt-5">
        {repo.files.map(([file, dir], i) => (
          <li key={file} className={cn("truncate", dir ? "text-ink" : "text-mute", i >= 6 && "max-sm:hidden")}>
            <span aria-hidden className="mr-2 text-faint">
              {dir ? "▸" : "·"}
            </span>
            {file}
            {dir ? "/" : ""}
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t pt-3 sm:pt-4">
        <p className="text-faint">README.md</p>
        <p className="mt-1 font-sans text-[12px] tracking-[-0.01em] text-ink sm:text-[14px]">{slide.tagline}</p>
        <div className="mt-3 flex h-1.5 gap-[2px] overflow-hidden rounded-full">
          {repo.languages.map(([lang, pct], i) => (
            <span key={lang} className={shades[i] ?? shades[2]} style={{ width: `${pct}%` }} />
          ))}
        </div>
        <p className="mt-2 flex flex-wrap gap-x-4 text-mute">
          {repo.languages.map(([lang, pct]) => (
            <span key={lang}>
              {lang} {pct}%
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
