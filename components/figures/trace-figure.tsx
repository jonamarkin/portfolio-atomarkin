import { experiences, formatDuration, formatMonth, monthIndex } from "@/lib/site"
import { cn } from "@/lib/utils"

// Fig. 2 — the career laid out like a distributed trace: one span per role on a
// shared time axis, overlaps visible, the current span still open.

export function TraceFigure({ className }: { className?: string }) {
  const spans = [...experiences].sort((a, b) => a.start.localeCompare(b.start))
  const firstYear = Number(spans[0].start.slice(0, 4))
  const lastYear = new Date().getUTCFullYear()
  const axisStart = firstYear * 12
  const axisEnd = (lastYear + 1) * 12
  const pct = (m: number) => ((m - axisStart) / (axisEnd - axisStart)) * 100
  const now = monthIndex(null)

  const years = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i)
  const totalYears = Math.floor((now - monthIndex(spans[0].start) + 1) / 12)
  const countries = new Set(spans.map((s) => s.location.split(",").pop()!.trim())).size

  const stats = [
    { value: `${totalYears}`, label: "years building" },
    { value: `${spans.length}`, label: "roles" },
    { value: `${countries}`, label: "countries" },
  ]

  return (
    <figure className={cn("flex flex-col rounded-[6px] bg-well p-6 sm:p-8", className)}>
      <div className="flex justify-between font-mono text-[10.5px] text-mute">
        <span>trace · career</span>
        <span>
          {spans.length} spans · 1 open
        </span>
      </div>

      <dl className="mt-8 grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse">
            <dt className="mt-2 font-mono text-[10px] text-mute">{s.label}</dt>
            <dd className="text-[clamp(2rem,1.4rem+1.8vw,2.75rem)] leading-none tracking-[-0.05em]">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12">
        <div className="relative grid grid-cols-[88px_minmax(0,1fr)] gap-x-4 sm:grid-cols-[104px_minmax(0,1fr)]">
          {/* year gridlines, behind the spans */}
          <div aria-hidden className="pointer-events-none relative col-start-2 row-start-1">
            {years.map((y) => (
              <span key={y} className="absolute inset-y-0 w-px bg-[#e3e3e3]" style={{ left: `${pct(y * 12)}%` }} />
            ))}
            <span
              className="absolute -top-5 bottom-0 border-l border-dashed border-ink/40"
              style={{ left: `${pct(now + 1)}%` }}
            >
              <span className="absolute -top-0.5 left-1.5 font-mono text-[9.5px] leading-none text-mute">now</span>
            </span>
          </div>

          <ol className="col-span-2 col-start-1 row-start-1 grid grid-cols-subgrid gap-y-4" aria-label="Roles over time">
            {spans.map((s) => {
              const open = s.end === null
              const start = monthIndex(s.start)
              const end = monthIndex(s.end) + 1
              return (
                <li key={s.start} className="grid grid-cols-subgrid col-span-2 items-center">
                  <div className="font-mono text-[10.5px] leading-[1.35]">
                    <p className="truncate text-ink">{s.short}</p>
                    <p className="text-mute">{formatDuration(s.start, s.end)}</p>
                  </div>
                  <div className="relative h-2" title={`${s.title}, ${formatMonth(s.start)} – ${formatMonth(s.end)}`}>
                    <span
                      className={cn("absolute inset-y-0 rounded-[2px]", open ? "bg-ink" : "bg-[#cdcdcd]")}
                      style={{ left: `${pct(start)}%`, width: `${pct(end) - pct(start)}%` }}
                    />
                    {open ? (
                      <span
                        aria-hidden
                        className="fig-march absolute top-1/2 h-px -translate-y-1/2"
                        style={{ left: `${pct(end)}%`, right: 0 }}
                      />
                    ) : null}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        {/* axis */}
        <div className="mt-4 grid grid-cols-[88px_minmax(0,1fr)] gap-x-4 sm:grid-cols-[104px_minmax(0,1fr)]">
          <div className="relative col-start-2 h-3">
            {years.map((y) => (
              <span
                key={y}
                className="absolute font-mono text-[10px] leading-none text-faint"
                style={{ left: `${pct(y * 12)}%` }}
              >
                ’{String(y).slice(2)}
              </span>
            ))}
          </div>
        </div>
      </div>

      <figcaption className="mt-6 font-mono text-[10px] text-mute">
        Fig. 2 — Career as a trace: overlapping spans, one still open.
      </figcaption>
    </figure>
  )
}
