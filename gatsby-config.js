module.exports = {
  siteMetadata: {
    title: `Richard Simms`,
    description: `Designing for clarity when everything is uncertain.`,
    keywords: [`discovery`, `design`, `UX`, `blog`],
    author: `Richard Simms`,
    siteUrl: `https://rsimms.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `About`,
        link: `/about`,
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `richard@rsimms.com`,
        location: `none`, //Options are "all", "header", "footer"
      },
      {
        name: `Instagram`,
        link: `https://www.instagram.com/richardsimms`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Linkedin`,
        link: `https://www.linkedin.com/in/richardsimms`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://github.com/richardsimms/`,
        location: `footer`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-theme-catalyst-lithium`,
      options: {
        // Core theme
        remarkImagesWidth: 1920,
        useStickyHeader: true,
        // Blog theme
        excerptLength: 140,
        // Lithium theme
        useHero: true,
        postListTitle: "RECENTLY PUBLISHED",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Richard Simms`,
        short_name: `Richard`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6da3dc`,
        display: `minimal-ui`,
        icon: `content/assets/rsimms-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}