import { Container, DotTag } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { TracksFigure } from "@/components/figures/tracks-figure"
import { focusAreas } from "@/lib/site"
import { cn } from "@/lib/utils"

// Where each numbered card floats around the centrepiece on large screens
const positions = [
  "lg:left-0 lg:top-[14%]", // 01 → Researching
  "lg:right-0 lg:top-[10%]", // 02 → Researching
  "lg:left-0 lg:bottom-[12%]", // 03 → Foundation
  "lg:right-0 lg:top-[46%]", // 04 → Building
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-36">
      <Container>
        <Reveal className="mx-auto flex max-w-[660px] flex-col items-center text-center">
          <DotTag>About</DotTag>
          <h2 className="mt-5 text-[clamp(1.5rem,1.1rem+1.4vw,2.125rem)] leading-[1.2] tracking-[-0.03em] text-balance">
            Researching distributed systems that stay reliable, coordinated and fast in cyber-physical environments.
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-[980px] lg:mt-16 lg:h-[660px]">
          <Reveal className="mx-auto w-full max-w-[560px] lg:absolute lg:inset-y-0 lg:left-1/2 lg:-translate-x-1/2">
            <TracksFigure className="lg:h-full" />
          </Reveal>

          <ol className="mt-6 grid grid-cols-2 gap-3 lg:mt-0 lg:block">
            {focusAreas.map((area, i) => (
              <li key={area.title} className={cn("lg:absolute lg:w-[220px]", positions[i])}>
                <Reveal delay={150 + i * 90}>
                  <article className="rounded-[6px] bg-white/75 p-4 ring-1 ring-hairline backdrop-blur-sm">
                    <p className="text-[10.5px] text-faint tabular-nums">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-5 text-[13.5px] tracking-[-0.01em]">{area.title}</h3>
                    <p className="mt-1.5 text-[11px] leading-[1.55] text-mute">{area.description}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
