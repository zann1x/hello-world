import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SocialLink from "../components/social-link";

export default () => (
    <Layout>
        <SEO title="home" />
        <Row>
            <Col xs={12} className="text-center">
                <h1 style={{ fontSize: "5em" }}>LUKAS ZANNER</h1>
            </Col>
        </Row>
        <Row>
            <Col xs={12} className="text-center">
                <SocialLink link="mailto:mail@lukaszanner.de" title="Email" logoClass="fas fa-envelope fa-3x" />
                <SocialLink link="https://github.com/zann1x" title="Github" logoClass="fab fa-github fa-3x" />
                <SocialLink link="https://linkedin.com/in/lukas-zanner" title="LinkedIn" logoClass="fab fa-linkedin fa-3x" />
                <SocialLink link="https://www.xing.com/profile/Lukas_Zanner" title="XING" logoClass="fab fa-xing fa-3x" />
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 6, offset: 3 }} className="text-center" style={{ borderStyle: "solid", borderWidth: "5px", borderColor: "#292929", marginTop: "20px", marginBottom: "1em", padding: "15px", fontSize: "1.1em" }}>
                <p>software developer // spare time game developer // (e)sports guy</p>
            </Col>
        </Row>
    </Layout>
)
