import type { AboutSectionData } from "@/sanity/types";

export function AboutSection({ data }: { data: AboutSectionData }) {
  if (!data) return null;

  return (
    <section className="px-4 sm:px-8 py-16 md:py-24 border-t border-mist-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          {/* Label + heading */}
          <div className="lg:sticky lg:top-24">
            <p className="font-mono text-xs tracking-[0.25em] text-mist-500 uppercase mb-4">
              {data.title}
            </p>
            {/* Decorative large letter */}
            <div
              className="font-heading italic font-bold text-[8rem] md:text-[10rem] leading-none select-none text-mist-500/8 -ml-3 -mb-8"
              aria-hidden="true"
            >
              Hanna
            </div>
            <div className="w-8 h-0.5 bg-mist-500" />
          </div>

          {/* Text content */}
          <div className="space-y-8">
            {/* Pull quote */}
            <p className="font-heading italic text-xl md:text-2xl leading-relaxed text-mist-200">
              {data.pullQuote}
            </p>

            {[data.paragraph1, data.paragraph2].filter(Boolean).map((p, i) => (
              <p
                key={i}
                className="font-sans font-light text-base md:text-lg leading-relaxed text-foreground/80"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
