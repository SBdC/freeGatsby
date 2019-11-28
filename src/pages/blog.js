import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"

import blogStyles from "./blog.module.scss"


const Blog = () => {

    const data = useStaticQuery(graphql`
    query {
      allContentfulContentPost(
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ){
        edges{
          node{
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
    `)

    return (
       <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
               {data.allContentfulContentPost.edges.map((edge)=>{
                    return(
                        <li className={blogStyles.post}>
                            <Link  to={`/posts/${edge.node.slug}`}>
                              <h2>{edge.node.title}</h2>
                              <p>{edge.node.publishedDate}</p>
                            </Link>
                            
                        </li>
                    )
                })}

            </ol>
        </Layout>
    )
}

export default Blog