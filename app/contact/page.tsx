import type { Metadata } from "next";
import { Navigation } from "@/components/shared/Navigation";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { ContactInfoTiles } from "@/components/contact/ContactInfoTiles";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { ContactHQSection } from "@/components/contact/ContactHQSection";
import { ContactPhotoStrip } from "@/components/contact/ContactPhotoStrip";
import { ContactFAQSection } from "@/components/contact/ContactFAQSection";
import { ContactCTASection } from "@/components/contact/ContactCTASection";

export const metadata: Metadata = {
  title: "Contact Kesar — Get In Touch | Authentic Indian Pani Puri",
  description:
    "Orders, events, franchise enquiries or just a compliment about the pani — reach out and our team will get back to you quickly.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <InnerPageHero
          variant="lime"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
          eyebrow="Get In Touch"
          title="We'd Love To Hear From You."
          description="Orders, events, franchise enquiries or just a compliment about the pani — reach out and our team will get back to you quickly."
        />

        <ContactInfoTiles />
        <ContactFormSection />
        <ContactHQSection />
        <ContactPhotoStrip />
        <ContactFAQSection />
        <ContactCTASection />
      </main>
      <SiteFooter />
    </>
  );
}
