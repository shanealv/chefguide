import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <Layout>
      <p>
        Welcome to {data.site.siteMetadata.title}, your programmer-centric
        recipe book. Here, you'll find recipes depicted not as list of
        ingredients and steps but as graphs relating components with techniques.
        Much of it is in the works, so tune in for changes down the road!
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
