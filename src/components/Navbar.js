import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { Menu, Segment, Icon, Dropdown } from 'semantic-ui-react';
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
        <>
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
                        <Icon style={{ color: '#C1D72D' }} inverted name='home' size='large' link />
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
                        link
                        name='menu'
                        active={state.activeItem === '/menu'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='about'
                        link
                    />
                    <Menu.Item
                        className='normal-social'
                        position='right'>
                        <a href='https://www.facebook.com/Hops-Vines-392847171276786' target='_blank' rel='noopener noreferrer'><Icon style={{ color: '#C1D72D' }} inverted name='facebook official' size='large' link /></a>
                        <a href='https://untappd.com/v/hops-and-vines/9014721' target='_blank' rel='noopener noreferrer'><Icon style={{ color: '#C1D72D' }} inverted name='untappd' size='large' link /></a>
                        <a href='https://www.yelp.com/biz/hops-and-vines-cottonwood-2' target='_blank' rel='noopener noreferrer'><Icon style={{ color: '#C1D72D' }} inverted name='yelp' size='large' link /></a>
                    </Menu.Item>
                </Menu>
            </Segment>

            <Segment
                className='nav-bar-mobile'
                inverted>
                <Menu inverted>
                    <Dropdown item icon='content' simple style={{ color: '#C1D72D' }}>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                name=''
                                active={state.activeItem === '/'}
                                onClick={handleItemClick}>
                                <Icon name='home' />
                            </Dropdown.Item>
                            <Dropdown.Item
                                name='locationhours'
                                active={state.activeItem === '/locationhours'}
                                onClick={handleItemClick}
                            >Location/Hours
                            </Dropdown.Item>
                            <Dropdown.Item
                                name='menu'
                                active={state.activeItem === '/menu'}
                                onClick={handleItemClick}
                            >Menu</Dropdown.Item>
                            <Dropdown.Item
                                name='menu'
                                active={state.activeItem === '/menu'}
                                onClick={handleItemClick}
                            >About</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>
            </Segment>
        </>
    )

}

export default NavBar;