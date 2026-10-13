import Link from "next/link";
import { InstagramIcon, ArrowRightIcon } from "@/components/shared/icons";

export function GalleryCTASection() {
  return (
    <section className="section-container pb-scale-20">
      <div className="relative overflow-hidden rounded-3xl bg-bg-2 p-scale-6 sm:p-scale-lg-14 text-center">
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-secondary/15 blur-3xl"
        />
        <div className="relative z-10">
          <span className="inline-flex items-center justify-center size-scale-16 rounded-2xl bg-secondary/20 text-secondary mb-scale-5">
            <InstagramIcon className="size-scale-8" />
          </span>
          <h2 className="h3 text-text-neutral">Share Your Kesar Moment</h2>
          <p className="para-text-md mt-scale-4 max-w-2xl mx-auto text-text-neutral/75">
            Tag{" "}
            <span className="font-bold text-secondary">@kesarpanipuri</span> on
            Instagram and your best shots could be featured right here on our
            community wall.
          </p>
          <div className="mt-scale-7 flex flex-wrap justify-center gap-scale-4">
            <Link
              className="btn btn-secondary btn-md"
              href="https://instagram.com/kesarpanipuri"
              target="_blank"
              rel="noreferrer"
            >
              <span>Follow on Instagram</span>
              <ArrowRightIcon className="size-scale-4" />
            </Link>
            <Link
              className="btn btn-md border border-text-neutral/20 bg-card/10 text-text-neutral"
              href="/menu"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
