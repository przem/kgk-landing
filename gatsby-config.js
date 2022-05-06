module.exports = {
  siteMetadata: {
    title: `Katarzyna Gumula-Kubicka Kancelaria Adwokacka`,
    description: `Kancelaria Adwokacka Gumula-Kubicka zajmuje się głównie obsługą prawną firm i przedsiębiorstw, prawem handlowym, gospodarczym oraz cywilnym`,
    author: `@gumula-kubicka.pl`,
    siteUrl: `https://gumula-kubicka.pl/`,
  },
  plugins: [
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
  ],
}
