import { useTranslations } from "next-intl";

const SKILL_COUNT = 6;

export function SkillsSection() {
  const t = useTranslations("Skills");

  return (
    <section className="px-4 sm:px-8 py-16 md:py-24 border-t border-mist-500/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-mist-500 uppercase mb-4">
              {t("title")}
            </p>
            <h2 className="font-heading text-5xl md:text-6xl font-semibold tracking-tight text-mist-200">
              {t("title")}
            </h2>
          </div>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Array.from({ length: SKILL_COUNT }, (_, i) => (
            <div
              key={i}
              className="group relative p-6 md:p-8 border border-mist-500/15 hover:border-mist-500/40 dark:bg-white/[0.02] hover:dark:bg-white/[0.04] transition-all duration-300"
            >
              {/* Index number — large, background */}
              <div
                className="absolute top-4 right-6 font-heading italic font-bold text-6xl md:text-7xl leading-none select-none text-mist-500/8 group-hover:text-mist-500/14 transition-colors"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Accent line */}
              <div className="w-6 h-0.5 bg-mist-500/50 mb-6 group-hover:w-10 group-hover:bg-mist-500 transition-all duration-300" />

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-mist-200 mb-3 leading-tight">
                {t(`items.${i}.title`)}
              </h3>
              <p className="font-sans font-light text-sm md:text-base leading-relaxed text-foreground/60">
                {t(`items.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
