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
      name: 'subheading',
      type: 'string',
      title: 'Subheading'
    },
    {
      name: 'contentText',
      type: 'simplePortableText',
      title: 'Content Text'
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
      name: 'sigImage',
      type: 'image',
      title: 'Signature Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'accImage',
      type: 'image',
      title: 'Accreditation Image',
      options: {
        hotspot: true
      }
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
