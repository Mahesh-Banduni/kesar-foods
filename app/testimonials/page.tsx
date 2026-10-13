import type { Metadata } from "next";
import { Navigation } from "@/components/shared/Navigation";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { TestimonialsRatingBanner } from "@/components/testimonials/TestimonialsRatingBanner";
import { TestimonialsReviewGrid } from "@/components/testimonials/TestimonialsReviewGrid";
import { TestimonialsHighlightsSection } from "@/components/testimonials/TestimonialsHighlightsSection";
import { StatStrip } from "@/components/shared/StatStrip";
import { PageCallToAction } from "@/components/shared/PageCallToAction";

export const metadata: Metadata = {
  title: "Testimonials — Loved by Thousands | Kesar Pani Puri",
  description:
    "Don't just take our word for it — hear what our regular street food connoisseurs have to say about the crunch, the pani and the experience.",
};

const trustBar = (
  <div className="inline-flex flex-wrap items-center gap-scale-3 rounded-button bg-card px-scale-5 py-scale-3 shadow-md">
    <span className="text-yellow-500 text-[18px]">★★★★★</span>
    <strong className="h6">4.9 / 5.0</strong>
    <span className="h-4 w-px bg-border" />
    <span className="para-text-xs text-text-secondary">Over 3,200+ 5-Star Reviews</span>
  </div>
);

export default function TestimonialsPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Testimonials" },
          ]}
          eyebrow="Customer Love"
          title="Loved by Thousands of Foodies."
          description="Don't just take our word for it — hear what our regular street food connoisseurs have to say about the crunch, the pani and the experience."
          trustBar={trustBar}
        />

        <TestimonialsRatingBanner />
        <TestimonialsReviewGrid />
        <TestimonialsHighlightsSection />

        <StatStrip
          stats={[
            { value: "3200+", label: "5-Star Reviews" },
            { value: "50+", label: "Operating Outlets" },
            { value: "12", label: "Signature Spices" },
            { value: "2018", label: "Serving Since" },
          ]}
        />

        <PageCallToAction
          eyebrow="Try It Yourself"
          title="Ready to taste the crunch everyone's talking about?"
          description="Find your nearest Kesar outlet or explore our full menu to plan your visit."
          primaryLabel="Explore Menu"
          primaryHref="/menu"
          secondaryLabel="Find An Outlet"
          secondaryHref="/locations"
        />
      </main>
      <SiteFooter />
    </>
  );
}
