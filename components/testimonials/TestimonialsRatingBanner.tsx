export function TestimonialsRatingBanner() {
  return (
    <section className="section-container py-scale-lg-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-scale-6 shadow-xl sm:p-scale-lg-14">
        <div
          aria-hidden="true"
          className="absolute top-[-40px] right-[-20px] h-[280px] w-[280px] rounded-full bg-secondary/30 blur-3xl"
        />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-scale-8">
          <div className="flex items-center gap-scale-6">
            <div className="text-center">
              <div
                className="h1 text-primary"
                style={{ fontSize: "clamp(44px, 6vw, 64px)" }}
              >
                4.9
              </div>
              <div className="text-yellow-500 text-[20px]">★★★★★</div>
            </div>
            <div className="max-w-sm">
              <h2 className="h4">Rated by real guests, every day.</h2>
              <p className="para-text-sm mt-scale-2 text-text-secondary">
                Across dine-in, takeaway and delivery — consistency is the thing
                people notice most.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-scale-4">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-scale-4" aria-hidden="true">
                    <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.5l7.1-.6z" />
                  </svg>
                ),
                value: "3,200+",
                label: "5-Star Reviews",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-scale-4" aria-hidden="true">
                    <path d="M3 21h18M5 21V7l7-4 7 4v14" /><path d="M9 21v-5h6v5" />
                  </svg>
                ),
                value: "50+",
                label: "Outlets Nationwide",
              },
            ].map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-bg-3 p-scale-4">
                <span className="text-primary">{m.icon}</span>
                <div className="h4 mt-scale-1 text-primary">{m.value}</div>
                <div className="para-text-xs text-text-secondary">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
