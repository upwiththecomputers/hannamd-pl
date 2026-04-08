import { Separator } from "@/components/ui/separator";
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
          <span className="scroll-m-20 p-4 text-left uppercase text-xl font-sans font-extrabold tracking-tight text-balance">
            HMD
          </span>
        </div>
        <nav aria-label="Language">
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
