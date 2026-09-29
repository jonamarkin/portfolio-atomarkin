import { Container } from "@/components/section"
import { navItems, posts, profile, projects } from "@/lib/site"

type FooterLink = { label: string; href: string; external?: boolean }

const columns: { title: string; links: FooterLink[] }[] = [
  { title: "Sections", links: [...navItems.map((n) => ({ label: n.label, href: `#${n.id}` })), { label: "Contact", href: "#contact" }] },
  {
    title: "Work",
    links: projects.slice(0, 4).map((p) => ({ label: p.name, href: (p.liveUrl ?? p.githubUrl)!, external: true })),
  },
  {
    title: "Writing",
    links: [
      { label: "Dev.to", href: profile.devto, external: true },
      { label: "Testcontainers talk", href: posts.find((p) => p.platform === "GitHub")!.url, external: true },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: profile.github, external: true },
      { label: "LinkedIn", href: profile.linkedin, external: true },
      { label: "Email", href: `mailto:${profile.email}` },
    ],
  },
]

export function Footer() {
  return (
    <footer className="overflow-hidden bg-footer">
      <Container className="pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <p className="text-[clamp(1.375rem,1.1rem+0.9vw,1.75rem)] leading-[1.2] tracking-[-0.025em]">
              Distributed Systems Researcher.
              <br />
              <span className="text-mute">Building reliable infrastructure.</span>
            </p>
            <p className="mt-8 flex flex-wrap gap-x-6 gap-y-1 text-[11.5px]">
              <a href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </a>
              <span className="text-mute">{profile.location}</span>
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] text-mute">{col.title}</p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-[11.5px] transition-colors hover:text-mute"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Giant watermark */}
        <p
          aria-hidden
          className="mt-16 -mb-[0.06em] text-[clamp(3.5rem,17.5vw,13.25rem)] leading-[0.85] tracking-[-0.065em] whitespace-nowrap text-watermark select-none lg:mt-20"
        >
          atomarkin
        </p>

        <div className="flex flex-col gap-2 border-t border-black/[0.05] py-6 text-[11px] text-mute sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind CSS, and deployed on Vercel</p>
        </div>
      </Container>
    </footer>
  )
}
