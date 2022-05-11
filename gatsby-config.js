module.exports = {
  siteMetadata: {
    title: `Richard Simms`,
    description: `Designing for clarity when everything is uncertain.`,
    keywords: [`discovery`, `product`, `strategy`, `design`, `UX`, `blog`],
    author: `Richard Simms`,
    siteUrl: `https://rsimms.com`, 
    menuLinks: [
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Product discovery`,
        link: `/categories/product-discovery`,
      },
      {
        name: `Case studies`,
        link: `/casestudies`,
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
    {
      resolve: `gatsby-theme-catalyst-lithium`,
      options: {
        // Core theme
        remarkImagesWidth: 1920,
        useStickyHeader: true,
        // Blog theme
        excerptLength: false,
        // Lithium theme
        useHero: true,
        postListTitle: "Product design",
      },
    },
    {
      resolve:`gatsby-plugin-advanced-sitemap`,
      options: {
        excludes: [
          '/404', 
          '/404.html', 
          '/welcome',
          '/unscubscribe',
          '/case-study',
          '/casestudies',
        ],
        output: "/sitemap.xml",
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://rsimms.com',
        sitemap: 'https://rsimms.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
        output: "/robots.txt",
      },
    }, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Richard Simms`,
        short_name: `Richard`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `background`,
        display: `minimal-ui`,
        icon: `content/assets/rsimms-site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-56512737-4`,
      },
    },
     {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 295758,
        sv: 6
      },
    }, 
  ],
}
