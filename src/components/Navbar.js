import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { Menu, Segment, Icon } from 'semantic-ui-react';
import './Navbar.css';


const NavBar = () => {

    const [state, setState] = useState({ activeItem: '' });
    const history = useHistory();

    const handleItemClick = (e, { name }) => {
        e.preventDefault();
        setState({ activeItem: name });
        let path = `/${name}`;
        history.push(path);
    };

    return (
        <Segment
            className='nav-bar'
            inverted>
            <Menu inverted pointing secondary>
                    <Menu.Item
                        link
                        name=''
                        active={state.activeItem === '/'}
                        onClick={handleItemClick}
                    >
                        <Icon style={{color: '#C1D72D'}} inverted name='home' size='large' link />
                    </Menu.Item>
                    <Menu.Item
                        link
                        name='locationhours'
                        active={state.activeItem === '/locationhours'}
                        onClick={handleItemClick}
                    >
                        Location/Hours
                    </Menu.Item>
                    <Menu.Item
                        name='menu'
                        link
                    />
                    <Menu.Item
                        name='about'
                        link
                    />
                <Menu.Item position='right'>
                    <a href='https://www.facebook.com'><Icon style={{color: '#C1D72D'}} inverted name='facebook official' size='large' link /></a>
                    <a href='https://twitter.com/explore'><Icon style={{color: '#C1D72D'}} inverted name='untappd' size='large' link /></a>
                    <a href='https://www.snapchat.com/'><Icon style={{color: '#C1D72D'}} inverted name='yelp' size='large' link /></a>
                </Menu.Item>
            </Menu>
        </Segment>
    )

}

export default NavBar;