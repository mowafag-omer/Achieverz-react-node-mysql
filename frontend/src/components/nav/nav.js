import React from 'react'
import { Navbar } from 'react-bootstrap'
import './nav.css'

const HomeNav = ({ children }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Achivierz</Navbar.Brand>
        { children }
      </Navbar>
    </>
  )
}

export default HomeNav