import React from "react"

const Footer = () => (
    <footer className="text-center fixed-bottom" style={{ backgroundColor: "#f5f5f5", padding: "10px", height: "50px", display: "block" }}>
        © {new Date().getFullYear()} Lukas Zanner - Powered by <a href="https://www.gatsbyjs.org">Gatsby</a>.
    </footer>
)

export default Footer
