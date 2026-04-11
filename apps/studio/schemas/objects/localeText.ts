import {defineField, defineType} from 'sanity'

export const localeTextType = defineType({
  name: 'localeText',
  title: 'Localized Text',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
    }),
    defineField({
      name: 'pl',
      title: 'Polish',
      type: 'text',
    }),
  ],
})
