module.exports = {
  pathPrefix: "/foam-digital-garden",
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/notes`,
        rootNote: `/index`,
      },
    },
  ],
  siteMetadata: {
    title: `My Digtal Garden`,
  },
}
