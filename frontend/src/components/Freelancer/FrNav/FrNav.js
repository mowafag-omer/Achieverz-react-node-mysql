import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { signOut } from '../../../store/actions/authActions'
import avatar from '../../../assets/photo/avatar.png'
import './FrNav.css'

const FrNav = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  return (
    <div>
      <Navbar className='fr-nav justify-content-between navbar-expand'  variant="dark">
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

      <Navbar className='s-nav py-0' bg="light" variant="light">
        <Nav className='py-0'>
          <Link
            to="/freelancerDashboard" 
            className={`nav-link ${location.pathname === '/freelancerDashboard' && 'nav-active'}`} 
          >
            Dashboard
          </Link> 
          <Link 
            to="/FrProjects" 
            className={`nav-link ${location.pathname === '/FrProjects' && 'nav-active'}`}
          >
            Mes projects
          </Link> 
        </Nav>
      </Navbar>
    </div>
  )
}

export default FrNav
