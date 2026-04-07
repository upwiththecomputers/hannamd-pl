import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { useTranslations } from "next-intl";
import { client } from "@/sanity/client";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProcessSection } from "@/components/sections/process";
import { ContactSection } from "@/components/sections/contact";

const POST_QUERY = `*[_type == "post" && slug.current == "welcome"][0] {
    title, body, poster
  }`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

function HeroSection({ postImageUrl }: { postImageUrl: string | null }) {
  const t = useTranslations("Hero");

  return (
    <section className="flex w-full flex-col md:flex-row rounded-lg border border-mist-500/30 items-stretch bg-white dark:bg-[url('/tile.png')] bg-repeat-round overflow-hidden">
      {/* Text column */}
      <div className="flex flex-col justify-between p-8 md:p-[3vw] md:w-1/2 order-2 md:order-1">
        <div className="mb-8 md:mb-20">
          <h1 className="font-heading text-4xl/tight sm:text-5xl/tight md:text-6xl/tight lg:text-7xl/tight tracking-tight font-semibold text-mist-200">
            {t("heading")}
          </h1>
        </div>

        <p className="text-xl/8 sm:text-2xl/10 md:text-3xl/12 mb-8 md:mb-10 font-sans font-extralight">
          {t("subheading")}
        </p>

        <Button size="lg" variant="outline" className="rounded-full text-lg w-fit">
          {t("cta")}
        </Button>
      </div>

      {/* Image column */}
      {postImageUrl && (
        <div className="order-1 md:order-2 md:w-1/2">
          <AspectRatio ratio={4 / 4} className="w-full">
            <Image
              src={postImageUrl}
              alt="Hanna Mikulska-Delgardo"
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

export default async function HomePage() {
  const post = await client.fetch<SanityDocument>(POST_QUERY, {}, options);
  const postImageUrl = post?.poster ? urlFor(post.poster)?.url() ?? null : null;

  return (
    <div className="flex flex-col flex-1 dark:bg-[#0D0D09]">
      {/* Hero */}
      <div className="flex items-center justify-center px-4 sm:px-8 py-8 md:py-16">
        <div className="w-full max-w-6xl">
          <HeroSection postImageUrl={postImageUrl} />
        </div>
      </div>

      {/* About */}
      <AboutSection />

      {/* Skills */}
      <SkillsSection />

      {/* Process */}
      <ProcessSection />

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
