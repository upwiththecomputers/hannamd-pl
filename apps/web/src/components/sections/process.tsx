import type { ProcessSectionData } from "@/sanity/types";

// Alternating warm tints from the mist palette — per step
const stepBg = [
  "transparent",
  "oklch(0.20 0.012 65 / 0.35)",
  "oklch(0.21 0.018 15 / 0.35)",
  "transparent",
  "oklch(0.20 0.012 65 / 0.35)",
  "oklch(0.21 0.018 15 / 0.35)",
];

export function ProcessSection({ data }: { data: ProcessSectionData }) {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden py-0">
      {/* Top wave */}
      <div className="relative z-10 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16 block"
          aria-hidden="true"
        >
          <path
            d="M0,0 C240,80 480,0 720,40 C960,80 1200,10 1440,50 L1440,80 L0,80 Z"
            className="fill-[#0D0D09]"
          />
        </svg>
      </div>

      {/* Section content */}
      <div className="relative z-10 px-4 sm:px-8 pt-4 pb-0">
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <p className="font-mono text-xs tracking-[0.25em] text-mist-500 uppercase mb-4">
            {data.subtitle}
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-semibold tracking-tight text-mist-200">
            {data.title}
          </h2>
        </div>
      </div>

      {/* Steps grid — full-bleed, no outer padding */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item, i) => (
          <div
            key={i}
            className="px-8 md:px-12 pt-10 pb-10 border-b border-r border-mist-500/10 last:border-r-0 [&:nth-child(2n)]:sm:border-r-0 [&:nth-child(3n)]:lg:border-r-0 [&:nth-last-child(-n+2)]:sm:border-b-0 [&:nth-last-child(-n+3)]:lg:border-b-0 transition-colors duration-300 hover:bg-mist-900/20"
            style={{ background: stepBg[i % stepBg.length] }}
          >
            {/* Large italic number as background accent */}
            <div
              className="font-heading italic font-bold text-[7rem] md:text-[9rem] leading-none select-none text-mist-500/10 mb-0 -mt-4 -ml-2"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-mist-200 mb-3 -mt-4">
              {item.title}
            </h3>
            <p className="font-sans font-light text-sm md:text-base leading-relaxed text-foreground/80">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom wave */}
      <div className="relative z-10 overflow-hidden leading-none mt-0">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16 block rotate-180"
          aria-hidden="true"
        >
          <path
            d="M0,0 C240,80 480,0 720,40 C960,80 1200,10 1440,50 L1440,80 L0,80 Z"
            className="fill-[#0D0D09]"
          />
        </svg>
      </div>
    </section>
  );
}
