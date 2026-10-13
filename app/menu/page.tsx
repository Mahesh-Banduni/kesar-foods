import type { Metadata } from "next";
import { Navigation } from "@/components/shared/Navigation";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { MenuListSection } from "@/components/menu/MenuListSection";
import { MenuSignatureSection } from "@/components/menu/MenuSignatureSection";
import { MenuFAQSection } from "@/components/menu/MenuFAQSection";
import { MenuPromoSection } from "@/components/menu/MenuPromoSection";

export const metadata: Metadata = {
  title: "Our Menu — Pani Puri Varieties | Kesar",
  description:
    "Explore the Kesar menu — classic mint pani puri, royal dahi puri, fusion flavours, street specials, combos and drinks.",
};

export default function MenuPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <InnerPageHero
          variant="lime"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Menu" },
          ]}
          eyebrow="Fresh Daily Menu"
          title="Every Puri, Made Fresh To Order."
          description="Crispy shells, cold-pressed pani and gourmet fillings — pick a flavour or build a platter. Vegetarian throughout, prepared in open kitchens."
          primaryButton={{ label: "Browse The Menu", href: "#menu-list" }}
          secondaryButton={{ label: "Order For Pickup", href: "/locations" }}
        />

        <MenuListSection />
        <MenuSignatureSection />
        <MenuFAQSection />
        <MenuPromoSection />
      </main>
      <SiteFooter />
    </>
  );
}
