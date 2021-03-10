import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { BoxArrowLeft } from 'react-bootstrap-icons' 
import { Link } from 'react-router-dom'
import { signOut } from '../../../store/actions/authActions'
import '../../Freelancer/FrNav/FrNav.css'

const AdminNav = (props) => {
  const dispatch = useDispatch()
  const location = useLocation()

  return (
    <>
      <Navbar className="main-nav d-flex justify-content-between" variant="dark">
        <Link to='/adminDashboard'><Navbar.Brand><b>ACHIEVERZ</b></Navbar.Brand></Link>
        <Nav>
            <div className="nav-link pointer" onClick={() => dispatch(signOut())} >
              <BoxArrowLeft size={24} className="mr-1 pb-1 icon" /> 
              <span>Se déconnecter</span>
            </div>
          </Nav>
        
      </Navbar>
      <Navbar collapseOnSelect className='s-nav py-0' expand="md" bg="light" variant="light">
        <Navbar.Toggle className="ml-auto m-2 border border-dark" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='flex-shrink-lg-0 py-0'>
            <Link
              to="/adminDashboard" 
              className={`nav-link mx-auto ${location.pathname === '/adminDashboard' && 'nav-active'}`} 
            >
              Dashboard
            </Link> 
            <Link
              to="/AEmprofile" 
              className={`nav-link mx-auto ${location.pathname === '/AEmprofile' && 'nav-active'}`} 
            >
              Employeurs
            </Link> 
            <Link
              to="/freelancers" 
              className={`nav-link mx-auto ${location.pathname === '/freelancers' && 'nav-active'}`} 
            >
              Freelances
            </Link> 
            {/* <Link 
              to="/FrProjects" 
              className={`nav-link mx-auto ${location.pathname === '/FrProjects' && 'nav-active'}`}
            >
              Mes projects
            </Link>  */}
          </Nav>
        </Navbar.Collapse>          
      </Navbar>
    </>
  )
}

export default AdminNav
