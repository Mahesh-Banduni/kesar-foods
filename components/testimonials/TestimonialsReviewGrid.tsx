import Image from "next/image";
import { SectionHead } from "@/components/shared/SectionHead";
import { ChatIcon } from "@/components/shared/icons";

const reviews = [
  {
    stars: 5,
    tag: "Verified Customer",
    quote:
      "The crunch of the puris and the temperature of the mint water is perfection. Absolutely the finest pani puri in the country!",
    avatar: "/dahi-puri.jpg",
    name: "Priya Sharma",
    role: "Food Blogger & Critic",
  },
  {
    stars: 5,
    tag: "Regular Visitor",
    quote:
      "The Cheese Loaded Puri blew my mind! You would never think molten cheese could blend so well with traditional spicy hing pani.",
    avatar: "/golgappa-spread.jpg",
    name: "Rahul Verma",
    role: "Tech Entrepreneur",
  },
  {
    stars: 5,
    tag: "Verified Customer",
    quote:
      "Hygiene standards here are unmatched. Automated water taps, gloves, pristine counters, and bursting flavors in every single puri.",
    avatar: "/sev-puri.jpg",
    name: "Ananya Patel",
    role: "Nutritionist",
  },
  {
    stars: 5,
    tag: "Loyal Member",
    quote:
      "Their Royal Dahi Puri reminds me of old Delhi streets, but with a luxurious gourmet touch. We come here every Sunday without fail!",
    avatar: "/bhel-puri.jpg",
    name: "Vikram Malhotra",
    role: "Architect",
  },
];

export function TestimonialsReviewGrid() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHead
          centered
          badgeIcon={<ChatIcon className="size-scale-4" />}
          badgeText="In Their Words"
          title="What Guests Are Saying"
        />

        <div className="grid gap-scale-6 md:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col justify-between gap-scale-6 rounded-2xl border border-border bg-card p-scale-6 transition-all duration-300 hover:shadow-xl hover:border-primary/20"
            >
              <div>
                <div className="flex items-center gap-scale-3 mb-scale-4">
                  <span className="text-yellow-500">
                    {"★".repeat(review.stars)}
                  </span>
                  <span className="rounded-button bg-primary/10 px-scale-3 py-scale-1 para-text-xs font-semibold text-primary">
                    {review.tag}
                  </span>
                </div>
                <p className="para-text-md italic text-text-secondary leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-scale-3 border-t border-border pt-scale-4">
                <div className="relative size-scale-12 shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                  <Image
                    src={review.avatar}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="h7 text-text-primary">{review.name}</p>
                  <p className="para-text-xs text-text-secondary">{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
