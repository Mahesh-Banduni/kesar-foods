"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface LocationInfo {
  id: string;
  name: string;
  sub: string;
  address: string;
  hours: string;
  phone: string;
  rating: number;
}

const locations: LocationInfo[] = [
  {
    id: "delhi",
    name: "Connaught Place Flagship",
    sub: "Central Hub, New Delhi",
    address: "Block B, Inner Circle, Connaught Place, New Delhi",
    hours: "11:00 AM – 11:00 PM",
    phone: "+91 98765 43210",
    rating: 4.9,
  },
  {
    id: "mumbai",
    name: "Bandra West Bistro",
    sub: "Pali Hill, Mumbai",
    address: "Waterfield Road, Bandra West, Mumbai, Maharashtra",
    hours: "12:00 PM – 11:30 PM",
    phone: "+91 98765 43211",
    rating: 4.8,
  },
  {
    id: "bangalore",
    name: "Indiranagar Lounge",
    sub: "100 Feet Rd, Bengaluru",
    address: "12th Main Road, Indiranagar, Bengaluru, Karnataka",
    hours: "11:30 AM – 10:30 PM",
    phone: "+91 98765 43212",
    rating: 4.9,
  },
];

export function FindUsSection() {
  const [selectedId, setSelectedId] = useState(locations[0].id);
  const [copied, setCopied] = useState(false);
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const activeLoc = locations.find((l) => l.id === selectedId) || locations[0];

  const handleCopy = () => {
    navigator.clipboard?.writeText?.(activeLoc.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="locations" ref={sectionRef} className="section-container section-padding">
      <div className="grid gap-scale-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
        {/* Left — Location List */}
        <div>
          <div className={`inline-flex items-center gap-scale-2 px-scale-3 py-scale-1 rounded-full bg-primary/10 mb-scale-3 reveal reveal-left ${isVisible ? "visible" : ""}`}>
            <span className="text-primary text-xs">📍</span>
            <p className="para-text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Our Outlets
            </p>
          </div>

          <h2 className={`h2 reveal reveal-left ${isVisible ? "visible" : ""} delay-100`}>
            Find Your Nearest Kesar
          </h2>
          <p className={`para-text-md mt-scale-3 text-text-secondary reveal reveal-left ${isVisible ? "visible" : ""} delay-200`}>
            Step into any of our flagship experiential outlets for freshly rolled puris, chilled flavored fountains, and vibrant ambience.
          </p>

          <div className={`mt-scale-7 grid gap-scale-3.5 reveal reveal-left ${isVisible ? "visible" : ""} delay-300`}>
            {locations.map((loc) => {
              const isSelected = loc.id === selectedId;
              return (
                <div
                  key={loc.id}
                  onClick={() => setSelectedId(loc.id)}
                  className={`group cursor-pointer flex items-center justify-between gap-scale-4 rounded-[16px] border p-scale-4 sm:p-scale-5 transition-all duration-300 ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-md shadow-primary/5 ring-1 ring-primary/20 scale-[1.01]"
                      : "border-border bg-card hover:border-primary/30 hover:bg-card/80 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-scale-3.5">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-primary text-white"
                          : "bg-muted text-text-secondary group-hover:bg-primary/10 group-hover:text-primary"
                      }`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>

                    <div>
                      <h4 className="para-text-sm font-bold text-text-foreground">
                        {loc.name}
                      </h4>
                      <p className="para-text-xs text-text-secondary mt-scale-0.5">
                        {loc.sub}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`para-text-xs font-semibold px-scale-3 py-scale-1.5 rounded-full transition-all duration-300 ${
                      isSelected
                        ? "bg-primary text-text-neutral shadow-sm"
                        : "bg-muted/80 text-text-secondary group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    {isSelected ? "Selected" : "Select"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — Interactive Map Card */}
        <div className={`relative flex flex-col justify-between rounded-[28px] bg-accent/60 border border-primary/20 p-scale-6 sm:p-scale-8 min-h-[380px] shadow-lg overflow-hidden reveal reveal-right ${isVisible ? "visible" : ""}`}>
          {/* Subtle grid pattern background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(var(--primary) 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Top Status & Pin */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-scale-2 rounded-full bg-card/90 backdrop-blur-md px-scale-3.5 py-scale-1.5 border border-border shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="para-text-xs font-bold text-emerald-800">Open Now</span>
              <span className="para-text-xs text-text-secondary">· {activeLoc.hours}</span>
            </div>

            <div className="flex items-center gap-scale-1 rounded-full bg-card/90 backdrop-blur-md px-scale-2.5 py-scale-1 text-amber-500 border border-border shadow-sm">
              <span>★</span>
              <span className="para-text-xs font-bold text-text-foreground text-[12px]">{activeLoc.rating}</span>
            </div>
          </div>

          {/* Center Graphic — Pulsing Map Pin */}
          <div className="relative z-10 my-scale-8 flex flex-col items-center justify-center text-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-24 h-24 rounded-full bg-primary/15 animate-ping" />
              <div className="relative w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/30 rotate-3">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
            </div>

            <h3 className="h3 mt-scale-5 font-bold text-text-foreground">
              {activeLoc.name}
            </h3>
            <p className="para-text-sm text-text-secondary mt-scale-1 max-w-sm">
              {activeLoc.address}
            </p>
            <p className="para-text-xs text-primary font-semibold mt-scale-2">
              📞 {activeLoc.phone}
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-scale-3 pt-scale-4 border-t border-primary/15">
            <button
              onClick={handleCopy}
              className="para-text-xs font-semibold text-text-secondary hover:text-primary transition-colors flex items-center gap-scale-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>{copied ? "Address Copied!" : "Copy Address"}</span>
            </button>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(activeLoc.address)}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm flex items-center gap-scale-1.5 shadow-md hover:shadow-lg transition-all"
            >
              <span>Get Directions</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
