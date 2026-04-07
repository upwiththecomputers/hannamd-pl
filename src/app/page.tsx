import Image from "next/image";

import { PortableText, type SanityDocument } from "next-sanity";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

import { client } from "@/sanity/client";
import { Button } from "@/components/ui/button";
import { TypographyLead } from "@/components/ui/typography";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const POST_QUERY = `*[_type == "post" && slug.current == "welcome"][0] {
    title, body, poster
  }`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const post = await client.fetch<SanityDocument>(POST_QUERY, {}, options);
  const postImageUrl = post.poster ? urlFor(post.poster)?.url() : null;
  console.log("postImage", postImageUrl);

  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center dark:bg-[#0D0D09]">
        <main className="flex w-[80vw] flex-col sm:flex-row rounded-lg border-2 border-mist-500 items-center justify-between bg-white dark:bg-[url('/tile.png')] bg-repeat-round sm:items-start">
          <div className="hidden sm:block flex flex-1 flex-col p-[3vw] items-start pr-10 w-1/2">
            <div className="mb-20">
              <h1 className="font-heading text-7xl/22 tracking-tight font-semibold text-mist-200">
                Produkcja obuwia. Od projektu do dostawy
              </h1>
            </div>

            <p className="text-3xl/12 mb-10 font-sans font-extralight">
              Ekspert branży fashion, z 5-letnim doświadczeniem jako kupiec.
            </p>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-xl"
            >
              Sprawdż moje prace
            </Button>
          </div>

          {postImageUrl && (
            <AspectRatio ratio={4 / 4} className="w-full sm:w-[40vw]">
              <Image
                src={postImageUrl}
                alt="Photo"
                fill
                sizes="(max-width: 50hv) 100vw, (max-width: 500px) 50vw, 33vw"
                loading="eager"
                className="rounded-lg object-cover mix-blend-lighten"
              />
            </AspectRatio>
          )}
        </main>
        {/**/}
        {/* <h1 className="font-heading text-4xl/22 tracking-tight font-semibold text-mist-200"> */}
        {/*   O mnie */}
        {/* </h1> */}
        {/**/}
        {/* {Array.isArray(post.body) && ( */}
        {/*   <TypographyLead> */}
        {/*     <PortableText value={post.body} /> */}
        {/*   </TypographyLead> */}
        {/* )} */}
      </div>
    </>
  );
}
