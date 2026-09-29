import Link from "next/link"
import { cn } from "@/lib/utils"

/** A plain geometric "A" — the mark used in the header and the footer watermark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("size-5", className)} fill="none">
      <path d="M3 21 12 3l9 18" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="square" />
      <path d="M7.2 14.2h9.6" stroke="currentColor" strokeWidth="2.6" />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2 text-[15px] tracking-[-0.02em]", className)}>
      <LogoMark className="size-[18px]" />
      Ato Markin
    </Link>
  )
}
