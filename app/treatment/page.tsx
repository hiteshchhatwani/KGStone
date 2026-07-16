import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Kidney Stone Treatment Options",
  description:
    "Explore all kidney stone treatment options at KG Stone Hospital, Ajmer — Laser Stone Surgery, PCNL, URS, RIRS and ESWL — and how we choose the right one.",
  alternates: { canonical: "/treatment" },
};

const decisionFactors = [
  { title: "Stone size", text: "Smaller stones often respond to ESWL; larger stones need PCNL or laser techniques." },
  { title: "Stone location", text: "Kidney stones, ureteric stones and stones near the bladder each favour different approaches." },
  { title: "Stone hardness", text: "Harder stones (seen on CT density) respond better to laser than to shockwave therapy." },
  { title: "Your kidney anatomy", text: "Awkward calyx positions or unusual anatomy can shift the recommendation toward RIRS or PCNL." },
  { title: "Prior treatment history", text: "A stone that recurs after ESWL may be better served by a laser-based approach next time." },
  { title: "Your overall health", text: "Bleeding risk, anaesthesia fitness and other conditions all factor into the safest recommendation." },
];

export default function TreatmentIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Treatment", href: "/treatment" }]} />
      <PageHero
        eyebrow="Kidney Stone Treatment"
        title="Five proven ways to become stone-free"
        description="From completely non-invasive shockwave therapy to advanced PCNL for the largest stones — we match the treatment to your stone, not the other way around."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-tint/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Decide"
            title="What determines the right treatment for you"
            description="Dr. Sharma reviews six factors from your imaging and history before recommending a procedure — never a one-size-fits-all default."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {decisionFactors.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
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
