import Link from "next/link";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/shared/icons";

const tiles = [
  {
    href: "tel:+919876543210",
    icon: <PhoneIcon className="size-[22px]" />,
    title: "Call Us",
    main: "+91 98765 43210",
    sub: "Daily, 11:00 AM – 11:00 PM",
  },
  {
    href: "mailto:hello@kesarpanipuri.com",
    icon: <MailIcon className="size-[22px]" />,
    title: "Email Us",
    main: "hello@kesarpanipuri.com",
    sub: "Replies within one business day",
  },
  {
    href: "/locations",
    icon: <MapPinIcon className="size-[22px]" />,
    title: "Visit HQ",
    main: "123 Connaught Place, New Delhi",
    sub: "See all outlets",
  },
];

export function ContactInfoTiles() {
  return (
    <section className="section-padding">
      <div className="section-container grid gap-scale-6 md:grid-cols-3">
        {tiles.map((tile) => (
          <Link
            key={tile.title}
            href={tile.href}
            className="group rounded-2xl border border-border bg-card p-scale-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg no-underline"
          >
            <span className="mx-auto mb-scale-4 inline-flex size-scale-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
              {tile.icon}
            </span>
            <h3 className="h6">{tile.title}</h3>
            <p className="para-text-sm mt-scale-2 font-medium text-text-primary">
              {tile.main}
            </p>
            <p className="para-text-xs mt-scale-1 text-text-muted">{tile.sub}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
