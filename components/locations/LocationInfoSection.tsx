import { SectionHead } from "@/components/shared/SectionHead";
import { InfoTile } from "@/components/shared/InfoTile";
import { InfoIcon, UtensilsIcon, ShieldCheckIcon } from "@/components/shared/icons";

export function LocationInfoSection() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHead
          centered
          badgeIcon={<InfoIcon className="size-scale-4" />}
          badgeText="Good To Know"
          title="Visiting A Kesar Outlet"
        />
        <div className="grid gap-scale-6 md:grid-cols-3">
          <InfoTile
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[22px]">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
              </svg>
            }
            title="Open Every Day"
            description="All outlets trade daily. Hours vary slightly by city — check the selected store above for exact timings."
          />
          <InfoTile
            icon={<UtensilsIcon className="size-[22px]" />}
            title="Dine-In & Takeaway"
            description="Eat in at the counter, grab a sealed takeaway box, or order for delivery through Swiggy, Zomato and MagicPin."
          />
          <InfoTile
            icon={<ShieldCheckIcon className="size-[22px]" />}
            title="Hygiene First"
            description="Automated water dispensers, gloved hands and sanitised counters — our open kitchens are built to be watched."
          />
        </div>
      </div>
    </section>
  );
}
