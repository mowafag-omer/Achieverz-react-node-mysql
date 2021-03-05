import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import PostProject from '../PostProject/PostProject'
import { signOut } from '../../../store/actions/authActions'
import avatar from '../../../assets/photo/avatar.png'
import './EmNav.css'

const EmNav = () => {
  const projectsLoaded = useSelector(state => state.projects.loaded)
  const dispatch = useDispatch()
  const location = useLocation()

  return (
    <div>
      <Navbar className='Em-nav justify-content-between navbar-expand'  variant="dark">
        <Navbar.Brand href="/">ACHIEVERZ</Navbar.Brand>
        <Nav>
          {projectsLoaded && <PostProject />}
        </Nav>
        <Nav>
          <NavDropdown title={
            <div className="">
              <img className="mr-5 avatar" src={avatar} alt="Img de profile"/>
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
            to="/EmployerDashboard" 
            className={`nav-link ${location.pathname === '/EmployerDashboard' && 'nav-active'}`} 
          >
            Dashboard
          </Link> 
          {[
            {project: 'open', title: 'Projets ouverts'},
            {project: 'inprogress', title: 'Projets en cours'}
            ].map(p => 
              <Link 
                to={{
                  pathname: "/EmProjects",
                  state: {project: p.project, title: p.title}
                }} 
                className={`nav-link ${(location.pathname === '/EmProjects' || location.pathname === '/project') &&
                  location.state.project === p.project && 'nav-active'}`
                }
              >
                {p.title}
              </Link>
            )}
        </Nav>
      </Navbar>
    </div>
  )
}

export default EmNav