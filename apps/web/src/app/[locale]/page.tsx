import Image from "next/image";
import { client } from "@/sanity/client";
import {
  urlFor,
  HERO_SECTION_QUERY,
  ABOUT_SECTION_QUERY,
  WORK_SECTION_QUERY,
  SKILLS_SECTION_QUERY,
  PROCESS_SECTION_QUERY,
  CONTACT_SECTION_QUERY,
  fetchOptions,
} from "@/sanity/queries";
import type {
  HeroSectionData,
  AboutSectionData,
  WorkSectionData,
  SkillsSectionData,
  ProcessSectionData,
  ContactSectionData,
  ResolvedCarouselImage,
} from "@/sanity/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { WorkSection } from "@/components/sections/work";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProcessSection } from "@/components/sections/process";
import { ContactSection } from "@/components/sections/contact";

type Props = {
  params: Promise<{ locale: string }>;
};

function HeroSection({
  data,
  imageUrl,
}: {
  data: HeroSectionData;
  imageUrl: string | null;
}) {
  return (
    <section className="flex w-full flex-col md:flex-row rounded-lg border border-mist-500/30 items-stretch bg-white dark:bg-[url('/tile.png')] bg-repeat-round overflow-hidden">
      {/* Text column */}
      <div className="flex flex-col justify-between p-8 md:p-[4vw] md:w-1/2 order-2 md:order-1">
        <div className="mb-8 md:mb-16">
          <h1
            className="font-heading italic text-4xl/tight sm:text-5xl/tight md:text-6xl/tight lg:text-[5.5rem]/tight tracking-tight font-semibold text-mist-200 animate-reveal-up"
            style={{ animationDelay: "100ms" }}
          >
            {data?.heading}
          </h1>
        </div>

        <p
          className="text-lg/8 sm:text-xl/9 md:text-2xl/10 mb-8 md:mb-12 font-sans font-extralight text-foreground/80 animate-reveal-up"
          style={{ animationDelay: "350ms" }}
        >
          {data?.subheading}
        </p>

        <div className="animate-reveal-up" style={{ animationDelay: "600ms" }}>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-mist-500/50 text-mist-200 hover:bg-mist-500/10 px-8 py-3 text-base md:text-lg font-sans font-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {data?.cta}
          </a>
        </div>
      </div>

      {/* Image column */}
      {imageUrl && (
        <div
          className="order-1 md:order-2 md:w-1/2 animate-reveal-up"
          style={{ animationDelay: "200ms" }}
        >
          <AspectRatio ratio={4 / 4} className="w-full">
            <Image
              src={imageUrl}
              alt={data?.heading ?? "Hanna Mikulska-Delgaldo"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
              priority
              className="rounded-none md:rounded-r-lg object-cover mix-blend-lighten"
            />
          </AspectRatio>
        </div>
      )}
    </section>
  );
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  const [hero, about, work, skills, process, contact] = await Promise.all([
    client.fetch<HeroSectionData>(HERO_SECTION_QUERY, { locale }, fetchOptions),
    client.fetch<AboutSectionData>(
      ABOUT_SECTION_QUERY,
      { locale },
      fetchOptions,
    ),
    client.fetch<WorkSectionData>(WORK_SECTION_QUERY, { locale }, fetchOptions),
    client.fetch<SkillsSectionData>(
      SKILLS_SECTION_QUERY,
      { locale },
      fetchOptions,
    ),
    client.fetch<ProcessSectionData>(
      PROCESS_SECTION_QUERY,
      { locale },
      fetchOptions,
    ),
    client.fetch<ContactSectionData>(
      CONTACT_SECTION_QUERY,
      { locale },
      fetchOptions,
    ),
  ]);

  const heroImageUrl = hero?.image
    ? (urlFor(hero.image)?.url() ?? null)
    : null;

  const carouselImages: ResolvedCarouselImage[] = (work?.images ?? []).map(
    (img) => ({
      url: urlFor(img)?.url() ?? null,
      alt: img.alt ?? null,
    }),
  );

  return (
    <div className="flex flex-col flex-1 dark:bg-[#0D0D09]">
      {/* Hero */}
      <div className="flex items-center justify-center px-4 sm:px-8 py-10 md:py-16">
        <div className="w-full max-w-6xl">
          <HeroSection data={hero} imageUrl={heroImageUrl} />
        </div>
      </div>

      {/* About */}
      <ScrollReveal>
        <AboutSection data={about} />
      </ScrollReveal>

      {/* Work — CTA scroll target */}
      <ScrollReveal>
        <WorkSection data={work} images={carouselImages} />
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal>
        <SkillsSection data={skills} />
      </ScrollReveal>

      {/* Process */}
      <ScrollReveal>
        <ProcessSection data={process} />
      </ScrollReveal>

      {/* Contact */}
      <ScrollReveal>
        <ContactSection data={contact} />
      </ScrollReveal>
    </div>
  );
}
