import Image from "next/image";
import { MedalIcon } from "@/components/shared/icons";

export function AboutStorySection() {
  return (
    <section className="section-padding bg-bg-3">
      <div className="section-container grid items-center gap-scale-lg-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-muted shadow-xl">
          <Image
            src="/about-panipuri.jpg"
            alt="Assorted pani puri ingredients arranged on a clay plate"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div>
          <span className="inline-flex items-center gap-scale-2 rounded-button bg-primary/10 px-scale-4 py-scale-2 para-text-xs font-semibold text-primary">
            <MedalIcon className="size-scale-4" />
            Since 2018
          </span>

          <h2 className="h2 mt-scale-3">
            More Than Just Pani Puri. It&apos;s a Feeling.
          </h2>

          <p className="para-text-md mt-scale-5 text-text-secondary">
            Kesar began in 2018 with a modest cart, a family recipe for mint
            pani, and a belief that street food deserves the same care as fine
            dining. Everything is still made by hand, every single day.
          </p>

          <p className="para-text-sm mt-scale-4 text-text-secondary">
            Our puris are rolled and fried in small batches so they stay
            impossibly crisp. Our pani is cold-pressed fresh each morning, never
            from a concentrate. And our chutneys are slow-cooked to the same
            family measurements we started with.
          </p>

          <p className="para-text-sm mt-scale-4 text-text-secondary">
            Today Kesar welcomes thousands of guests across the country — but
            the promise in every plate is unchanged: pure ingredients, spotless
            kitchens, and a bite of happiness.
          </p>
        </div>
      </div>
    </section>
  );
}
