import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <Container className="main-menu-container">
            <Row className="justify-content-center">
                <Col className="main-menu-grid">
                    <h1 id="about-us-header" className="menu-header">About Us</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={10} sm={10} md={5} id="column-one">
                    <Image
                        id="chad-beer-pic"
                        fluid
                        rounded
                        src={require("./images/chad-beer.jpg")} alt="Chad Drinking Beer" />
                </Col>
                <Col xs={10} sm={10} md={5} id="column-two">
                    <p id="about-paragraph-one">My name is Chad and I own Hops & Vines in Cottonwood, CA with my fiancée Nicole. Opening my own pub has always been a dream of mine. I love craft beer, and enjoy meeting and talking to new people; opening a pub was a no-brainer for me. </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={10} sm={10} md={5} id="column-three" className="justify-content-center">
                    <p id="about-paragraph-two">My goal is to provide a clean and comfortable environment for people to gather and enjoy beers, ciders, and wine. I love travelling and sampling unique beer options at new locations. With this pub, I want to bring these new options to my community.</p>
                </Col>
                <Col xs={10} sm={10} md={5} id="column-four">
                    <Image
                        id="nicole-chad"
                        fluid
                        rounded
                        src={require("./images/nicole-chad2.jpg")} alt="Nicole and Chad Drinking Beer" />
                </Col>
            </Row>

        </Container>
    );
};

export default AboutUs;