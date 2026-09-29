"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/section"
import { Logo } from "@/components/logo"
import { navItems, profile } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id === "home" ? null : entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    for (const id of ["home", ...navItems.map((n) => n.id), "contact"]) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-page/90 backdrop-blur-md transition-[box-shadow] duration-300",
        (scrolled || open) && "shadow-[0_1px_0_var(--hairline)]",
      )}
    >
      <Container className="relative flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "text-[12.5px] transition-colors duration-200",
                    active === item.id ? "text-ink" : "text-mute hover:text-ink",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <Button asChild arrow size="sm" className="rounded-full px-4">
            <a href={`mailto:${profile.email}`}>Get in touch</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X strokeWidth={1.5} className="size-4" /> : <Menu strokeWidth={1.5} className="size-4" />}
          </Button>
        </div>
      </Container>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t md:hidden">
          <Container>
            <ul className="flex flex-col py-2">
              {navItems.map((item) => (
                <li key={item.id} className="border-b last:border-b-0">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex h-11 items-center justify-between text-[14px]"
                  >
                    {item.label}
                    <span aria-hidden className="text-faint">
                      ↘
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  )
}
