import type { Metadata } from "next";
import { Navigation } from "@/components/shared/Navigation";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { LocationPickerSection } from "@/components/locations/LocationPickerSection";
import { AllOutletsSection } from "@/components/locations/AllOutletsSection";
import { LocationInfoSection } from "@/components/locations/LocationInfoSection";
import { PageCallToAction } from "@/components/shared/PageCallToAction";

export const metadata: Metadata = {
  title: "Locations — Find Your Nearest Kesar | Authentic Indian Pani Puri",
  description:
    "Visit a Kesar flagship outlet for freshly rolled puris, chilled flavoured fountains and vibrant ambience. Find addresses, hours and phone numbers.",
};

export default function LocationsPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <InnerPageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Locations" },
          ]}
          eyebrow="Our Outlets"
          title="Find Your Nearest Kesar."
          description="Step into any of our flagship experiential outlets for freshly rolled puris, chilled flavoured fountains, and vibrant ambience."
          primaryButton={{ label: "Browse All Outlets", href: "#all-outlets" }}
          secondaryButton={{ label: "Reserve A Table", href: "/contact" }}
        />

        <LocationPickerSection />
        <AllOutletsSection />
        <LocationInfoSection />

        <PageCallToAction
          eyebrow="Planning Something Bigger?"
          title="Planning something bigger?"
          description="We cater parties and events, and we're always looking for great franchise partners."
          primaryLabel="Talk To Us"
          primaryHref="/contact"
          secondaryLabel="Franchise Info"
          secondaryHref="/franchise"
        />
      </main>
      <SiteFooter />
    </>
  );
}
