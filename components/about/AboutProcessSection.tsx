import { SectionHead } from "@/components/shared/SectionHead";
import { StepsSection } from "@/components/shared/StepsSection";
import { ChefHatIcon } from "@/components/shared/icons";

export function AboutProcessSection() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHead
          centered
          badgeIcon={<ChefHatIcon className="size-scale-4" />}
          badgeText="How It's Made"
          title="Crafted By Hand, Every Morning"
          description="Three unhurried steps stand between our kitchen and your plate."
        />

        <StepsSection
          steps={[
            {
              number: "01",
              title: "Hand-Rolled Puris",
              description:
                "Semolina and wheat are kneaded, rested and rolled into thin discs by hand, then flash-fried in small batches for an airy, shattering crunch.",
            },
            {
              number: "02",
              title: "Slow-Infused Pani",
              description:
                "Mint, coriander, roasted cumin and our 12-spice blend are steeped cold for hours so the water stays bright, tangy and refreshingly cool.",
            },
            {
              number: "03",
              title: "Assembled To Order",
              description:
                "Each puri is filled only after you order, finished with chutneys and toppings, and served within minutes for the perfect first bite.",
            },
          ]}
        />
      </div>
    </section>
  );
}
