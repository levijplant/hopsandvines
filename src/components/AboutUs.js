import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import './AboutUs.css';

const AboutUs = () => {
    return (
        <Container className="main-menu-container">
            <Row className='justify-content-center'>
                <Col className="main-menu-grid">
                    <h1 id='about-us-header' className="menu-header">About Us</h1>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={8} sm={10} md={4} id="column-one">
                    <Image
                        id='chad-beer-pic'
                        fluid
                        rounded
                        src={require("./images/chad-beer.jpg")} alt='Chad Drinking Beer' />
                </Col>
                <Col xs={8} sm={10} md={4} id="column-two">
                    <p id="about-paragraph-one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit! Minus, nam. Animi cumque, odio perspiciatis minima earum fugiat voluptatum. Atque delectus doloribus quod rerum, facere harum enim voluptas ut.</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={8} sm={10} md={4} id="column-three">
                    <p id="about-paragraph-two">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit! Minus, nam. Animi cumque, odio perspiciatis minima earum fugiat voluptatum. Atque delectus doloribus quod rerum, facere harum enim voluptas ut.</p>
                </Col>
                <Col xs={8} sm={10} md={4} id="column-four">
                    <Image
                        id='nicole-chad'
                        fluid
                        rounded
                        src={require("./images/nicole-chad2.jpg")} alt='Nicole and Chad Drinking Beer' />
                </Col>
            </Row>

        </Container>
    );
};

export default AboutUs;