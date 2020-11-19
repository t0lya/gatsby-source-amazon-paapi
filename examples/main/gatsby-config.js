/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-amazon-paapi',
      options: {
        accessKey: '',
        secretKey: '',
        host: '',
        region: '',
        queries: [
          {
            PartnerTag: '',
            PartnerType: '',
            Resources: ['Images.Primary.Medium', 'ItemInfo.Title'],
          },
        ],
      },
    },
  ],
};
