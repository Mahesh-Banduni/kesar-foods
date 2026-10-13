import { SectionHead } from "@/components/shared/SectionHead";
import { StepsSection } from "@/components/shared/StepsSection";
import { CompassIcon } from "@/components/shared/icons";

export function FranchiseProcessSection() {
  return (
    <section className="section-padding bg-bg-3" id="how">
      <div className="section-container">
        <SectionHead
          centered
          badgeIcon={<CompassIcon className="size-scale-4" />}
          badgeText="How It Works"
          title="From Enquiry To Opening Day"
          description="A clear, supported path — most partners launch within 30 days of agreement."
        />
        <StepsSection
          steps={[
            {
              number: "01",
              title: "Apply & Discover",
              description:
                "Share your location, budget and goals. Our team walks you through the model, unit economics and fit during a discovery call.",
            },
            {
              number: "02",
              title: "Site & Agreement",
              description:
                "We help evaluate and finalise your site, then sign a transparent franchise agreement with a defined support scope.",
            },
            {
              number: "03",
              title: "Setup & Training",
              description:
                "The outlet is fitted to spec, equipment installed, and your team trained on recipes, hygiene standards and counter flow.",
            },
            {
              number: "04",
              title: "Launch & Support",
              description:
                "Opening-day marketing kicks in, then ongoing supply, quality audits and brand support keep you growing.",
            },
          ]}
        />
      </div>
    </section>
  );
}
