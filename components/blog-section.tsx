import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section, SectionHeading } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { PostArt, hasPostArt } from "@/components/figures/post-art"
import { formatDay } from "@/lib/site"
import { getAllWriting, kindLabel, type Entry } from "@/lib/writing"

export function BlogSection() {
  const latest = getAllWriting().slice(0, 4)

  return (
    <Section id="blog">
      <Reveal>
        <SectionHeading
          tag="Writing"
          title="Latest Writing"
          aside={
            <Button asChild arrow size="sm" className="rounded-full px-4">
              <Link href="/writing">All writing</Link>
            </Button>
          }
        />
      </Reveal>

      <ul className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {latest.map((entry, i) => (
          <li key={entry.href}>
            <Reveal delay={i * 80}>
              <EntryLink entry={entry}>
                <div className="flex aspect-[5/4] flex-col justify-between rounded-[6px] bg-well p-5 transition-colors duration-300 group-hover:bg-[#efefef] sm:aspect-[4/5]">
                  <div className="flex justify-between text-[10.5px] text-mute">
                    <span>{entry.external ? entry.platform : kindLabel[entry.kind]}</span>
                    <span>{entry.topic}</span>
                  </div>
                  <div className="flex flex-1 items-center py-5">
                    {hasPostArt(entry.topic) ? (
                      <PostArt topic={entry.topic} />
                    ) : (
                      // Own posts without a topic figure: a pull-quote of the summary
                      <p className="border-l border-ink pl-3 text-[13px] leading-[1.55] tracking-[-0.01em] text-body">
                        {entry.summary}
                      </p>
                    )}
                  </div>
                  <h3 className="text-[15px] leading-[1.3] tracking-[-0.02em] text-balance">{entry.title}</h3>
                </div>
                {hasPostArt(entry.topic) ? (
                  <p className="mt-3 line-clamp-2 text-[11.5px] leading-[1.6] text-mute">{entry.summary}</p>
                ) : null}
                <div className="mt-2.5 flex items-end justify-between gap-4">
                  <p className="text-[11px] text-ink">
                    <time dateTime={entry.date}>{formatDay(entry.date)}</time>
                    <span className="text-mute">
                      {" · "}
                      {entry.readMinutes ? `${entry.readMinutes} min read` : "Talk & code"}
                    </span>
                  </p>
                  <span
                    aria-hidden
                    className="text-[13px] text-mute transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                  >
                    {entry.external ? "↗" : "→"}
                  </span>
                </div>
                {entry.external ? <span className="sr-only">Read on {entry.platform} (opens in a new tab)</span> : null}
              </EntryLink>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function EntryLink({ entry, children }: { entry: Entry; children: React.ReactNode }) {
  return entry.external ? (
    <a href={entry.href} target="_blank" rel="noopener noreferrer" className="group block">
      {children}
    </a>
  ) : (
    <Link href={entry.href} className="group block">
      {children}
    </Link>
  )
}
