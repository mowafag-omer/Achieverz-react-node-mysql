import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import { useLocation } from 'react-router-dom'
import { signOut } from '../../../store/actions/authActions'
import avatar from '../../../photo/avatar.png'
import './FrNav.css'

const FrNav = () => {
  const dispatch = useDispatch()
  // const location = useLocation()

  return (
    <>
      <Navbar className='justify-content-between bg-dark navbar-expand'  variant="dark">
        <Navbar.Brand href="/">Achivierz</Navbar.Brand>
        <Nav>
          <NavDropdown title={
            <div className="">
              <img className="mr-5 avatar" 
                  src={avatar} 
                  alt=""
              />
            </div>
          } id="collasible-nav-dropdown">
            <NavDropdown.Item href="">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => dispatch(signOut())}>Déconnecter</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </>
  )
}

export default FrNav
