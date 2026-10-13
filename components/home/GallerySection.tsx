"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: "all" | "dishes" | "vibe";
  likes: number;
  tag: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/hero-panipuri.jpg",
    alt: "Pani puri platter with spiced water bowls",
    category: "dishes",
    likes: 842,
    tag: "Signature Platter",
  },
  {
    id: 2,
    src: "/about-panipuri.jpg",
    alt: "Traditional artisanal spices and masala blend",
    category: "dishes",
    likes: 624,
    tag: "Fresh Ingredients",
  },
  {
    id: 3,
    src: "/menu-classic.jpg",
    alt: "Golden crisp hollow puris waiting to be filled",
    category: "dishes",
    likes: 915,
    tag: "Crispy Puris",
  },
  {
    id: 4,
    src: "/menu-dahi.jpg",
    alt: "Chilled yogurt dahi puri with sweet tamarind drizzle",
    category: "dishes",
    likes: 1208,
    tag: "Royal Dahi Puri",
  },
  {
    id: 5,
    src: "/menu-cheese.jpg",
    alt: "Molten cheese fusion street food",
    category: "vibe",
    likes: 749,
    tag: "Fusion Delight",
  },
  {
    id: 6,
    src: "/hero-panipuri.jpg",
    alt: "Vibrant outlet evening dining experience",
    category: "vibe",
    likes: 1043,
    tag: "Evening Crowd",
  },
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "dishes" | "vibe">("all");
  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const toggleLike = (id: number) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filtered = galleryItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section id="gallery" ref={sectionRef} className="section-container section-padding">
      {/* Header */}
      <div className="mb-scale-10 flex flex-wrap items-end justify-between gap-scale-6">
        <div>
          <div className={`inline-flex items-center gap-scale-2 px-scale-3 py-scale-1 rounded-full bg-primary/10 mb-scale-3 reveal reveal-up ${isVisible ? "visible" : ""}`}>
            <span className="text-primary text-xs">📸</span>
            <p className="para-text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Social Moments
            </p>
          </div>
          <h2 className={`h2 reveal reveal-up ${isVisible ? "visible" : ""} delay-100`}>
            Moments at Kesar
          </h2>
          <p className={`para-text-md mt-scale-2 max-w-lg text-text-secondary reveal reveal-up ${isVisible ? "visible" : ""} delay-200`}>
            Tag <span className="font-semibold text-primary">@kesarpanipuri</span> on Instagram to get featured on our community wall!
          </p>
        </div>

        {/* Filter Pills */}
        <div className={`flex items-center gap-scale-2 p-scale-1.5 rounded-full bg-card border border-border shadow-sm reveal reveal-up ${isVisible ? "visible" : ""} delay-300`}>
          {[
            { key: "all", label: "All Photos" },
            { key: "dishes", label: "Cuisine" },
            { key: "vibe", label: "Experience" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as "all" | "dishes" | "vibe")}
              className={`px-scale-4 py-scale-2 rounded-full para-text-xs font-semibold transition-all duration-300 ${
                activeFilter === tab.key
                  ? "bg-primary text-text-neutral shadow-sm scale-105"
                  : "text-text-secondary hover:text-text-foreground hover:bg-muted/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-scale-4 sm:grid-cols-3 lg:grid-cols-6">
        {filtered.map((item, idx) => {
          const isLiked = likedIds.includes(item.id);
          return (
            <div
              key={item.id}
              className={`group relative aspect-square overflow-hidden rounded-[20px] bg-muted shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 reveal reveal-scale ${
                isVisible ? "visible" : ""
              } delay-${Math.min((idx + 1) * 100, 500)}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-scale-3.5 flex flex-col justify-between">
                <span className="self-start text-[11px] font-bold text-white bg-white/20 backdrop-blur-md px-scale-2.5 py-scale-0.5 rounded-full">
                  {item.tag}
                </span>

                <div className="flex items-center justify-between text-white">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(item.id);
                    }}
                    className="flex items-center gap-scale-1.5 text-xs font-medium hover:scale-110 transition-transform"
                  >
                    <span className={isLiked ? "text-red-500" : "text-white"}>
                      {isLiked ? "❤️" : "🤍"}
                    </span>
                    <span className="text-[11px]">{item.likes + (isLiked ? 1 : 0)}</span>
                  </button>

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-75">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
