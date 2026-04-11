import {defineField, defineType} from 'sanity'

export const aboutSectionType = defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'localeString',
    }),
    defineField({
      name: 'pullQuote',
      title: 'Pull Quote',
      description: 'The large introductory paragraph displayed prominently',
      type: 'localeText',
    }),
    defineField({
      name: 'paragraph1',
      title: 'Paragraph 1',
      type: 'localeText',
    }),
    defineField({
      name: 'paragraph2',
      title: 'Paragraph 2',
      type: 'localeText',
    }),
  ],
  preview: {
    prepare: () => ({title: 'About Section'}),
  },
})
