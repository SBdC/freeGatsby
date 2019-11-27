import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


const IndexPage = () => {
    return (
       
            <Layout>
            <h1>Hello.</h1>
            <h2>I am Sarizo</h2>
            <p>Need to know me?<Link to="/contact">Contact me</Link></p>
            </Layout>
    )
}

export default IndexPage
