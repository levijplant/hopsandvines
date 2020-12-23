import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import './Hero.css';

const Hero = () => {

    return (

        <Container id="my-hero" fluid>
            <div className='container'>
                <Grid columns="equal">
                    <Grid.Row>
                        <Grid.Column textAlign="center">
                            <div className='logo'>
                                <img
                                    className='hops-and-vines-logo'
                                    src={require('./images/hops-and-vines-logo.svg')}
                                    alt='Hops and Vines Logo' />
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