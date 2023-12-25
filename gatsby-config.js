module.exports = {
  siteMetadata: {
    title: 'Michael Xieyang Liu',
    nameEnglish: 'Michael Xieyang Liu',
    nameChinese: '刘燮洋',
    externalLinks: {
      googleScholarProfile:
        'https://scholar.google.com/citations?user=RCHIBagAAAAJ',
      github: 'https://github.com/lxieyang',
      facebook: 'https://www.facebook.com/profile.php?id=100000519299083',
      instagram: 'https://www.instagram.com/xieyangl/',
      linkedin: 'https://www.linkedin.com/in/michael-xieyang-liu-ba6124175/',
      twitter: 'https://twitter.com/lxieyang',
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Shadows Into Light`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Liu's Website`,
        description: 'The personal website of Michael Xieyang Liu',
        short_name: 'ML Site',
        background_color: 'white',
        start_url: '/',
        theme_color: '#00695c',
        orientation: 'portrait',
        display: 'minimal-ui',
        icon: `${__dirname}/static/pair-logo-152.png`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/src/assets`,
        destination: '/assets',
      },
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
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 300,
            },
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
  ],
};
