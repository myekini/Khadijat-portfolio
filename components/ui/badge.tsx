import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-cyan",
  {
    variants: {
      variant: {
        default:
          "border border-[rgba(0,194,255,.2)] bg-[rgba(0,194,255,.07)] text-cyan px-3 py-1",
        success:
          "border border-[rgba(16,185,129,.35)] bg-[rgba(16,185,129,.1)] text-green px-3 py-1",
        warning:
          "border border-[rgba(245,158,11,.35)] bg-[rgba(245,158,11,.1)] text-amber px-3 py-1",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
