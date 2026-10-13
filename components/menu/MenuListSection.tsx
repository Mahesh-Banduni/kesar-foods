"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon, StarIcon, SpiceIcon } from "@/components/shared/icons";

const categories = [
  { value: "all", label: "All Items" },
  { value: "classic", label: "Classic Puris" },
  { value: "fusion", label: "Fusion Flavors" },
  { value: "special", label: "Street Specials" },
  { value: "combos", label: "Platters & Combos" },
  { value: "drinks", label: "Drinks" },
];

const menuItems = [
  {
    category: "classic",
    image: "/panipuri-platter.jpg",
    alt: "Classic pani puri with spiced mint water",
    title: "Classic Pani Puri",
    description: "Crispy puris filled with spicy tangy mint pani, seasoned potatoes, and sprouted moong.",
    price: "$3.00",
    badge: "Bestseller",
    rating: "4.9",
    spice: 2,
  },
  {
    category: "classic",
    image: "/dahi-puri.jpg",
    alt: "Royal dahi puri with chilled yogurt and pomegranate",
    title: "Royal Dahi Puri",
    description: "Crisp puris loaded with chilled spiced whipped yogurt, sweet tamarind, and pomegranate.",
    price: "$3.00",
    badge: "Popular",
    rating: "4.9",
    spice: 1,
  },
  {
    category: "classic",
    image: "/sev-puri.jpg",
    alt: "Sev batata puri topped with crisp sev",
    title: "Sev Batata Puri",
    description: "Soft puris layered with mashed potato, tangy chutneys and a generous handful of nylon sev.",
    price: "$3.25",
    rating: "4.7",
    spice: 2,
  },
  {
    category: "classic",
    image: "/puri-shells.jpg",
    alt: "Hing jeera puri with roasted cumin water",
    title: "Hing Jeera Puri",
    description: "A mellow, aromatic pani built on roasted cumin and asafoetida — gentle heat, deep flavour.",
    price: "$3.00",
    rating: "4.6",
    spice: 1,
  },
  {
    category: "fusion",
    image: "/menu-cheese.jpg",
    alt: "Cheese loaded puri with molten cheese",
    title: "Cheese Loaded Puri",
    description: "Rich, creamy molten cheese blend topped with herb crust and sweet-tangy chutney.",
    price: "$3.50",
    badge: "Chef's Special",
    rating: "4.8",
    spice: 1,
  },
  {
    category: "fusion",
    image: "/golgappa-spread.jpg",
    alt: "Exotic fusion puri with avocado mousse",
    title: "Exotic Fusion Puri",
    description: "Modern twist with avocado mousse filling, exotic spices, and refreshing jaljeera mist.",
    price: "$4.00",
    badge: "New",
    rating: "4.8",
    spice: 3,
  },
  {
    category: "fusion",
    image: "/delhi-chaat.jpg",
    alt: "Tandoori paneer puri with charred paneer",
    title: "Tandoori Paneer Puri",
    description: "Smoky charred paneer folded into a mint-yogurt base with a dusting of chaat masala.",
    price: "$4.25",
    rating: "4.7",
    spice: 2,
  },
  {
    category: "special",
    image: "/bhel-puri.jpg",
    alt: "Mumbai bhel puri with puffed rice and sev",
    title: "Mumbai Bhel Puri",
    description: "Crispy puffed rice tossed with fresh onions, cilantro, sev, and signature tangy chutneys.",
    price: "$3.00",
    rating: "4.7",
    spice: 2,
  },
  {
    category: "special",
    image: "/ragda-pattice.jpg",
    alt: "Ragda pattice puri with white pea curry",
    title: "Ragda Pattice Puri",
    description: "Warm white-pea ragda over a crisp potato pattice, finished with onion and tamarind.",
    price: "$3.75",
    rating: "4.8",
    spice: 2,
  },
  {
    category: "special",
    image: "/papdi-chaat.jpg",
    alt: "Masala sukha puri dry chaat",
    title: "Masala Sukha Puri",
    description: "A dry, travel-friendly chaat packed with masala peanuts, sev, and a fiery spice mix.",
    price: "$3.25",
    rating: "4.6",
    spice: 3,
  },
  {
    category: "combos",
    image: "/golgappa-shots.jpg",
    alt: "Kesar tasting platter of six assorted puris",
    title: "Kesar Tasting Platter",
    description: "Six assorted puris — classic, dahi, cheese, bhel and two chef picks — with two pani flavours.",
    price: "$8.50",
    badge: "Best Value",
    rating: "4.9",
    spice: 0,
  },
  {
    category: "combos",
    image: "/dahi-sev-puri.jpg",
    alt: "Family feast box of puris and pani",
    title: "Family Feast Box",
    description: "Thirty puris, four pani flavours, and all the chutneys — built for sharing at home.",
    price: "$15.00",
    rating: "4.8",
    spice: 0,
  },
  {
    category: "drinks",
    image: "/jaljeera.jpg",
    alt: "Chilled masala jaljeera drink",
    title: "Masala Jaljeera",
    description: "Our signature tangy cumin-mint cooler — the same pani spirit, served as a drink.",
    price: "$2.50",
    rating: "4.7",
    spice: 0,
  },
  {
    category: "drinks",
    image: "/lassi.jpg",
    alt: "Sweet lassi served chilled",
    title: "Sweet Lassi",
    description: "Thick hand-churned yogurt, lightly sweetened and topped with a whisper of cardamom.",
    price: "$2.75",
    rating: "4.8",
    spice: 0,
  },
  {
    category: "drinks",
    image: "/falooda.jpg",
    alt: "Rose falooda dessert drink",
    title: "Rose Falooda",
    description: "Chilled rose milk with vermicelli, basil seeds and a scoop of kulfi on top.",
    price: "$3.50",
    badge: "New",
    rating: "4.9",
    spice: 0,
  },
];

export function MenuListSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <section className="section-padding" id="menu-list">
      <div className="section-container">
        {/* Header */}
        <div className="mb-scale-lg-12 flex flex-wrap items-end justify-between gap-scale-6">
          <div className="max-w-2xl">
            <h2 className="h2">Our Signature Pani Puri Varieties</h2>
            <p className="para-text-md mt-scale-3 text-text-secondary">
              Hand-crafted crispy puris served with fresh homemade mint water,
              sweet tamarind drizzle, and gourmet artisanal fillings.
            </p>
          </div>

          {/* Filter bar */}
          <div
            className="flex flex-wrap gap-scale-2"
            role="group"
            aria-label="Filter menu by category"
          >
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

        {/* Menu grid */}
        <div className="grid gap-scale-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/20"
            >
              {/* Media */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 rounded-button bg-primary px-scale-3 py-scale-1 para-text-xs font-semibold text-primary-foreground shadow-md">
                    {item.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 flex items-center gap-scale-1 rounded-button bg-background/90 px-scale-2 py-scale-1 para-text-xs font-semibold text-text-primary backdrop-blur-sm">
                  <span className="text-yellow-500">★</span>
                  {item.rating}
                </span>
                {item.spice > 0 && (
                  <span className="absolute bottom-3 right-3 flex items-center gap-scale-0.5">
                    {Array.from({ length: item.spice }).map((_, i) => (
                      <SpiceIcon
                        key={i}
                        className="size-[14px] text-orange-500"
                      />
                    ))}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between gap-scale-4 p-scale-4">
                <div>
                  <h3 className="h6">{item.title}</h3>
                  <p className="para-text-xs mt-scale-1 line-clamp-2 text-text-secondary">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-scale-3">
                  <span>
                    <span className="para-text-xs text-text-muted">Price</span>
                    <span className="ml-scale-2 h6 text-primary">
                      {item.price}
                    </span>
                  </span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-scale-1 rounded-button bg-primary/10 px-scale-3 py-scale-2 para-text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    Order
                    <ArrowRightIcon className="size-[13px]" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
