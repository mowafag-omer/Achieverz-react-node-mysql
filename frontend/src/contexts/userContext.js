import React, { createContext, useState } from 'react';
import axios from 'axios'
export const UserContext = createContext();

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

  const signUp = async (data) => {
    try {
      const apiReq = await axios.post('http://localhost:3001/user/sign-up', data)
      const res = await apiReq
      console.log(res)
      setUser({...user,Signup_success: true})
      console.log(user)
    } catch (err) {
      setUser({...user, signup_error: err.response.data})
      console.log(user)
    }
  }


  return (
    <UserContext.Provider value={{ user, signUp }}>
      {props.children}
    </UserContext.Provider>
  )
}
 
export default UserContextProvider;