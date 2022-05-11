/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { Seo, Layout } from "gatsby-theme-catalyst-core"
import { FaRegClock } from "react-icons/fa"


const CategoryPage = ({ posts, category }) => {
  return (
    <Layout>
      <Seo title={category} />
      <Themed.h1>{category}</Themed.h1>
      <Themed.ul>
        {posts.map((post) => (
          <Themed.li key={post.slug}>
            <Themed.p>
              <Themed.a as={Link} to={post.slug} sx={{ fontSize: 3 }}>
                {post.title}
              </Themed.a>
              <br />
              <Themed.p
                sx={{
                  color: "textGray",
                  fontSize: 1,
                  textTransform: "uppercase",
                  letterSpacing: "wider",
                  m: 0,
                  a: {
                    color: "textGray",
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  },
                  variant: "variants.postListMeta",
                }}
              >
                {post.date} &bull;{" "}
                <FaRegClock
                  sx={{
                    position: "relative",
                    top: "0.125em",
                  }}
                />{" "}
                {post.timeToRead} Min
              </Themed.p>
              {post.excerpt}
            </Themed.p>
          </Themed.li>
        ))}
      </Themed.ul>
    </Layout>
  )
}

export default CategoryPage
