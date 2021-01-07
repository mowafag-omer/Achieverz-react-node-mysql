import axios from 'axios'
import { EM_CREATE_SUCCESS  } from '../types'
// import { returnErrors } from './errorActions'

export const emCreateProfile = (body) => dispatch => {
  axios.post('http://localhost:3001/em/create-profile', body)
  .then(() => dispatch({ type: EM_CREATE_SUCCESS }))
  .catch(() => dispatch({ type: AUTH_ERROR }))
}
