"use client";

interface FAQSectionProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <div className="mx-auto max-w-3xl space-y-scale-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-border bg-card transition-all duration-300 open:shadow-md open:border-primary/20"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-scale-4 p-scale-5 para-text-md font-semibold text-text-primary transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
            <span>{faq.question}</span>
            <svg
              className="size-scale-5 shrink-0 text-text-muted transition-transform duration-300 group-open:rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div className="px-scale-5 pb-scale-5">
            <p className="para-text-sm text-text-secondary">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
