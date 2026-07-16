import Link from "next/link";
import { ArrowUpRight, Clock, BedDouble } from "lucide-react";
import { DynamicIcon } from "@/lib/icon";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/treatment/${service.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <DynamicIcon name={service.icon} className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{service.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{service.tagline}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {service.duration}
        </span>
        <span className="inline-flex items-center gap-1">
          <BedDouble className="h-3.5 w-3.5" aria-hidden="true" />
          {service.hospitalStay}
        </span>
      </div>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Learn more
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
