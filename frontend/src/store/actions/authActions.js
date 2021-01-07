import axios from 'axios'
import jwt from 'jsonwebtoken'
import { 
  SIGNIN_SUCCESS, 
  SIGNIN_FAIL, 
  SIGNUP_SUCCESS, 
  SIGNUP_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  SIGN_OUT 
} from '../types'
import { returnErrors } from './errorActions'

const config = {headers: {'Content-Type': 'application/json'}}

export const loadUser = (token) => (dispatch) => {
  if(token){
    dispatch({type: USER_LOADED})   
    jwt.verify(token, 'itssecretso', function(err, decoded) {
      if(err) return dispatch({ type: AUTH_ERROR })
      const { userId, email, type } = decoded
      dispatch({
        type: USER_LOADED,
        payload: {userId, email, type} 
      })   
    })
  } else {
    dispatch({ type: AUTH_ERROR })
  }
}

export const signIn = ({ email, password }) => (dispatch) => { 
  axios.post('http://localhost:3001/user/sign-in', {email, password}, config)
  .then(res => {
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: res.data
    })
    dispatch(loadUser(res.data.token))
  })
  .catch(err => {
    const { data, status } = err.response
    dispatch(returnErrors(data, status, 'SIGNIN_FAIL'))
    dispatch({ type: SIGNIN_FAIL })
  })
}

export const signUp = (body) => (dispatch) => {
  axios.post('http://localhost:3001/user/sign-up', body, config)
  .then(res => 
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    })    
  )
  .catch(err => {
    const { data, status } = err.response
    dispatch(returnErrors(data, status, 'SIGNUP_FAIL'))
    dispatch({ type: SIGNUP_FAIL })
  })
}

export const signOut = () =>{
  return {
    type: SIGN_OUT
  }
}