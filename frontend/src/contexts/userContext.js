import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'
export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    token: null,
    user: null,
    isLoading: false,
    Signup_success: null,
    signin_error: null,
    signup_error: null
  })

  useEffect(() => {
    // const token = localStorage.getItem('token')
    // token && setUser({...user, signin_error: null, isAuthenticated: true, token})
  })

  const signUp = async (data) => {
    try {
      const apiReq = await axios.post('http://localhost:3001/user/sign-up', data)
      console.log(apiReq)
      setUser({...user, Signup_success: true})
    } catch (err) {
      setUser({...user, signup_error: err.response.data})
      return false
    }
  }

  const signIn = async (data) => {
    try {
      const apiReq = await axios.post('http://localhost:3001/user/sign-in', data)
      localStorage.setItem('token', apiReq.data)
      setUser({...user, signin_error: null, isAuthenticated: true, token: apiReq.data})
    } catch (err) {
      localStorage.removeItem('token')
      setUser({...user, signin_error: err.response.data})
    }
  }


  return (
    <UserContext.Provider value={{ user, signUp, signIn }}>
      {props.children}
    </UserContext.Provider>
  )
}
 
export default UserContextProvider