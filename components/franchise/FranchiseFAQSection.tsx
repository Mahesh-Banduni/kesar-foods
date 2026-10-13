import { SectionHead } from "@/components/shared/SectionHead";
import { FAQSection } from "@/components/shared/FAQSection";
import { HelpCircleIcon } from "@/components/shared/icons";

export function FranchiseFAQSection() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHead
          centered
          badgeIcon={<HelpCircleIcon className="size-scale-4" />}
          badgeText="Franchise FAQs"
          title="Before You Apply"
        />
        <FAQSection
          faqs={[
            {
              question: "Do I need restaurant experience?",
              answer:
                "No. Our turnkey setup and training program are designed for first-time operators as well as experienced restaurateurs. Recipe consistency comes from our supply chain and automated dispensers.",
            },
            {
              question: "How long does it take to open?",
              answer:
                "Most outlets launch within about 30 days of finalising the site and agreement, assuming the location is ready for fit-out.",
            },
            {
              question: "What exactly do you supply?",
              answer:
                "Puris, spice blends and chutney bases come through our raw material support, alongside equipment, branding assets and ongoing quality audits.",
            },
            {
              question: "What kind of space is required?",
              answer:
                "Our model works in compact high-footfall formats — malls, high-street counters and food courts. Share your target location and we'll assess the fit.",
            },
            {
              question: "Is there ongoing support after launch?",
              answer:
                "Yes. Supply, marketing guidance, quality audits and brand refreshes continue for the life of the partnership.",
            },
          ]}
        />
      </div>
    </section>
  );
}
