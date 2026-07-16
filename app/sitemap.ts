import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { blogPosts } from "@/content/blog";
import { successStories } from "@/content/success-stories";
import { siteConfig } from "@/lib/site-config";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about-hospital", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about-doctor", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/treatment", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/symptoms", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/causes", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/prevention-tips", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/gallery", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/success-stories", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/faqs", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/appointment", priority: 0.9, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((r) => ({
      url: `${siteConfig.url}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...services.map((s) => ({
      url: `${siteConfig.url}/treatment/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...successStories.map((s) => ({
      url: `${siteConfig.url}/success-stories/${s.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...blogPosts.map((p) => ({
      url: `${siteConfig.url}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
