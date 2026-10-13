interface StatStripProps {
  stats: { value: string; label: string }[];
}

export function StatStrip({ stats }: StatStripProps) {
  return (
    <section className="section-container py-scale-lg-6">
      <div className="relative overflow-hidden rounded-3xl bg-bg-2 p-scale-6 sm:p-scale-lg-16">
        <div
          aria-hidden="true"
          className="absolute top-[-40px] left-[10%] h-[300px] w-[300px] rounded-full bg-secondary/12 blur-3xl"
        />
        <div className="relative z-10">
          <div className="grid grid-cols-2 gap-scale-6 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="h2 text-text-neutral">{stat.value}</div>
                <div className="para-text-xs mt-scale-2 text-text-neutral/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
