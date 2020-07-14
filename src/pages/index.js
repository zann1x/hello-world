import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SocialLink from "../components/social-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXing } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.css";

const IndexPage = ({ data }) => (
    <Layout>
        <SEO />
        <div className={styles.main_area}>
            <div className={styles.teaser_area}>
                <div className={styles.row}>
                    <div className={styles.teaser_content}>
                        <h1 className={styles.main_heading}>LUKAS ZANNER</h1>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.teaser_content}>
                        <SocialLink link="mailto:hi@lukaszanner.de" title="Email">
                            <FontAwesomeIcon icon={faEnvelope} size="3x" />
                        </SocialLink>
                        <SocialLink link="https://github.com/zann1x" title="GitHub">
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                        </SocialLink>
                        <SocialLink link="https://linkedin.com/in/lukas-zanner" title="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" />
                        </SocialLink>
                        <SocialLink link="https://www.xing.com/profile/Lukas_Zanner" title="XING">
                            <FontAwesomeIcon icon={faXing} size="3x" />
                        </SocialLink>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.disclaimer_box}>
                        <p className={styles.disclaimer_text}>informatics student // software developer</p>
                    </div>
                </div>
            </div>
        </div>

        <div name="about" className={styles.about_heading}>
            <h1>about me</h1>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        </div>
    </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
    {
        markdownRemark(frontmatter: {title: {eq: "about me"}}) {
            html
            frontmatter {
              title
            }
        }
    }
`;
