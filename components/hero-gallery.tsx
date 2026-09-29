"use client"

import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Frame } from "@/components/frame"
import { cn } from "@/lib/utils"

export type Slide = { src: string | null; alt: string; hint: string; caption?: string }

export function HeroGallery({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0)
  const current = slides[index]
  const multiple = slides.length > 1

  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-3",
        multiple && "lg:grid lg:grid-cols-[64px_minmax(0,1fr)] lg:gap-6",
      )}
    >
      <ul className={cn("flex gap-2 lg:flex-col lg:gap-3", !multiple && "hidden")} aria-label="Photos">
        {slides.map((slide, i) => (
          <li key={slide.hint} className="w-16 shrink-0">
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}: ${slide.alt}`}
              aria-pressed={i === index}
              className={cn(
                "block w-full rounded-[5px] p-[3px] transition-shadow duration-200",
                i === index ? "shadow-[0_0_0_1px_var(--ink)]" : "shadow-[0_0_0_1px_var(--hairline)] hover:shadow-[0_0_0_1px_var(--faint)]",
              )}
            >
              <Frame src={slide.src} alt="" sizes="64px" className="aspect-square rounded-[3px] [&_svg]:size-4" />
            </button>
          </li>
        ))}
      </ul>

      <Frame
        src={current.src}
        alt={current.alt}
        hint={current.hint}
        priority
        sizes="(min-width: 1024px) 520px, 100vw"
        className="aspect-square ring-1 ring-hairline"
      >
        {current.caption ? (
          <p className="absolute top-4 left-4 rounded-[4px] bg-white/70 px-2.5 py-1.5 text-[11px] leading-none text-ink backdrop-blur-md">
            {current.caption}
          </p>
        ) : null}
        <div aria-hidden className={cn("absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1", !multiple && "hidden")}>
          {slides.map((slide, i) => (
            <span
              key={slide.hint}
              className={cn("h-[2px] w-6 rounded-full transition-colors", i === index ? "bg-ink" : "bg-ink/10")}
            />
          ))}
        </div>
      </Frame>
    </div>
  )
}

const elsewhere = (links: { github: string; linkedin: string; email: string; devto: string }) => [
  { label: "GitHub", href: links.github, icon: <Github strokeWidth={1.5} className="size-3.5" /> },
  { label: "LinkedIn", href: links.linkedin, icon: <Linkedin strokeWidth={1.5} className="size-3.5" /> },
  { label: "Email", href: `mailto:${links.email}`, icon: <Mail strokeWidth={1.5} className="size-3.5" /> },
  { label: "Dev.to", href: links.devto, icon: <span className="text-[8px] font-semibold tracking-tight">DEV</span> },
]

/** Lefore's colour-swatch row, repurposed: hovering a tile names it. */
export function ElsewhereLinks(props: { github: string; linkedin: string; email: string; devto: string }) {
  const items = elsewhere(props)
  const [hovered, setHovered] = useState(0)

  return (
    <div>
      <p className="text-[11.5px]">
        Elsewhere: <span className="text-mute">{items[hovered].label}</span>
      </p>
      <ul className="mt-2.5 flex gap-2">
        {items.map((item, i) => (
          <li key={item.label}>
            <a
              href={item.href}
              {...(item.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              aria-label={item.label}
              onMouseEnter={() => setHovered(i)}
              onFocus={() => setHovered(i)}
              className={cn(
                "grid size-8 place-items-center rounded-[3px] bg-soft text-ink transition-shadow duration-200",
                i === hovered && "shadow-[0_0_0_1px_var(--page),0_0_0_2px_var(--ink)]",
              )}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

