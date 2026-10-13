import Link from "next/link";

interface PageCallToActionProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function PageCallToAction({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageCallToActionProps) {
  return (
    <section className="section-container pb-scale-20">
      <div className="relative overflow-hidden rounded-3xl bg-bg-2 p-scale-6 sm:p-scale-20">
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 size-scale-72 rounded-full bg-secondary/15 blur-3xl"
        />
        <div className="relative grid items-center gap-scale-6 lg:grid-cols-[1.2fr_auto]">
          <div>
            <p className="para-text-xs mb-scale-3 font-semibold uppercase text-secondary">
              {eyebrow}
            </p>
            <h2 className="h2 max-w-3xl text-text-neutral">{title}</h2>
            <p className="para-text-md mt-scale-4 max-w-2xl text-text-neutral/80">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-scale-4 lg:justify-end">
            <Link className="btn btn-secondary btn-md" href={primaryHref}>
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
            <Link
              className="btn btn-md border border-text-neutral/20 bg-card text-card-foreground"
              href={secondaryHref}
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
