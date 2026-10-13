import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseIcon,
  BuildingIcon,
  TrendUpIcon,
  RocketIcon,
  LeafIcon,
  ArrowRightIcon,
} from "@/components/shared/icons";

const metrics = [
  { icon: <BuildingIcon className="size-scale-4" />, value: "50+", label: "Operating Outlets" },
  { icon: <TrendUpIcon className="size-scale-4" />, value: "35%", label: "Avg. ROI / Yr" },
  { icon: <RocketIcon className="size-scale-4" />, value: "30 Days", label: "Fast Launch Setup" },
  { icon: <LeafIcon className="size-scale-4" />, value: "100%", label: "Raw Material Support" },
];

export function FranchiseBrandSection() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-scale-6 shadow-xl sm:p-scale-lg-16">
          <div
            aria-hidden="true"
            className="absolute top-[-40px] right-[-20px] h-[280px] w-[280px] rounded-full bg-secondary/25 blur-3xl"
          />

          <div className="relative z-10 grid items-center gap-scale-lg-12 lg:grid-cols-2">
            {/* Collage */}
            <div className="grid grid-cols-2 gap-scale-3">
              <div className="space-y-scale-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src="/golgappa-spread.jpg" alt="Modern Kesar outlet counter" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src="/sev-puri.jpg" alt="Freshly served pani puris" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
              <div className="space-y-scale-3 pt-scale-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src="/delhi-chaat.jpg" alt="Artisanal spice preparation" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image src="/dahi-puri.jpg" alt="Crowd favourite dishes" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
              <div className="col-span-2 mt-scale-2">
                <div className="inline-flex items-center gap-scale-2 rounded-button bg-primary px-scale-4 py-scale-2 para-text-xs font-bold text-primary-foreground shadow-lg">
                  <span className="text-secondary">#1</span>
                  Fastest Growing Pani Puri Brand
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-scale-2 rounded-button bg-primary/10 px-scale-4 py-scale-2 para-text-xs font-semibold text-primary">
                <BriefcaseIcon className="size-scale-4" />
                A Proven Model
              </span>

              <h2 className="h2 mt-scale-3">
                A Brand Guests Already{" "}
                <span className="text-primary">Love</span>
              </h2>

              <p className="para-text-md mt-scale-4 text-text-secondary">
                Kesar has grown from a single cart into a nationwide favourite.
                Franchise partners plug into a system that is already tested,
                branded and in demand.
              </p>

              <div className="mt-scale-6 grid grid-cols-2 gap-scale-4">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-border bg-bg-3 p-scale-4"
                  >
                    <span className="inline-flex items-center gap-scale-2 para-text-xs text-text-secondary">
                      <span className="text-primary">{m.icon}</span>
                    </span>
                    <div className="h4 mt-scale-1 text-primary">{m.value}</div>
                    <div className="para-text-xs text-text-secondary">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-scale-6 flex flex-wrap gap-scale-4">
                <Link className="btn btn-primary btn-md" href="#inquire">
                  Start Your Application
                </Link>
                <Link className="btn btn-secondary btn-md" href="/contact">
                  Talk To Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
