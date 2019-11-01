import React from "react"

const Footer = () => (
    <footer className="text-center" style={{ backgroundColor: "#f5f5f5", padding: "10px", height: "50px", display: "block" }}>
        © {new Date().getFullYear()} Lukas Zanner - powered by <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://github.com/LordMathis/hugo-theme-nix">Nix</a>
    </footer>
)

export default Footer
