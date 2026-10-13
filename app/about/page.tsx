import type { Metadata } from "next";
import { Navigation } from "@/components/shared/Navigation";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutPromisesSection } from "@/components/about/AboutPromisesSection";
import { StatStrip } from "@/components/shared/StatStrip";
import { AboutProcessSection } from "@/components/about/AboutProcessSection";
import { AboutPhotoSection } from "@/components/about/AboutPhotoSection";
import { PageCallToAction } from "@/components/shared/PageCallToAction";

export const metadata: Metadata = {
  title: "About Kesar — Our Story | Authentic Indian Pani Puri",
  description:
    "Kesar brings you the authentic taste of Indian street food — a perfect blend of tradition, flavor and freshness in every bite.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
          eyebrow="Our Story"
          title="The Story Behind Every Crunch."
          description="From a single street cart to a nationwide favourite, Kesar has always been about one thing — honest Indian street food made fresh, served with joy."
        />

        <AboutStorySection />
        <AboutPromisesSection />

        <StatStrip
          stats={[
            { value: "3200+", label: "5-Star Reviews" },
            { value: "50+", label: "Operating Outlets" },
            { value: "12", label: "Signature Spices" },
            { value: "2018", label: "Serving Since" },
          ]}
        />

        <AboutProcessSection />
        <AboutPhotoSection />

        <PageCallToAction
          eyebrow="Hungry Yet?"
          title="Hungry yet? Taste what tradition built."
          description="Browse the full Kesar menu or find the outlet nearest to you."
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
