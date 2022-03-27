const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'slug',
      value: `${node.frontmatter.path}/`,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions
  const talkTemplate = path.resolve('src/templates/talk.js')
  const result = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              redirects
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  result.data.allMdx.edges.forEach(({ node: { frontmatter } }) => {
    const { path, redirects = [] } = frontmatter
    redirects.forEach(redirect => createRedirect({
      fromPath: redirect,
      toPath: path,
      redirectInBrowser: true,
      isPermanent: true
    }))

    createPage({
      path,
      component: talkTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
