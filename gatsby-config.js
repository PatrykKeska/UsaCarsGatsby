require('dotenv').config()
module.exports = {

  siteMetadata: {
    title: `KSMAK Cars, sprowadzamy samochody z USA!`,
    description: `Sprowadzamy samochody z Usa, mamy kilku letnie doświadczenie oraz umiejętności w tym co robimy.
    Z nami masz pewność że twój wymarzony samochód spełni twoje oczekiwania! Nie czekaj zapraszamy do kontaktu.
    `,
    author: `KSMAK Cars`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Ubuntu',
            subsets: ['latin-ext'],
            variants: ['400', '600', '700'],
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.API_DATO_CMS,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
