import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import './Hero.css';

const Hero = () => {

    return (

        <Container id="my-hero" fluid>
            <section className='main-header'>
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
                </div>
                <div className='logo'>
                    <img
                        className='hops-and-vines-logo'
                        src={require('./images/hops-and-vines-logo.svg')}
                        alt='Hops and Vines Logo' />
                </div>
                <div className='social'>
                    <p>Connect with us!</p>
                    <div>
                        <img
                            className='facebook-logo'
                            src={require('./images/facebook-logo-icon.svg')}
                            alt='Facebook Logo' />
                        <img
                            className='untappd-logo'
                            src={require('./images/untappd-logo-icon.svg')}
                            alt='Untappd Logo' />
                        <img
                            className='yelp-logo'
                            src={require('./images/yelp-logo-icon.svg')}
                            alt='Yelp Logo' />
                    </div>
                </div>
            </section>
            <section className='welcome-section'>
                <h1 className='welcome-message'>Welcome to Hops & Vines!</h1>
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
            </section>
        </Container>

    )

};

export default Hero; 