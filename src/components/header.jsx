import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./header.module.css"

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className={styles.titlebar}>
      <h2 className={styles.homelogo}>
        <Link className={styles.link} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h2>
      <Link className={styles.link} to="/about/">
        About
      </Link>
      <Link className={styles.link} to="/recipes">
        Recipes
      </Link>
    </div>
  )
}
