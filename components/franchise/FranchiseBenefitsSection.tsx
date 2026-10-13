import { SectionHead } from "@/components/shared/SectionHead";
import { InfoTile } from "@/components/shared/InfoTile";
import { GiftIcon, TargetIcon, TruckIcon, StarIcon } from "@/components/shared/icons";

export function FranchiseBenefitsSection() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHead
          centered
          badgeIcon={<GiftIcon className="size-scale-4" />}
          badgeText="What Partners Get"
          title="Everything You Need To Open"
          description="Turnkey support from site selection to your first sold-out evening."
        />
        <div className="grid gap-scale-6 md:grid-cols-2 lg:grid-cols-4">
          <InfoTile
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[22px]" aria-hidden="true">
                <path d="M3 21h18M6 21V9l6-4 6 4v12M9 21v-6h6v6" />
              </svg>
            }
            title="Turnkey Kitchen"
            description="Complete kitchen setup, counter design and equipment layout built to our proven outlet spec."
          />
          <InfoTile
            icon={<TargetIcon className="size-[22px]" />}
            title="Pani Dispensers"
            description="Proprietary automated pani dispensers keep every pour consistent, hygienic and fast."
          />
          <InfoTile
            icon={<TruckIcon className="size-[22px]" />}
            title="Supply Chain"
            description="Reliable raw material supply — puris, spices and chutney bases — delivered on schedule."
          />
          <InfoTile
            icon={<StarIcon className="size-[22px]" />}
            title="Nationwide Branding"
            description="Menu, packaging, signage and marketing assets that connect you to a recognised national brand."
          />
        </div>
      </div>
    </section>
  );
}
