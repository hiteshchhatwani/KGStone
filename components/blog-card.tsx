import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PlaceholderImage } from "@/components/placeholder-image";
import type { BlogPost } from "@/content/blog";

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

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow duration-300 ease-out hover:shadow-md"
    >
      <PlaceholderImage
        icon={CATEGORY_ICON[post.category] ?? "newspaper"}
        label={post.title}
        className="aspect-[16/10] w-full rounded-none"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-primary">
            {post.category}
          </span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-3 line-clamp-2 font-heading text-lg font-semibold text-foreground">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Read article
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
