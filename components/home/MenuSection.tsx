"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface MenuItem {
  id: string;
  name: string;
  category: "all" | "classic" | "special" | "fusion";
  detail: string;
  price: string;
  image: string;
  spiceLevel: number;
  badge?: string;
  rating: number;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Classic Pani Puri",
    category: "classic",
    detail: "Crispy puris filled with spicy tangy mint pani, seasoned potatoes, and sprouted moong.",
    price: "$3.00",
    image: "/menu-classic.jpg",
    spiceLevel: 2,
    badge: "Bestseller",
    rating: 4.9,
  },
  {
    id: "2",
    name: "Cheese Loaded Puri",
    category: "fusion",
    detail: "Rich, creamy molten cheese blend topped with herb crust and sweet-tangy chutney.",
    price: "$3.50",
    image: "/menu-cheese.jpg",
    spiceLevel: 1,
    badge: "Chef's Special",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Royal Dahi Puri",
    category: "classic",
    detail: "Crisp puris loaded with chilled spiced whipped yogurt, sweet tamarind, and pomegranate.",
    price: "$3.00",
    image: "/menu-dahi.jpg",
    spiceLevel: 1,
    badge: "Popular",
    rating: 4.9,
  },
  {
    id: "4",
    name: "Mumbai Bhel Puri",
    category: "special",
    detail: "Crispy puffed rice tossed with fresh onions, cilantro, sev, and signature tangy chutneys.",
    price: "$3.00",
    image: "/menu-classic.jpg",
    spiceLevel: 2,
    rating: 4.7,
  },
  {
    id: "5",
    name: "Exotic Fusion Puri",
    category: "fusion",
    detail: "Modern twist with avocado mousse filling, exotic spices, and refreshing jaljeera mist.",
    price: "$4.00",
    image: "/menu-cheese.jpg",
    spiceLevel: 3,
    badge: "New",
    rating: 4.8,
  },
];

const categories = [
  { id: "all", label: "All Items" },
  { id: "classic", label: "Classic Puris" },
  { id: "fusion", label: "Fusion Flavors" },
  { id: "special", label: "Street Specials" },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.08 });

  const filteredItems = menuItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const handleOrder = (id: string) => {
    setAddedItem(id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section id="menu" ref={sectionRef} className="section-container section-padding relative">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header row */}
      <div className="mb-scale-10 flex flex-wrap items-end justify-between gap-scale-6">
        <div>
          <div className={`inline-flex items-center gap-scale-2 px-scale-3 py-scale-1 rounded-full bg-primary/10 mb-scale-3 reveal reveal-up ${isVisible ? "visible" : ""}`}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="para-text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Fresh Daily Menu
            </p>
          </div>
          <h2 className={`h2 reveal reveal-up ${isVisible ? "visible" : ""} delay-100`}>
            Our Signature Pani Puri Varieties
          </h2>
          <p className={`para-text-md mt-scale-2 max-w-xl text-text-secondary reveal reveal-up ${isVisible ? "visible" : ""} delay-200`}>
            Hand-crafted crispy puris served with fresh homemade mint water, sweet tamarind drizzle, and gourmet artisanal fillings.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className={`flex flex-wrap items-center gap-scale-2 p-scale-1.5 rounded-full bg-card border border-border shadow-sm reveal reveal-up ${isVisible ? "visible" : ""} delay-300`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-scale-4 py-scale-2 rounded-full para-text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-text-neutral shadow-sm scale-105"
                  : "text-text-secondary hover:text-text-foreground hover:bg-muted/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid gap-scale-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {filteredItems.map((item, index) => {
          const isJustAdded = addedItem === item.id;
          return (
            <div
              key={item.id}
              className={`group/card relative flex flex-col overflow-hidden rounded-[20px] border border-border/80 bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_18px_38px_rgba(0,0,0,0.08)] reveal reveal-up ${
                isVisible ? "visible" : ""
              } delay-${Math.min((index + 1) * 100, 500)}`}
            >
              {/* Image Container with zoom & badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                {/* Badge if present */}
                {item.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-secondary px-scale-2.5 py-scale-0.5 para-text-xs font-bold text-text-foreground shadow-md backdrop-blur-sm">
                    {item.badge}
                  </span>
                )}

                {/* Rating pill */}
                <div className="absolute top-3 right-3 flex items-center gap-scale-1 rounded-full bg-white/90 px-scale-2 py-scale-0.5 backdrop-blur-md shadow-sm">
                  <span className="text-amber-500 text-xs">★</span>
                  <span className="para-text-xs font-bold text-text-foreground text-[11px]">
                    {item.rating}
                  </span>
                </div>

                {/* Spice Level indicator */}
                <div className="absolute bottom-2.5 left-3 flex items-center gap-scale-0.5">
                  {Array.from({ length: item.spiceLevel }).map((_, i) => (
                    <span key={i} className="text-xs filter drop-shadow">🌶️</span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-scale-5">
                <div>
                  <h3 className="h4 text-[17px] font-bold text-text-foreground group-hover/card:text-primary transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="para-text-xs mt-scale-2 line-clamp-2 text-text-secondary leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Price & Action */}
                <div className="mt-scale-5 flex items-center justify-between pt-scale-3 border-t border-border/60">
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-text-secondary font-medium">Price</span>
                    <span className="font-heading text-lg font-extrabold text-primary">
                      {item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOrder(item.id)}
                    className={`relative overflow-hidden rounded-full px-scale-3.5 py-scale-1.5 para-text-xs font-bold transition-all duration-300 flex items-center gap-scale-1.5 ${
                      isJustAdded
                        ? "bg-secondary text-text-foreground scale-95"
                        : "bg-primary text-text-neutral hover:bg-primary/90 hover:shadow-md hover:scale-105 active:scale-95"
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <svg className="w-3.5 h-3.5 text-primary stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <span>Order</span>
                        <svg className="w-3 h-3 transition-transform duration-300 group-hover/card:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
