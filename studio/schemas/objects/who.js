export default {
  type: 'object',
  name: 'who',
  title: 'Who',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tag line'
    },
    {
      name: 'personImage',
      type: 'image',
      title: 'Person image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button text'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Who section',
        media
      }
    }
  }
}
