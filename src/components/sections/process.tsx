import { useTranslations } from "next-intl";

const STEP_COUNT = 6;

export function ProcessSection() {
  const t = useTranslations("Process");

  return (
    <section className="px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-mist-200 mb-4">
            {t("title")}
          </h2>
          <div className="w-12 h-0.5 bg-mist-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {Array.from({ length: STEP_COUNT }, (_, i) => (
            <div
              key={i}
              className="relative p-6 md:p-8 border-b border-r border-mist-500/10 last:border-r-0 [&:nth-child(2n)]:sm:border-r-0 [&:nth-child(3n)]:lg:border-r-0 [&:nth-last-child(-n+2)]:sm:border-b-0 [&:nth-last-child(-n+3)]:lg:border-b-0"
            >
              <div className="text-5xl md:text-6xl font-heading font-semibold text-mist-500/20 mb-4 leading-none select-none">
                {t(`steps.${i}.number`)}
              </div>
              <h3 className="font-heading text-lg font-semibold text-mist-200 mb-3">
                {t(`steps.${i}.title`)}
              </h3>
              <p className="text-sm md:text-base leading-relaxed font-sans font-light text-foreground/70">
                {t(`steps.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
