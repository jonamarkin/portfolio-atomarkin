import { cn } from "@/lib/utils"

// Fig. 1 — the three things the work consists of, shown as separate tracks.
// Nothing is wired together: they sit side by side. Numbers match the cards.

type Item = { label: string; detail: string; href?: string; live?: boolean }
type Track = { name: string; status: string; markers: string[]; items: Item[]; primary?: boolean }

const tracks: Track[] = [
  {
    name: "Researching",
    status: "PhD · 2026–",
    markers: ["01", "02"],
    primary: true,
    items: [
      { label: "Coordination in cyber-physical systems", detail: "LTU" },
      { label: "Reliability & performance", detail: "distributed" },
      { label: "Smart contracts & blockchain", detail: "interest" },
    ],
  },
  {
    name: "Building",
    status: "2 live",
    markers: ["04"],
    items: [
      { label: "Paycycl", detail: "paycycl.com", href: "https://paycycl.com", live: true },
      { label: "PlayChale", detail: "playchale.com", href: "https://playchale.com", live: true },
    ],
  },
  {
    name: "Foundation",
    status: "2019 – 2025",
    markers: ["03"],
    items: [
      { label: "Banking & payments backends", detail: "Accra" },
      { label: "HPC-cloud research", detail: "Pisa" },
    ],
  },
]

export function TracksFigure({ className }: { className?: string }) {
  return (
    <figure className={cn("flex flex-col rounded-[6px] bg-well p-5 sm:p-8", className)}>
      <div className="flex justify-between font-mono text-[10.5px] text-mute">
        <span>tracks · what I work on</span>
        <span>{tracks.length} tracks</span>
      </div>

      <div className="my-6 flex flex-1 flex-col justify-center gap-3">
        {tracks.map((track) => (
          <section
            key={track.name}
            className={cn("rounded-[6px] bg-page p-4 ring-1 sm:p-5", track.primary ? "ring-ink" : "ring-hairline")}
          >
            <div className="flex items-center gap-2">
              {track.markers.map((m) => (
                <span key={m} className="grid size-6 place-items-center rounded-full font-mono text-[9.5px] ring-1 ring-ink">
                  {m}
                </span>
              ))}
              <h3 className="ml-1 text-[13.5px] tracking-[-0.01em]">{track.name}</h3>
              <span className="ml-auto font-mono text-[10px] text-mute">{track.status}</span>
            </div>
            <ul className="mt-3 border-t pt-2">
              {track.items.map((item) => {
                const row = (
                  <>
                    <span className="flex min-w-0 items-center gap-2">
                      {item.live ? <span aria-hidden className="size-[5px] shrink-0 rounded-full bg-ink" /> : null}
                      <span className="truncate">{item.label}</span>
                    </span>
                    <span className="shrink-0 font-mono text-[10px] text-mute">
                      {item.detail}
                      {item.href ? " ↗" : ""}
                    </span>
                  </>
                )
                return (
                  <li key={item.label} className="text-[12px] text-body">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 py-1.5 transition-colors hover:text-ink"
                      >
                        {row}
                      </a>
                    ) : (
                      <div className="flex items-center justify-between gap-3 py-1.5">{row}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </div>

      <figcaption className="font-mono text-[10px] text-mute">
        Fig. 1 — Three separate tracks: research, products, and the engineering behind them.
      </figcaption>
    </figure>
  )
}
