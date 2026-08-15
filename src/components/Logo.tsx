import { cn } from "@/lib/utils";

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[15px] font-bold",
          onDark
            ? "bg-card text-primary"
            : "bg-cta-gradient text-primary-foreground shadow-[var(--shadow-soft)]",
        )}
      >
        ∞
      </span>
      <span
        className={cn(
          "font-display text-[1.35rem] font-extrabold tracking-tight",
          onDark ? "text-primary-foreground" : "text-foreground",
        )}
      >
        One<span className={onDark ? "opacity-80" : "text-primary"}>infyn</span>
      </span>
    </span>
  );
}
