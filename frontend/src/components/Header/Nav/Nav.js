import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './nav.css'

const HomeNav = ({ children }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to='/'><Navbar.Brand>Achivierz</Navbar.Brand></Link>
        { children }
      </Navbar>
    </>
  )
}

export default HomeNav