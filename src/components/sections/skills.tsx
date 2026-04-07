import { useTranslations } from "next-intl";

const SKILL_COUNT = 6;

export function SkillsSection() {
  const t = useTranslations("Skills");

  return (
    <section className="px-4 sm:px-8 py-16 md:py-24 dark:bg-[#0D0D09]/60 border-y border-mist-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-mist-200 mb-4">
            {t("title")}
          </h2>
          <div className="w-12 h-0.5 bg-mist-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Array.from({ length: SKILL_COUNT }, (_, i) => (
            <div
              key={i}
              className="group p-6 md:p-8 rounded-lg border border-mist-500/20 dark:bg-white/[0.02] hover:border-mist-400/40 hover:dark:bg-white/[0.04] transition-all duration-200"
            >
              <div className="text-xs font-mono text-mist-500 mb-3 tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-heading text-lg font-semibold text-mist-200 mb-3">
                {t(`items.${i}.title`)}
              </h3>
              <p className="text-sm md:text-base leading-relaxed font-sans font-light text-foreground/70">
                {t(`items.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
