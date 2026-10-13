import Image from "next/image";
import Link from "next/link";
import { SectionHead } from "@/components/shared/SectionHead";
import {
  BuildingIcon,
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  StarIcon,
} from "@/components/shared/icons";

const outlets = [
  {
    image: "/golgappa-spread.jpg",
    alt: "Assorted golgappa platter with spiced water",
    city: "New Delhi",
    name: "Connaught Place Flagship",
    sub: "Central Hub, New Delhi",
    address: "Block B, Inner Circle, Connaught Place, New Delhi",
    hours: "11:00 AM – 11:00 PM · Every day",
    phone: "+91 98765 43210",
    rating: "4.9",
    mapsUrl: "https://maps.google.com/?q=Connaught%20Place%20New%20Delhi",
  },
  {
    image: "/panipuri-platter.jpg",
    alt: "Signature pani puri platter with mint water",
    city: "Mumbai",
    name: "Bandra West Bistro",
    sub: "Pali Hill, Mumbai",
    address: "Waterfield Road, Bandra West, Mumbai, Maharashtra",
    hours: "12:00 PM – 11:30 PM · Every day",
    phone: "+91 98765 43211",
    rating: "4.8",
    mapsUrl: "https://maps.google.com/?q=Bandra%20West%20Mumbai",
  },
  {
    image: "/papdi-chaat.jpg",
    alt: "Papdi chaat platter topped with yogurt and sev",
    city: "Bengaluru",
    name: "Indiranagar Lounge",
    sub: "100 Feet Rd, Bengaluru",
    address: "12th Main Road, Indiranagar, Bengaluru, Karnataka",
    hours: "11:30 AM – 10:30 PM · Every day",
    phone: "+91 98765 43212",
    rating: "4.9",
    mapsUrl: "https://maps.google.com/?q=Indiranagar%20Bengaluru",
  },
];

export function AllOutletsSection() {
  return (
    <section className="section-padding bg-bg-3" id="all-outlets">
      <div className="section-container">
        <SectionHead
          centered
          badgeIcon={<BuildingIcon className="size-scale-4" />}
          badgeText="Three Flagship Outlets"
          title="Every Kesar, All In One Place"
          description="Same hand-rolled puris, same cold-pressed pani, three very different neighbourhoods."
        />

        <div className="grid gap-scale-6 md:grid-cols-2 lg:grid-cols-3">
          {outlets.map((outlet) => (
            <article
              key={outlet.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={outlet.image}
                  alt={outlet.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-scale-5">
                <span className="inline-flex items-center gap-scale-2 rounded-button bg-primary/10 px-scale-3 py-scale-1 para-text-xs font-semibold text-primary">
                  {outlet.city}
                </span>
                <h3 className="h6 mt-scale-3">{outlet.name}</h3>
                <p className="para-text-xs mt-scale-1 text-text-muted">
                  {outlet.sub}
                </p>

                <div className="mt-scale-4 space-y-scale-2">
                  <div className="flex items-start gap-scale-2 para-text-xs text-text-secondary">
                    <MapPinIcon className="mt-scale-0.5 size-[16px] shrink-0 text-primary" />
                    <span>{outlet.address}</span>
                  </div>
                  <div className="flex items-center gap-scale-2 para-text-xs text-text-secondary">
                    <ClockIcon className="size-[16px] shrink-0 text-primary" />
                    <span>{outlet.hours}</span>
                  </div>
                  <div className="flex items-center gap-scale-2 para-text-xs text-text-secondary">
                    <PhoneIcon className="size-[16px] shrink-0 text-primary" />
                    <span>{outlet.phone}</span>
                  </div>
                  <div className="flex items-center gap-scale-2 para-text-xs text-text-secondary">
                    <StarIcon className="size-[16px] shrink-0 text-yellow-500" />
                    <span>Rated {outlet.rating} by guests</span>
                  </div>
                </div>

                <div className="mt-scale-5 flex flex-wrap gap-scale-3">
                  <Link
                    className="btn btn-sm border border-border bg-card text-text-primary hover:border-primary/30"
                    href={outlet.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Directions
                  </Link>
                  <Link className="btn btn-primary btn-sm" href="/menu">
                    Order Pickup
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
