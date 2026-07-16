import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { StatCard } from "@/components/stat-card";
import { PlaceholderImage } from "@/components/placeholder-image";
import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { DynamicIcon } from "@/lib/icon";
import { stats, technology } from "@/content/stats";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About the Hospital",
  description:
    "Learn about KG Stone Hospital, Ajmer's super-specialty urology hospital — our story, facility, technology and values.",
  alternates: { canonical: "/about-hospital" },
};

const values = [
  {
    icon: "target",
    title: "Least-invasive-first",
    text: "We recommend the smallest effective procedure for your stone, not the biggest one available.",
  },
  {
    icon: "shield-check",
    title: "Transparent care",
    text: "Clear cost estimates, plain-language explanations, and no pressure to decide on the spot.",
  },
  {
    icon: "heart-handshake",
    title: "Patient-first scheduling",
    text: "Most patients are seen within 24 hours; stone pain emergencies are attended 24×7.",
  },
  {
    icon: "microscope",
    title: "Evidence-based technique",
    text: "Every recommendation is grounded in your imaging, stone composition and current urological guidelines.",
  },
];

export default function AboutHospitalPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About the Hospital", href: "/about-hospital" }]} />
      <PageHero
        eyebrow="About Us"
        title="A dedicated urology & stone-care centre, built for Ajmer"
        description={`${siteConfig.name} is Ajmer's super-specialty urology hospital, led by Dr. Kuldeep Sharma — no referrals elsewhere for advanced stone, prostate or urinary procedures.`}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/70">
              <Image
                src="/images/hospital-building.jpg"
                alt={`${siteConfig.name} building exterior`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
              Our Story
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
              Why we opened a hospital that treats one thing
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Before {siteConfig.name}{" "}opened its doors, patients across Ajmer and the
                surrounding districts routinely travelled to Jaipur — sometimes further — for
                laser-based kidney stone treatment. A same-day, minimally invasive option simply
                didn&rsquo;t exist locally.
              </p>
              <p>
                {siteConfig.name}{" "}was founded by Dr. Kuldeep Sharma, who performed the Ajmer
                division&rsquo;s first urology surgery, to close that gap: a super-specialty
                hospital where the operating theatre, imaging, laboratory and recovery suite are
                all built specifically around urology care — kidney stones, prostate, UTI and
                urinary disorders — rather than one small corner of a general hospital.
              </p>
              <p>
                Today, that focus shows in the numbers — over 10,000 surgeries performed across
                stone, prostate, cancer and reconstructive urology, and a team that has seen
                nearly every urological condition Rajasthan&rsquo;s climate and population can
                produce.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-tint/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <StatCard label={s.label} value={s.value} icon={s.icon} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What We Stand For" title="Our values in practice" align="center" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <DynamicIcon name={v.icon} className="h-5.5 w-5.5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-clinical/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Facility & Technology"
            title="What's inside KG Stone Hospital"
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technology.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.04}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <DynamicIcon name={t.icon} className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {t.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
