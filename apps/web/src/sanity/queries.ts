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

export const WELCOME_POST_QUERY = `*[_type == "post" && slug.current == "welcome"][0] {
  title, body, poster
}`;

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  siteName,
  siteUrl,
  ogImage,
  seo
}`;

export const fetchOptions = { next: { revalidate: 30 } } as const;
