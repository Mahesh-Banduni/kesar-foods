"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote:
      "The crunch of the puris and the temperature of the mint water is perfection. Absolutely the finest pani puri in the country!",
    name: "Priya Sharma",
    role: "Food Blogger & Critic",
    avatar: "/menu-classic.jpg",
    rating: 5,
    tag: "Verified Customer",
  },
  {
    quote:
      "The Cheese Loaded Puri blew my mind! You would never think molten cheese could blend so well with traditional spicy hing pani.",
    name: "Rahul Verma",
    role: "Tech Entrepreneur",
    avatar: "/menu-cheese.jpg",
    rating: 5,
    tag: "Regular Visitor",
  },
  {
    quote:
      "Hygiene standards here are unmatched. Automated water taps, gloves, pristine counters, and bursting flavors in every single puri.",
    name: "Ananya Patel",
    role: "Nutritionist",
    avatar: "/menu-dahi.jpg",
    rating: 5,
    tag: "Verified Customer",
  },
  {
    quote:
      "Their Royal Dahi Puri reminds me of old Delhi streets, but with a luxurious gourmet touch. We come here every Sunday without fail!",
    name: "Vikram Malhotra",
    role: "Architect",
    avatar: "/about-panipuri.jpg",
    rating: 5,
    tag: "Loyal Member",
  },
];

export function TestimonialsSection() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="testimonials" ref={sectionRef} className="section-container section-padding relative">
      {/* Background ambient decorative orb */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-secondary/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-scale-12">
        <div className={`inline-flex items-center gap-scale-2 px-scale-3 py-scale-1 rounded-full bg-primary/10 mb-scale-3 reveal reveal-up ${isVisible ? "visible" : ""}`}>
          <span className="text-primary text-xs">💬</span>
          <p className="para-text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Customer Love
          </p>
        </div>
        <h2 className={`h2 reveal reveal-up ${isVisible ? "visible" : ""} delay-100`}>
          Loved by Thousands of Foodies
        </h2>
        <p className={`para-text-md mt-scale-3 text-text-secondary reveal reveal-up ${isVisible ? "visible" : ""} delay-200`}>
          Don&apos;t just take our word for it — hear what our regular street food connoisseurs have to say.
        </p>

        {/* Aggregate trust badge */}
        <div className={`mt-scale-5 inline-flex items-center gap-scale-3 px-scale-4 py-scale-2 rounded-full bg-card border border-border shadow-sm reveal reveal-up ${isVisible ? "visible" : ""} delay-300`}>
          <div className="flex text-amber-500 text-sm">★★★★★</div>
          <span className="para-text-xs font-bold text-text-foreground">
            4.9 / 5.0
          </span>
          <span className="text-border">|</span>
          <span className="para-text-xs text-text-secondary font-medium">
            Over 3,200+ 5-Star Reviews
          </span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-scale-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`group relative flex flex-col justify-between rounded-[24px] border border-border bg-card p-scale-6 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-500 reveal reveal-up ${
              isVisible ? "visible" : ""
            } delay-${(idx + 1) * 100}`}
          >
            {/* Top quote icon & stars */}
            <div>
              <div className="flex items-center justify-between mb-scale-4">
                <div className="flex text-amber-500 text-xs gap-scale-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="para-text-xs font-semibold px-scale-2 py-scale-0.5 rounded-full bg-primary/10 text-primary text-[10px]">
                  {t.tag}
                </span>
              </div>

              <p className="para-text-sm text-text-foreground/90 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="mt-scale-6 flex items-center gap-scale-3 pt-scale-4 border-t border-border/60">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div>
                <p className="para-text-sm font-bold text-text-foreground">
                  {t.name}
                </p>
                <p className="para-text-xs text-text-secondary text-[11px]">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
