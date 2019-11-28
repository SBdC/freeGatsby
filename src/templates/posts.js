import React from "react"
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

// export const query = graphql `
// query ( $slug: String! ) {
//           markdownRemark ( fields: { slug:{ eq: $slug }}) {
//               frontmatter {
//               title
//               date
//             }
//             html
//           }
//         }
// `

export const query =  graphql`
query($slug: String!){
    contentfulContentPost(slug: {eq: $slug}) {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        body{
            json
        }
  }
}
`


const Posts = (props) => {
    const options = {
        renderNode: {
          "embedded-asset-block": (node) => {
            const alt = node.data.target.fields.title['en-US']
            const url = node.data.target.fields.file['en-US'].url
            
            return <img alt={alt} src={url} />
          }
        }
      }
    return (
        <Layout>
            <h1>{props.data.contentfulContentPost.title}</h1> 
            <p>{props.data.contentfulContentPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulContentPost.body.json, options)}   
        </Layout>
    )
}

export default Posts