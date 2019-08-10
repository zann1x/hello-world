import React from "react"

const SocialLink = ({link, title, logoClass}) => (
    <a href={link} rel="me noopener noreferrer" title={title} target="_blank"><i class={logoClass} aria-hidden="false"></i></a>
)

export default SocialLink
