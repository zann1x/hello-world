import React from "react";

import styles from "./social-link.module.css";

const SocialLink = ({link, title, children}) => (
    <a href={link} rel="me noopener noreferrer" title={title} target="_blank" className={styles.social_link}>
        {children}
    </a>
);

export default SocialLink;
