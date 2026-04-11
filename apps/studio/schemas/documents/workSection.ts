import {defineField, defineType} from 'sanity'

export const workSectionType = defineType({
  name: 'workSection',
  title: 'Work Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'localeString',
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'localeString',
    }),
    defineField({
      name: 'images',
      title: 'Carousel Images',
      description: 'Images displayed in the scroll-driven carousel above the work items',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'localeString',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'items',
      title: 'Work Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'localeString',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'localeText',
            }),
          ],
          preview: {
            select: {heading: 'heading.en'},
            prepare: ({heading}: {heading?: string}) => ({title: heading ?? 'Work Item'}),
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Work Section'}),
  },
})
