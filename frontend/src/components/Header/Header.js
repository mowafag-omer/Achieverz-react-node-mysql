import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadUser } from '../../store/actions/authActions'
import Nav from './Nav/Nav'
import EmNav from '../Employer/EmNav/EmNav'
import FrNav from '../Freelancer/FrNav/FrNav'
import AdminNav from '../Admin/AdminNav/AdminNav'

export const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)
  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(loadUser(token))
  }, [token, dispatch])

  
  return (
    <>
      { !user.isAuthenticated && <Nav />}
      { user.isAuthenticated && user.type === 'employer' && <EmNav /> }
      { user.isAuthenticated && user.type === 'freelancer' && <FrNav /> }
      { user.isAuthenticated && user.type === 'admin' && <AdminNav /> }
    </>
  )
}

export default Header