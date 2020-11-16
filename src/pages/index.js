import React from 'react';
// import { Link } from 'gatsby';
import SEO from '../components/seo';

import styles from './index.module.css';
import ExternalLink from '../components/external_link';
// import Footer from '../components/footer';

const IndexPage = () => (
    <>
        <SEO title="home" />

        <div className={styles.content}>
            <div className={styles.link_block}>
                <p>lukas@void:~$ ls -l</p>
                <p>total 4</p>
                {/*
                <p><Link to="/about/" title="About me">about/</Link></p>
                <p><Link to="/projects/" title="Projects">projects/</Link></p>
                <p><Link to="/work/" title="Work">work/</Link></p>
                <p><Link to="/education/" title="Education">education/</Link></p>
                */}
                <p>
                    <ExternalLink
                        to="mailto:hi@lukaszanner.de?subject=message from lukaszanner.de"
                        title="Email"
                    >
                        mail/
                    </ExternalLink>
                </p>
                <p>
                    <ExternalLink to="https://github.com/zann1x" title="GitHub">
                        github/
                    </ExternalLink>
                </p>
                <p>
                    {' '}
                    <ExternalLink
                        to="https://linkedin.com/in/lukas-zanner"
                        title="LinkedIn"
                    >
                        linkedin/
                    </ExternalLink>
                </p>
                <p>
                    {' '}
                    <ExternalLink
                        to="https://www.xing.com/profile/Lukas_Zanner"
                        title="XING"
                    >
                        xing/
                    </ExternalLink>
                </p>
            </div>
            {/*
            <Footer />
            */}
        </div>
    </>
);

export default IndexPage;
