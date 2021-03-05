import axios from 'axios'
import jwt from 'jsonwebtoken'
import { 
  SIGNIN_SUCCESS, 
  SIGNIN_FAIL, 
  SIGNUP_SUCCESS, 
  SIGNUP_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  SIGN_OUT,
  CLEAR_PROJECTS,
  CLEAR_EMPLOYER,
  CLEAR_FREELANCER 
} from '../types'
import { loadEmployer } from './employerActions'
import { loadFreelancer, loadExperiences } from './freelancerActions'
import { loadProjects, loadCategories, loadskills } from '../../store/actions/projectAction'
import { returnErrors } from './errorActions'

const config = {headers: {'Content-Type': 'application/json'}}

export const loadUser = (token) => (dispatch) => {
  if(token){
    jwt.verify(token, 'itssecretso', function(err, decoded) {
      if(err) return dispatch({ type: AUTH_ERROR })
      const { userId, email, type } = decoded
      dispatch({
        type: USER_LOADED,
        payload: {userId, email, type} 
      })
      if(type === 'employer'){
        dispatch(loadEmployer(userId))
        dispatch(loadCategories())
        dispatch(loadskills())
        dispatch(loadProjects(userId))
      } else if(type === 'freelancer'){
        dispatch(loadCategories())
        dispatch(loadskills())
        dispatch(loadExperiences(userId))
        dispatch(loadFreelancer(userId))
      }
    })
  } else {
    dispatch({ type: AUTH_ERROR })
  }
}

export const signIn = ({ email, password, type }) => (dispatch) => { 
  axios.post('http://localhost:3001/user/sign-in', {email, password, type}, config)
  .then(res => {
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: res.data
    })
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

export const signOut = () => (dispatch) =>{
  dispatch({ type: SIGN_OUT })
  dispatch({ type: CLEAR_PROJECTS })
  dispatch({ type: CLEAR_EMPLOYER })
  dispatch({ type: CLEAR_FREELANCER })
}