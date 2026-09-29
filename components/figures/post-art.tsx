import type React from "react"

// Small monochrome figures for the article cards, one per topic.

function Testing() {
  const boxes = ["database", "broker", "app"]
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-2">
        {boxes.map((b) => (
          <div key={b} className="rounded-[4px] bg-page ring-1 ring-hairline">
            <div className="flex gap-1 border-b px-2 py-1.5">
              {[0, 1, 2].map((d) => (
                <span key={d} className="size-1 rounded-full bg-[#d6d6d6]" />
              ))}
            </div>
            <p className="truncate px-2 py-2.5 font-mono text-[9px] text-body">{b}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-[9.5px] text-mute">
        <span className="text-ink">✓</span> integration tests · real containers
      </p>
    </div>
  )
}

function IoT() {
  const cols = 11
  const rows = 6
  const anomaly = 3 * cols + 7
  return (
    <div className="w-full">
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {Array.from({ length: cols * rows }, (_, i) => (
          <span key={i} className="relative grid aspect-square place-items-center">
            <span className={i === anomaly ? "size-[6px] rounded-full bg-ink" : "size-[4px] rounded-full bg-[#cfcfcf]"} />
            {i === anomaly ? <span className="absolute size-4 rounded-full ring-1 ring-ink" /> : null}
          </span>
        ))}
      </div>
      <p className="mt-3 font-mono text-[9.5px] text-mute">
        <span className="text-ink">anomaly</span> · flagged in real time
      </p>
    </div>
  )
}

function Databases() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <div className="flex-1 rounded-[4px] bg-page px-2.5 py-2.5 ring-1 ring-hairline">
          <p className="font-mono text-[9px] text-mute">local</p>
          <p className="mt-0.5 font-mono text-[10px] text-ink">java api</p>
        </div>
        <div className="flex w-12 flex-col items-center">
          <span className="font-mono text-[8.5px] text-mute">:5432</span>
          <span className="mt-1 w-full border-t border-dashed border-ink" />
        </div>
        <div className="flex-1 rounded-[4px] bg-ink px-2.5 py-2.5">
          <p className="font-mono text-[9px] text-white/60">fly.io</p>
          <p className="mt-0.5 font-mono text-[10px] text-white">postgres</p>
        </div>
      </div>
      <p className="mt-3 font-mono text-[9.5px] text-mute">
        <span className="text-ink">fly proxy</span> 5432 → db.internal
      </p>
    </div>
  )
}

function SpringBoot() {
  const lines = [
    ["@SpringBootApplication", "text-ink"],
    ["public class App {", "text-body"],
    ["  static void main(String[] a) {", "text-body"],
    ["    SpringApplication.run(…);", "text-mute"],
    ["  }", "text-body"],
    ["}", "text-body"],
  ]
  return (
    <div className="w-full rounded-[4px] bg-page p-3 ring-1 ring-hairline">
      {lines.map(([code, tone], i) => (
        <p key={i} className="flex gap-3 font-mono text-[9px] leading-[1.7] whitespace-pre">
          <span className="w-2 text-right text-faint">{i + 1}</span>
          <span className={`overflow-hidden text-ellipsis ${tone}`}>{code}</span>
        </p>
      ))}
    </div>
  )
}

const art: Record<string, () => React.JSX.Element> = {
  Testing,
  IoT,
  Databases,
  "Spring Boot": SpringBoot,
}

export function PostArt({ topic }: { topic: string }) {
  const Art = art[topic]
  return Art ? <Art /> : null
}
