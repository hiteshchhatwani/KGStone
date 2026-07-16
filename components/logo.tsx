import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className ?? ""}`}
      aria-label={`${siteConfig.name} — home`}
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/images/logo.png"
          alt={`${siteConfig.name} logo`}
          fill
          sizes="40px"
          className="object-contain"
          priority
        />
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
