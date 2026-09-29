import { Button } from "@/components/ui/button"
import { Container, DotTag } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { JourneyMap } from "@/components/figures/journey-map"
import { profile } from "@/lib/site"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-36">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <JourneyMap className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[1/1.05]">
            <div className="absolute top-[6%] left-[5%] flex w-[44%] max-w-[190px] flex-col justify-end rounded-[6px] bg-white/55 p-3.5 ring-1 ring-white/70 backdrop-blur-md sm:aspect-[4/5] sm:w-[34%] sm:p-4">
              <p className="text-[19px] tracking-[-0.02em]">Let&apos;s Talk</p>
              <p className="mt-1.5 text-[11px] leading-[1.5] text-body">
                Research collaborations, systems discussions, and product ideas.
              </p>
            </div>
          </JourneyMap>
        </Reveal>

        <Reveal delay={100} className="flex flex-col lg:py-2">
          <DotTag>Get in Touch</DotTag>
          <h2 className="mt-5 text-[clamp(2rem,1.3rem+2.6vw,3.25rem)] max-w-[600px] leading-[1.08] tracking-[-0.035em]">
            Let&apos;s build systems that stay <span className="text-faint">reliable, coordinated and useful.</span>
          </h2>

          <div className="mt-12 lg:mt-auto">
            <p className="max-w-[380px] text-[12.5px] leading-[1.7] text-mute">
              I&apos;m always interested in research collaborations, distributed systems discussions, and thoughtful
              product ideas that turn infrastructure into something people can actually use.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button asChild arrow size="sm">
                <a href={`mailto:${profile.email}`}>Email me</a>
              </Button>
              <p className="text-[11.5px] text-mute">
                <a href={`mailto:${profile.email}`} className="text-ink hover:underline">
                  {profile.email}
                </a>{" "}
                · {profile.location}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
