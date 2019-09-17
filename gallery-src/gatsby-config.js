module.exports = {
  siteMetadata: {
    author: `Ondřej Chrastina`,
    title: `Custom Elements`,
    description: `Samples of the HTML web pages that can be used as Custom Elements in Kentico Kontent. Custom elements help you with extending the basic functionality of Kentico Kontent UI and thus improving the content editing experience. Custom element is essentially a small HTML application that exists in a sandboxed <iframe> and interacts with the Kentico Kontent app via the Custom Elements API.`,
    siteUrl: `https://kentico.github.io/kontent-custom-element-samples/gallery`,
    social: {
      twitter: `ChrastinaOndrej`,
    },
  },
  pathPrefix: `/kontent-custom-element-samples/gallery`,
  plugins: [
    {
      resolve: `gatsby-transformer-json`,
      options: {
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/elements`,
        name: `elements`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-128307780-3`, // Ask https://github.com/Simply007 for access
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Custom Elements Gallery`,
        short_name: `Gallery`,
        start_url: `/`,
        background_color: `#1E88E5`,
        theme_color: `#1E88E5`,
        display: `minimal-ui`,
        icon: `content/assets/kenticokontent-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
