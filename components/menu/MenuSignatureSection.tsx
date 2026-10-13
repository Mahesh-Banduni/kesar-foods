import Image from "next/image";
import Link from "next/link";
import {
  SparklesIcon,
  LeafIcon,
  CupIcon,
  BoltIcon,
  DropletIcon,
  ArrowRightIcon,
} from "@/components/shared/icons";

export function MenuSignatureSection() {
  return (
    <section className="section-container py-scale-lg-6">
      <div className="relative overflow-hidden rounded-3xl bg-bg-2 p-scale-6 sm:p-scale-lg-16">
        <div
          aria-hidden="true"
          className="absolute top-0 right-[25%] h-[320px] w-[320px] rounded-full bg-secondary/10 blur-3xl"
        />

        <div className="relative z-10 grid items-center gap-scale-lg-12 lg:grid-cols-[0.45fr_0.55fr]">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src="/hero-panipuri.jpg"
              alt="Kesar signature royal pani puri platter"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-scale-2 rounded-button bg-primary/90 px-scale-3 py-scale-2 para-text-xs font-semibold text-primary-foreground backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-secondary" />
              </span>
              Secret 12-Spice Blend
            </span>
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-scale-2 rounded-button bg-secondary/20 px-scale-4 py-scale-2 para-text-xs font-semibold text-secondary">
              <SparklesIcon className="size-scale-4" />
              Chef&apos;s Signature
            </span>

            <h2 className="h2 mt-scale-4 text-text-neutral">
              Kesar Royal Gold <br />
              <span className="text-secondary">Pani Puri Platter</span>
            </h2>

            <p className="para-text-md mt-scale-4 text-text-neutral/80">
              A culinary masterpiece harmonizing 12 slow-roasted mountain
              spices, cold-pressed mint-coriander essence, and hand-churned hing
              water for an explosive burst of royalty in every bite.
            </p>

            <div className="mt-scale-6 flex flex-wrap gap-scale-3">
              {[
                { icon: <LeafIcon className="size-scale-4" />, label: "Organic Herbs" },
                { icon: <CupIcon className="size-scale-4" />, label: "Claypot Infused" },
                { icon: <BoltIcon className="size-scale-4" />, label: "Ultra Crispy Puris" },
                { icon: <DropletIcon className="size-scale-4" />, label: "Aged Date Chutney" },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-scale-2 rounded-button border border-white/10 bg-white/5 px-scale-3 py-scale-2 para-text-xs font-medium text-text-neutral/80"
                >
                  <span className="text-secondary">{chip.icon}</span>
                  {chip.label}
                </span>
              ))}
            </div>

            <div className="mt-scale-8">
              <Link className="btn btn-secondary btn-md" href="/contact">
                <span>Reserve A Platter</span>
                <ArrowRightIcon className="size-scale-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
