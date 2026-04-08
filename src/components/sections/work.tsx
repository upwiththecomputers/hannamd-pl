import Image from "next/image";
import { useTranslations } from "next-intl";

const ITEM_COUNT = 4;

const CAROUSEL_ITEMS = [
  { src: "/footwear/01-fuzzy-slippers.png" },
  { src: "/footwear/02-black-sneakers.png" },
  { src: "/footwear/03-white-high-tops.png" },
  { src: "/footwear/04-baby-shoes.png" },
  { src: "/footwear/05-tall-boots.png" },
];

export function WorkSection() {
  const t = useTranslations("Work");
  const tc = useTranslations("FootwearCarousel");

  return (
    <section id="work" className="px-4 sm:px-8 py-16 md:py-24 border-t border-mist-500/10">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
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

        {/* Footwear carousel — full-bleed light strip */}
        <div className="-mx-4 sm:-mx-8 mb-16">
          <div className="bg-mist-100 py-6 md:py-8">
            <ul className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-[12%] sm:px-[5%] md:px-[2%]">
              {CAROUSEL_ITEMS.map((item, i) => (
                <li
                  key={i}
                  className="snap-center shrink-0 w-[76%] sm:w-[44%] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] xl:w-[calc(20%-1.2rem)]"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={item.src}
                      alt={tc(`items.${i}`)}
                      fill
                      className="object-contain mix-blend-multiply"
                      sizes="(max-width:640px) 76vw, (max-width:768px) 44vw, (max-width:1024px) 33vw, 25vw"
                    />
                  </div>
                  <div
                    className="w-3/5 mx-auto h-3 rounded-full bg-mist-700/15 blur-md -mt-6"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>
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
