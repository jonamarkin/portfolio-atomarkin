import * as React from "react"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-[4px] text-[12.5px] font-medium whitespace-nowrap transition-colors duration-200 select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        primary: "bg-ink text-white hover:bg-[#2b2b2b]",
        secondary: "bg-soft text-ink hover:bg-hairline",
        ghost: "text-ink hover:bg-soft",
        outline: "bg-page text-ink ring-1 ring-hairline ring-inset hover:bg-panel",
      },
      size: {
        sm: "h-8 px-3.5",
        md: "h-9 px-4",
        lg: "h-10 px-5",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  arrow = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    /** Prefix with Lefore's "↳" glyph */
    arrow?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {arrow ? (
        <span aria-hidden className="-mt-0.5 text-[13px] leading-none">
          ↳
        </span>
      ) : null}
      <Slottable>{children}</Slottable>
    </Comp>
  )
}

export { Button, buttonVariants }
