"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1 text-sm font-sans font-medium">
      <button
        onClick={() => switchLocale("pl")}
        className={cn(
          "px-2 py-1 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          locale === "pl"
            ? "text-mist-200 font-semibold"
            : "text-muted-foreground hover:text-foreground",
        )}
        aria-label="Przełącz na polski"
        aria-current={locale === "pl" ? "true" : undefined}
      >
        PL
      </button>
      <span className="text-muted-foreground/50 select-none" aria-hidden="true">|</span>
      <button
        onClick={() => switchLocale("en")}
        className={cn(
          "px-2 py-1 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          locale === "en"
            ? "text-mist-200 font-semibold"
            : "text-muted-foreground hover:text-foreground",
        )}
        aria-label="Switch to English"
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </button>
    </div>
  );
}
