module.exports = {
  siteMetadata: {
    title: `Sherzod Nimatullo`,
    author: `Sherzod Nimatullo`
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
