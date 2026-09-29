import type React from "react"
import { cn } from "@/lib/utils"

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1120px] px-5 sm:px-8", className)}>{children}</div>
}

export function Section({
  id,
  className,
  children,
}: {
  id: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn("py-24 lg:py-36", className)}>
      <Container>{children}</Container>
    </section>
  )
}

/** Lefore's "● Label" section tag. */
export function DotTag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("inline-flex items-center gap-2 text-[11.5px] leading-none text-ink", className)}>
      <span aria-hidden className="size-[5px] rounded-full bg-ink" />
      {children}
    </p>
  )
}

/** Tag + title on the left, optional aside on the right. */
export function SectionHeading({
  tag,
  title,
  aside,
  className,
}: {
  tag: string
  title: React.ReactNode
  aside?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div>
        <DotTag>{tag}</DotTag>
        <h2 className="mt-3 text-[21px] leading-[1.25] tracking-[-0.02em]">{title}</h2>
      </div>
      {aside}
    </div>
  )
}
