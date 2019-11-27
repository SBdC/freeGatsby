import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)
    return (
        <footer>
            <p>created by a {data.site.siteMetadata.author} trying to learn something</p>
        </footer>
    )

}

export default Footer