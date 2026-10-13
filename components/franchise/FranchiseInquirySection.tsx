"use client";

import { useState, type FormEvent } from "react";
import { MailIcon, TimerIcon, RefreshIcon, CheckCircleIcon, ArrowRightIcon } from "@/components/shared/icons";

export function FranchiseInquirySection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding" id="inquire">
      <div className="section-container grid items-start gap-scale-lg-12 lg:grid-cols-2">
        {/* Left info */}
        <div>
          <span className="inline-flex items-center gap-scale-2 rounded-button bg-primary/10 px-scale-4 py-scale-2 para-text-xs font-semibold text-primary">
            <MailIcon className="size-scale-4" />
            Franchise Enquiry
          </span>
          <h2 className="h2 mt-scale-3">Request The Franchise Deck</h2>
          <p className="para-text-md mt-scale-4 text-text-secondary">
            Tell us a little about you and your market. We&apos;ll send the
            franchise deck and investment details, then follow up with a call.
          </p>

          <div className="mt-scale-6 grid grid-cols-2 gap-scale-4">
            {[
              { icon: <TimerIcon className="size-scale-4" />, value: "30 Days", label: "Typical launch" },
              { icon: <RefreshIcon className="size-scale-4" />, value: "100%", label: "Raw material support" },
            ].map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-bg-3 p-scale-4">
                <span className="inline-flex items-center gap-scale-2 para-text-xs text-text-secondary">
                  <span className="text-primary">{m.icon}</span>
                </span>
                <div className="h4 mt-scale-1 text-primary">{m.value}</div>
                <div className="para-text-xs text-text-secondary">{m.label}</div>
              </div>
            ))}
          </div>

          <p className="para-text-sm mt-scale-6 text-text-muted">
            Prefer email? Write to{" "}
            <span className="font-bold text-primary">hello@kesarpanipuri.com</span>
          </p>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-border bg-card p-scale-6 shadow-xl sm:p-scale-8">
          {submitted ? (
            <div className="flex flex-col items-center gap-scale-4 py-scale-10 text-center">
              <CheckCircleIcon className="size-[48px] text-primary" />
              <div>
                <p className="h5">Enquiry received.</p>
                <p className="para-text-sm mt-scale-2 text-text-secondary">
                  Our franchise team will email the deck and call you shortly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-scale-4">
              <div className="grid gap-scale-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-name" className="para-text-xs mb-scale-2 block font-semibold text-text-primary">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="f-name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-border bg-background px-scale-4 py-scale-3 para-text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="f-email" className="para-text-xs mb-scale-2 block font-semibold text-text-primary">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-background px-scale-4 py-scale-3 para-text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="f-phone" className="para-text-xs mb-scale-2 block font-semibold text-text-primary">
                    Phone <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="f-phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-xl border border-border bg-background px-scale-4 py-scale-3 para-text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="f-city" className="para-text-xs mb-scale-2 block font-semibold text-text-primary">
                    Target City <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="f-city"
                    name="city"
                    type="text"
                    required
                    className="w-full rounded-xl border border-border bg-background px-scale-4 py-scale-3 para-text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="f-budget" className="para-text-xs mb-scale-2 block font-semibold text-text-primary">
                    Investment Budget <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="f-budget"
                    name="budget"
                    required
                    className="w-full rounded-xl border border-border bg-background px-scale-4 py-scale-3 para-text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Choose a range</option>
                    <option value="under-15">Under ₹15 lakh</option>
                    <option value="15-30">₹15 – 30 lakh</option>
                    <option value="30-50">₹30 – 50 lakh</option>
                    <option value="50-plus">₹50 lakh+</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="f-message" className="para-text-xs mb-scale-2 block font-semibold text-text-primary">
                    Tell us about your plan <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-xl border border-border bg-background px-scale-4 py-scale-3 para-text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-scale-4">
                <button type="submit" className="btn btn-primary btn-md">
                  <span>Send Enquiry</span>
                  <ArrowRightIcon className="size-scale-4" />
                </button>
                <p className="para-text-xs text-text-muted">We reply within one business day.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
