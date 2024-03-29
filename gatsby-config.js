const path = require(`path`)

module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Sarwin Counseling`,
              short_name: `Sarwin Counseling`,
              start_url: `/`,
              background_color: `#00BCD4`,
              theme_color: `#00BCD4`,
              display: `standalone`,
              icon: `static/images/icon.png`,
              crossOrigin: `anonymous`, // `use-credentials` or `anonymous`
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-preload-link-crossorigin`,
        `gatsby-source-data`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/static/images/`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-stackbit-static-sass`,
            options: {
                inputFile: `${__dirname}/src/sass/main.scss`,
                outputFile: `${__dirname}/public/assets/css/main.css`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {
                
            }
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
                menus: require('./src/data/menus.json'),
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              // replace "UA-XXXXXXXXX-X" with your own Tracking ID
              trackingId: "UA-90649024-2",
            },
        },
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
              lang: 'en'
            }
        },
    ]
};
