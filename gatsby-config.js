/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "lukas zanner - software developer",
    description: "lukas zanner | software developer // spare time game developer // (e)sports guy",
    author: 'Lukas Zanner',
    url: "https://lukaszanner.de",
    social: {
      twitter: '@iamzann1x'
    }
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown-pages`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 560
            }
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 560,
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`
          }
        ]
      }
    }
  ]
}
