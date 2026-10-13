"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  CopyIcon,
} from "@/components/shared/icons";

const locations = [
  {
    id: "delhi",
    name: "Connaught Place Flagship",
    sub: "Central Hub, New Delhi",
    address: "Block B, Inner Circle, Connaught Place, New Delhi",
    phone: "+91 98765 43210",
    hours: "11:00 AM – 11:00 PM · Every day",
    rating: "4.9",
    mapsUrl: "https://maps.google.com/?q=Connaught%20Place%20New%20Delhi",
  },
  {
    id: "mumbai",
    name: "Bandra West Bistro",
    sub: "Pali Hill, Mumbai",
    address: "Waterfield Road, Bandra West, Mumbai, Maharashtra",
    phone: "+91 98765 43211",
    hours: "12:00 PM – 11:30 PM · Every day",
    rating: "4.8",
    mapsUrl: "https://maps.google.com/?q=Bandra%20West%20Mumbai",
  },
  {
    id: "bangalore",
    name: "Indiranagar Lounge",
    sub: "100 Feet Rd, Bengaluru",
    address: "12th Main Road, Indiranagar, Bengaluru, Karnataka",
    phone: "+91 98765 43212",
    hours: "11:30 AM – 10:30 PM · Every day",
    rating: "4.9",
    mapsUrl: "https://maps.google.com/?q=Indiranagar%20Bengaluru",
  },
];

export function LocationPickerSection() {
  const [selected, setSelected] = useState("delhi");
  const [copied, setCopied] = useState(false);
  const active = locations.find((l) => l.id === selected)!;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(active.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-padding">
      <div className="section-container grid items-start gap-scale-lg-12 lg:grid-cols-2">
        {/* Left: location list */}
        <div>
          <span className="inline-flex items-center gap-scale-2 rounded-button bg-primary/10 px-scale-4 py-scale-2 para-text-xs font-semibold text-primary">
            <MapPinIcon className="size-scale-4" />
            Select An Outlet
          </span>
          <h2 className="h2 mt-scale-3">Pick A Store, Get The Details</h2>
          <p className="para-text-md mt-scale-3 text-text-secondary">
            Choose an outlet to see its address, opening hours and direct phone
            line.
          </p>

          <div className="mt-scale-6 space-y-scale-3">
            {locations.map((loc) => (
              <button
                key={loc.id}
                type="button"
                onClick={() => setSelected(loc.id)}
                className={`flex w-full items-center justify-between gap-scale-4 rounded-2xl border p-scale-4 text-left transition-all duration-300 ${
                  selected === loc.id
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
                }`}
              >
                <span className="flex items-center gap-scale-3">
                  <span
                    className={`flex size-scale-10 shrink-0 items-center justify-center rounded-xl ${
                      selected === loc.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <MapPinIcon className="size-[18px]" />
                  </span>
                  <span>
                    <span className="block h6">{loc.name}</span>
                    <span className="block para-text-xs text-text-secondary">
                      {loc.sub}
                    </span>
                  </span>
                </span>
                <span
                  className={`para-text-xs font-semibold ${
                    selected === loc.id ? "text-primary" : "text-text-muted"
                  }`}
                >
                  {selected === loc.id ? "Selected" : "Select"}
                </span>
              </button>
            ))}
          </div>

          <p className="para-text-xs mt-scale-5 text-text-muted">
            Can&apos;t decide? Call the outlet directly and we&apos;ll guide you
            to the nearest counter.
          </p>
        </div>

        {/* Right: detail card */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-scale-6 shadow-xl sm:p-scale-8">
          {/* Pattern */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Top status */}
          <div className="relative z-10 mb-scale-6 flex flex-wrap items-center gap-scale-3">
            <span className="inline-flex items-center gap-scale-2 rounded-button bg-green-50 px-scale-3 py-scale-1 para-text-xs font-semibold text-green-700">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              Open Now
            </span>
            <span className="inline-flex items-center gap-scale-1 para-text-xs font-semibold text-yellow-600">
              ★ {active.rating}
            </span>
          </div>

          {/* Details */}
          <div className="relative z-10 space-y-scale-4">
            <span className="inline-flex size-scale-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MapPinIcon className="size-[30px]" />
            </span>
            <h3 className="h3">{active.name}</h3>
            <p className="para-text-sm text-text-secondary">{active.address}</p>
            <p className="para-text-sm flex items-center gap-scale-2 font-semibold text-primary">
              <PhoneIcon className="size-scale-4" />
              {active.phone}
            </p>
            <p className="para-text-xs flex items-center gap-scale-2 text-text-muted">
              <ClockIcon className="size-scale-4" />
              {active.hours}
            </p>
          </div>

          {/* Actions */}
          <div className="relative z-10 mt-scale-6 flex flex-wrap items-center gap-scale-4 border-t border-border pt-scale-5">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-scale-2 para-text-xs font-semibold text-primary transition-colors hover:text-primary/80"
            >
              <CopyIcon className="size-[14px]" />
              {copied ? "Address Copied!" : "Copy Address"}
            </button>
            <Link
              className="btn btn-primary btn-sm"
              href={active.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
