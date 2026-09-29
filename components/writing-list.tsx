"use client"

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import type { Entry, Kind } from "@/lib/writing"

const filters: { key: "all" | Kind; label: string }[] = [
  { key: "all", label: "All" },
  { key: "technical", label: "Technical" },
  { key: "essay", label: "Essays" },
]

const dayFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })

export function WritingList({ entries }: { entries: Entry[] }) {
  const [filter, setFilter] = useState<"all" | Kind>("all")
  const shown = filter === "all" ? entries : entries.filter((e) => e.kind === filter)
  const count = (key: "all" | Kind) => (key === "all" ? entries.length : entries.filter((e) => e.kind === key).length)

  return (
    <div>
      <div className="flex items-end justify-between gap-6 border-b">
        <ul className="flex gap-6" aria-label="Filter writing">
          {filters.map((f) => (
            <li key={f.key}>
              <button
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={cn(
                  "-mb-px border-b pb-2.5 text-[12.5px] transition-colors duration-200",
                  filter === f.key ? "border-ink text-ink" : "border-transparent text-mute hover:text-ink",
                )}
              >
                {f.label} <span className="text-faint tabular-nums">{count(f.key)}</span>
              </button>
            </li>
          ))}
        </ul>
        <a href="/writing/rss.xml" className="pb-2.5 font-mono text-[11px] text-mute transition-colors hover:text-ink">
          RSS
        </a>
      </div>

      {shown.length ? (
        <ol>
          {shown.map((e) => {
            const inner = (
              <>
                <time dateTime={e.date} className="font-mono text-[11.5px] text-mute tabular-nums">
                  {dayFmt.format(new Date(`${e.date}T00:00:00Z`))}
                </time>
                <div className="min-w-0">
                  <h2 className="text-[18px] leading-[1.35] tracking-[-0.02em] text-balance transition-colors group-hover:text-body">
                    {e.title}
                    {e.draft ? (
                      <span className="ml-2 rounded-[3px] bg-soft px-1.5 py-0.5 align-middle font-mono text-[10px] text-mute">
                        draft
                      </span>
                    ) : null}
                  </h2>
                  <p className="mt-1.5 max-w-[620px] text-[13px] leading-[1.65] text-pretty text-mute">{e.summary}</p>
                </div>
                <p className="flex items-center gap-3 font-mono text-[11px] whitespace-nowrap text-mute sm:justify-end">
                  <span>{e.kind === "essay" ? "Essay" : e.topic}</span>
                  <span className="text-faint">·</span>
                  <span>
                    {e.external ? `${e.platform} ↗` : e.readMinutes ? `${e.readMinutes} min` : ""}
                  </span>
                </p>
              </>
            )
            const cls =
              "group grid gap-2 py-6 sm:grid-cols-[120px_minmax(0,1fr)_auto] sm:items-baseline sm:gap-8"
            return (
              <li key={e.href} className="border-b">
                {e.external ? (
                  <a href={e.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <Link href={e.href} className={cls}>
                    {inner}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      ) : (
        <p className="py-16 text-center text-[13px] text-mute">Nothing here yet.</p>
      )}
    </div>
  )
}
