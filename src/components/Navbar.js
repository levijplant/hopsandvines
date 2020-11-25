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

                <Menu.Item position='right'>
                    <a href='https://www.facebook.com'><Icon inverted color='teal' name='facebook f' /></a>
                </Menu.Item>
                <Menu.Item>
                    <a href='https://twitter.com/explore'><Icon inverted color='teal' name='twitter' /></a>
                </Menu.Item>
                <Menu.Item >
                    <a href='https://www.snapchat.com/'><Icon inverted color='teal' name='snapchat ghost' /></a>
                </Menu.Item>


            </Menu>
        </Segment>
    )

}

export default NavBar;