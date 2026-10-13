"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function SignatureSection() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="section-container pb-scale-12 lg:pb-scale-24">
      <div className="relative rounded-[32px] overflow-hidden bg-bg-2 grid lg:grid-cols-[1.1fr_1fr] min-h-[420px] shadow-2xl border border-white/5">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Left — Image Showcase */}
        <div className={`relative min-h-[280px] lg:min-h-full overflow-hidden reveal reveal-left ${isVisible ? "visible" : ""}`}>
          <Image
            src="/hero-panipuri.jpg"
            alt="Kesar signature royal pani puri platter"
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[var(--bg-2)]/90" />

          {/* Floating secret recipe badge */}
          <div className="absolute top-6 left-6 z-10 flex items-center gap-scale-2 rounded-full bg-black/40 backdrop-blur-md px-scale-4 py-scale-2 border border-white/10 text-white shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-ping" />
            <span className="para-text-xs font-semibold tracking-wide">Secret 12-Spice Blend</span>
          </div>
        </div>

        {/* Right — Text Content */}
        <div className="relative flex flex-col justify-center p-scale-8 sm:p-scale-12 lg:p-scale-16 z-10">
          <div className={`inline-flex items-center gap-scale-2 px-scale-3 py-scale-1 rounded-full bg-secondary/15 w-fit mb-scale-4 reveal reveal-right ${isVisible ? "visible" : ""}`}>
            <span className="text-secondary text-xs">✨</span>
            <p className="para-text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              Chef&apos;s Signature
            </p>
          </div>

          <h3 className={`h2 text-text-neutral reveal reveal-right ${isVisible ? "visible" : ""} delay-100`}>
            Kesar Royal Gold <br className="hidden sm:inline" />
            <span className="text-secondary">Pani Puri Platter</span>
          </h3>

          <p className={`para-text-md mt-scale-4 text-text-neutral/80 max-w-md leading-relaxed reveal reveal-right ${isVisible ? "visible" : ""} delay-200`}>
            A culinary masterpiece harmonizing 12 slow-roasted mountain spices, cold-pressed mint-coriander essence, and hand-churned hing water for an explosive burst of royalty in every bite.
          </p>

          {/* Feature points */}
          <div className={`mt-scale-6 grid grid-cols-2 gap-scale-3 max-w-md reveal reveal-right ${isVisible ? "visible" : ""} delay-300`}>
            {[
              { icon: "🌿", text: "Organic Herbs" },
              { icon: "🏺", text: "Claypot Infused" },
              { icon: "⚡", text: "Ultra Crispy Puris" },
              { icon: "🍯", text: "Aged Date Chutney" },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-scale-2 rounded-xl bg-white/5 border border-white/10 px-scale-3 py-scale-2 text-text-neutral">
                <span className="text-sm">{f.icon}</span>
                <span className="para-text-xs font-medium text-primary-foreground!">{f.text}</span>
              </div>
            ))}
          </div>

          <div className={`mt-scale-8 flex flex-wrap items-center gap-scale-4 reveal reveal-right ${isVisible ? "visible" : ""} delay-400`}>
            <a
              className="btn btn-secondary btn-md text-primary-foreground! group shadow-lg shadow-secondary/10 hover:shadow-secondary/20 hover:-translate-y-0.5 transition-all duration-300"
              href="#menu"
            >
              <span>Taste The Royal Edition</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <span className="para-text-xs text-text-neutral/60 font-medium">Limited batches crafted fresh every hour</span>
          </div>
        </div>
      </div>
    </section>
  );
}
