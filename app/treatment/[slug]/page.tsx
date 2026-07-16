import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ShieldAlert, CalendarPlus } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";
import { PlaceholderImage } from "@/components/placeholder-image";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { DynamicIcon } from "@/lib/icon";
import { services, getServiceBySlug } from "@/content/services";
import { medicalProcedureSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/treatment/${service.slug}` },
  };
}

const quickFacts = (s: NonNullable<ReturnType<typeof getServiceBySlug>>) => [
  { icon: "target", label: "Best for", value: s.bestFor },
  { icon: "clock", label: "Duration", value: s.duration },
  { icon: "syringe", label: "Anaesthesia", value: s.anesthesia },
  { icon: "bed-double", label: "Hospital stay", value: s.hospitalStay },
  { icon: "timer-reset", label: "Recovery", value: s.recovery },
];

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <JsonLd
        data={medicalProcedureSchema(
          service.name,
          service.summary,
          `${siteConfig.url}/treatment/${service.slug}`
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Treatment", href: "/treatment" },
          { name: service.name, href: `/treatment/${service.slug}` },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 pt-8 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
              {service.tagline}
            </span>
            <h1 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 max-w-xl text-balance leading-relaxed text-muted-foreground">
              {service.summary}
            </p>
            <Link
              href="/appointment"
              className={cn(buttonVariants({ size: "lg" }), "mt-7 rounded-full px-6")}
            >
              <CalendarPlus className="h-4 w-4" aria-hidden="true" />
              Book a Consultation
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <PlaceholderImage
              icon={service.icon}
              label={service.name}
              className="aspect-[4/3] w-full"
              iconClassName="h-16 w-16"
            />
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {quickFacts(service).map((f) => (
            <div key={f.label} className="rounded-2xl border border-border bg-card p-4">
              <DynamicIcon name={f.icon} className="h-4.5 w-4.5 text-primary" strokeWidth={1.75} aria-hidden="true" />
              <p className="mt-2 text-xs font-medium text-muted-foreground">{f.label}</p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">{f.value}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-tint/40 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              About {service.shortName}
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              {service.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            What happens during the procedure
          </h2>
          <ol className="mt-5 space-y-4">
            {service.procedure.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-semibold text-primary">
                  {i + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-foreground/90">{step}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <Reveal>
            <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
              <Check className="h-5 w-5 text-primary" aria-hidden="true" />
              Benefits
            </h3>
            <ul className="mt-3 space-y-2.5">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
              <ShieldAlert className="h-5 w-5 text-secondary" aria-hidden="true" />
              Risks & What to Expect
            </h3>
            <ul className="mt-3 space-y-2.5">
              {service.risks.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-clinical/50 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={`${service.shortName} — frequently asked questions`} align="center" />
          <Reveal delay={0.1} className="mt-8">
            <FAQAccordion faqs={service.faqs} idPrefix={`${service.slug}-faq`} />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Explore Other Options" title="Other treatment options" align="center" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {otherServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                href={`/treatment/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <DynamicIcon name={s.icon} className="h-6 w-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <p className="mt-3 font-heading text-sm font-semibold text-foreground">{s.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.tagline}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
