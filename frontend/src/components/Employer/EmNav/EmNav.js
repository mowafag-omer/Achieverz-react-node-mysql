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
        <Navbar.Brand><Link to="/">ACHIEVERZ</Link></Navbar.Brand>
        <Nav>
          <div className="d-none d-sm-block" >
            {projectsLoaded && <PostProject />}
          </div>
        </Nav>
        <Nav>
          <NavDropdown title={
            <div>
              <img className="mr-1 avatar" src={avatar} alt="Img de profile"/>
            </div>
          } id="collasible-nav-dropdown">
            <Link to="/emProfile" className="dropdown-item">Profil</Link>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => dispatch(signOut())}>Déconnecter</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      
      <Navbar collapseOnSelect className='s-nav py-0' expand="md" bg="light" variant="light">
        <Navbar.Toggle className="ml-auto m-2 border border-dark" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='flex-shrink-lg-0 py-0'>
            <Link
              to="/EmployerDashboard" 
              className={`nav-link mx-auto ${location.pathname === '/EmployerDashboard' && 'nav-active'}`} 
            >
              Dashboard
            </Link> 
            {[
              {project: 'open', title: 'Projets Ouverts'},
              {project: 'inprogress', title: 'Projets Confirmés'}
              ].map(p => 
                <Link 
                  to={{
                    pathname: "/EmProjects",
                    state: {project: p.project, title: p.title}
                  }} 
                  className={`nav-link mx-auto ${(location.pathname === '/EmProjects' || location.pathname === '/project') &&
                    location.state.project === p.project && 'nav-active'}`
                  }
                >
                  {p.title}
                </Link>
              )}
              <div className="d-sm-none my-3 mx-auto" style={{width:'fit content'}}>
                {projectsLoaded && <PostProject className="" />}
              </div>
          </Nav>
        </Navbar.Collapse>          
      </Navbar>
    </div>
  )
}

export default EmNav