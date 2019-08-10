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
            <div>
                { /* Leave -50px room at the bottom for the footer */ }
                <Container style={{ minHeight: "100%", margin: "0 auto -50px" }}>
                    {children}
                    { /* Leave some space until the footer comes around */ }
                    <Row style={{ height: "50px" }}></Row>
                </Container>
                <Footer />
            </div>
        </>
    )
}

export default Layout
