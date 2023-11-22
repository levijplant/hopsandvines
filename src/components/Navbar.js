import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import "./Navbar.css";

const NavBar = () => {

    return (
        <Navbar>
            <Nav className="mr-auto">
                <NavDropdown className="dropdown" title={<FontAwesomeIcon icon={faBars}/>} id="basic-nav-dropdown">
                    <NavDropdown.Item id='dropdown-link'><Link to="/" id="dropdown-text">Home</Link></NavDropdown.Item>
                    <NavDropdown.Item id='dropdown-link'><Link to="/locationhours" id="dropdown-text">Location/Hours</Link></NavDropdown.Item>
                    <NavDropdown.Item id='dropdown-link'><Link to="/menu" id="dropdown-text">Menu</Link></NavDropdown.Item>
                    <NavDropdown.Item id='dropdown-link'><Link to="/aboutus" id="dropdown-text">About Us</Link></NavDropdown.Item>
                </NavDropdown>
                <div className='full-screen'>
                    <Navbar.Text >
                        <Link to="/" id="navbar-link">
                            <FontAwesomeIcon icon={faHome}/>
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
                <Navbar.Brand href="https://www.facebook.com/Hops-Vines-392847171276786/" target="_blank" rel='noreferrer noopener' >
                <svg class='facebook-logo' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                {/* <img
                    src={require("./images/facebook-logo-icon-green.svg")}
                    alt='facebook logo'
                    /> */}
                </Navbar.Brand>
                <Navbar.Brand href="https://untappd.com/v/hops-and-vines/9014721" target="_blank" rel='noreferrer noopener'>
                <svg class='untappd-logo' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M401.3 49.9c-79.8 160.1-84.6 152.5-87.9 173.2l-5.2 32.8c-1.9 12-6.6 23.5-13.7 33.4L145.6 497.1c-7.6 10.6-20.4 16.2-33.4 14.6-40.3-5-77.8-32.2-95.3-68.5-5.7-11.8-4.5-25.8 3.1-36.4l148.9-207.9c7.1-9.9 16.4-18 27.2-23.7l29.3-15.5c18.5-9.8 9.7-11.9 135.6-138.9 1-4.8 1-7.3 3.6-8 3-.7 6.6-1 6.3-4.6l-.4-4.6c-.2-1.9 1.3-3.6 3.2-3.6 4.5-.1 13.2 1.2 25.6 10 12.3 8.9 16.4 16.8 17.7 21.1.6 1.8-.6 3.7-2.4 4.2l-4.5 1.1c-3.4.9-2.5 4.4-2.3 7.4.1 2.8-2.3 3.6-6.5 6.1zM230.1 36.4c3.4.9 2.5 4.4 2.3 7.4-.2 2.7 2.1 3.5 6.4 6 7.9 15.9 15.3 30.5 22.2 44 .7 1.3 2.3 1.5 3.3.5 11.2-12 24.6-26.2 40.5-42.6 1.3-1.4 1.4-3.5.1-4.9-8-8.2-16.5-16.9-25.6-26.1-1-4.7-1-7.3-3.6-8-3-.8-6.6-1-6.3-4.6.3-3.3 1.4-8.1-2.8-8.2-4.5-.1-13.2 1.1-25.6 10-12.3 8.9-16.4 16.8-17.7 21.1-1.4 4.2 3.6 4.6 6.8 5.4zM620 406.7L471.2 198.8c-13.2-18.5-26.6-23.4-56.4-39.1-11.2-5.9-14.2-10.9-30.5-28.9-1-1.1-2.9-.9-3.6.5-46.3 88.8-47.1 82.8-49 94.8-1.7 10.7-1.3 20 .3 29.8 1.9 12 6.6 23.5 13.7 33.4l148.9 207.9c7.6 10.6 20.2 16.2 33.1 14.7 40.3-4.9 78-32 95.7-68.6 5.4-11.9 4.3-25.9-3.4-36.6z"/></svg>
                    {/* <img
                        src={require("./images/untappd-logo-icon-green.svg")}
                        alt='untappd logo'
                    /> */}
                </Navbar.Brand>
                <Navbar.Brand href="https://www.yelp.com/biz/hops-and-vines-cottonwood-2" target="_blank" rel='noreferrer noopener'>
                <svg class='yelp-logo' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z"/></svg>
                    {/* <img
                        src={require("./images/yelp-logo-icon-green.svg")}
                        alt='yelp logo'
                    /> */}
                </Navbar.Brand>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
