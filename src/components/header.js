import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Header = () => (
    <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark" style={{ fontFamily:"'Inconsolata', monospace", backgroundColor: "#222" }}>
        <Navbar.Brand href="/" style={{ color: "#00ff00" }}>lukas@void ~ $</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav-menu" />
        <Navbar.Collapse id="responsive-navbar-nav-menu" className="justify-content-end">
            <Nav style={{ fontSize: "1.3em" }}>
                <Nav.Link href="/">
                    /home/lukas
                </Nav.Link>
                <Nav.Link href="/#about">
                    ~/about
                </Nav.Link>
                <Nav.Link href="/projects/">
                    ~/projects
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header
