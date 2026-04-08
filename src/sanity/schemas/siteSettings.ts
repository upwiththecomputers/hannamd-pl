import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      description: "Displayed in OpenGraph as og:site_name",
    }),
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      description: "Base URL of the site (e.g. https://hannamd.pl)",
    }),
    defineField({
      name: "ogImage",
      title: "Default OG Image",
      type: "image",
      description:
        "Fallback image for social media sharing when no page-specific image is set",
      options: { hotspot: true },
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "pl",
          title: "Polish",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Page Title",
              type: "string",
              description: "Browser tab title and og:title",
            }),
            defineField({
              name: "description",
              title: "Meta Description",
              type: "text",
              rows: 3,
              description: "Search engine snippet and og:description",
            }),
          ],
        }),
        defineField({
          name: "en",
          title: "English",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Page Title",
              type: "string",
              description: "Browser tab title and og:title",
            }),
            defineField({
              name: "description",
              title: "Meta Description",
              type: "text",
              rows: 3,
              description: "Search engine snippet and og:description",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
