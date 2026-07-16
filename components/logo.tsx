import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className ?? ""}`}
      aria-label={`${siteConfig.name} — home`}
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-heading text-base font-semibold text-primary-foreground shadow-sm transition-transform duration-300 ease-out group-hover:scale-105">
        {siteConfig.logoInitials}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
          {siteConfig.shortName}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Hospital, Ajmer
        </span>
      </span>
    </Link>
  );
}
