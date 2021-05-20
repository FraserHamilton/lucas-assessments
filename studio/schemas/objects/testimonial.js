export default {
  type: 'object',
  name: 'testimonial',
  title: 'Testimonial',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Full Name'
    },
    {
      name: 'tag',
      type: 'string',
      title: 'Tag'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text'
    }
  ],
  preview: {
    select: {
      title: 'name'
    },
    prepare({ title }) {
      return {
        title
      }
    }
  }
}
