import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("About");
  const paragraphs = [
    t("paragraphs.0"),
    t("paragraphs.1"),
    t("paragraphs.2"),
  ];

  return (
    <section className="px-4 sm:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-mist-200 mb-2">
              {t("title")}
            </h2>
            <div className="w-12 h-0.5 bg-mist-500 mt-4" />
          </div>
          <div className="space-y-6">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed font-sans font-light text-foreground/80">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
