export default {
  type: 'object',
  name: 'labelGroup',
  title: 'Label group',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label'
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text'
    }
  ],
  preview: {
    select: {
      title: 'label'
    },
    prepare({ title }) {
      return {
        title
      }
    }
  }
}
