import axios from 'axios'
import {
  FR_CREATE_SUCCESS,
  AUTH_ERROR,
  PROFILE_LOADED,
  EXPERIENCES_LOADED,
  FR_NOT_FOUNDED,
  EX_NOT_FOUNDED,
  EX_ADDED_SUCCESS
} from "../types"


export const loadFreelancer = (id) => dispatch => {
  axios.get(`http://localhost:3001/fr/profile/${id}`, { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
  .then((res) => {
    res.status === 204 && dispatch({ type: FR_NOT_FOUNDED })
    res.status === 200 && 
      dispatch({ 
        type: PROFILE_LOADED,
        payload: res.data[0]
      })
  })
  .catch(() => dispatch({ type: AUTH_ERROR }))
} 

export const loadExperiences = (id) => dispatch => {
  axios.get(`http://localhost:3001/fr/experiences/${id}`, { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
  .then((res) => {
    res.status === 204 && dispatch({ type: EX_NOT_FOUNDED })
    res.status === 200 && 
      dispatch({ 
        type: EXPERIENCES_LOADED,
        payload: res.data[0]
      })
  })
  .catch(() => dispatch({ type: AUTH_ERROR }))
}

export const frCreateProfile = (body) => dispatch => {
  axios.post('http://localhost:3001/fr/create-profile', body)
  .then((res) => { 
    console.log(res.data)
    dispatch({ type: FR_CREATE_SUCCESS })
  })
  .catch(() => dispatch({ type: AUTH_ERROR }))
}

export const AddExperiences = (body) => dispatch => {
  axios.post('http://localhost:3001/fr/add-experiences', body)
  .then((res) => { 
    dispatch({ type: EX_ADDED_SUCCESS })
  })
  .catch((err) => dispatch({ type: AUTH_ERROR }))
}

