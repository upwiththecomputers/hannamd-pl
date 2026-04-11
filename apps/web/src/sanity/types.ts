import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type { SanityImageSource };

export type HeroSectionData = {
  heading: string | null;
  subheading: string | null;
  cta: string | null;
  image: SanityImageSource | null;
} | null;

export type AboutSectionData = {
  title: string | null;
  pullQuote: string | null;
  paragraph1: string | null;
  paragraph2: string | null;
} | null;

export type WorkItem = {
  heading: string | null;
  description: string | null;
};

export type WorkSectionData = {
  title: string | null;
  subtitle: string | null;
  items: WorkItem[];
  images: Array<{ asset: SanityImageSource; alt: string | null }>;
} | null;

export type ResolvedCarouselImage = {
  url: string | null;
  alt: string | null;
};

export type SkillItem = {
  title: string | null;
  description: string | null;
};

export type SkillsSectionData = {
  title: string | null;
  subtitle: string | null;
  items: SkillItem[];
} | null;

export type ProcessItem = {
  title: string | null;
  description: string | null;
};

export type ProcessSectionData = {
  title: string | null;
  subtitle: string | null;
  items: ProcessItem[];
} | null;

export type ContactSectionData = {
  title: string | null;
  subtitle: string | null;
  email: string | null;
  linkedinUrl: string | null;
} | null;
