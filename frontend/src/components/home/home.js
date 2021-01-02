import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import MainNav from '../nav/nav'
import Header from './header/header'
import Categories from './categories/categories'
import Footer from '../footer/footer';

const Home = () => {
  return (
    <div>
      <MainNav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Button variant="secondary" className="m-1">Poster un job</Button>
            <Button variant="secondary" className="m-1">Trouver un job</Button>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Se conecter</Nav.Link> 
            <Nav.Link eventKey={2} href="/Signup">S'inscrire</Nav.Link>
            {/* <Link className="nav-link" to="/login">Se conecter</Link>
            <Link className="nav-link" to="/Signup">S'inscrire</Link> */}
          </Nav>
        </Navbar.Collapse>
      </MainNav>
      <Header />
      <h4 className="text-center p-3">Catégories</h4>
      <Categories />
      <Footer />
    </div>
  )
}

export default Home