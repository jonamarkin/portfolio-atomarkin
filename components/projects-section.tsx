import { Section, SectionHeading } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { WorkCarousel, type WorkSlide } from "@/components/work-carousel"
import { projects } from "@/lib/site"
import { resolveImage } from "@/lib/images"

export function ProjectsSection() {
  const slides: WorkSlide[] = projects.map((p) => {
    const href = (p.liveUrl ?? p.githubUrl)!
    return {
      name: p.name,
      tagline: p.tagline,
      description: p.description,
      technologies: p.technologies,
      href,
      linkLabel: p.liveUrl ? (p.liveLabel ?? "Visit") : "View code",
      address: href.replace(/^https?:\/\//, ""),
      image: p.image ? resolveImage(p.image) : null,
      repo: p.repo,
    }
  })

  return (
    <Section id="work">
      <Reveal>
        <SectionHeading
          tag="Selected Work"
          title="Built to Run Reliably"
          aside={
            <p className="max-w-[300px] text-[11.5px] leading-[1.6] text-mute sm:text-right">
              Live products and open-source systems: what each one does, the stack behind it, and where to find it.
            </p>
          }
        />
      </Reveal>
      <Reveal delay={100}>
        <WorkCarousel slides={slides} />
      </Reveal>
    </Section>
  )
}
