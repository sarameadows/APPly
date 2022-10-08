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
            {loggedIn && (
              <Nav.Link href="/" onClick={() => Auth.logout}>
                Logout
              </Nav.Link>
            )}
            <Nav.Link href="/resources">Resources</Nav.Link>
            <NavDropdown
              title={
                jobs.length < 1 ? 'Begin your search' : 'Continue your search'
              }
              id="site-dropdown"
            >
              <NavDropdown.Item
                href="https://www.linkedin.com/jobs/"
                target="_blank"
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.indeed.com/" target="_blank">
                Indeed
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.glassdoor.com/index.htm"
                target="_blank"
              >
                Glassdoor
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
