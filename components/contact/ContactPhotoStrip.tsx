import { PhotoStrip } from "@/components/shared/PhotoStrip";

const photos = [
  {
    src: "/panipuri-platter.jpg",
    alt: "Signature pani puri platter with spiced water",
    caption: "Drop In For A Plate",
  },
  {
    src: "/delhi-chaat.jpg",
    alt: "Delhi chaat platter with chutneys and sev",
    caption: "Assembled Fresh To Order",
  },
  {
    src: "/lassi.jpg",
    alt: "Sweet lassi served chilled in a tall glass",
    caption: "Wash It Down Chilled",
  },
];

export function ContactPhotoStrip() {
  return (
    <section className="section-container pb-scale-20">
      <PhotoStrip photos={photos} columns={3} />
    </section>
  );
}
