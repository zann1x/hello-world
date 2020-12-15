import React from 'react';
import SEO from '../components/seo';

import styles from './index.module.css';
import ExternalLink from '../components/external_link';

const IndexPage = () => (
    <>
        <SEO title="home" />

        <div className={styles.content}>
            <div className={styles.link_block}>
                <p>lukas@void:~$ ls -l</p>
                <p>total 3</p>
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
        </div>
    </>
);

export default IndexPage;
