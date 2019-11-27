import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const About = () => {
    return (
        <Layout>
           
            <h1>About</h1>
            <p>we are at the end of the world</p>
            <p>and we start at the beginning</p>
            <Link to="/contact">Contact me</Link>
           
        </Layout>
    )
}

export default About