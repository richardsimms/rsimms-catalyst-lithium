/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { Seo, Layout } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({ data: { post }, previous, next }) => (
  <Layout>
    <Seo title={post.title} description={post.excerpt} />
    <Themed.h1>{post.title}</Themed.h1>
    <MDXRenderer>{post.body}</MDXRenderer>
    {previous && (
      <Themed.a as={Link} to={previous.slug} rel="prev">
        ← {previous.title}
      </Themed.a>
    )}
    {next && (
      <Themed.a as={Link} to={next.slug} rel="next">
        {next.title} →
      </Themed.a>
    )}
  </Layout>
)

export default Post
