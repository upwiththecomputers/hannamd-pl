import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section className="px-4 sm:px-8 py-16 md:py-24 border-t border-mist-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-mist-200 mb-4">
              {t("title")}
            </h2>
            <div className="w-12 h-0.5 bg-mist-500 mb-6" />
            <p className="text-lg md:text-xl font-sans font-light text-foreground/70">
              {t("subtitle")}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-mono tracking-widest text-mist-500 uppercase mb-2">
                {t("emailLabel")}
              </p>
              <a
                href={`mailto:${t("email")}`}
                className="text-lg md:text-xl font-sans font-light text-mist-200 hover:text-mist-100 transition-colors break-all"
              >
                {t("email")}
              </a>
            </div>

            <div>
              <p className="text-xs font-mono tracking-widest text-mist-500 uppercase mb-2">
                {t("linkedinLabel")}
              </p>
              <a
                href={`https://${t("linkedin")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl font-sans font-light text-mist-200 hover:text-mist-100 transition-colors break-all"
              >
                {t("linkedin")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-mist-500/10">
        <p className="text-xs font-mono text-muted-foreground/40 text-center">
          © {new Date().getFullYear()} Hanna Mikulska-Delgardo
        </p>
      </div>
    </section>
  );
}
