import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapPin } from '@fortawesome/free-solid-svg-icons';
import "./LocationHours.css";

const LocationHours = () => {
    return (
        <Container className="main-container">
            <Row>
                <Col className="main-menu-grid">
                    <h1 id="location-hours-header">Location/Hours</h1>
                </Col>
            </Row>
            <Row className="content-container">
                <Col width={7}>
                    <div>
                        <h1>Hops and Vines</h1>
                        <p>
                            20633 Gas Point Rd, Ste A1 <br />
                            Cottonwood, CA 96022
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faMapPin} />
                            <a href='https://maps.google.com/?q=20633+Gas+Point+Rd,+Cottonwood+CA' >
                                <a href='https://maps.apple.com/maps?q=20633+Gas+Point+Rd,+Cottonwood+CA' id='get-directions'>
                                    Get Directions</a></a>
                        </p>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <a href="tel:+15303482308" id='phone-number'>(530) 348-2308</a>
                    </div>
                    <div className="hours">
                        <h1>Hours</h1>
                        <p>Open Every Day: 2:00 PM - 10:00 PM</p>
                    </div>
                </Col>
                <Col className='map-container-nonmobile'>
                    <iframe
                        id='map'
                        title='mapLocation'
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.9096786563464!2d-122.29094098461063!3d40.38869437936832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d2c5b9ef993f3f%3A0xfc26cb997090ad3!2sHops%20%26%20Vines!5e0!3m2!1sen!2sus!4v1606515373673!5m2!1sen!2sus'
                    />
                </Col>
            </Row>
        </Container >
    );
};

export default LocationHours;
