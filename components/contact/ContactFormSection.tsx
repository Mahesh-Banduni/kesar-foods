"use client";

import { useState, type FormEvent } from "react";
import { MailIcon, OrderIcon, StarIcon, BuildingIcon, ArrowRightIcon, CheckCircleIcon } from "@/components/shared/icons";

const topics = [
  { icon: <OrderIcon className="size-[18px]" />, name: "Orders & Delivery", sub: "Status, changes, missing items" },
  { icon: <StarIcon className="size-[18px]" />, name: "Events & Catering", sub: "Live puri counters and feast boxes" },
  { icon: <BuildingIcon className="size-[18px]" />, name: "Franchise", sub: "Partnership and investment enquiries" },
];

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-bg-3">
      <div className="section-container grid items-start gap-scale-lg-12 lg:grid-cols-2">
        {/* Left info */}
        <div>
          <span className="inline-flex items-center gap-scale-2 rounded-button bg-primary/10 px-scale-4 py-scale-2 para-text-xs font-semibold text-primary">
            <MailIcon className="size-scale-4" />
            Send A Message
          </span>
          <h2 className="h2 mt-scale-3">How Can We Help?</h2>
          <p className="para-text-md mt-scale-4 text-text-secondary">
            Fill in the form and we&apos;ll route your message to the right team
            — kitchen, events, franchise or support.
          </p>

          <div className="mt-scale-6 space-y-scale-3">
            {topics.map((topic) => (
              <div
                key={topic.name}
                className="flex items-center gap-scale-3 rounded-2xl border border-border bg-card p-scale-4"
              >
                <span className="inline-flex size-scale-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {topic.icon}
                </span>
                <span>
                  <span className="block para-text-sm font-semibold text-text-primary">
                    {topic.name}
                  </span>
                  <span className="block para-text-xs text-text-secondary">
                    {topic.sub}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-border bg-card p-scale-6 shadow-xl sm:p-scale-8">
          {submitted ? (
            <div className="flex flex-col items-center gap-scale-4 py-scale-10 text-center">
              <CheckCircleIcon className="size-[48px] text-primary" />
              <div>
                <p className="h5">Message sent.</p>
                <p className="para-text-sm mt-scale-2 text-text-secondary">
                  Thanks for reaching out — our team will reply shortly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-scale-4">
              <div className="grid gap-scale-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="para-text-xs mb-scale-2 block font-semibold text-text-primary">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-border bg-background px-scale-4 py-scale-3 para-text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="para-text-xs mb-scale-2 block font-semibold text-text-primary">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-background px-scale-4 py-scale-3 para-text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="c-phone" className="para-text-xs mb-scale-2 block font-semibold text-text-primary">
                    Phone
                  </label>
                  <input
                    id="c-phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-xl border border-border bg-background px-scale-4 py-scale-3 para-text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="c-topic" className="para-text-xs mb-scale-2 block font-semibold text-text-primary">
                    Topic <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="c-topic"
                    name="topic"
                    required
                    className="w-full rounded-xl border border-border bg-background px-scale-4 py-scale-3 para-text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Choose a topic</option>
                    <option value="order">Order or delivery</option>
                    <option value="events">Events &amp; catering</option>
                    <option value="franchise">Franchise enquiry</option>
                    <option value="feedback">Feedback or review</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-message" className="para-text-xs mb-scale-2 block font-semibold text-text-primary">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us how we can help…"
                    className="w-full rounded-xl border border-border bg-background px-scale-4 py-scale-3 para-text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-scale-4">
                <button type="submit" className="btn btn-primary btn-md">
                  <span>Send Message</span>
                  <ArrowRightIcon className="size-scale-4" />
                </button>
                <p className="para-text-xs text-text-muted">We never share your details.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
