import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { PlaceholderImage } from "@/components/placeholder-image";
import { CTASection } from "@/components/cta-section";
import { successStories } from "@/content/success-stories";

export const metadata: Metadata = {
  title: "Patient Success Stories",
  description:
    "Detailed patient journeys through kidney stone treatment at KG Stone Hospital — from diagnosis to full recovery.",
  alternates: { canonical: "/success-stories" },
};

export default function SuccessStoriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Success Stories", href: "/success-stories" }]} />
      <PageHero
        eyebrow="Patient Journeys"
        title="Success Stories"
        description="Detailed, real patient journeys — the stone, the decision, the procedure, and the recovery."
      />
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {successStories.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <Link
                href={`/success-stories/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <PlaceholderImage
                  icon="badge-check"
                  label={s.title}
                  className="aspect-[16/9] w-full rounded-none"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                    {s.treatment} · {s.stoneSize}
                  </span>
                  <h2 className="mt-2 font-heading text-xl font-semibold text-foreground">
                    {s.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Read {s.name}&rsquo;s story
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
