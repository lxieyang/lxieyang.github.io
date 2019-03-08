module.exports = {
  siteMetadata: {
    title: 'Michael Xieyang Liu',
    externalLinks: {
      googleScholarProfile: 'https://scholar.google.com/citations?user=RCHIBagAAAAJ',
      github: 'https://github.com/lxieyang',
      facebook: 'https://www.facebook.com/profile.php?id=100000519299083',
      instagram: 'https://www.instagram.com/xieyangl/',
      twitter: 'https://twitter.com/TerminatorET'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Liu's Website`,
        description: 'The personal website of Michael Xieyang Liu',
        short_name: 'ML Site',
        background_color: 'white',
        start_url: "/",
        theme_color: '#C1000F',
        orientation: 'portrait',
        display: 'minimal-ui',
        icon: `${__dirname}/static/favicon.jpg`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-123595265-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/src/assets`,
        destination: '/assets'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 300,
            },
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: `${__dirname}/static/favicon.jpg`,
    //     // WebApp Manifest Configuration
    //     appName: `Michael Liu's Website`,
    //     appDescription: 'The personal website of Michael Xieyang Liu',
    //     developerName: 'Michael Xieyang Liu',
    //     developerURL: 'https://lxieyang.github.io',
    //     dir: 'auto',
    //     lang: 'en-US',
    //     background: '#fff',
    //     theme_color: '#002635',
    //     display: 'standalone',
    //     orientation: 'any',
    //     start_url: '/?homescreen=1',
    //     version: '1.0',
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: false,
    //       favicons: true,
    //       firefox: true,
    //       opengraph: false,
    //       twitter: false,
    //       yandex: false,
    //       windows: false
    //     }
    //   }
    // }
  ]
}