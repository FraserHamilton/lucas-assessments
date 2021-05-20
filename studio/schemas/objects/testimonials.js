export default {
  type: 'object',
  name: 'testimonials',
  title: 'Testimonials',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'testimonials',
      type: 'array',
      title: 'Testimonials',
      of: [
        {
          title: 'Testimonial',
          type: 'testimonial'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'heading'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Testimonials section'
      }
    }
  }
}
