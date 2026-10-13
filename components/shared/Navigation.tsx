"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Locations", href: "/locations" },
  { label: "Franchise", href: "/franchise" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-border/30 bg-background/80 shadow-lg backdrop-blur-xl"
          : "border-border bg-background/95 backdrop-blur-md"
      }`}
    >
      <div className="section-container flex items-center justify-between gap-scale-4 py-scale-4">
        <Link href="/" className="group flex items-center gap-scale-2">
          <span className="h5 text-primary transition-transform duration-300 group-hover:scale-105">
            Kesar<span className="text-secondary">.</span>
          </span>
          <span className="para-text-xxs hidden border-l border-border pl-scale-2 leading-tight text-text-secondary sm:block">
            Authentic Indian
            <br />
            Pani Puri
          </span>
        </Link>

        <div className="hidden items-center gap-scale-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`para-text-xs rounded-button px-scale-3 py-scale-2 font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-scale-3">
          <Link
            href="/menu"
            className="btn btn-primary btn-sm animate-pulse-glow"
          >
            <span>Order Now</span>
            <svg
              aria-hidden="true"
              className="size-scale-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <button
            className="rounded-action p-scale-2 text-primary transition-colors hover:bg-primary/10 lg:hidden"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-controls="site-navigation-menu"
            aria-expanded={mobileOpen}
            type="button"
          >
            <span className="flex w-scale-5 flex-col gap-scale-1">
              <span
                className={`block h-0.5 w-full origin-center transition-all duration-300 ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  mobileOpen ? "scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full origin-center transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="site-navigation-menu"
        className={`grid transition-[grid-template-rows] duration-500 lg:hidden ${
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="section-container flex flex-col gap-scale-1 border-t border-border pb-scale-6 pt-scale-4">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={`para-text-sm rounded-action px-scale-4 py-scale-2 transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-text-secondary hover:bg-primary/10 hover:text-primary"
                  }`}
                  style={{
                    transitionDelay: mobileOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
