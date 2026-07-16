import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CTASection } from "@/components/cta-section";
import { DynamicIcon } from "@/lib/icon";

export const metadata: Metadata = {
  title: "Kidney Stone Causes",
  description:
    "Understand what causes kidney stones — from dehydration and diet to genetics and Rajasthan's climate — and the different stone types they form.",
  alternates: { canonical: "/causes" },
};

const causes = [
  {
    icon: "sun",
    title: "Hot climate & dehydration",
    text: "Ajmer's summer heat increases fluid loss through sweat. Without matching water intake, urine becomes concentrated — the single biggest driver of stone formation in Rajasthan.",
  },
  {
    icon: "utensils",
    title: "Diet high in salt & animal protein",
    text: "Excess sodium increases calcium excretion in urine, while large amounts of animal protein raise uric acid and lower citrate — both favouring stone formation.",
  },
  {
    icon: "dna",
    title: "Family history & genetics",
    text: "If a parent or sibling has had kidney stones, your own risk is meaningfully higher, independent of diet and hydration habits.",
  },
  {
    icon: "activity",
    title: "Obesity & metabolic factors",
    text: "Higher body weight is linked to increased stone risk, partly through changes in urine chemistry associated with metabolic syndrome.",
  },
  {
    icon: "pill",
    title: "Certain medications & supplements",
    text: "Some diuretics, calcium-based antacids, and high-dose vitamin C supplements can increase stone-forming minerals in urine.",
  },
  {
    icon: "repeat",
    title: "Recurrent urinary tract infections",
    text: "Certain infections change urine chemistry and can directly lead to struvite stones, which grow rapidly if untreated.",
  },
  {
    icon: "flask-conical",
    title: "Underlying metabolic conditions",
    text: "Conditions like hyperparathyroidism, gout, and some bowel diseases alter mineral metabolism in ways that promote stone formation.",
  },
  {
    icon: "armchair",
    title: "Sedentary lifestyle & desk jobs",
    text: "Long hours of low fluid intake combined with limited movement, common in desk-based work, contribute to concentrated urine over the day.",
  },
];

const stoneTypes = [
  {
    name: "Calcium Oxalate Stones",
    share: "~80% of stones",
    text: "The most common type, linked to low fluid intake, high-oxalate foods, and low dietary calcium.",
  },
  {
    name: "Uric Acid Stones",
    share: "~10% of stones",
    text: "Associated with high animal protein intake, gout, and chronic dehydration; often linked to acidic urine.",
  },
  {
    name: "Struvite Stones",
    share: "~10% of stones",
    text: "Form in response to certain urinary tract infections and can grow quickly into large, branching (staghorn) stones.",
  },
  {
    name: "Cystine Stones",
    share: "Rare, hereditary",
    text: "Caused by a genetic condition (cystinuria) that leads the kidneys to excrete excess cystine, a stone-forming amino acid.",
  },
];

export default function CausesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Causes", href: "/causes" }]} />
      <PageHero
        eyebrow="Kidney Stones"
        title="What Causes Kidney Stones?"
        description="Stones form when urine holds more crystal-forming minerals than the fluid can dilute. Several factors make that more likely — some you can control, some you can't."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {causes.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.04}>
              <div className="h-full rounded-3xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <DynamicIcon name={c.icon} className="h-5.5 w-5.5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-tint/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Stone Types"
            title="Not all kidney stones are the same"
            description="Your stone's composition shapes both treatment choice and prevention strategy. We determine this through imaging density and, where available, lab analysis of retrieved stone fragments."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stoneTypes.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-5">
                  <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {s.share}
                  </span>
                  <h3 className="mt-3 font-heading text-base font-semibold text-foreground">
                    {s.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Know your risk?"
        description="If stones run in your family or you've had one before, a preventive consultation can help you avoid a repeat."
      />
    </>
  );
}
