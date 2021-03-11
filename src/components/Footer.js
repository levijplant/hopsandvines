import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <div id='footer' fluid>
            <div className='mobile-social'>
                <a href='https://www.facebook.com/Hops-Vines-392847171276786' target='_blank' rel='noopener noreferrer'>
                    <img src={require("./images/facebook-logo-icon.svg")} alt='facebook logo' />
                </a>
                <a href='https://untappd.com/v/hops-and-vines/9014721' target='_blank' rel='noopener noreferrer'>
                    <img src={require("./images/untappd-logo-icon.svg")} alt='untappd logo' />
                </a>
                <a href='https://www.yelp.com/biz/hops-and-vines-cottonwood-2' target='_blank' rel='noopener noreferrer'>
                    <img src={require("./images/yelp-logo-icon.svg")} alt='yelp logo' />
                </a>
            </div>
        </div>
    )

};

export default Footer;