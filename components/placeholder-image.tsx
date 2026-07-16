import { DynamicIcon } from "@/lib/icon";
import { cn } from "@/lib/utils";

const PALETTES = [
  "from-primary/18 via-primary/8 to-transparent text-primary",
  "from-secondary/18 via-secondary/8 to-transparent text-secondary",
  "from-accent/25 via-accent/10 to-transparent text-accent-foreground",
];

function hashOf(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

export function PlaceholderImage({
  icon,
  label,
  className,
  iconClassName,
}: {
  icon: string;
  label: string;
  className?: string;
  iconClassName?: string;
}) {
  const palette = PALETTES[hashOf(label) % PALETTES.length];
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br",
        palette,
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <DynamicIcon name={icon} className={cn("h-10 w-10", iconClassName)} strokeWidth={1.5} />
    </div>
  );
}
