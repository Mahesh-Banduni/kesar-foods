"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function HeroSection() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="bg-bg-4">
      <section
        id="top"
        ref={sectionRef}
        className="section-container relative grid items-center gap-scale-6 py-scale-md-10 lg:grid-cols-[1fr_1.1fr] lg:py-scale-16 xl:py-scale-20"
      >
        {/* Decorative background elements */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-10 right-20 w-56 h-56 bg-accent/30 rounded-full blur-[80px] -z-10" />

        {/* Left — Text */}
        <div>
          <p className={`para-text-xs mb-scale-4 font-bold uppercase tracking-[0.22em] text-primary reveal reveal-up ${isVisible ? "visible" : ""}`}>
            Authentic Indian Street Food
          </p>
          <h1 className={`hero-h max-w-xl reveal reveal-up ${isVisible ? "visible" : ""} delay-100`}>
            Crispy Bites,{" "}
            <br />
            <span className="text-primary relative">
              Big Flavors.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8C30 3 60 2 100 5C140 8 170 4 198 6" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <h4 className={`h4 mt-scale-3 max-w-lg text-text-foreground font-medium reveal reveal-up ${isVisible ? "visible" : ""} delay-200`}>
            Fresh Pani Puri. Made to Crave.
          </h4>
          <p className={`para-text-md mt-scale-5 max-w-lg text-text-secondary reveal reveal-up ${isVisible ? "visible" : ""} delay-300`}>
            Crispy puris filled with delicious flavors, fresh ingredients, and tangy
            pani. Kesar is bursting with the perfect mix of spice, crunch, and
            freshness.
          </p>

          {/* Buttons */}
          <div className={`mt-scale-8 flex flex-wrap gap-scale-6 reveal reveal-up ${isVisible ? "visible" : ""} delay-400`}>
            <a className="btn btn-primary btn-md group/btn shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5" href="#menu">
              <span>Order Now</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a className="btn btn-secondary btn-md hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md" href="#menu">
              Explore Menu
            </a>
          </div>

          {/* Feature Pills */}
          <div className={`mt-scale-10 grid max-w-xl grid-cols-3 gap-scale-4 border-t border-primary/10 pt-scale-6 reveal reveal-up ${isVisible ? "visible" : ""} delay-500`}>
            {[
              { emoji: "🥘", label: "Fresh", bold: "Ingredients" },
              { emoji: "🍛", label: "Authentic", bold: "Indian Taste" },
              { emoji: "✨", label: "Hygienic", bold: "Preparation" },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-scale-3 group/pill">
                <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-accent text-lg shadow-sm group-hover/pill:shadow-md group-hover/pill:scale-110 transition-all duration-300">
                  {item.emoji}
                </span>
                <span className="para-text-xs text-text-secondary">
                  {item.label}
                  <br />
                  <strong className="text-primary font-semibold">{item.bold}</strong>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Hero Image */}
        <div className={`relative flex min-h-[340px] items-center justify-center overflow-hidden lg:min-h-[600px] reveal reveal-scale ${isVisible ? "visible" : ""} delay-200`}>
          <Image
            src="/bg-image.png"
            alt="Kesar signature pani puri platter with golden crispy puris and spiced water"
            fill
            className="object-cover transition-transform duration-[1.5s] hover:scale-105"
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          {/* Decorative overlay text */}
          {/* <div className="absolute top-6 right-6 z-10 max-w-[170px] text-right">
            <p className="font-heading text-white text-lg font-bold leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]" style={{ fontStyle: "italic" }}>
              Pani Puri,
              <br />
              Happiness in
              <br />
              every bite!
            </p>
          </div> */}
          {/* Gradient overlay */}
          {/* <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 via-black/10 to-transparent" /> */}
          {/* Decorative floating leaf */}
          {/* <div className="absolute top-4 left-4 z-10 animate-float">
            <span className="text-3xl drop-shadow-md">🌿</span>
          </div> */}
        </div>
      </section>
    </div>
  );
}
