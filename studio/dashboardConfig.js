export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffc607c0b76291e9d03a3b7',
                  title: 'Sanity Studio',
                  name: 'lucas-assessments-studio',
                  apiId: 'd87a0168-8a8e-4e59-8469-7d93f89ab003'
                },
                {
                  buildHookId: '5ffc607c0b76291f270311d6',
                  title: 'Landing pages Website',
                  name: 'lucas-assessments',
                  apiId: '7f8a3353-a6b7-48e3-ba4a-74e5c835754f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/FraserHamilton/lucas-assessments',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://lucas-assessments.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
