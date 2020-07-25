import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faXing } from "@fortawesome/free-brands-svg-icons";
import ExternalLink from "./external_link";

import styles from "./footer.module.css";

const Footer = () => (
    <footer className={styles.container}>
        <ExternalLink to="mailto:hi@lukaszanner.de?subject=message from lukaszanner.de" title="Email">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </ExternalLink>
        <ExternalLink to="https://github.com/zann1x" title="GitHub">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </ExternalLink>
        <ExternalLink to="https://linkedin.com/in/lukas-zanner" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn}  size="2x" />
        </ExternalLink>
        <ExternalLink to="https://www.xing.com/profile/Lukas_Zanner" title="XING">
            <FontAwesomeIcon icon={faXing} size="2x" />
        </ExternalLink>
    </footer>
);

export default Footer;
