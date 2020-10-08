import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import './Hero.css';

const Hero = () => {

    return (

        <Container id="my-hero" fluid>
            <div className='address'>
                <address>
                    20633 Gas Point Rd, Suite A1<br/>
                    Cottonwood, CA 96002
                </address>
                <Image src='./images/map-pin.svg' alt='Map Pin'>Get Directions</Image>
                <br/>
                <a href="tel:5303482308">(530) 348-2308</a>
            </div>
        </Container>

    )

};

export default Hero; 