import { SectionHead } from "@/components/shared/SectionHead";
import { PhotoStrip } from "@/components/shared/PhotoStrip";
import { BuildingIcon } from "@/components/shared/icons";

export function FranchisePhotoSection() {
  return (
    <section className="section-container py-scale-lg-6">
      <SectionHead
        centered
        badgeIcon={<BuildingIcon className="size-scale-4" />}
        badgeText="Brand In Action"
        title="Outlets Built On Our Playbook"
        description="Consistent counters, consistent crunch — every Kesar looks and tastes the part."
      />
      <PhotoStrip
        columns={3}
        photos={[
          {
            src: "/golgappa-spread.jpg",
            alt: "Assorted golgappa platter laid out for service",
            caption: "Counter-Ready Platters",
          },
          {
            src: "/panipuri-platter.jpg",
            alt: "Signature pani puri platter with spiced water",
            caption: "Signature Pani Puri",
          },
          {
            src: "/sev-puri.jpg",
            alt: "Sev puri finished with crisp sev and chutneys",
            caption: "Chaat Station Favourites",
          },
        ]}
      />
    </section>
  );
}
