import React from "react"
import Header from "./header "
import Footer from "./footer"
import Head from "./head"
import Container from "react-bootstrap/Container"

const Layout = ({ children }) => {
    return (
        <>
            <Head />
            <Header />
            <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
                <div style={{ paddingTop: "5rem", flexGrow: "1" }}>
                    <Container>
                        {children}
                    </Container>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
