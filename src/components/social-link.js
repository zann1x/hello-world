import React from "react"

const SocialLink = ({link, title, children}) => (
    <a href={link} rel="me noopener noreferrer" title={title} target="_blank" className="social-link">
        {children}
    </a>
)

export default SocialLink
