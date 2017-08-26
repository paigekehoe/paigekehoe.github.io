import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Interactive from 'react-interactive';
import Home from './Home';
import About from './About';
import { Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';
import s from '../styles/style';

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
       <Navbar.Toggle />
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default function Header() {

  return (
      <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Paige Kehoe</a>
      </Navbar.Brand>
       <Navbar.Toggle />
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/">Home</NavItem>
      <NavItem eventKey={2} href="/About">About</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
  );
};

  // <Switch>
  //       <Route exact path="/" component={Home} />
  //       <Route path="/about" component={About} />
  //       <Route component={PageNotFound} />
  //     </Switch>

// export default function Header() {
//   return (
//     <Route path="/" component={Header} />
//   );
// }

