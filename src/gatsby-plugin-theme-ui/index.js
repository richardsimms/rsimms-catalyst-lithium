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
    body: 300,
    heading: 400,
    bold: 700,
  },
  colors: {
    ...tailwind.colors,
    background: baseColors.gray[1], 
    text: baseColors.blue[8],
    textGray: baseColors.blue[7],
    primary: baseColors.blue[7],
    secondary: baseColors.pink[7],
    accent: "hsl(220deg 60% 90%)",
    highlight: "#D15E29",
    muted: baseColors.blue[2],
    header: {
      background: baseColors.gray[1],
      backgroundOpen: baseColors.gray[1],
      text: baseColors.blue[8],
      textOpen: baseColors.blue[8],
      icons: baseColors.gray[6],
      iconsOpen: baseColors.gray[8],
    },
    footer: {
      background: baseColors.gray[1],
      text: baseColors.blue[8],
      links: baseColors.blue[8],
      icons: baseColors.blue[8],
    },
    // You can delete dark mode by removing the "mode" object and/or setting useColorMode to false in gatsby-theme-catalyst-core
    modes: {
      dark: {
        background: "#051A2D",
        text: baseColors.blue[2],        
        textGray: "#9f9f9f",
        primary: baseColors.blue[5],
        secondary: baseColors.blue[6],
        accent: baseColors.gray[8],
        highlight: baseColors.orange[5],
        muted: baseColors.gray[8],
        header: {
          background: "#051A2D",
          backgroundOpen: "#051A2D",
          text: baseColors.blue[2],
          textOpen: baseColors.blue[2],
          icons: baseColors.gray[2],
          iconsOpen: baseColors.gray[2],
        },
        footer: {
          background: baseColors.blue[10],
          text: baseColors.blue[2],
          links: baseColors.blue[2],
          icons: baseColors.blue[2],
        },
      },
    },
  },
  sizes: {
    ...tailwind.sizes,
    maxPageWidth: "1440px", // Sets the max width of elements like the header/footer large screens
    maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
    iconsFooter: "20px", // Sets the icons size for the footer
    iconsHeader: "20px", // Sets the icons size for the header
  },
  styles: {
    
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 3,
      mt: 4,
    },
    h2: {
      fontSize: 4,
    },
    h3: {
      fontSize: 3,
    },
    em: {
      color: "secondary",

    },
    p: {
      marginTop: "0.5rem",
      marginBottom: "2rem",
    },
    a: {
      fontWeight: "500",
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
    header: {
      paddingLeft: "1rem",
      paddingRight: "1rem", //1rem <770 2rem < 1024 4rem
      paddingTop: "1rem",
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
