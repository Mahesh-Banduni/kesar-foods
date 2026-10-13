import type { Metadata } from "next";
import { Navigation } from "@/components/shared/Navigation";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { FranchiseBrandSection } from "@/components/franchise/FranchiseBrandSection";
import { FranchiseBenefitsSection } from "@/components/franchise/FranchiseBenefitsSection";
import { FranchisePhotoSection } from "@/components/franchise/FranchisePhotoSection";
import { FranchiseProcessSection } from "@/components/franchise/FranchiseProcessSection";
import { FranchiseInquirySection } from "@/components/franchise/FranchiseInquirySection";
import { FranchiseFAQSection } from "@/components/franchise/FranchiseFAQSection";
import { FranchiseCTASection } from "@/components/franchise/FranchiseCTASection";
import { StatStrip } from "@/components/shared/StatStrip";

export const metadata: Metadata = {
  title: "Franchise — Own a Kesar Pani Puri Outlet",
  description:
    "Partner with Kesar — turnkey kitchen setup, proprietary automated pani dispensers, supply chain backing and nationwide branding for a high-growth pani puri franchise.",
};

export default function FranchisePage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <InnerPageHero
          variant="lime"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Franchise" },
          ]}
          eyebrow="Partner With Us"
          title="Own a High-Growth Kesar Franchise."
          description="Join India's most beloved contemporary street food movement. We provide complete turnkey kitchen setup, proprietary automated pani dispensers, supply chain backing, and nationwide branding."
          primaryButton={{ label: "Request Franchise Deck", href: "#inquire" }}
          secondaryButton={{ label: "How It Works", href: "#how" }}
        />

        <FranchiseBrandSection />

        <StatStrip
          stats={[
            { value: "50+", label: "Operating Outlets" },
            { value: "35%", label: "Avg. ROI / Yr" },
            { value: "30 Days", label: "Launch Setup" },
            { value: "100%", label: "Raw Material Support" },
          ]}
        />

        <FranchiseBenefitsSection />
        <FranchisePhotoSection />
        <FranchiseProcessSection />
        <FranchiseInquirySection />
        <FranchiseFAQSection />
        <FranchiseCTASection />
      </main>
      <SiteFooter />
    </>
  );
}
