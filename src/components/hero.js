/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"
import { darken } from "@theme-ui/color"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RoughNotation } from "react-rough-notation"
import { useHasMounted } from "gatsby-theme-catalyst-core"
import { Fragment } from "react"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      heroImage: file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  const heroImage = data.heroImage.childImageSharp.gatsbyImageData
  const hasMounted = useHasMounted()
  return (
    <div
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mb: 4,
      }}
    >
      <div
        sx={{
          maxWidth: "maxPageWidth",
          mx: "auto",
        }}
      >
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: ["1fr", null, "1fr 1fr", null, null],
            alignItems: "center",
            gridGap: [0, null, 5, null, null],
            mx: [3, null, 5, null, null],
          }}
        >
          <GatsbyImage
            image={heroImage}
            imgStyle={{ objectFit: "contain" }}
            sx={{
              gridColumn: ["1 / -1", null, "2 / 3", null, null],
              gridRow: "1 / 2",
              maxHeight: ["200px", "300px", "400px", null, "500px"],
            }}
          />
          <div
            sx={{
              gridColumn: ["1 / -1", null, "1 / 2", null, null],
              gridRow: ["2 / 3", null, "1 / 2", null, null],
            }}
          >
            <Themed.p sx={{ fontSize: [3, null, null, null, 4] }}>
              I write about how to listen to your customers and understand their motivations. So you can design for {" "}
              {hasMounted ? (
                <Fragment>
                  <RoughNotation type="underline" show={true} strokeWidth={3}>
                  clarity
                  </RoughNotation>
                  <span>  when everything is  </span>
                  <RoughNotation type="underline" show={true} strokeWidth={3}>
                    uncertain.
                  </RoughNotation>
                  Connecting the dots, between business design and customers experience to deliver business growth.
                </Fragment>
              ) : (
                "clarity and uncertain."
              )}  
            </Themed.p>
            <Button
              as={Link}
              to="/subscribe"
              sx={{
                bg: "#2b6cb0",
                fontSize: [2, null, null, null, 3],
                transition: "all 0.3s ease-in-out",
                ":hover": {
                  bg: darken("#2b6cb0", 0.08),
                },
              }}
            >
              Grow with me
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero