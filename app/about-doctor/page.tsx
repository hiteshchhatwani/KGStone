import type { Metadata } from "next";
import { GraduationCap, Award, Stethoscope, CalendarPlus } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { PlaceholderImage } from "@/components/placeholder-image";
import { CTASection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { physicianSchema } from "@/lib/schema";
import { doctor } from "@/content/doctor";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About the Doctor",
  description: `Meet ${doctor.name}, ${doctor.title} at KG Stone Hospital, Ajmer — ${doctor.surgeriesPerformed} surgeries performed, Ajmer division's first urology surgery.`,
  alternates: { canonical: "/about-doctor" },
};

export default function AboutDoctorPage() {
  return (
    <>
      <JsonLd data={physicianSchema()} />
      <Breadcrumbs items={[{ name: "About the Doctor", href: "/about-doctor" }]} />
      <PageHero eyebrow="Meet Your Surgeon" title={doctor.name} description={doctor.title} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <Reveal className="lg:sticky lg:top-24">
            <PlaceholderImage
              icon="user-round"
              label={`Portrait of ${doctor.name}`}
              className="aspect-[3/4] w-full"
              iconClassName="h-16 w-16"
            />
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <p className="text-sm font-semibold text-foreground">{doctor.credentials}</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {doctor.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-heading text-xl font-semibold text-primary">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/appointment"
                className={cn(buttonVariants({ size: "lg" }), "mt-5 w-full rounded-full")}
              >
                <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                Book a Consultation
              </Link>
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground">Biography</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                {doctor.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <blockquote className="mt-6 border-l-2 border-primary pl-4 font-heading text-lg italic text-foreground/90">
                {doctor.philosophy}
              </blockquote>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="flex items-center gap-2 font-heading text-2xl font-semibold text-foreground">
                <GraduationCap className="h-5.5 w-5.5 text-primary" aria-hidden="true" />
                Qualifications
              </h2>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {doctor.qualifications.map((q) => (
                  <li
                    key={q}
                    className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground/90"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="flex items-center gap-2 font-heading text-2xl font-semibold text-foreground">
                <Award className="h-5.5 w-5.5 text-primary" aria-hidden="true" />
                Professional Memberships
              </h2>
              <ul className="mt-4 space-y-2">
                {doctor.memberships.map((m) => (
                  <li key={m} className="flex items-center gap-2.5 text-sm text-foreground/90">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="flex items-center gap-2 font-heading text-2xl font-semibold text-foreground">
                <Stethoscope className="h-5.5 w-5.5 text-primary" aria-hidden="true" />
                Areas of Expertise
              </h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {doctor.expertise.map((e) => (
                  <span
                    key={e}
                    className="rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-foreground/85"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a question before booking?"
        description="Send Dr. Sharma's team your scan or reports over WhatsApp for a quick initial read before your visit."
      />
    </>
  );
}
