import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadUser } from '../../store/actions/authActions'
import Nav from './Nav/Nav'
import EmNav from '../Employer/EmNav/EmNav'

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
    </>
  )
}

export default Header