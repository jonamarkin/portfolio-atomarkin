import { cn } from "@/lib/utils"

// Fig. 1 — the layers the work spans, from the physical world up to the apps
// people use. Numbers match the floating focus cards around it.

const layers = [
  { n: "04", name: "Applications", detail: "Paycycl · PlayChale", tag: "products" },
  { n: "01", name: "Distributed coordination", detail: "replication · consensus · performance", tag: "research" },
  { n: "03", name: "Infrastructure", detail: "cloud · HPC · containers", tag: "platform" },
  { n: "02", name: "Physical world", detail: "sensors · actuators · edge devices", tag: "field" },
]

export function StackFigure({ className }: { className?: string }) {
  return (
    <figure className={cn("flex flex-col rounded-[6px] bg-well p-5 sm:p-8", className)}>
      <div className="flex justify-between font-mono text-[10.5px] text-mute">
        <span>stack · where the work sits</span>
        <span>4 layers</span>
      </div>

      <div className="relative my-8 flex flex-1 flex-col justify-center">
        {/* the spine, with data rising from the field to the apps */}
        <span aria-hidden className="absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-[#d9d9d9]">
          <span className="fig-rise absolute left-1/2 size-[5px] -translate-x-1/2 rounded-full bg-ink" />
        </span>

        <ol className="relative flex flex-col gap-5 sm:gap-7">
          {layers.map((layer, i) => (
            <li
              key={layer.n}
              className={cn(
                "flex items-center gap-3 rounded-[6px] bg-page px-4 py-3.5 ring-1 ring-hairline sm:gap-4 sm:px-5 sm:py-4",
                i === 1 && "ring-ink",
              )}
            >
              <span className="grid size-6 shrink-0 place-items-center rounded-full font-mono text-[9.5px] ring-1 ring-ink">
                {layer.n}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13.5px] tracking-[-0.01em]">{layer.name}</p>
                <p className="mt-0.5 truncate font-mono text-[10.5px] text-mute">{layer.detail}</p>
              </div>
              <span className="hidden shrink-0 font-mono text-[10px] text-faint sm:inline">{layer.tag}</span>
            </li>
          ))}
        </ol>
      </div>

      <figcaption className="font-mono text-[10px] text-mute">
        Fig. 1 — From sensors to apps: the research sits in the coordination layer.
      </figcaption>
    </figure>
  )
}
