module.exports = {
  siteMetadata: {
    title: 'Michael Xieyang Liu',
    externalLinks: {
      github: 'https://github.com/lxieyang',
      facebook: 'https://www.facebook.com/profile.php?id=100000519299083',
      instagram: 'https://www.instagram.com/xieyangl/'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    
  ],
}
