import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import styles from "./SiteTemplate.module.css";

export const query = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;

const SiteTemplate = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;

    return (
        <Layout>
            <div className={styles.main_area}>
                <SEO title={frontmatter.title} />
                <h1>{frontmatter.title}</h1>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    );
}

export default SiteTemplate;
