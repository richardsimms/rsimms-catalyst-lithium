/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { Seo, Layout } from "gatsby-theme-catalyst-core"


const CategoryPage = ({ posts, category }) => {
  return (
    <Layout>
      <Seo title={category} />
      <Seo description={category +" articles, techniques and learnings"} />
      <Themed.h1>{category}</Themed.h1>
      <Themed.ul
        sx={({
          paddingInlineStart: "0",
        })}
      >
        {posts.map((post) => (
          <Themed.li 
          sx={{
            listStyle: "None",
          }}
          
          key={post.slug}>
            <Themed.p>
              <Themed.a as={Link} to={post.slug} sx={{ fontSize: 3 }}>
                {post.title}
              </Themed.a>
              <br />
              {post.excerpt}
            </Themed.p>
          </Themed.li>
        ))}
      </Themed.ul>
    </Layout>
  )
}

export default CategoryPage
