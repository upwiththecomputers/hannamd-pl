import {defineField, defineType} from 'sanity'

export const skillsSectionType = defineType({
  name: 'skillsSection',
  title: 'Skills Section',
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
      title: 'Skills',
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
            prepare: ({title}: {title?: string}) => ({title: title ?? 'Skill'}),
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Skills Section'}),
  },
})
