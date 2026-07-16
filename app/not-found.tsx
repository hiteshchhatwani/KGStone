import Link from "next/link";
import { Home, Phone, SearchX } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/placeholder-image";
import { contactInfo } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <PlaceholderImage
        icon="search-x"
        label="Page not found"
        className="h-32 w-32"
        iconClassName="h-12 w-12"
      />
      <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
        <SearchX className="h-3.5 w-3.5" aria-hidden="true" />
        404 — Page Not Found
      </span>
      <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        We couldn&rsquo;t find that page
      </h1>
      <p className="mt-3 max-w-md text-balance text-muted-foreground">
        The page you&rsquo;re looking for may have moved or no longer exists. Let&rsquo;s get you
        back to what you need.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}>
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
        <a
          href={contactInfo.phoneHref}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-6")}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Us
        </a>
      </div>
    </section>
  );
}
