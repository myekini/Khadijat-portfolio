import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex w-full rounded-[var(--r-sm)] border border-line bg-ink-2 px-4 py-3 text-[15px] section-heading placeholder:text-muted transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(0,194,255,.09)] disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
