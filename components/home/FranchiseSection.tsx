"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const perks = [
  { metric: "50+", label: "Operating Outlets", icon: "🏬" },
  { metric: "35%", label: "Avg. ROI / Yr", icon: "📈" },
  { metric: "30 Days", label: "Fast Launch Setup", icon: "🚀" },
  { metric: "100%", label: "Raw Material Support", icon: "🌿" },
];

export function FranchiseSection({ contactHref = "#contact" }: { contactHref?: string }) {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="franchise" ref={sectionRef} className="section-container pb-scale-12 lg:pb-scale-24">
      <div className="relative rounded-[32px] overflow-hidden bg-accent/80 border border-primary/20 p-scale-8 sm:p-scale-12 lg:p-scale-16">
        {/* Decorative corner glows */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-scale-10 items-center relative z-10">
          {/* Left — Image Gallery Strip */}
          <div className={`relative grid grid-cols-2 gap-scale-4 reveal reveal-left ${isVisible ? "visible" : ""}`}>
            <div className="space-y-scale-4">
              <div className="relative h-48 sm:h-56 rounded-[22px] overflow-hidden shadow-lg group">
                <Image
                  src="/hero-panipuri.jpg"
                  alt="Modern Kesar restaurant outlet counter"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-32 sm:h-40 rounded-[22px] overflow-hidden shadow-md group">
                <Image
                  src="/menu-classic.jpg"
                  alt="Freshly served pani puris"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            <div className="space-y-scale-4 pt-scale-6">
              <div className="relative h-36 sm:h-44 rounded-[22px] overflow-hidden shadow-md group">
                <Image
                  src="/about-panipuri.jpg"
                  alt="Artisanal preparation spices"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-44 sm:h-52 rounded-[22px] overflow-hidden shadow-lg group">
                <Image
                  src="/menu-dahi.jpg"
                  alt="Crowd favorite dishes"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Overlapping trust badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-md rounded-2xl p-scale-4 shadow-xl border border-border text-center pointer-events-none">
              <p className="font-heading text-2xl font-extrabold text-primary">#1</p>
              <p className="para-text-xs font-bold text-text-foreground text-[11px] whitespace-nowrap">Fastest Growing Pani Puri Brand</p>
            </div>
          </div>

          {/* Right — Content & Perks */}
          <div>
            <div className={`inline-flex items-center gap-scale-2 px-scale-3 py-scale-1 rounded-full bg-primary/10 mb-scale-3 reveal reveal-right ${isVisible ? "visible" : ""}`}>
              <span className="text-primary text-xs">💼</span>
              <p className="para-text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Partner With Us
              </p>
            </div>

            <h2 className={`h2 reveal reveal-right ${isVisible ? "visible" : ""} delay-100`}>
              Own a High-Growth <br />
              <span className="text-primary">Kesar Franchise</span>
            </h2>

            <p className={`para-text-md mt-scale-4 text-text-secondary leading-relaxed reveal reveal-right ${isVisible ? "visible" : ""} delay-200`}>
              Join India&apos;s most beloved contemporary street food movement. We provide complete turnkey kitchen setup, proprietary automated pani dispensers, supply chain backing, and nationwide branding.
            </p>

            {/* Metrics grid */}
            <div className={`mt-scale-6 grid grid-cols-2 gap-scale-3.5 reveal reveal-right ${isVisible ? "visible" : ""} delay-300`}>
              {perks.map((p, i) => (
                <div key={i} className="rounded-2xl bg-card/90 border border-border/80 p-scale-3.5 shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
                  <div className="flex items-center gap-scale-2">
                    <span className="text-base">{p.icon}</span>
                    <span className="font-heading text-lg font-extrabold text-primary">{p.metric}</span>
                  </div>
                  <p className="para-text-xs text-text-secondary mt-scale-1 font-medium">{p.label}</p>
                </div>
              ))}
            </div>

            <div className={`mt-scale-8 flex flex-wrap items-center gap-scale-4 reveal reveal-right ${isVisible ? "visible" : ""} delay-400`}>
              <Link
                className="btn btn-primary btn-md shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                href={contactHref}
              >
                <span>Download Franchise Deck</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </Link>
              <Link
                className="btn btn-secondary btn-md hover:-translate-y-0.5 transition-all duration-300"
                href={contactHref}
              >
                Inquire Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
