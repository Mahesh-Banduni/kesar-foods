import Link from "next/link";
import { Breadcrumb } from "./Breadcrumb";
import { ArrowRightIcon } from "./icons";

interface InnerPageHeroProps {
  breadcrumbs: { label: string; href?: string }[];
  eyebrow: string;
  title: string;
  description: string;
  variant?: "default" | "lime";
  primaryButton?: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
  trustBar?: React.ReactNode;
}

export function InnerPageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  variant = "default",
  primaryButton,
  secondaryButton,
  trustBar,
}: InnerPageHeroProps) {
  const isLime = variant === "lime";

  return (
    <section
      className={`relative overflow-hidden py-scale-lg-20 ${
        isLime ? "bg-bg-4" : "bg-bg-3"
      }`}
    >
      {/* Decorative blob */}
      <div
        aria-hidden="true"
        className={`absolute size-[280px] rounded-full blur-3xl ${
          isLime
            ? "bottom-[-60px] left-[-40px] bg-white/40"
            : "top-[-60px] right-[-40px] bg-secondary/35"
        }`}
      />

      <div className="section-container relative">
        <Breadcrumb items={breadcrumbs} />

        <p
          className={`para-text-xs mb-scale-3 font-semibold uppercase tracking-wider ${
            isLime ? "text-primary" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>

        <h1 className="h1 max-w-4xl">{title}</h1>

        <p className="para-text-lg mt-scale-5 max-w-3xl text-text-secondary">
          {description}
        </p>

        {(primaryButton || secondaryButton) && (
          <div className="mt-scale-7 flex flex-wrap gap-scale-4">
            {primaryButton && (
              <Link
                className="btn btn-primary btn-md"
                href={primaryButton.href}
              >
                <span>{primaryButton.label}</span>
                <ArrowRightIcon className="size-scale-4" />
              </Link>
            )}
            {secondaryButton && (
              <Link
                className={`btn btn-md ${
                  isLime
                    ? "border border-primary/20 bg-white text-primary"
                    : "border border-border bg-card text-text-primary"
                }`}
                href={secondaryButton.href}
              >
                {secondaryButton.label}
              </Link>
            )}
          </div>
        )}

        {trustBar && <div className="mt-scale-6">{trustBar}</div>}
      </div>
    </section>
  );
}
