import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-[120px] w-full rounded-[var(--r-sm)] border border-line bg-ink-2 px-4 py-3 text-[15px] text-[#F1F5F9] placeholder:text-muted transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-cyan focus:shadow-[0_0_0_3px_rgba(0,194,255,.09)] disabled:cursor-not-allowed disabled:opacity-50 resize-y",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
