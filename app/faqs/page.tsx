import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { FAQAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/reveal";
import { CTASection } from "@/components/cta-section";
import { faqPageSchema } from "@/lib/schema";
import { faqs, faqCategories } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about kidney stones — symptoms, diagnosis, treatment options, recovery, prevention, cost and insurance.",
  alternates: { canonical: "/faqs" },
};

export default function FAQsPage() {
  return (
    <>
      <JsonLd data={faqPageSchema()} />
      <Breadcrumbs items={[{ name: "FAQs", href: "/faqs" }]} />
      <PageHero
        eyebrow={`${faqs.length}+ Questions Answered`}
        title="Frequently Asked Questions"
        description="Everything patients commonly ask, organised by topic."
      />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {faqCategories.map((category, ci) => {
            const items = faqs.filter((f) => f.category === category);
            return (
              <Reveal key={category} delay={ci * 0.03}>
                <h2 className="font-heading text-xl font-semibold text-foreground">{category}</h2>
                <div className="mt-4">
                  <FAQAccordion faqs={items} idPrefix={category.toLowerCase().replace(/\s+/g, "-")} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CTASection />
    </>
  );
}
