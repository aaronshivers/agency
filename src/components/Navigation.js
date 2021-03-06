import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'

const Navigation = () => (
  <Navbar
    expand="lg"
    variant="dark"
    bg="black"
    fixed="top"
    id="mainNav"
    collapseOnSelect
  >
    <Container>
      <Navbar.Brand href="#page-top">
        Web Agency
      </Navbar.Brand>
      <Navbar.Toggle as={ Button }>
        <span>Menu</span> <FaBars className="pb-1" />
      </Navbar.Toggle>
      <Navbar.Collapse>
        <Nav className="text-uppercase ml-auto">
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigation



