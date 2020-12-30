import React from 'react'
import Nav from './nav/nav'
import Header from './header/header'
import Categories from './categories/categories'
import Footer from '../footer/footer';

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <h4 className="text-center p-3">Catégories</h4>
      <Categories />
      <Footer />
    </div>
  )
}

export default Home