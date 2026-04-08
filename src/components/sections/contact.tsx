import { useTranslations } from "next-intl";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section className="px-4 sm:px-8 py-16 md:py-24 border-t border-mist-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-mist-500 uppercase mb-4">
              {t("subtitle")}
            </p>
            <h2 className="font-heading italic text-5xl md:text-6xl font-semibold tracking-tight text-mist-200">
              {t("title")}
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-end md:pt-16">
            <p className="font-mono text-xs tracking-[0.25em] text-mist-500 uppercase mb-4">
              {t("linkedinLabel")}
            </p>
            <a
              href={`https://${t("linkedin")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 group"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full border border-mist-500/40 text-mist-500 group-hover:border-mist-400 group-hover:text-mist-300 transition-all duration-200 shrink-0">
                <LinkedinIcon className="w-5 h-5" />
              </span>
              <span className="font-sans font-light text-lg text-mist-200 group-hover:text-mist-100 transition-colors break-all">
                {t("linkedin")}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-mist-500/10 flex items-center justify-between gap-4">
        <p className="font-heading italic text-sm text-mist-500/40">
          Hanna Mikulska-Delgaldo
        </p>
        <p className="font-mono text-xs text-muted-foreground/30">
          © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
