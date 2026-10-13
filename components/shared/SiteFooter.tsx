"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Menu", href: "/menu" },
  { label: "Store Locations", href: "/locations" },
  { label: "Franchise Opportunity", href: "/franchise" },
  { label: "Social Gallery", href: "/gallery" },
  { label: "Customer Reviews", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const menuCategories = [
  { label: "Classic Mint Pani Puri", href: "/menu" },
  { label: "Royal Dahi Puri", href: "/menu" },
  { label: "Cheese Volcano Puri", href: "/menu" },
  { label: "Mumbai Sev Batata Puri", href: "/menu" },
  { label: "Chef Signature Gold Platter", href: "/menu" },
];

const socialLinks = ["twitter", "instagram", "facebook", "youtube"];

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-border bg-bg-2 pt-scale-20 pb-scale-10 text-text-neutral"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 size-scale-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 size-scale-80 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="section-container relative z-10">
        <div className="mb-scale-20 flex flex-col items-center justify-between gap-scale-6 rounded-3xl border border-text-neutral/15 bg-card/10 p-scale-6 sm:p-scale-20 lg:flex-row">
          <div>
            <h3 className="h4 text-text-neutral">Join the Kesar Pani Puri Club</h3>
            <p className="para-text-sm mt-scale-2 max-w-2xl text-text-neutral/75">
              Get exclusive menu drops, tasting invites, and birthday treats from
              the Kesar team.
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-md flex-col gap-scale-2 sm:flex-row lg:w-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              required
              className="para-text-sm w-full rounded-button border border-text-neutral/20 bg-background/10 px-scale-4 py-scale-3 text-text-neutral placeholder:text-text-neutral/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="btn btn-secondary btn-sm" type="submit">
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </div>

        <div className="grid gap-scale-20 border-b border-text-neutral/15 pb-scale-20 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="group inline-block">
              <span className="h4 text-text-neutral">
                Kesar<span className="text-secondary">.</span>
              </span>
            </Link>
            <p className="para-text-sm mt-scale-3 text-text-neutral/75">
              Crafting an authentic and hygienic pani puri experience with crisp
              puris, vibrant spiced water, and warm hospitality.
            </p>
            <div className="mt-scale-5 flex gap-scale-3">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  aria-label={social}
                  className="flex size-scale-9 items-center justify-center rounded-full border border-text-neutral/15 bg-card/10 font-heading font-bold text-text-neutral transition-all duration-300 hover:border-secondary hover:bg-secondary/10 hover:text-secondary"
                >
                  {social.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="h6 mb-scale-4 uppercase text-secondary">Explore</h4>
            <ul className="grid gap-scale-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="para-text-sm inline-block text-text-neutral/75 transition-colors hover:text-text-neutral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="h6 mb-scale-4 uppercase text-secondary">
              Top Varieties
            </h4>
            <ul className="grid gap-scale-2">
              {menuCategories.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="para-text-sm inline-block text-text-neutral/75 transition-colors hover:text-text-neutral"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="h6 mb-scale-4 uppercase text-secondary">
              Headquarters
            </h4>
            <div className="grid gap-scale-3 para-text-sm text-text-neutral/75">
              <p>123 Connaught Place, New Delhi, India</p>
              <a href="tel:+919876543210" className="hover:text-text-neutral">
                +91 98765 43210
              </a>
              <a
                href="mailto:hello@kesarpanipuri.com"
                className="hover:text-text-neutral"
              >
                hello@kesarpanipuri.com
              </a>
              <p>Open daily, 11:00 AM – 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-scale-8 flex flex-col items-center justify-between gap-scale-4 sm:flex-row">
          <p className="para-text-xs text-center text-text-neutral/65 sm:text-left">
            © {new Date().getFullYear()} Kesar Pani Puri. All rights reserved.
            Crafted with authentic passion.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-scale-4">
            <a
              href="#privacy"
              className="para-text-xs text-text-neutral/65 transition-colors hover:text-text-neutral"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="para-text-xs text-text-neutral/65 transition-colors hover:text-text-neutral"
            >
              Terms of Service
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn btn-sm border border-text-neutral/20 bg-card/10 text-text-neutral"
              type="button"
            >
              <span>Back to Top</span>
              <svg
                aria-hidden="true"
                className="size-scale-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
