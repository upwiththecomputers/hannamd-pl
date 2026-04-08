import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("About");
  const paragraphs = [t("paragraphs.0"), t("paragraphs.1"), t("paragraphs.2")];

  return (
    <section className="px-4 sm:px-8 py-16 md:py-24 border-t border-mist-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          {/* Label + heading */}
          <div className="lg:sticky lg:top-24">
            <p className="font-mono text-xs tracking-[0.25em] text-mist-500 uppercase mb-4">
              {t("title")}
            </p>
            {/* Decorative large letter */}
            <div
              className="font-heading italic font-bold text-[8rem] md:text-[10rem] leading-none select-none text-mist-500/8 -ml-3 -mb-8"
              aria-hidden="true"
            >
              H
            </div>
            <div className="w-8 h-0.5 bg-mist-500" />
          </div>

          {/* Text content */}
          <div className="space-y-8">
            {/* First paragraph as pull-quote */}
            <p className="font-heading italic text-xl md:text-2xl leading-relaxed text-mist-200">
              {paragraphs[0]}
            </p>

            {paragraphs.slice(1).map((p, i) => (
              <p
                key={i}
                className="font-sans font-light text-base md:text-lg leading-relaxed text-foreground/70"
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
