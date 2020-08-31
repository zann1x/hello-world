import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";

import styles from "./index.module.css";
import Footer from "../components/footer";

const IndexPage = () => (
    <>
        <SEO title="home" />

        <div className={styles.content}>
            <div className={styles.link_block}>
                <p>lukas@void:~$ ls -l</p>
                <p>total 4</p>
                <p><Link to="/about/" title="About me">about/</Link></p>
                <p><Link to="/projects/" title="Projects">projects/</Link></p>
                <p><Link to="/work/" title="Work">work/</Link></p>
                <p><Link to="/education/" title="Education">education/</Link></p>
            </div>
            <Footer />
        </div>
    </>
);

export default IndexPage;
