import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../layouts/layout';

import styles from './404.module.css';

const NotFound = () => (
    <Layout>
        <SEO title="Not found" />
        <header>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <Link to="/">// back home</Link>
        </header>
        <div className={styles.content}>
            <p>looks like you got lost</p>
        </div>
    </Layout>
);

export default NotFound;
