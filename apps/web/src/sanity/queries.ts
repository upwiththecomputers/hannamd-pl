import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { client } from "./client";

const { projectId, dataset } = client.config();

export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  siteName,
  siteUrl,
  ogImage,
  seo
}`;

export const HERO_SECTION_QUERY = `*[_type == "heroSection"][0] {
  "heading": heading[$locale],
  "subheading": subheading[$locale],
  "cta": cta[$locale],
  image
}`;

export const ABOUT_SECTION_QUERY = `*[_type == "aboutSection"][0] {
  "title": title[$locale],
  "pullQuote": pullQuote[$locale],
  "paragraph1": paragraph1[$locale],
  "paragraph2": paragraph2[$locale]
}`;

export const WORK_SECTION_QUERY = `*[_type == "workSection"][0] {
  "title": title[$locale],
  "subtitle": subtitle[$locale],
  "items": items[]{
    "heading": heading[$locale],
    "description": description[$locale]
  },
  "images": images[]{ ..., "alt": alt[$locale] }
}`;

export const SKILLS_SECTION_QUERY = `*[_type == "skillsSection"][0] {
  "title": title[$locale],
  "subtitle": subtitle[$locale],
  "items": items[]{
    "title": title[$locale],
    "description": description[$locale]
  }
}`;

export const PROCESS_SECTION_QUERY = `*[_type == "processSection"][0] {
  "title": title[$locale],
  "subtitle": subtitle[$locale],
  "items": items[]{
    "title": title[$locale],
    "description": description[$locale]
  }
}`;

export const CONTACT_SECTION_QUERY = `*[_type == "contactSection"][0] {
  "title": title[$locale],
  "subtitle": subtitle[$locale],
  email,
  linkedinUrl
}`;

export const fetchOptions = { next: { revalidate: 30 } } as const;
