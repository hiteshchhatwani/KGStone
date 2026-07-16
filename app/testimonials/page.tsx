import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { TestimonialCard } from "@/components/testimonial-card";
import { CTASection } from "@/components/cta-section";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description:
    "Read what patients across Ajmer and Rajasthan say about their kidney stone treatment experience at KG Stone Hospital.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Testimonials", href: "/testimonials" }]} />
      <PageHero
        eyebrow="Patient Voices"
        title="Patient Testimonials"
        description="In our patients' own words — real experiences from consultation through recovery."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 6) * 0.05}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
