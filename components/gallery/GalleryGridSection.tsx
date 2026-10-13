"use client";

import Image from "next/image";
import { useState } from "react";
import { HeartIcon, InstagramIcon } from "@/components/shared/icons";

const categories = [
  { value: "all", label: "All Photos" },
  { value: "dishes", label: "Cuisine" },
  { value: "vibe", label: "Experience" },
];

const galleryItems = [
  { category: "dishes", src: "/panipuri-platter.jpg", alt: "Pani puri platter with spiced water bowls", tag: "Signature Platter", likes: 842 },
  { category: "dishes", src: "/about-panipuri.jpg", alt: "Traditional artisanal spices and masala blend", tag: "Fresh Ingredients", likes: 624 },
  { category: "dishes", src: "/puri-shells.jpg", alt: "Golden crisp hollow puris", tag: "Crispy Puris", likes: 915 },
  { category: "dishes", src: "/dahi-puri.jpg", alt: "Chilled yogurt dahi puri with tamarind drizzle", tag: "Royal Dahi Puri", likes: 1208 },
  { category: "vibe", src: "/golgappa-spread.jpg", alt: "Golgappa spread", tag: "Golgappa Spread", likes: 749 },
  { category: "vibe", src: "/golgappa-shots.jpg", alt: "Vibrant outlet evening dining experience", tag: "Signature Shots", likes: 1043 },
  { category: "dishes", src: "/dahi-sev-puri.jpg", alt: "Cheese loaded puri close up", tag: "Dahi Sev Puri", likes: 688 },
  { category: "dishes", src: "/sev-puri.jpg", alt: "Hand rolled puris ready to be filled", tag: "Hand-Rolled", likes: 559 },
  { category: "vibe", src: "/delhi-chaat.jpg", alt: "Spice counter preparation at the outlet", tag: "Open Kitchen", likes: 801 },
  { category: "vibe", src: "/ragda-pattice.jpg", alt: "Guests sharing a platter of puris", tag: "Sharing Plates", likes: 967 },
  { category: "vibe", src: "/papdi-chaat.jpg", alt: "Late evening counter service", tag: "Counter Service", likes: 712 },
  { category: "dishes", src: "/bhel-puri.jpg", alt: "Chef signature gold platter presentation", tag: "Street Style Bhel", likes: 1330 },
];

export function GalleryGridSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const filtered =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const toggleLike = (tag: string) =>
    setLiked((prev) => ({ ...prev, [tag]: !prev[tag] }));

  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Header + filter */}
        <div className="mb-scale-lg-10 flex flex-wrap items-end justify-between gap-scale-6">
          <div className="max-w-xl">
            <h2 className="h2">The Kesar Wall</h2>
            <p className="para-text-md mt-scale-3 text-text-secondary">
              A slice of the kitchen, the counter and the crowd — updated with
              our favourite shots.
            </p>
          </div>
          <div className="flex flex-wrap gap-scale-2" role="group" aria-label="Filter gallery">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveFilter(cat.value)}
                aria-pressed={activeFilter === cat.value}
                className={`rounded-button px-scale-4 py-scale-2 para-text-xs font-semibold transition-all duration-300 ${
                  activeFilter === cat.value
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-bg-3 text-text-secondary hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="columns-2 gap-scale-4 md:columns-3 lg:columns-4">
          {filtered.map((item) => (
            <figure
              key={item.tag}
              className="group relative mb-scale-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={480}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay */}
                <figcaption className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 via-transparent to-transparent p-scale-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="self-start rounded-button bg-white/10 px-scale-3 py-scale-1 para-text-xs font-semibold text-white backdrop-blur-sm">
                    {item.tag}
                  </span>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => toggleLike(item.tag)}
                      aria-pressed={!!liked[item.tag]}
                      className="flex items-center gap-scale-1 para-text-xs font-semibold text-white"
                    >
                      <HeartIcon
                        className={`size-[16px] transition-colors ${
                          liked[item.tag]
                            ? "fill-red-500 stroke-red-500"
                            : "stroke-white"
                        }`}
                      />
                      {item.likes + (liked[item.tag] ? 1 : 0)}
                    </button>
                    <InstagramIcon className="size-[14px] text-white" />
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
