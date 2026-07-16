import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { PlaceholderImage } from "@/components/placeholder-image";
import { RichText } from "@/components/rich-text";
import { CTASection } from "@/components/cta-section";
import { BlogCard } from "@/components/blog-card";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";
import { articleSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const CATEGORY_ICON: Record<string, string> = {
  Symptoms: "stethoscope",
  "Laser Surgery": "zap",
  Prevention: "shield-check",
  Recovery: "heart-pulse",
  ESWL: "waves",
  "Pain Relief": "pill",
  Diagnosis: "scan-line",
  PCNL: "scan",
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.metaDescription,
          url: `${siteConfig.url}/blog/${post.slug}`,
          publishedAt: post.publishedAt,
        })}
      />
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
            {post.category}
          </span>
          <h1 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              <time dateTime={post.publishedAt}>{publishedDate}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-8">
          <PlaceholderImage
            icon={CATEGORY_ICON[post.category] ?? "newspaper"}
            label={post.title}
            className="aspect-video w-full"
          />
        </Reveal>

        <Reveal delay={0.12} className="mt-8">
          <RichText paragraphs={post.content} />
        </Reveal>
      </article>

      <section className="bg-tint/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              More from the blog
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
            >
              View all
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
