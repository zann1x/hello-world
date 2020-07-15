import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layouts/layout";
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
            <SEO title={frontmatter.title} />
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <header><Link to="/">// back home</Link></header>
            <h1>{frontmatter.title}</h1>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    );
}

export default SiteTemplate;
