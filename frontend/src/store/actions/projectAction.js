import axios from 'axios'
import { PROJECTS_LOADED, CATEGORIES_LOADED } from '../types'

export const loadProjects = (id) => dispatch => {
  axios.get(`http://localhost:3001/project/projects/${id}`, config)
  .then((res) => dispatch({ 
    type: PROJECTS_LOADED,
    payload: res.data || null
  }))
}

export const loadCategories = () => dispatch => {
  axios.get('http://localhost:3001/project/categories', config)
  .then((res) => dispatch({ 
    type: CATEGORIES_LOADED,
    payload: res.data
  }))
}

const config = { 
  headers: {
    'Content-Type': 'application/json',
    'auth' : localStorage.getItem('token')
  }
}