import React from 'react'
import Banner from './Banner/Banner'
import Categories from './Categories/Categories'

const Home = () => {
  return (
    <div>
      <Banner />
      <h4 className="text-center p-3">Catégories</h4>
      <Categories />
    </div>
  )
}

export default Home