import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import PostProject from '../PostProject/PostProject'
import { signOut } from '../../../store/actions/authActions'

const EmNav = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Achivierz</Navbar.Brand>
        <Nav>
          <PostProject />
        </Nav>
      </Navbar>
      <Navbar bg="light" variant="light">
      <Nav>
        <Link className="nav-link" to="/EmployerDashboard">Dashboard</Link> 
        <Link className="nav-link" to="/EmployerDashboard">Mes projects</Link> 
        <Nav.Link onClick={() => dispatch(signOut())}>Déconnecter</Nav.Link>
      </Nav>
      </Navbar>
    </>
  )
}

export default EmNav