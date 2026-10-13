import type { ReactNode } from "react";

interface SectionHeadProps {
  badge?: ReactNode;
  badgeIcon?: ReactNode;
  badgeText?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHead({
  badge,
  badgeIcon,
  badgeText,
  title,
  description,
  centered = false,
}: SectionHeadProps) {
  return (
    <div
      className={`mb-scale-lg-12 ${
        centered ? "mx-auto max-w-3xl text-center" : ""
      }`}
    >
      {badge ||
        (badgeText && (
          <span className="inline-flex items-center gap-scale-2 rounded-button bg-primary/10 px-scale-4 py-scale-2 para-text-xs font-semibold text-primary">
            {badgeIcon && (
              <span className="size-scale-4 text-primary">{badgeIcon}</span>
            )}
            {badgeText}
          </span>
        ))}
      <h2 className="h2 mt-scale-3">{title}</h2>
      {description && (
        <p className="para-text-md mt-scale-3 text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
