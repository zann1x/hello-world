import React from "react"
import Header from "./header "
import Footer from "./footer"
import Head from "./head"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

const Layout = ({ children }) => {
    return (
        <>
            <Head />
            <Header />
            { /* Leave -50px room at the bottom for the footer */ }
            <Container style={{ minHeight: "100vh", position: "relative" }}>
                <Container style={{ paddingTop: "75px", margin: "0 auto -50px" }}>
                    {children}

                    { /* Leave some space until the footer comes around */ }
                    <Row style={{ height: "50px" }}></Row>
                </Container>
            </Container>

            <Footer />
        </>
    )
}

export default Layout
