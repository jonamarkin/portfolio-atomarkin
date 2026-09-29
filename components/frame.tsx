import type React from "react"
import Image from "next/image"
import { LogoMark } from "@/components/logo"
import { cn } from "@/lib/utils"

/**
 * An image well. Renders the photo when `src` resolved to a real file,
 * otherwise a neutral placeholder. Safe to use from client components.
 */
export function Frame({
  src,
  alt,
  hint,
  sizes,
  priority,
  contain,
  className,
  children,
}: {
  src: string | null
  alt: string
  /** Path shown on the placeholder in development */
  hint?: string
  sizes?: string
  priority?: boolean
  contain?: boolean
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-[6px] bg-well", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "100vw"}
          className={contain ? "object-contain" : "object-cover"}
        />
      ) : (
        <div aria-hidden className="absolute inset-0 grid place-items-center">
          <LogoMark className="size-10 text-watermark" />
          {process.env.NODE_ENV === "development" && hint ? (
            <span className="absolute bottom-3 left-3 text-[10.5px] text-faint">public{hint}</span>
          ) : null}
        </div>
      )}
      {children}
    </div>
  )
}
