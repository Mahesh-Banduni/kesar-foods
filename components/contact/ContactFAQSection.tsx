import { SectionHead } from "@/components/shared/SectionHead";
import { FAQSection } from "@/components/shared/FAQSection";
import { HelpCircleIcon } from "@/components/shared/icons";

const faqs = [
  {
    question: "Where can I track my delivery order?",
    answer:
      "Delivery orders placed through Swiggy, Zomato or MagicPin can be tracked inside those apps. For anything else, call the outlet that took your order and we'll help.",
  },
  {
    question: "Do you cater parties and events?",
    answer:
      "Yes. Our Family Feast Box scales up for events, and our team can set up a live puri counter. Choose 'Events & catering' in the form above.",
  },
  {
    question: "How do I apply for a franchise?",
    answer:
      "Pick 'Franchise enquiry' in the form, or head to the franchise page to request the full deck.",
  },
  {
    question: "I had a problem with an order — what now?",
    answer:
      "Choose 'Order or delivery' and include your order reference. We'll look into it and make it right.",
  },
];

export function ContactFAQSection() {
  return (
    <section className="section-padding bg-bg-3">
      <div className="section-container">
        <SectionHead
          badgeText="Quick Answers"
          badgeIcon={<HelpCircleIcon className="size-scale-4" />}
          title="Before You Write To Us"
          centered
        />
        <div className="mt-scale-10">
          <FAQSection faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
