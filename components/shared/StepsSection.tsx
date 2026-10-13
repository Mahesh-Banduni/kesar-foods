interface StepsSectionProps {
  steps: { number: string; title: string; description: string }[];
}

export function StepsSection({ steps }: StepsSectionProps) {
  return (
    <div className="grid gap-scale-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {steps.map((step) => (
        <div
          key={step.number}
          className="relative rounded-2xl border border-border bg-card p-scale-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
        >
          <span className="mb-scale-4 inline-flex size-scale-12 items-center justify-center rounded-xl bg-primary/10 font-heading text-[20px] font-bold text-primary">
            {step.number}
          </span>
          <h3 className="h6 mt-scale-3">{step.title}</h3>
          <p className="para-text-sm mt-scale-2 text-text-secondary">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
