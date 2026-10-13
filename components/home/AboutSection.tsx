"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function AboutSection({ menuHref = "#menu" }: { menuHref?: string }) {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="bg-bg-3 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/15 rounded-full blur-[100px]" />

      <div ref={sectionRef} className="section-container section-padding grid items-center gap-scale-6 lg:grid-cols-2">
        {/* Left — Image */}
        <div className={`relative flex min-h-[300px] items-center justify-center rounded-[28px] overflow-hidden lg:min-h-[420px] shadow-xl reveal reveal-left ${isVisible ? "visible" : ""}`}>
          <Image
            src="/about-panipuri.jpg"
            alt="Pani puri ingredients arranged beautifully on a clay plate"
            fill
            className="object-cover transition-transform duration-[2s] hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Overlay badge */}
          <div className="absolute bottom-5 left-5 z-10 bg-white/90 backdrop-blur-md rounded-2xl px-scale-5 py-scale-3 shadow-lg">
            <p className="para-text-xs font-bold text-primary">🏆 Since 2018</p>
            <p className="para-text-xs text-text-secondary text-[12px]">Serving happiness daily</p>
          </div>
        </div>

        {/* Right — Text */}
        <div>
          <p className={`para-text-xs mb-scale-3 font-bold uppercase tracking-[0.22em] text-primary reveal reveal-right ${isVisible ? "visible" : ""}`}>
            About Kesar
          </p>
          <h2 className={`h2 max-w-xl reveal reveal-right ${isVisible ? "visible" : ""} delay-100`}>
            More Than Just Pani Puri.{" "}
            <span className="text-primary">It&apos;s a Feeling.</span>
          </h2>
          <p className={`para-text-md mt-scale-5 max-w-xl text-text-secondary reveal reveal-right ${isVisible ? "visible" : ""} delay-200`}>
            Kesar brings you the authentic taste of Indian street food, crafted
            with love and the finest ingredients. Our pani puri is a perfect blend
            of tradition, flavor and freshness — a bite of happiness in every
            serving.
          </p>
          <Link className={`btn btn-secondary btn-sm mt-scale-7 group/btn hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md reveal reveal-right ${isVisible ? "visible" : ""} delay-300`} href={menuHref}>
            <span>Learn More</span>
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
