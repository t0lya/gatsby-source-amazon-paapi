[![npm version](https://badge.fury.io/js/gatsby-source-amazon-paapi.svg)](https://badge.fury.io/js/gatsby-source-amazon-paapi)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/let00/gatsby-source-amazon-paapi/blob/master/LICENSE)

# gatsby-source-amazon-paapi <!-- omit in toc -->

A Gatsby plugin for sourcing data from the [Amazon Product Advertising API](https://webservices.amazon.com/paapi5/documentation/). Build your website using [Gatsby](https://www.gatsbyjs.com/docs/) and use this plugin to add advertising data from Amazon, such as items for sale, customer reviews, seller reviews and product promotions.

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Plugin Options](#plugin-options)
- [License](#license)

## Getting Started

### Prerequisites

- [Gatsby](https://www.gatsbyjs.com/docs/)

  Refer to [Gatsby's official tutorial](https://www.gatsbyjs.com/docs/quick-start/) on how to quick start your own Gatsby site.

- [Amazon Product Advertising API](https://webservices.amazon.com/paapi5/documentation)

  Refer to [Amazon's official documentation](https://webservices.amazon.com/paapi5/documentation/register-for-pa-api.html) on how to register for the Product Advertising API.

### Installation

1. Install the plugin.

   ```sh
   npm install --save gatsby-source-amazon-paapi
   ```

   or

   ```sh
   yarn add gatsby-source-amazon-paapi
   ```

2. Add the plugin in your `gatsby-config.js` file. See [Plugin Options](#plugin-options) for more details on how to customize the plugin.

   ```js
   module.exports = {
     plugins: [
       {
         resolve: 'gatsby-source-amazon-paapi',
         options: {
           accessKey: '',
           secretKey: '',
           host: '',
           region: '',
           queries: [{}],
         },
       },
     ],
   };
   ```

## Usage

### Plugin Options

- `accessKey`, `secretKey`

  You should be able to get these after registering for the Product Advertising API. Refer to [Amazon's official documentation](https://webservices.amazon.com/paapi5/documentation/register-for-pa-api.html) for more details.

- `host`, `region`

  These depend on the Amazon locale from which you want to grab data. For possible options, refer to [Amazon's official documentation](https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html#host-and-region).

- `queries`

  An array of queries used to find your items of interest. Two parameters are required for every query: `PartnerTag` and `PartnerType`. You can find out how to get these two parameters from [Amazon's documentation](https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html). For all possible parameters you can place in your query, [click here](https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html).

  ```js
  module.exports = {
    plugins: [
      {
        resolve: 'gatsby-source-amazon-paapi',
        options: {
          queries: [
            {
              // Amazon partner program credentials
              PartnerTag: '', // required
              PartnerType: '', // required

              // Filter items
              Condition: 'Used', // optional
              ItemCount: 10, // optional
              MaxPrice: 3241, // optional

              // Values to return
              Resources: ['Images.Primary.Medium', 'ItemInfo.Title'], // optional, defaults to ItemInfo.Title
            },
          ],
        },
      },
    ],
  };
  ```

## License

Distributed under the MIT License. See [LICENSE](https://github.com/let00/gatsby-source-amazon-paapi/blob/master/LICENSE) for more information.
