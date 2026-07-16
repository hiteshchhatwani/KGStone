"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { PlaceholderImage } from "@/components/placeholder-image";
import { galleryItems, galleryCategories, type GalleryItem } from "@/content/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>("All");

  const filtered: GalleryItem[] =
    active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ease-out",
              active === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <Reveal key={item.title} delay={(i % 8) * 0.03}>
            <div>
              <PlaceholderImage icon={item.icon} label={item.title} className="aspect-square w-full" />
              <p className="mt-2 text-xs font-medium text-muted-foreground">{item.title}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
