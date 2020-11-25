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
                // active={}
                // onClick={} 
                >
                    <Icon inverted name='home' link />
                </Menu.Item>
                <Menu.Item
                    link
                // active={}
                // onClick={} 
                >
                    Location/Hours
                </Menu.Item>
                <Menu.Item
                    name='menu'
                    link
                // active={}
                // onClick={} 
                />

                <Menu.Item
                    name='about'
                    link
                // active={}
                // onClick={} 
                />

                <Menu.Item position='right'>
                    <a href='https://www.facebook.com'><Icon inverted name='facebook official' size='large' link /></a>
                    <a href='https://twitter.com/explore'><Icon inverted name='untappd' size='large' link /></a>
                    <a href='https://www.snapchat.com/'><Icon inverted name='yelp' size='large' link /></a>
                </Menu.Item>

            </Menu>
        </Segment>
    )

}

export default NavBar;