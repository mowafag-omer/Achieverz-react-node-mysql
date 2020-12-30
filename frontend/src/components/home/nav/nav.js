import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import './nav.css'

const HomeNav = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Achivierz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Button variant="secondary" className="m-1">Poster un job</Button>
            <Button variant="secondary" className="m-1">Trouver un job</Button>
          </Nav>
          <Nav>
            <Nav.Link href="#">Se conecter</Nav.Link>
            <Nav.Link eventKey={2} href="#">S'inscrire</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default HomeNav