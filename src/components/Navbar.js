import React, { Component, useState, useEffect } from "react";

// import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";
import { Menu, Segment, Input, Icon, Button, Container, Item, Select } from 'semantic-ui-react';
import './Navbar.css';


const NavBar = ({ }) => {

    return (
        <Segment
            className='nav-bar'
            inverted>
            <Menu inverted pointing secondary>
                <Menu.Item
                    name='home'
                // active={}
                // onClick={}
                />

                <Menu.Item position='right' fitted >
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
                </Menu.Item>


            </Menu>
        </Segment>
    )

}

export default NavBar;