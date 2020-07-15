import React from "react";
import Footer from "./footer";

import styles from "./layout.module.css";

const Layout = ({ children }) => {
    return (
        <>
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
