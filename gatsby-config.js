module.exports = {
  siteMetadata: {
    title: 'jnf.dev',
    description: 'a small archive of content from jnf, a Seattle-based software developer and leader',
    author: '@_jnf',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'jnf.dev',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              markdownCaptions: true,
              maxWidth: 800,
              showCaptions: true,
            },
          },
          'gatsby-remark-static-images'
        ],
      }
    },
    'gatsby-redirect-from',
    'gatsby-plugin-meta-redirect'
  ],
}
