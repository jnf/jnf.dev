const { join } = require('path')
module.exports = {
  siteMetadata: {
    title: 'jnf.dev',
    description: 'a small archive of content from jnf, a Seattle-based software developer and leader',
    author: '@_jnf',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'jnf.dev',
        icon: 'src/images/jnf.dev-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: join(__dirname, 'src', 'content'),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              markdownCaptions: false,
              maxWidth: 800,
              showCaptions: false,
            },
          },
          'gatsby-remark-static-images'
        ],
      }
    },
  ],
}
