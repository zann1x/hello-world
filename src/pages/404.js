import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import styles from "./404.module.css";

const NotFound = () => (
    <Layout>
        <SEO title="404 - Not found" />
        <h1 className={styles.heading}>uhm... WHAT?</h1>
        <p>looks like you're lost. this page doesn't exist.</p>
    </Layout>
);

export default NotFound;
