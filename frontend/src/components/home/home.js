import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Banner from './Banner/Banner'
import Categories from './Categories/Categories'

const Home = (props) => {
  const user = useSelector(state => state.auth)

  useEffect(() => {
    user.isAuthenticated && props.history.goBack()
  }, [user, props])

  return (
    <div>
      <Banner />
      <Categories />
    </div>
  )
}

export default Home