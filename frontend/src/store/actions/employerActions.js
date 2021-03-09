import axios from 'axios'
import {
  EM_CREATE_SUCCESS,
  AUTH_ERROR,
  EMPLOYER_LOADED,
  EM_NOT_FOUNDED
} from "../types"
import { loadUser } from '../../store/actions/authActions'
// import { returnErrors } from './errorActions'

export const emCreateProfile = (body, token, userId) => dispatch => {
  axios.post('http://localhost:3001/em/create-profile', {...body, userId})
  .then(() =>{
    dispatch({ type: EM_CREATE_SUCCESS })
    dispatch(loadUser(token))
  })
  .catch(() => dispatch({ type: AUTH_ERROR }))
}

export const loadEmployer = (id) => dispatch => {
  axios.get(`http://localhost:3001/em/employer/${id}`, { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
  .then((res) => {
    res.status === 204 && dispatch({ type: EM_NOT_FOUNDED })
    res.status === 200 && 
      dispatch({ 
        type: EMPLOYER_LOADED,
        payload: res.data[0]
      })
  })
  .catch(() => dispatch({ type: AUTH_ERROR }))
}

// const config = { 
//   headers: {
//     'Content-Type': 'application/json',
//     'auth' : localStorage.getItem('token')
//   }
// }