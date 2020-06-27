import React from "react";
import styles from "./footer.module.css";

const Footer = () => (
    <footer className={styles.footer}>
        © {new Date().getFullYear()} Lukas Zanner - powered by <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://github.com/LordMathis/hugo-theme-nix">Nix</a>
    </footer>
);

export default Footer;
