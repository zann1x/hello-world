import React from "react"
import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import Container from "react-bootstrap/Container"

const Layout = ({ children }) => {
    return (
        <>
            <Head />
            <Header />
            <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
                <Container style={{ width:"90%", flexGrow: "1" }}>
                    {children}
                </Container>
                <Footer />
            </div>
        </>
    )
}

export default Layout
