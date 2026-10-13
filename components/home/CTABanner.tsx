"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CTABanner() {
  const [copied, setCopied] = useState(false);
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const handleCopyCode = () => {
    navigator.clipboard?.writeText?.("CRISPY20");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={sectionRef} className="section-container pb-scale-12 lg:pb-scale-24">
      <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-secondary via-secondary to-[#8ec825] p-scale-8 sm:p-scale-12 lg:p-scale-16 shadow-2xl">
        {/* Decorative background geometry */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-scale-8 items-center">
          {/* Left Decorative Image with floating badges */}
          <div className={`relative flex items-center justify-center reveal reveal-left ${isVisible ? "visible" : ""}`}>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white/60 group">
              <Image
                src="/hero-panipuri.jpg"
                alt="Pani puri bowl ready for instant online ordering"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 256px, 288px"
              />
            </div>

            {/* Coupon Code Pill */}
            <button
              onClick={handleCopyCode}
              className="absolute -bottom-2 sm:bottom-2 bg-card/95 backdrop-blur-md px-scale-4 py-scale-2.5 rounded-full shadow-xl border border-border flex items-center gap-scale-2 hover:scale-105 transition-transform"
            >
              <span className="text-sm">🏷️</span>
              <span className="para-text-xs font-extrabold text-primary tracking-wider">
                {copied ? "COPIED TO CLIPBOARD!" : "CODE: CRISPY20"}
              </span>
              <span className="text-[10px] text-text-secondary bg-muted px-scale-2 py-scale-0.5 rounded-full">
                {copied ? "✓" : "Copy"}
              </span>
            </button>
          </div>

          {/* Right Text & Order Buttons */}
          <div className="text-center lg:text-left">
            <span className={`inline-block rounded-full bg-primary/10 px-scale-3.5 py-scale-1 text-primary para-text-xs font-bold uppercase tracking-[0.2em] mb-scale-3 reveal reveal-right ${isVisible ? "visible" : ""}`}>
              ⚡ Express Delivery
            </span>

            <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight reveal reveal-right ${isVisible ? "visible" : ""} delay-100`}>
              Craving Fresh Pani Puri? <br className="hidden sm:inline" />
              Delivered in 20 Minutes!
            </h2>

            <p className={`para-text-md mt-scale-4 text-text-foreground/80 max-w-xl reveal reveal-right ${isVisible ? "visible" : ""} delay-200`}>
              Special spill-proof airtight packaging keeps puris crispy and spiced mint pani ice-cold right up to your doorstep.
            </p>

            {/* CTA Buttons */}
            <div className={`mt-scale-8 flex flex-wrap items-center justify-center lg:justify-start gap-scale-4 reveal reveal-right ${isVisible ? "visible" : ""} delay-300`}>
              <a
                href="#menu"
                className="btn btn-primary btn-md shadow-xl shadow-primary/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-scale-2"
              >
                <span>Order Online Now</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#locations"
                className="btn bg-card text-text-foreground hover:bg-card/90 border border-border/80 btn-md shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Find Store Pickup
              </a>
            </div>

            {/* Partner delivery tags */}
            <div className={`mt-scale-6 flex items-center justify-center lg:justify-start gap-scale-4 text-text-foreground/70 para-text-xs font-medium reveal reveal-right ${isVisible ? "visible" : ""} delay-400`}>
              <span>Also available on:</span>
              <span className="font-bold text-text-foreground">Swiggy</span>
              <span>•</span>
              <span className="font-bold text-text-foreground">Zomato</span>
              <span>•</span>
              <span className="font-bold text-text-foreground">MagicPin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
