import { merge } from "theme-ui"
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import "@fontsource/quando/400.css" // Weight 400.
import "@fontsource/sriracha"

const theme = merge(BaseTheme, {
  // Modifications to the theme go here.
  fonts: {
    ...tailwind.fonts,
    body:
      'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    heading: '"Inter", sans-serif',
    monospace:
      'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      em: '"@fontsource/sriracha", sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  colors: {
    ...tailwind.colors,
    background: baseColors.gray[1], //Try "#954264",
    text: baseColors.gray[8],
    textGray: baseColors.gray[6],
    primary: baseColors.blue[7],
    secondary: baseColors.pink[6],
    accent: "#FAF8F9",
    highlight: "#D15E29",
    muted: baseColors.gray[2],
    header: {
      background: baseColors.gray[1],
      backgroundOpen: baseColors.blue[2],
      text: baseColors.gray[8],
      textOpen: baseColors.gray[8],
      icons: baseColors.gray[6],
      iconsOpen: baseColors.gray[8],
    },
    footer: {
      background: baseColors.gray[2],
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
    // You can delete dark mode by removing the "mode" object and/or setting useColorMode to false in gatsby-theme-catalyst-core
    modes: {
      dark: {
        background: baseColors.gray[9],
        text: baseColors.gray[1],
        textGray: "#9f9f9f",
        primary: "#6da3dc",
        secondary: baseColors.pink[4],
        accent: baseColors.gray[8],
        highlight: baseColors.orange[5],
        muted: baseColors.gray[8],
        header: {
          background: baseColors.gray[9],
          backgroundOpen: baseColors.gray[8],
          text: baseColors.gray[1],
          textOpen: baseColors.gray[1],
          icons: baseColors.gray[1],
          iconsOpen: baseColors.gray[1],
        },
        footer: {
          background: "#232946",
          text: baseColors.gray[1],
          links: baseColors.gray[1],
          icons: baseColors.gray[1],
        },
      },
    },
  },
  sizes: {
    ...tailwind.sizes,
    maxPageWidth: "1440px", // Sets the max width of elements like the header/footer large screens
    maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
    iconsFooter: "32px", // Sets the icons size for the footer
    iconsHeader: "20px", // Sets the icons size for the header
  },
  styles: {
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 2,
      mt: 4,
      "::after": {
        display: "block",
        content: '""',
        width: "60px",
        pt: 2,
        borderBottomStyle: "solid",
        borderBottomWidth: "4px",
        borderBottomColor: "primary",
      },
    },
    h2: {
      fontSize: 4,
    },
    h3: {
      fontSize: 3,
    },
    em: {
      color: "secondary",
    }

  },

  variants: {
    navLink: {
      fontFamily: "heading",
      fontWeight: "400",
      "::after": {
        position: "absolute",
        top: "100%",
        left: "0",
        width: "100%",
        height: "1px",
        backgroundColor: "primary",
        content: "''",
        opacity: "0",
        transition: "height 0.3s, opacity 0.3s, transform 0.3s",
        transform: "translateY(-6px)",
      },
      ":hover, :focus, :active": {
        textDecoration: "none",
        color: "primary",
      },
      ":hover::after, :active::after, :focus::after": {
        height: "4px",
        opacity: "1",
        transform: "translateY(0px)",
      },
    },
    navLinkActive: {
      textDecoration: "none",
      color: "primary",
      "::after": {
        position: "absolute",
        top: "100%",
        left: "0",
        width: "100%",
        height: "4px",
        backgroundColor: "primary",
        content: "''",
        opacity: "1",
        transform: "translateY(0px)",
      },
    },
    navLinkSub: {
      "::after": {
        content: "none",
      },
      ":hover::after": {
        content: "none",
      },
      ":hover, :focus, :active": {
        color: "primary",
      },
    },
    navLinkSubActive: {
      textDecoration: "none",
      color: "primary",
      "::after": {
        content: "none",
      },
    },
    postListWrapper: {
      backgroundColor: "transparent",
      boxShadow: "none",

      "&:hover": {
        top: "0",
        boxShadow: "none",
      },
    },
    footer:	{

      div: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
          div: {
            "a:last-of-type":  {
              marginRight: "1rem",
            }
          }
      },
      
       p:	{      
        fontSize: "1rem",
      },
    },
    postListTitle: {
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
})

export default theme
