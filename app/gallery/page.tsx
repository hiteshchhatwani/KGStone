import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GalleryGrid } from "@/components/gallery-grid";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside KG Stone Hospital, Ajmer — our operation theatre, laser lithotripsy suite, reception and recovery facilities.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Gallery", href: "/gallery" }]} />
      <PageHero
        eyebrow="Inside KG Stone"
        title="Gallery"
        description="A look inside our facility — from the operation theatre to the recovery suite."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <GalleryGrid />
      </section>
      <CTASection />
    </>
  );
}
