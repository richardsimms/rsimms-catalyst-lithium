/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
// import { darken } from "@theme-ui/color"
// import { Link, graphql, useStaticQuery } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import { useHasMounted } from "gatsby-theme-catalyst-core"
import { Fragment } from "react"

const Hero = () => {
/*   const data = useStaticQuery(graphql`
    {
      heroImage: file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `) */
  // const heroImage = data.heroImage.childImageSharp.gatsbyImageData
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
            
            alignItems: "center",
            gridGap: [0, null, 5, null, null],
            mx: [3, null, 5, null, null],
          }}
        >
{/*           <GatsbyImage
            image={heroImage}
            imgStyle={{ objectFit: "contain" }}
            sx={{
              gridColumn: ["1 / -1", null, "2 / 3", null, null],
              gridRow: "1 / 2",
              maxHeight: ["200px", "300px", "400px", null, "500px"],
            }}
          /> */}
          <div
            sx={{
              gridColumn: ["1 / -1", null, "1 / 2", null, null],
              gridRow: ["2 / 3", null, "1 / 2", null, null],
            }}
          >
            <Themed.h1 sx={{ fontSize: [6, null, 7, null, 8] }}> 
            Designing for {" "} 
            {hasMounted ? (
                <Fragment>
                  <RoughNotationGroup>
                  <RoughNotation type="underline" order="1" show={true} strokeWidth={3}>
                  clarity
                  </RoughNotation>
                  <span>  when everything is  </span>
                  <RoughNotation type="underline" order="2" show={true} strokeWidth={5}>
                    uncertain.
                  </RoughNotation>
                  </RoughNotationGroup>
                </Fragment>
              ) : (
                "clarity and uncertain."
              )}  
            </Themed.h1>
            <Themed.h2>
            I help cnnecting the dots, between business design and customers experience to deliver business growth.
            </Themed.h2>
            
{/*             <Button
              as={Link}
              to="/subscribe"
              sx={{
                bg: "#2b6cb0",
                fontSize: [2, null, null, null, 3],
                fontWeight: 500,
                transition: "all 0.3s ease-in-out",
                ":hover": {
                  bg: darken("#2b6cb0", 0.08),
                },
              }}
            >
              Grow with me
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
