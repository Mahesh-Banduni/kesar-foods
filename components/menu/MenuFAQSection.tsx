import { SectionHead } from "@/components/shared/SectionHead";
import { FAQSection } from "@/components/shared/FAQSection";
import { HelpCircleIcon } from "@/components/shared/icons";

export function MenuFAQSection() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHead
          centered
          badgeIcon={<HelpCircleIcon className="size-scale-4" />}
          badgeText="Good To Know"
          title="Menu Questions"
        />

        <FAQSection
          faqs={[
            {
              question: "Is everything vegetarian?",
              answer:
                "Yes. The entire Kesar menu is 100% vegetarian, and our pani is always prepared separately from any dairy station.",
            },
            {
              question: "Can I choose how spicy my pani is?",
              answer:
                "Absolutely. Ask for mild, medium or fiery at the counter, or order extra pani on the side and build each bite yourself.",
            },
            {
              question: "Do you cater parties and events?",
              answer:
                "We do. Our Family Feast Box scales up for events, and our team can set up a live puri counter. Reach out through the contact page.",
            },
            {
              question: "How long do puris stay crisp for delivery?",
              answer:
                "We pack puris and pani separately in spill-proof containers, so they arrive crisp and the pani arrives ice-cold — ready to assemble at home.",
            },
          ]}
        />
      </div>
    </section>
  );
}
