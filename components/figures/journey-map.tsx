import type React from "react"
import { dots, mapSize, places } from "@/components/figures/world-dots"
import { cn } from "@/lib/utils"

// Fig. 3 — a dotted map of Africa and Europe with the route Accra → Pisa → Luleå.

const stops = [
  { key: "accra", label: "Accra · 2019" },
  { key: "pisa", label: "Pisa · 2022" },
  { key: "lulea", label: "Luleå · 2026" },
] as const

/** A gentle curve from a to b, bowed to the left of travel. */
function arc([ax, ay]: readonly [number, number], [bx, by]: readonly [number, number], bend = 0.22) {
  const mx = (ax + bx) / 2
  const my = (ay + by) / 2
  const dx = bx - ax
  const dy = by - ay
  return `M${ax} ${ay} Q${Math.round(mx + dy * bend)} ${Math.round(my - dx * bend)} ${bx} ${by}`
}

export function JourneyMap({ className, children }: { className?: string; children?: React.ReactNode }) {
  const route = stops.map((s) => places[s.key])

  return (
    <figure className={cn("relative overflow-hidden rounded-[6px] bg-well", className)}>
      <svg
        viewBox={`0 0 ${mapSize.width} ${mapSize.height}`}
        className="absolute inset-0 h-full w-full p-4 sm:p-6"
        role="img"
        aria-label="Map of Africa and Europe tracing a route from Accra, Ghana, to Pisa, Italy, to Luleå, Sweden."
      >
        <g fill="#d6d6d6">
          {dots.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={2.3} />
          ))}
        </g>

        {route.slice(1).map((to, i) => (
          <path
            key={i}
            d={arc(route[i], to)}
            className="fig-dash"
            stroke="var(--ink)"
            strokeWidth={1.3}
            fill="none"
          />
        ))}

        {stops.map((s, i) => {
          const [x, y] = places[s.key]
          const current = i === stops.length - 1
          return (
            <g key={s.key}>
              {current ? <circle cx={x} cy={y} r={11} fill="none" stroke="var(--ink)" strokeWidth={1} /> : null}
              <circle cx={x} cy={y} r={5} fill="var(--ink)" />
              <text x={x + 16} y={y + 4.5} className="map-label font-mono" fill="var(--ink)">
                {s.label}
              </text>
            </g>
          )
        })}
      </svg>
      {children}
      <figcaption className="absolute bottom-3 left-4 font-mono text-[10px] text-mute">
        Fig. 3 — Accra → Pisa → Luleå.
      </figcaption>
    </figure>
  )
}
