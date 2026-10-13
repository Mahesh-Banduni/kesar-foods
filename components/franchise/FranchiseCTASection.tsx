import Link from "next/link";
import { ArrowRightIcon } from "@/components/shared/icons";

export function FranchiseCTASection() {
  return (
    <section className="section-container pb-scale-20">
      <div className="relative overflow-hidden rounded-3xl bg-bg-4 p-scale-6 sm:p-scale-lg-14">
        <div
          aria-hidden="true"
          className="absolute top-[-40px] right-[-20px] h-[320px] w-[320px] rounded-full bg-white/30 blur-3xl"
        />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-scale-6">
          <div className="max-w-2xl">
            <h2 className="h2 text-primary">Ready to build the next Kesar?</h2>
            <p className="para-text-md mt-scale-3 text-text-foreground">
              Send your enquiry today and our team will walk you through the
              numbers.
            </p>
          </div>
          <Link className="btn btn-primary btn-md" href="#inquire">
            <span>Request Franchise Deck</span>
            <ArrowRightIcon className="size-scale-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
