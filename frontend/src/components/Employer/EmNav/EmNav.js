import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import PostProject from '../PostProject/PostProject'
import { signOut } from '../../../store/actions/authActions'
import avatar from '../../../photo/avatar.png'
import './EmNav.css'

const EmNav = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  return (
    <>
      <Navbar className='justify-content-between bg-dark navbar-expand'  variant="dark">
        <Navbar.Brand href="/">Achivierz</Navbar.Brand>
        <Nav>
          <PostProject />
        </Nav>
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
      <Navbar className='py-0' bg="light" variant="light">
        <Nav className='py-0'>
          <Link
            to="/EmployerDashboard" 
            className={`nav-link ${location.pathname === '/EmployerDashboard' && 'nav-active'}`} 
          >
            Dashboard
          </Link> 
          <Link 
            to="/EmProjects" 
            className={`nav-link ${location.pathname === '/EmProjects' && 'nav-active'}`}
          >
            Mes projects
          </Link> 
        </Nav>
      </Navbar>
    </>
  )
}

export default EmNav