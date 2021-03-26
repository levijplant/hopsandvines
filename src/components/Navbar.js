import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

const NavBar = () => {

    return (
        <Navbar>
            <Nav className="mr-auto">
                <NavDropdown className="dropdown" title={<FontAwesomeIcon icon={faBars} />} id="basic-nav-dropdown">
                    <NavDropdown.Item id='dropdown-link'><Link to="/" id="dropdown-text">Home</Link></NavDropdown.Item>
                    <NavDropdown.Item id='dropdown-link'><Link to="/locationhours" id="dropdown-text">Location/Hours</Link></NavDropdown.Item>
                    <NavDropdown.Item id='dropdown-link'><Link to="/menu" id="dropdown-text">Menu</Link></NavDropdown.Item>
                    <NavDropdown.Item id='dropdown-link'><Link to="/aboutus" id="dropdown-text">About Us</Link></NavDropdown.Item>
                </NavDropdown>
                <div className='full-screen'>
                    <Navbar.Text>
                        <Link to="/" id="navbar-link">
                            Home
                </Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to="/locationhours" id="navbar-link">
                            Location/Hours
                </Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to="/menu" id="navbar-link">
                            Menu
                </Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to="/aboutus" id="navbar-link">
                            About Us
                </Link>
                    </Navbar.Text>
                </div>
            </Nav>
            <Nav className='social-media'>
                <Navbar.Brand href="https://www.facebook.com/Hops-Vines-392847171276786/" target="_blank" rel='noreferrer noopener'>
                    <img
                        src={require("./images/facebook-logo-icon-green.svg")}
                        alt='facebook logo'
                    />
                </Navbar.Brand>
                <Navbar.Brand href="https://untappd.com/v/hops-and-vines/9014721" target="_blank" rel='noreferrer noopener'>
                    <img
                        src={require("./images/untappd-logo-icon-green.svg")}
                        alt='untappd logo'
                    />
                </Navbar.Brand>
                <Navbar.Brand href="https://www.yelp.com/biz/hops-and-vines-cottonwood-2" target="_blank" rel='noreferrer noopener'>
                    <img
                        src={require("./images/yelp-logo-icon-green.svg")}
                        alt='yelp logo'
                    />
                </Navbar.Brand>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
