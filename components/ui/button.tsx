import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold text-[15px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-grad bg-[image:var(--grad)] text-white hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(0,194,255,.3)] transition-[transform,box-shadow] duration-150",
        ghost:
          "border border-line text-[var(--color-fg)] hover:border-cyan hover:text-cyan hover:shadow-[0_0_16px_rgba(0,194,255,.15)] transition-[border-color,color,box-shadow] duration-200",
        hire: "bg-grad bg-[image:var(--grad)] text-white text-sm px-[22px] py-[9px] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,194,255,.25)] transition-[transform,box-shadow] duration-150",
        icon: "rounded-lg border border-line text-muted hover:border-cyan hover:text-cyan hover:shadow-[0_0_12px_rgba(0,194,255,.2)] transition-all duration-200",
      },
      size: {
        default: "px-7 py-3",
        sm: "px-4 py-2 text-sm",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
