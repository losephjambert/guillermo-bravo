require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
var fs = require('fs')
module.exports = {
  siteMetadata: {
    title: `Guillermo Bravo`,
    description: ``,
    author: `@losephjambert`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-shopify2`,
      options: {
        // The domain name of your Shopify shop. This is required.
        // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
        // 'gatsby-source-shopify-test-shop.myshopify.com'.
        shopName: process.env.SHOP_NAME,

        // An API access token to your Shopify shop. This is required.
        // You can generate an access token in the "Manage private apps" section
        // of your shop's Apps settings. In the Storefront API section, be sure
        // to select "Allow this app to access your storefront data using the
        // Storefront API".
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,

        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.
        verbose: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    // This is currently not working. Don't really know how to solve it. It seems there's a bug with the gatsby-source-graphql plugin
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     // This type will contain remote schema Query type
    //     typeName: 'QueryRoot',
    //     // This is the field under which it's accessible
    //     fieldName: 'pages',
    //     // URL to query from
    //     url: `https://${process.env.SHOP_NAME}.myshopify.com/api/2019-07/graphql`,
    //     headers: {
    //       'X-Shopify-Access-Token': `${process.env.SHOPIFY_ACCESS_TOKEN}`,
    //       'Content-Type': 'application/graphql',
    //     },
    //     fetchOptions: {
    //       method: 'POST',
    //     },
    //     refetchInterval: 60,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-134421805-1',
        anonymize: true,
        respectDNT: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
