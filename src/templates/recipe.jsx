import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Recipe({ data }) {
  const recipe = data.markdownRemark
  return (
    <Layout>
      <div>
          <h1>{recipe.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: recipe.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        origin
        uses
      }
    }
  }
`
