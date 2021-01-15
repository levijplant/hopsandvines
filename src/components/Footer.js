import React from 'react';
import Image from 'react-bootstrap/Image';
import './Footer.css';

const Footer = () => {

    return (
        <div id='footer' fluid>
            <div className='mobile-social'>
                <a href='https://www.facebook.com/Hops-Vines-392847171276786' target='_blank' rel='noopener noreferrer'><Image style={{ color: 'black' }} inverted name='facebook official' size='big' link /></a>
                <a href='https://untappd.com/v/hops-and-vines/9014721' target='_blank' rel='noopener noreferrer'><Image style={{ color: 'black' }} inverted name='untappd' size='big' link /></a>
                <a href='https://www.yelp.com/biz/hops-and-vines-cottonwood-2' target='_blank' rel='noopener noreferrer'><Image style={{ color: 'black' }} inverted name='yelp' size='big' link /></a>
            </div>
        </div>
    )

};

export default Footer;