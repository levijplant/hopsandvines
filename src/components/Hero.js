import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import './Hero.css';

const Hero = () => {

    return (

        <Container id="my-hero" fluid>
            <div className='container'>
                <Grid columns="equal">
                    <Grid.Row>
                        <Grid.Column>
                            <div className='address'>
                                <address>
                                    20633 Gas Point Rd, Suite A1<br />
                                Cottonwood, CA 96002
                                    </address>
                                <div className='directions'>
                                    <img
                                        className='map-pin-icon'
                                        src={require('./images/map-pin.svg')}
                                        alt='Map Pin' />
                                    <span>Get Directions</span>
                                </div>
                                <div className='phone'>
                                    <img
                                        className='phone-icon'
                                        src={require('./images/phone-button.svg')}
                                        alt='Phone' />
                                    <a href="tel:5303482308">(530) 348-2308</a>
                                </div>
                                <div className='hours'>
                                    Open Daily 2:00 - 10:00pm
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width="8" textAlign="center">
                            <div className='logo'>
                                <img
                                    className='hops-and-vines-logo'
                                    src={require('./images/hops-and-vines-logo.svg')}
                                    alt='Hops and Vines Logo' />
                            </div>
                        </Grid.Column>
                        <Grid.Column textAlign="right">
                            <div className='social'>
                                <p>Connect with us!</p>
                                <div>
                                    <a href='https://www.facebook.com/Hops-Vines-392847171276786' target='_blank' rel='noopener noreferrer'>
                                        <img
                                            className='facebook-logo'
                                            src={require('./images/facebook-logo-icon.svg')}
                                            alt='Facebook Logo' />
                                    </a>
                                    <a href='https://untappd.com/v/hops-and-vines/9014721' target='_blank' rel='noopener noreferrer'>
                                        <img
                                            className='untappd-logo'
                                            src={require('./images/untappd-logo-icon.svg')}
                                            alt='Untappd Logo' />
                                    </a>
                                    <a href='https://www.yelp.com/biz/hops-and-vines-cottonwood-2' target='_blank' rel='noopener noreferrer'>
                                        <img
                                            className='yelp-logo'
                                            src={require('./images/yelp-logo-icon.svg')}
                                            alt='Yelp Logo' />
                                    </a>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign="center">
                        <Grid.Column>
                            <h1 className='welcome-message'>Welcome to Hops & Vines!</h1>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign="center">
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
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign='center'>
                        <Grid.Column>
                            <p className='located'>
                                Located in Cottonwood, CA.
                            <br />
                                We feature over 20 beers on tap that rotate daily, and over 18 wines from local wineries.</p>
                        </Grid.Column>
                    </Grid.Row>
                    {/* <Grid.Row className='mouse-row'> */}
                    {/* </Grid.Row> */}
                </Grid>
                <div className='mouse-div'>
                    <img
                        className='mouse'
                        src={require('./images/mouse.png')}
                        alt='scroll-mouse' />
                </div>
            </div>
        </Container >

    )

};

export default Hero; 