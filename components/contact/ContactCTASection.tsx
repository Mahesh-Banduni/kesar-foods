import Link from "next/link";
import { ArrowRightIcon, BoltIcon } from "@/components/shared/icons";

export function ContactCTASection() {
  return (
    <section className="section-container pb-scale-20">
      <div className="relative overflow-hidden rounded-3xl bg-primary-lime p-scale-6 text-foreground shadow-xl sm:p-scale-lg-12">
        <div className="relative z-10 flex flex-col items-start justify-between gap-scale-6 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-scale-2 rounded-button bg-primary/10 px-scale-3 py-scale-1 para-text-xs font-semibold text-primary">
              <BoltIcon className="size-scale-4" />
              Express Delivery
            </span>
            <h2 className="h3 mt-scale-3 text-text-primary">
              Hungry right now? Use code{" "}
              <span className="font-bold underline decoration-primary decoration-wavy">
                CRISPY20
              </span>{" "}
              for 20% off.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-scale-4">
            <Link
              href="/menu"
              className="btn btn-primary btn-md inline-flex items-center gap-scale-2"
            >
              <span>Order Online</span>
              <ArrowRightIcon className="size-scale-4" />
            </Link>
            <Link
              href="/locations"
              className="btn btn-secondary btn-md inline-flex items-center gap-scale-2"
            >
              <span>Find Store Pickup</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
