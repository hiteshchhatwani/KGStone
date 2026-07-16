import type { Metadata } from "next";
import { AlertTriangle, PhoneCall } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTASection } from "@/components/cta-section";
import { DynamicIcon } from "@/lib/icon";
import { faqs } from "@/content/faqs";
import { contactInfo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kidney Stone Symptoms",
  description:
    "Recognise the early and severe symptoms of kidney stones — from dull back pain to sudden renal colic — and know when to seek emergency care.",
  alternates: { canonical: "/symptoms" },
};

const symptoms = [
  {
    icon: "activity",
    title: "Severe pain in the back or side",
    text: "Sudden, intense cramping pain below the ribs, often radiating toward the lower abdomen and groin as the stone moves — known as renal colic.",
  },
  {
    icon: "droplets",
    title: "Blood in urine",
    text: "Pink, red or brown-tinged urine, caused by a stone irritating the urinary tract lining as it moves.",
  },
  {
    icon: "thermometer",
    title: "Fever and chills",
    text: "A sign of possible infection behind an obstructing stone — this combination needs urgent medical attention.",
  },
  {
    icon: "circle-alert",
    title: "Nausea and vomiting",
    text: "Shared nerve pathways between the kidneys and digestive system mean stone pain often triggers an upset stomach.",
  },
  {
    icon: "toilet",
    title: "Frequent, urgent urination",
    text: "A persistent urge to urinate, often with little output, as a stone irritates the bladder or lower ureter.",
  },
  {
    icon: "flame",
    title: "Burning sensation while urinating",
    text: "Often mistaken for a simple infection, this can indicate a stone sitting near the bladder.",
  },
  {
    icon: "waves",
    title: "Pain that comes in waves",
    text: "Colicky pain that intensifies, eases, then returns — the classic sign of a stone actively moving through the urinary tract.",
  },
  {
    icon: "cloud-drizzle",
    title: "Cloudy or foul-smelling urine",
    text: "Can indicate a urinary tract infection, which frequently accompanies or is triggered by stone formation.",
  },
];

const symptomFaqs = faqs.filter((f) => f.category === "Symptoms");

export default function SymptomsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Symptoms", href: "/symptoms" }]} />
      <PageHero
        eyebrow="Kidney Stones"
        title="Kidney Stone Symptoms"
        description="Not every stone causes pain — but when it does, it's unmistakable. Here's what to watch for, from the earliest signs to symptoms that mean go to the emergency room now."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {symptoms.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="h-full rounded-3xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <DynamicIcon name={s.icon} className="h-5.5 w-5.5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal className="flex items-start gap-4 rounded-3xl border border-destructive/30 bg-destructive/5 p-6">
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-destructive" aria-hidden="true" />
          <div>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Seek emergency care immediately if you have:
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-foreground/90">
              <li>Pain so severe you can&apos;t sit still or find a comfortable position</li>
              <li>Fever with chills alongside stone pain</li>
              <li>Persistent vomiting that prevents you from keeping fluids down</li>
              <li>Inability to urinate at all</li>
            </ul>
            <a
              href={contactInfo.emergencyPhoneHref}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-destructive"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Emergency Line: {contactInfo.emergencyPhone}
            </a>
          </div>
        </Reveal>
      </section>

      <section className="bg-tint/40 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Symptom questions, answered" align="center" />
          <Reveal delay={0.1} className="mt-8">
            <FAQAccordion faqs={symptomFaqs} idPrefix="symptom-faq" />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Recognise these symptoms?"
        description="A same-day ultrasound can usually tell us what we're dealing with. Don't wait for the pain to peak."
      />
    </>
  );
}
