import Link from "next/link";
import { ArrowRightIcon, BoltIcon } from "@/components/shared/icons";

export function MenuPromoSection() {
  return (
    <section className="section-container pb-scale-20">
      <div className="relative overflow-hidden rounded-3xl bg-bg-4 p-scale-6 sm:p-scale-lg-14">
        <div
          aria-hidden="true"
          className="absolute top-[-40px] right-[-20px] h-[320px] w-[320px] rounded-full bg-white/30 blur-3xl"
        />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-scale-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-scale-2 rounded-button bg-primary/12 px-scale-4 py-scale-2 para-text-xs font-semibold text-primary">
              <BoltIcon className="size-scale-4" />
              Express Delivery
            </span>
            <h2 className="h2 mt-scale-3 text-primary">
              Use code CRISPY20 for 20% off your first order.
            </h2>
          </div>
          <div className="flex flex-wrap gap-scale-4">
            <Link className="btn btn-primary btn-md" href="/contact">
              <span>Order Online</span>
              <ArrowRightIcon className="size-scale-4" />
            </Link>
            <Link
              className="btn btn-md border border-primary/20 bg-white text-primary"
              href="/locations"
            >
              Find Store Pickup
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
