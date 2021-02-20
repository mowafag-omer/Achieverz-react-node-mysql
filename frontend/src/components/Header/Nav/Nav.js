import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './nav.css'

const HomeNav = ({ children }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to='/'><Navbar.Brand>Achivierz</Navbar.Brand></Link>
        <Nav className="m-auto">
          <Button variant="secondary" className="m-1">Poster un job</Button>
          <Button variant="secondary" className="m-1">Trouver un job</Button>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-shrink-lg-0">
            <Link className="nav-link" to="/login">Se conecter</Link>
            <Link className="nav-link" to="/Signup">S'inscrire</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default HomeNav