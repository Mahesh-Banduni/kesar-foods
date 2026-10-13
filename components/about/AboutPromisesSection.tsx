import { SectionHead } from "@/components/shared/SectionHead";
import { InfoTile } from "@/components/shared/InfoTile";
import { HeartIcon, LeafIcon, ShieldCheckIcon, StarIcon } from "@/components/shared/icons";

export function AboutPromisesSection() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHead
          centered
          badgeIcon={<HeartIcon className="size-scale-4" />}
          badgeText="What We Stand For"
          title="Three Promises In Every Plate"
        />

        <div className="grid gap-scale-6 md:grid-cols-3">
          <InfoTile
            icon={<LeafIcon className="size-[22px]" />}
            title="Fresh Ingredients"
            description="Mint, coriander and green chillies arrive daily. Nothing is frozen, nothing is reused, and the pani is pressed fresh each morning."
          />
          <InfoTile
            icon={<ShieldCheckIcon className="size-[22px]" />}
            title="Hygiene First"
            description="Automated water dispensers, gloved hands and sanitised counters. Our open kitchens are built to be watched."
          />
          <InfoTile
            icon={<StarIcon className="size-[22px]" />}
            title="Made To Order"
            description="Puris are filled only when you order, so the crunch arrives exactly as it should — never soggy, never sitting under a lamp."
          />
        </div>
      </div>
    </section>
  );
}
