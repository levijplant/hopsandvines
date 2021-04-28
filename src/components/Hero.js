import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Hero.css';

const Hero = () => {

    return (
        <Container id="my-hero" fluid>
            <Row>
                <Col textAlign="center">
                    <div className='logo'>
                        <img
                            className='hops-and-vines-logo'
                            src={require('./images/hops-and-vines-logo.svg')}
                            alt='Hops and Vines Logo' />
                    </div>
                </Col>
            </Row>
            <Row textAlign="center">
                <Col>
                    <h1 className='welcome-message' id='welcome-message'>Welcome to Hops & Vines!</h1>
                </Col>
            </Row>
            <Row textAlign='center'>
                <Col>
                    <p className='located'>
                        Located in Cottonwood, CA.
                    <br />
                        We feature over 20 beers on tap that rotate daily, and over 18 wines from local wineries.</p>
                </Col>
            </Row>
            <div className='bottom'>
            <Row>
                <Col textAlign="center">
                    <div className='glass-grapes'>
                        <img
                            className='glass'
                            src={require('./images/beers.svg')}
                            alt='Beer Glass' />
                        <img
                            className='grapes'
                            src={require('./images/grapes.svg')}
                            alt='Grapes!' />
                    </div>
                </Col>
            </Row>
            {/* <div className='mouse-div'>
                <img
                    className='mouse'
                    src={require('./images/mouse.png')}
                    alt='scroll-mouse' />
            </div> */}
            </div>
        </Container>
    )
};

export default Hero; 