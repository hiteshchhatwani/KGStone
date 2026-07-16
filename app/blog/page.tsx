import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { BlogCard } from "@/components/blog-card";
import { CTASection } from "@/components/cta-section";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Kidney stone symptoms, treatment, recovery and prevention — practical, doctor-informed articles from KG Stone Hospital, Ajmer.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
      <PageHero
        eyebrow="KG Stone Blog"
        title="Understand your stone, before your visit"
        description="Practical, doctor-informed articles on kidney stone symptoms, treatment, recovery and prevention."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 6) * 0.05}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
