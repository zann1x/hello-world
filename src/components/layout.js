import React from "react";
import Head from "./head";
import Header from "./header";
import Footer from "./footer";

import styles from "./layout.module.css";

const Layout = ({ children }) => {
    return (
        <>
            <Head />
            <Header />
            <div className={styles.layout}>
                <div className={styles.container}>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Layout
