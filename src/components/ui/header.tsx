import { Separator } from "@/components/ui/separator";
import { TypographyHeader } from "@/components/ui/typography";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export function Header() {
  return (
    <header className="flex h-14 bg-[#0D0D09] shrink-0 items-center border-b border-mist-500/20 transition-[width,height] ease-linear">
      <div className="flex w-full items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-2">
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <TypographyHeader>Hanna Mikulska-Delgardo</TypographyHeader>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
