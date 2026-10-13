"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  CopyIcon,
  ArrowRightIcon,
} from "@/components/shared/icons";

export function ContactHQSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("123 Connaught Place, New Delhi, India");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-padding">
      <div className="section-container grid items-center gap-scale-lg-12 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <span className="inline-flex items-center gap-scale-2 rounded-button bg-primary/10 px-scale-4 py-scale-2 para-text-xs font-semibold text-primary">
            <MapPinIcon className="size-scale-4" />
            Headquarters
          </span>
          <h2 className="h2 mt-scale-3">Come Say Hello</h2>
          <p className="para-text-md mt-scale-3 text-text-secondary">
            Our head office sits above the Connaught Place flagship — a short
            walk from the Inner Circle.
          </p>

          <div className="mt-scale-6 space-y-scale-3 text-text-secondary">
            <p className="flex items-center gap-scale-3 para-text-sm">
              <MapPinIcon className="size-scale-4 shrink-0 text-primary" />
              123 Connaught Place, New Delhi, India
            </p>
            <p className="flex items-center gap-scale-3 para-text-sm">
              <PhoneIcon className="size-scale-4 shrink-0 text-primary" />
              +91 98765 43210
            </p>
            <p className="flex items-center gap-scale-3 para-text-sm">
              <MailIcon className="size-scale-4 shrink-0 text-primary" />
              hello@kesarpanipuri.com
            </p>
            <p className="flex items-center gap-scale-3 para-text-sm">
              <ClockIcon className="size-scale-4 shrink-0 text-primary" />
              Open Every Day: 11:00 AM – 11:00 PM
            </p>
          </div>

          <div className="mt-scale-6">
            <Link
              href="/locations"
              className="btn btn-outline btn-sm inline-flex items-center gap-scale-2"
            >
              <span>See All Outlets</span>
              <ArrowRightIcon className="size-scale-4" />
            </Link>
          </div>
        </div>

        {/* Right column - Map card */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-card to-bg-3 p-scale-6 shadow-xl sm:p-scale-8">
          <div className="flex items-center justify-between gap-scale-2">
            <span className="inline-flex items-center gap-scale-2 rounded-full border border-border bg-card/80 px-scale-3 py-scale-1 para-text-xs font-medium text-text-primary backdrop-blur-sm">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              Open Now · 11:00 AM – 11:00 PM
            </span>
            <span className="rounded-full border border-border bg-card/80 px-scale-3 py-scale-1 para-text-xs font-semibold text-warning backdrop-blur-sm">
              ★ 4.9
            </span>
          </div>

          <div className="my-scale-10 text-center">
            <div className="mx-auto mb-scale-4 inline-flex size-scale-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MapPinIcon className="size-[32px]" />
            </div>
            <h3 className="h4 text-text-primary">Kesar Headquarters</h3>
            <p className="para-text-sm mt-scale-1 text-text-muted">
              123 Connaught Place, New Delhi
            </p>
            <p className="para-text-sm mt-scale-2 flex items-center justify-center gap-scale-2 font-semibold text-primary">
              <PhoneIcon className="size-scale-4" />
              +91 98765 43210
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-scale-3 border-t border-border pt-scale-4">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-scale-2 para-text-xs font-medium text-text-secondary hover:text-primary transition-colors cursor-pointer"
            >
              <CopyIcon className="size-scale-4" />
              <span>{copied ? "Address Copied!" : "Copy Address"}</span>
            </button>
            <a
              href="https://maps.google.com/?q=Connaught%20Place%20New%20Delhi"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
