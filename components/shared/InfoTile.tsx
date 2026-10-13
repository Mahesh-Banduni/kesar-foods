import type { ReactNode } from "react";

interface InfoTileProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function InfoTile({ icon, title, description }: InfoTileProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-scale-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
      <span className="mb-scale-4 inline-flex size-scale-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <h3 className="h6 mt-scale-4">{title}</h3>
      <p className="para-text-sm mt-scale-2 text-text-secondary">
        {description}
      </p>
    </div>
  );
}
