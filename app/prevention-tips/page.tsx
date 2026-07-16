import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";
import { DynamicIcon } from "@/lib/icon";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Kidney Stone Prevention Tips",
  description:
    "Practical, doctor-recommended steps to prevent kidney stones from forming or recurring — hydration targets, diet guidance and lifestyle changes.",
  alternates: { canonical: "/prevention-tips" },
};

const tips = [
  {
    icon: "glass-water",
    title: "Drink 2.5–3 litres of water daily",
    text: "The single most effective prevention step. Aim for pale straw-coloured urine as a simple hydration check, and drink more in summer heat.",
  },
  {
    icon: "citrus",
    title: "Add citrus to your routine",
    text: "Lemon water and citrus fruits contain citrate, which naturally inhibits calcium stones from forming.",
  },
  {
    icon: "salad",
    title: "Moderate salt & animal protein",
    text: "High sodium and excess animal protein both increase stone-forming minerals in urine. Watch packaged and restaurant food, not just the salt shaker.",
  },
  {
    icon: "milk",
    title: "Don't avoid dietary calcium",
    text: "Calcium from food (milk, curd, paneer) eaten with meals binds oxalate in the gut, reducing stone risk — restricting it can backfire.",
  },
  {
    icon: "scale",
    title: "Maintain a healthy weight",
    text: "Obesity is linked to changes in urine chemistry that raise stone risk. Gradual, sustainable weight management helps.",
  },
  {
    icon: "footprints",
    title: "Stay physically active",
    text: "Regular movement supports healthy metabolism and encourages consistent fluid intake throughout the day.",
  },
  {
    icon: "clipboard-list",
    title: "Know your stone type",
    text: "If you've had a stone before, ask for composition analysis — prevention advice differs meaningfully between calcium, uric acid and struvite stones.",
  },
  {
    icon: "calendar-check",
    title: "Schedule periodic check-ups",
    text: "If stones run in your family or you've had one before, a yearly ultrasound can catch new stones while they're still small and easy to treat.",
  },
];

const preventionFaqs = faqs.filter((f) => f.category === "Prevention");

export default function PreventionTipsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Prevention Tips", href: "/prevention-tips" }]} />
      <PageHero
        eyebrow="Kidney Stones"
        title="Kidney Stone Prevention Tips"
        description="Roughly half of people who've had one kidney stone develop another within a decade without preventive steps. These habits meaningfully lower that risk."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.04}>
              <div className="h-full rounded-3xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/20 text-accent-foreground">
                  <DynamicIcon name={t.icon} className="h-5.5 w-5.5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-tint/40 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Prevention questions, answered" align="center" />
          <Reveal delay={0.1} className="mt-8">
            <FAQAccordion faqs={preventionFaqs} idPrefix="prevention-faq" />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Had a stone before?"
        description="Ask us for a personalised, stone-type-specific prevention plan at your next visit."
      />
    </>
  );
}
