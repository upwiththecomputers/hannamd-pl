import { useTranslations } from "next-intl";

const ITEM_COUNT = 4;

export function WorkSection() {
  const t = useTranslations("Work");

  return (
    <section id="work" className="px-4 sm:px-8 py-16 md:py-24 border-t border-mist-500/10">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-mist-500 uppercase mb-4">
              {t("subtitle")}
            </p>
            <h2 className="font-heading italic text-5xl md:text-7xl font-semibold tracking-tight text-mist-200">
              {t("title")}
            </h2>
          </div>
          <div className="hidden sm:block w-px self-stretch bg-mist-500/20 mx-6" />
        </div>

        {/* Work items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-mist-500/10">
          {Array.from({ length: ITEM_COUNT }, (_, i) => (
            <div
              key={i}
              className="group bg-[#0D0D09] p-8 md:p-10 hover:bg-mist-900/40 transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <span className="font-mono text-xs text-mist-500/70 mt-1 shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-mist-200 mb-4 group-hover:text-mist-100 transition-colors">
                    {t(`items.${i}.label`)}
                  </h3>
                  <p className="font-sans font-light text-base leading-relaxed text-foreground/80">
                    {t(`items.${i}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
