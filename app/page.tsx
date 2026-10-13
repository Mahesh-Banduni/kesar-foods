import { Navigation } from "@/components/shared/Navigation";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { MenuSection } from "@/components/home/MenuSection";
import { SignatureSection } from "@/components/home/SignatureSection";
import { FindUsSection } from "@/components/home/FindUsSection";
import { FranchiseSection } from "@/components/home/FranchiseSection";
import { GallerySection } from "@/components/home/GallerySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTABanner } from "@/components/home/CTABanner";
import { SiteFooter } from "@/components/shared/SiteFooter";

export default function Home() {
  return (
    <main className="home-page overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <SignatureSection />
      <FindUsSection />
      <FranchiseSection />
      <GallerySection />
      <TestimonialsSection />
      <CTABanner />
      <SiteFooter />
    </main>
  );
}
