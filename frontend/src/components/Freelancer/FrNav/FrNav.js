import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { signOut } from '../../../store/actions/authActions'
import { Search } from 'react-bootstrap-icons'
import avatar from '../../../assets/photo/avatar.png'
import './FrNav.css'

const FrNav = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  
  return (
    <div>
      <Navbar className='fr-nav justify-content-between navbar-expand'  variant="dark">
        <Navbar.Brand><Link to="/">ACHIEVERZ</Link></Navbar.Brand>
        <Nav>
          <button className="btn d-none d-sm-block"><Link to='/OpenProjects'>Trouver un Projet</Link></button>
          <Link to='/OpenProjects'><Search size={30} className="d-sm-none text-warning" /></Link>
        </Nav>
        <Nav>
          <NavDropdown title={
            <div className="">
              <img className="avatar" 
                  src={avatar} 
                  alt=""
              />
            </div>
          } id="collasible-nav-dropdown">
            <NavDropdown.Item href="">Profil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => dispatch(signOut())}>Déconnexion</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>

      <Navbar collapseOnSelect className='s-nav py-0' expand="md" bg="light" variant="light">
        <Navbar.Toggle className="ml-auto m-2 border border-dark" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='flex-shrink-lg-0 py-0'>
            <Link
              to="/freelancerDashboard" 
              className={`nav-link mx-auto ${location.pathname === '/freelancerDashboard' && 'nav-active'}`} 
            >
              Dashboard
            </Link> 
            <Link 
              to="/FrConfirmedProjects" 
              className={`nav-link mx-auto ${location.pathname === '/FrConfirmedProjects' && 'nav-active'}`}
            >
              Projets confirmés
            </Link> 
            <Link 
              to="/FrApplications" 
              className={`nav-link mx-auto ${location.pathname === '/FrApplications' && 'nav-active'}`}
            >
              Mes candidatures
            </Link> 
          </Nav>
        </Navbar.Collapse>          
      </Navbar>
    </div>
  )
}

export default FrNav
