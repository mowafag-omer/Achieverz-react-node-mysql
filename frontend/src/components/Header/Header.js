import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { loadUser } from '../../store/actions/authActions'
import Nav from './Nav/Nav'
import MainNav from './MainNav/MainNav'
import EmNav from '../Employer/EmNav/EmNav'

export const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)
  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(loadUser(token))
  }, [token, dispatch])

  
  return (
    <>
      { !user.isAuthenticated && 
        (<Nav>{location.pathname === '/' && <MainNav />}</Nav>)
      }
      { user.isAuthenticated && user.type === 'employer' && <EmNav /> }
    </>
  )
}

export default Header