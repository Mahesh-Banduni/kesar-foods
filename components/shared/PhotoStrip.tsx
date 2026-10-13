import Image from "next/image";

interface PhotoStripProps {
  photos: { src: string; alt: string; caption: string }[];
  columns?: 3 | 4;
}

export function PhotoStrip({ photos, columns = 4 }: PhotoStripProps) {
  return (
    <div
      className={`grid gap-scale-4 sm:grid-cols-2 ${
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
      }`}
    >
      {photos.map((photo) => (
        <figure
          key={photo.caption}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <figcaption className="p-scale-3 text-center">
            <span className="para-text-xs font-semibold text-text-primary">
              {photo.caption}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
