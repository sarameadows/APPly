import React from 'react';
import {
  BrowserRouter as Routes,
  Switch,
  Route,
  Link,
  Router,
} from 'react-router-dom';
import { Container } from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">{/* insert logo here */}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {loggedIn && <Nav.Link href="/logout">Logout</Nav.Link>}
            <NavDropdown title="Resources" id="resources-dropdown">
              {/* Need to have list of resource categories to map through */}
            </NavDropdown>
            <NavDropdown title={jobs.length < 1 ? 'Begin your search' : 'Continue your search'} id="site-dropdown">
              <NavDropdown.Item href={/* LinkedIn */}>LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href={/* Indeed */}>Indeed</NavDropdown.Item>
              <NavDropdown.Item href={/* Glassdoor */}>Glassdoor</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar;
