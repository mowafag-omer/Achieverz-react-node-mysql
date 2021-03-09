import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { BoxArrowLeft } from 'react-bootstrap-icons' 
import { Link } from 'react-router-dom'
import { signOut } from '../../../store/actions/authActions'

const AdminNav = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Navbar className="main-nav d-flex justify-content-between" variant="dark">
        <Link to='/adminDashboard'><Navbar.Brand><b>ACHIEVERZ</b></Navbar.Brand></Link>
        <Nav>
            <div className="nav-link pointer" onClick={() => dispatch(signOut())} >
              <BoxArrowLeft size={21} className="mr-2 icon" /> 
              <span>Se déconnecter</span>
            </div>
          </Nav>
        
      </Navbar>
    </>
  )
}

export default AdminNav
