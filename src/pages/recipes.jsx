import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default function Recipes({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>Recipes</h1>
        {data.allMarkdownRemark.nodes.map(node => (
          <div key={node.id}>
            <Link
              css={css`
                text-decoration: none;
                color: inherit;
              `}
              to={node.fields.slug}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #aaa;
                  `}
                >
                  {" "}
                  - a {node.frontmatter.category}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___category], order: ASC }) {
      nodes {
        id
        frontmatter {
          title
          description
          category
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`
