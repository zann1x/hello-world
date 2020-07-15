import React from "react";

const ExternalLink = ({to, title, children}) => (
    <a href={to} title={title} rel="noopener noreferrer" target="_blank">{children}</a>
);

export default ExternalLink;
