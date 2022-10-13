import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

const NavBar = () => {
  return (
    <Navbar id="nav-bar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img style={{ width: 120, height: 40, margin: 20 }} src={require(`../assets/images/APPly.png`)} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="navbar" >
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {Auth.loggedIn && (
              <Nav.Link href="/" onClick={() => Auth.logout}>
                Logout
              </Nav.Link>
            )}
            {Auth.loggedIn && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
            <Nav.Link href="/resources">Resources</Nav.Link>
            <NavDropdown title="Search for jobs" id="site-dropdown">
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
