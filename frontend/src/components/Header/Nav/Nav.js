import React from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BoxArrowInRight, PencilSquare } from 'react-bootstrap-icons'
import './nav.css'

const HomeNav = () => {
  const location = useLocation()

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Link to='/'><Navbar.Brand>Achivierz</Navbar.Brand></Link>
        <Nav className="m-auto nav-btn">
          {location.pathname === '/' && (<>
            <Button className="m-1">Poster un job</Button>
            <Button className="m-1">Trouver un job</Button>
          </>)} 
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-shrink-lg-0">
            <Link className="nav-link" to="/login">
              <BoxArrowInRight size={21} className="mr-2 icon" /> 
              <span>Se conecter</span>
            </Link>
            <Link className="nav-link" to="/Signup">
              <PencilSquare size={21} className="mr-2 icon" /> 
              <span>S'inscrire</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default HomeNav