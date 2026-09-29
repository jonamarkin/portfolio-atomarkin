import type React from "react"
import { Container, DotTag } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { TraceFigure } from "@/components/figures/trace-figure"
import { experiences, formatMonth, skillGroups } from "@/lib/site"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-36">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <TraceFigure />
        </Reveal>

        <div>
          <Reveal>
            <DotTag>Experience</DotTag>
            <h2 className="mt-3 text-[21px] leading-[1.25] tracking-[-0.02em]">Research &amp; Experience</h2>
            <p className="mt-4 max-w-[460px] text-[12.5px] leading-[1.7] text-mute">
              From core banking and payments platforms in Accra, to HPC-cloud research in Pisa, to doctoral research in
              Cyber-Physical Systems in Luleå.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <SpecCard title="Roles" className="mt-10">
              <ol>
                {experiences.map((exp) => (
                  <li key={`${exp.company}-${exp.start}`} className="border-t py-5 first:border-t-0 first:pt-1 last:pb-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-[13.5px] tracking-[-0.01em]">{exp.title}</h3>
                      <p className="shrink-0 text-[11px] text-mute tabular-nums">
                        {formatMonth(exp.start)} – {formatMonth(exp.end)}
                      </p>
                    </div>
                    <p className="mt-1 text-[11.5px] text-mute">
                      {exp.company} · {exp.location}
                    </p>
                    <p className="mt-3 text-[11.5px] leading-[1.65] text-mute">{exp.description}</p>
                    <p className="mt-2 text-[11px] text-faint">{exp.technologies.join(" · ")}</p>
                  </li>
                ))}
              </ol>
            </SpecCard>
          </Reveal>

          <Reveal delay={100}>
            <SpecCard title="Technical Details" className="mt-4">
              <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <dt className="text-[11.5px]">{group.label}</dt>
                    <dd className="mt-1.5 text-[11.5px] leading-[1.6] text-mute">{group.skills.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </SpecCard>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function SpecCard({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-[6px] bg-panel p-5 ring-1 ring-hairline sm:p-6 ${className ?? ""}`}>
      <p className="flex items-center gap-2 text-[11.5px]">
        <span aria-hidden className="-mt-0.5 leading-none">
          ↳
        </span>
        {title}
      </p>
      <div className="mt-6">{children}</div>
    </div>
  )
}
