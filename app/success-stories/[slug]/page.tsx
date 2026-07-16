import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { User, MapPin, Stethoscope, Ruler } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { PlaceholderImage } from "@/components/placeholder-image";
import { CTASection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { successStories, getSuccessStoryBySlug } from "@/content/success-stories";
import { articleSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return successStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getSuccessStoryBySlug(slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.summary,
    alternates: { canonical: `/success-stories/${story.slug}` },
  };
}

export default async function SuccessStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getSuccessStoryBySlug(slug);
  if (!story) notFound();

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: story.title,
          description: story.summary,
          url: `${siteConfig.url}/success-stories/${story.slug}`,
          publishedAt: new Date().toISOString(),
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Success Stories", href: "/success-stories" },
          { name: story.name, href: `/success-stories/${story.slug}` },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {story.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" aria-hidden="true" />
              {story.name}, {story.age}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {story.city}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Stethoscope className="h-4 w-4" aria-hidden="true" />
              {story.treatment}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Ruler className="h-4 w-4" aria-hidden="true" />
              {story.stoneSize}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-8">
          <PlaceholderImage icon="badge-check" label={story.title} className="aspect-video w-full" />
        </Reveal>

        <Reveal delay={0.12} className="prose prose-sm mt-8 max-w-none space-y-4 leading-relaxed text-foreground/90">
          {story.story.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </article>

      <CTASection
        title="Have a similar stone?"
        description="Every patient's journey is different — book a consultation to discuss your own treatment plan."
      />
    </>
  );
}
