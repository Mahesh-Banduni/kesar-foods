import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-bg-4">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 size-scale-80 rounded-full bg-secondary/20 blur-3xl"
      />
      <div className="section-container relative grid items-center gap-scale-6 py-scale-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="para-text-xs mb-scale-3 font-semibold uppercase text-primary">
            {eyebrow}
          </p>
          <h1 className="hero-h max-w-3xl">
            {title} <span className="text-primary">{highlight}</span>
          </h1>
          <p className="para-text-md mt-scale-5 max-w-2xl text-text-secondary">
            {description}
          </p>
          <div className="mt-scale-8 flex flex-wrap gap-scale-4">
            <Link className="btn btn-primary btn-md" href={primaryHref}>
              <span>{primaryLabel}</span>
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
            <Link className="btn btn-secondary btn-md" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
        <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-primary/10 bg-muted shadow-xl lg:aspect-[4/5]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </div>
      </div>
    </section>
  );
}
