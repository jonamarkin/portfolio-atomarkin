import { Button } from "@/components/ui/button"
import { Container } from "@/components/section"
import { ElsewhereLinks, HeroGallery } from "@/components/hero-gallery"
import { heroBullets, images, profile } from "@/lib/site"
import { resolveImage } from "@/lib/images"

export function HeroSection() {
  const all = images.hero.map((img) => ({ ...img, src: resolveImage(img.src), hint: img.src }))
  // Only show photos that exist; fall back to a single placeholder slot
  const found = all.filter((s) => s.src)
  const slides = found.length ? found : all.slice(0, 1)

  return (
    <section id="home" className="pt-8 pb-24 lg:pt-12 lg:pb-36">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] lg:gap-16">
        <HeroGallery slides={slides} />

        <div className="lg:pt-6">
          <h1 className="text-[26px] leading-[1.15] tracking-[-0.025em]">{profile.name}</h1>
          <p className="mt-2 text-[15px] tracking-[-0.01em]">
            {profile.role} <span className="text-faint">· {profile.field}</span>
          </p>
          <p className="mt-2 text-[11.5px] text-mute">
            {profile.affiliation} · {profile.since} ·{" "}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-ink/30 underline-offset-2 transition-colors hover:decoration-ink"
            >
              View LinkedIn
            </a>
          </p>

          <hr className="my-6" />

          <div className="space-y-3 text-[12.5px] leading-[1.7] text-mute">
            <p>
              I am a distributed systems researcher and doctoral student in Cyber-Physical Systems at Luleå University
              of Technology in Sweden, where I started my PhD in January 2026.
            </p>
            <p>
              My work is increasingly focused on distributed systems, performance, coordination, and reliability,
              building on my background designing backend platforms and cloud-native services.
            </p>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 rounded-[6px] bg-panel p-4 ring-1 ring-hairline sm:grid-cols-2">
            {heroBullets.map((b) => (
              <li key={b} className="flex gap-2 text-[11.5px] leading-[1.5] text-mute">
                <span aria-hidden className="mt-[7px] size-[3px] shrink-0 rounded-full bg-mute" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <ElsewhereLinks github={profile.github} linkedin={profile.linkedin} email={profile.email} devto={profile.devto} />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <Button asChild arrow size="lg">
              <a href={`mailto:${profile.email}`}>Get in touch</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#work">View work</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
