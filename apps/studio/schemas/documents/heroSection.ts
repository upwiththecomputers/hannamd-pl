import {defineField, defineType} from 'sanity'

export const heroSectionType = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'localeText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cta',
      title: 'CTA Button Text',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'localeString',
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Hero Section'}),
  },
})
