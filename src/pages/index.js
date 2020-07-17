import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";

import styles from "./index.module.css";
import ExternalLink from "../components/external_link";

const IndexPage = () => (
    <>
        <SEO title="home" />

        <div className={styles.content}>
            <h1 className={styles.heading}>lukas zanner // software developer</h1>
            <div className={styles.blocks}>
                <div className={styles.link_block}>
                    <p>links</p>
                    <p>&gt; <Link to="/about/" title="About me">about</Link></p>
                    <p>&gt; <Link to="/projects/" title="Projects">projects</Link></p>
                    <p>&gt; <Link to="/work/" title="Work">work</Link></p>
                    <p>&gt; <Link to="/education/" title="Education">education</Link></p>
                </div>
                <div className={styles.contact_block}>
                    <p>contact</p>
                    <p>&gt; <ExternalLink to="mailto:hi@lukaszanner.de?subject=message from lukaszanner.de" title="Email">email</ExternalLink></p>
                    <p>&gt; <ExternalLink to="https://github.com/zann1x" title="GitHub">github</ExternalLink></p>
                    <p>&gt; <ExternalLink to="https://linkedin.com/in/lukas-zanner" title="LinkedIn">linkedin</ExternalLink></p>
                    <p>&gt; <ExternalLink to="https://www.xing.com/profile/Lukas_Zanner" title="XING">xing</ExternalLink></p>
                </div>
            </div>
        </div>
    </>
);

export default IndexPage;
