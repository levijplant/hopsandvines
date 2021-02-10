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
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
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
        </Nav>
        <Nav>
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
