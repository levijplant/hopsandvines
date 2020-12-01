import React from 'react';
import { Container, Grid } from 'semantic-ui-react'
import './LocationHours.css';

const LocationHours = () => {
    
    return(
        <Container className='main-container'>
            <Grid>
                <Grid.Row>
                    <Grid.Column className='main-menu-grid'>
                        <h1 className='menu-header'>Location/Hours</h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className='content-container'>
                    <Grid.Column width={7}>
                        <div>
                            <h1>Hops and Vines</h1>
                            <p>
                                20633 Gas Point Rd, Ste A1 <br />
                                Cottonwood, CA 96022
                            </p>
                            <p>(530) 348-2308</p>
                        </div>
                        <div className='hours'>
                            <h1>Hours</h1>
                            <p>Monday - Thursday: 2:00 PM - 10:00 PM</p>
                            <p>Friday - Saturday: 2:00 PM - 12:00 AM</p>
                            <p>Sunday: 12:00 PM - 8:00 PM</p>
                        </div>
                    </Grid.Column>
                    <Grid.Column className='map-container'>
                        <iframe className='map' title='mapLocation' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.9096786563464!2d-122.29094098461063!3d40.38869437936832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d2c5b9ef993f3f%3A0xfc26cb997090ad3!2sHops%20%26%20Vines!5e0!3m2!1sen!2sus!4v1606515373673!5m2!1sen!2sus" /> 
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{justifyContent: 'center'}}>
                    <div className='logo'>
                        <img
                            className='hop-image'
                            src={require('./images/hop.jpg')}
                            alt='Hops and Vines Logo' />
                    </div>
                </Grid.Row>
            </Grid>
        </Container> 
    )
}

export default LocationHours;
