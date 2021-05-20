export default {
  type: 'object',
  name: 'how',
  title: 'How',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text'
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button text'
    }
  ],
  preview: {
    select: {
      title: 'heading'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'How section'
      }
    }
  }
}
