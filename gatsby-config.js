require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})



module.exports = {
  siteMetadata: {
    title: `Katarzyna Gumula-Kubicka Kancelaria Adwokacka`,
    description: `Kancelaria Adwokacka Gumula-Kubicka zajmuje się głównie obsługą prawną firm i przedsiębiorstw, prawem handlowym, gospodarczym oraz cywilnym`,
    author: `@gumula-kubicka.pl`,
    siteUrl: `https://gumula-kubicka.pl/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_SECRET,
        forceFullSync: true
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#003332`,
        theme_color: `#003332`,
        display: `minimal-ui`,
        icon: `src/images/logo_192x192.png`,
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: '333479179', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        googleTagManager: {
          trackingId: 'G-7VECLN6L07', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        environments: ['production', 'development']
      },
    },
  ],
}
