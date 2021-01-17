export default {
  type: 'object',
  name: 'contact',
  title: 'Contact',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'labelGroups',
      type: 'array',
      title: 'Contact Label Groups',
      of: [
        {
          title: 'Label Group',
          type: 'labelGroup'
        }
      ],
      validation: Rule => Rule.max(3)
    },
    {
      name: 'mapKey',
      type: 'string',
      title: 'Map Key'
    }
  ],
  preview: {
    select: {
      title: 'heading'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Contact section'
      }
    }
  }
}
