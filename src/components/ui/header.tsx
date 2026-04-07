import { Separator } from "@/components/ui/separator";
import { TypographyHeader } from "@/components/ui/typography";

export function Header() {
  return (
    <header className="flex h-(--header-height) bg-[#0D0D09] shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <TypographyHeader>Hanna Mikulska-Delgaldo</TypographyHeader>
      </div>
    </header>
  );
}
