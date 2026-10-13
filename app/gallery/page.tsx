import type { Metadata } from "next";
import { Navigation } from "@/components/shared/Navigation";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { GalleryGridSection } from "@/components/gallery/GalleryGridSection";
import { GalleryCTASection } from "@/components/gallery/GalleryCTASection";

export const metadata: Metadata = {
  title: "Gallery — Moments at Kesar | Authentic Indian Pani Puri",
  description:
    "Crispy puris, cold pani fountains and the people who make it all worth it. Tag @kesarpanipuri on Instagram to get featured.",
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Gallery" },
          ]}
          eyebrow="Social Moments"
          title="Moments at Kesar."
          description="Crispy puris, cold pani fountains and the people who make it all worth it. Tag @kesarpanipuri on Instagram to get featured on our community wall."
        />
        <GalleryGridSection />
        <GalleryCTASection />
      </main>
      <SiteFooter />
    </>
  );
}
