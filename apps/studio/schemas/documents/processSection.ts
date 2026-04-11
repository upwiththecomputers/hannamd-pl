import {defineField, defineType} from 'sanity'

export const processSectionType = defineType({
  name: 'processSection',
  title: 'Process Section',
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
      name: 'items',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
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
            select: {title: 'title.en'},
            prepare: ({title}: {title?: string}) => ({title: title ?? 'Step'}),
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Process Section'}),
  },
})
