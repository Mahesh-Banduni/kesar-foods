import { SectionHead } from "@/components/shared/SectionHead";
import { PhotoStrip } from "@/components/shared/PhotoStrip";
import { CameraIcon } from "@/components/shared/icons";

export function AboutPhotoSection() {
  return (
    <section className="section-container py-scale-lg-6">
      <SectionHead
        centered
        badgeIcon={<CameraIcon className="size-scale-4" />}
        badgeText="Inside Kesar"
        title="A Look At What We Serve"
        description="Real plates, real crunch — a few of the dishes our guests keep coming back for."
      />

      <PhotoStrip
        photos={[
          {
            src: "/panipuri-platter.jpg",
            alt: "Pani puri platter with spiced mint water",
            caption: "Signature Pani Puri",
          },
          {
            src: "/dahi-puri.jpg",
            alt: "Dahi puri topped with chilled yogurt and pomegranate",
            caption: "Royal Dahi Puri",
          },
          {
            src: "/sev-puri.jpg",
            alt: "Sev puri topped with crisp sev and chutneys",
            caption: "Sev Batata Puri",
          },
          {
            src: "/puri-shells.jpg",
            alt: "Freshly fried hollow puri shells",
            caption: "Hand-Rolled Puris",
          },
        ]}
      />
    </section>
  );
}
