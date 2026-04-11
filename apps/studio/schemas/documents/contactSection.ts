import {defineField, defineType} from 'sanity'

export const contactSectionType = defineType({
  name: 'contactSection',
  title: 'Contact Section',
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
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Contact Section'}),
  },
})
