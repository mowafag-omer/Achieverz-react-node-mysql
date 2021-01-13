import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'

export const MainNav = () => {
  return (
    <>
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
    </>
  )
}

export default MainNav