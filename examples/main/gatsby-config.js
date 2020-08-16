/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        accessKey: "",
        secretKey: "",
        host: "webservices.amazon.com	",
        region: "us-east-1",
        queries: [],
      },
    },
  ],
}
