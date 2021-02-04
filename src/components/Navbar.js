import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

const NavBar = () => {
  // const [state, setState] = useState({ activeItem: "" });
  // const history = useHistory();

  // const handleItemClick = (e, { href }) => {
  //   e.preventDefault();
  //   setState({ activeItem: href });
  //   let path = `/${href}`;
  //   history.push(path);
  // };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
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
              src={require("./images/facebook-logo-icon.svg")}
              alt='facebook logo'
            />
          </Navbar.Brand>
          <Navbar.Brand href="https://untappd.com/v/hops-and-vines/9014721" target="_blank" rel='noreferrer noopener'>
            <img
              src={require("./images/untappd-logo-icon.svg")}
              alt='untappd logo'
            />
          </Navbar.Brand>
          <Navbar.Brand href="https://www.yelp.com/biz/hops-and-vines-cottonwood-2" target="_blank" rel='noreferrer noopener'>
            <img
              src={require("./images/yelp-logo-icon.svg")}
              alt='yelp logo'
            />
          </Navbar.Brand>
        </Nav>
        </Navbar.Collapse>
      </Navbar>

    // <>
    //     <Segment
    //         className='nav-bar'
    //         inverted>
    //         <Menu inverted pointing secondary>
    //             <Menu.Item
    //                 link
    //                 name=''
    //                 active={state.activeItem === '/'}
    //                 onClick={handleItemClick}
    //             >
    //                 <Icon style={{ color: '#C1D72D' }} inverted name='home' size='large' link />
    //             </Menu.Item>
    //             <Menu.Item
    //                 link
    //                 name='locationhours'
    //                 active={state.activeItem === '/locationhours'}
    //                 onClick={handleItemClick}
    //             >
    //                 Location/Hours
    //             </Menu.Item>
    //             <Menu.Item
    //                 link
    //                 name='menu'
    //                 active={state.activeItem === '/menu'}
    //                 onClick={handleItemClick}
    //             />
    //             <Menu.Item
    //                 name='about'
    //                 link
    //             />
    //             <Menu.Item
    //                 className='normal-social'
    //                 position='right'>
    //                 <a href='https://www.facebook.com/Hops-Vines-392847171276786' target='_blank' rel='noopener noreferrer'><Icon style={{ color: '#C1D72D' }} inverted name='facebook official' size='large' link /></a>
    //                 <a href='https://untappd.com/v/hops-and-vines/9014721' target='_blank' rel='noopener noreferrer'><Icon style={{ color: '#C1D72D' }} inverted name='untappd' size='large' link /></a>
    //                 <a href='https://www.yelp.com/biz/hops-and-vines-cottonwood-2' target='_blank' rel='noopener noreferrer'><Icon style={{ color: '#C1D72D' }} inverted name='yelp' size='large' link /></a>
    //             </Menu.Item>
    //         </Menu>
    //     </Segment>

    //     <Segment
    //         className='nav-bar-mobile'
    //         inverted>
    //         <Menu inverted>
    //             <Dropdown item icon='content' simple style={{ color: '#C1D72D' }}>
    //                 <Dropdown.Menu>
    //                     <Dropdown.Item
    //                         name=''
    //                         active={state.activeItem === '/'}
    //                         onClick={handleItemClick}>
    //                         <Icon name='home' />
    //                     </Dropdown.Item>
    //                     <Dropdown.Item
    //                         name='locationhours'
    //                         active={state.activeItem === '/locationhours'}
    //                         onClick={handleItemClick}
    //                     >Location/Hours
    //                     </Dropdown.Item>
    //                     <Dropdown.Item
    //                         name='menu'
    //                         active={state.activeItem === '/menu'}
    //                         onClick={handleItemClick}
    //                     >Menu</Dropdown.Item>
    //                     <Dropdown.Item
    //                         name='menu'
    //                         active={state.activeItem === '/menu'}
    //                         onClick={handleItemClick}
    //                     >About</Dropdown.Item>
    //                 </Dropdown.Menu>
    //             </Dropdown>
    //         </Menu>
    //     </Segment>
    // </>
  );
};

export default NavBar;
