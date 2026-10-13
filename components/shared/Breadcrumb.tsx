import Link from "next/link";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="para-text-xs mb-scale-4 flex items-center gap-scale-2 font-medium text-text-secondary"
    >
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-scale-2">
          {index > 0 && (
            <span aria-hidden="true" className="text-text-muted">
              /
            </span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-text-primary">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
