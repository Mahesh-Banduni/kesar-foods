import { SectionHead } from "@/components/shared/SectionHead";
import { InfoTile } from "@/components/shared/InfoTile";
import {
  SearchIcon,
  StarIcon,
  ShieldCheckIcon,
  RefreshIcon,
} from "@/components/shared/icons";

export function TestimonialsHighlightsSection() {
  return (
    <section className="section-padding bg-bg-3">
      <div className="section-container">
        <SectionHead
          centered
          badgeIcon={<SearchIcon className="size-scale-4" />}
          badgeText="What Guests Mention Most"
          title="The Little Things They Notice"
          description="Recurring themes from the reviews above — the details we obsess over."
        />
        <div className="grid gap-scale-6 md:grid-cols-2 lg:grid-cols-4">
          <InfoTile
            icon={<StarIcon className="size-[22px]" />}
            title="The Crunch"
            description="Puris rolled and flash-fried in small batches so they stay impossibly crisp to the last bite."
          />
          <InfoTile
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[22px]" aria-hidden="true">
                <path d="M12 2C8 6 6 9 6 13a6 6 0 0 0 12 0c0-4-2-7-6-11z" />
              </svg>
            }
            title="Cold, Fresh Pani"
            description="Mint-coriander water pressed each morning and served cold — never from a concentrate."
          />
          <InfoTile
            icon={<ShieldCheckIcon className="size-[22px]" />}
            title="Unmatched Hygiene"
            description="Automated water taps, gloved hands and pristine counters — an open kitchen you can watch."
          />
          <InfoTile
            icon={<RefreshIcon className="size-[22px]" />}
            title="Fresh To Order"
            description="Filled only when you order, so nothing sits under a lamp and nothing ever arrives soggy."
          />
        </div>
      </div>
    </section>
  );
}
