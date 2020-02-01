import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
            }
        }
    }
`

const SiteTemplate = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark

    return (
        <Layout>
            <div style={{ paddingTop: "5rem" }}>
                <SEO title={frontmatter.title} />
                <h1>{frontmatter.title}</h1>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export default SiteTemplate
