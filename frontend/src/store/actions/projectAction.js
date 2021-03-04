import axios from 'axios'
import { PROJECTS_LOADED, CATEGORIES_LOADED, SKILLS_LOADED } from '../types'

export const loadProjects = (id) => dispatch => {
  axios.get(`http://localhost:3001/project/projects/${id}`, config)
  .then((res) => dispatch({ 
    type: PROJECTS_LOADED,
    payload: res.data || []
  }))
}

export const postProject = (project, userId) => dispatch => {
  axios.post(`http://localhost:3001/project/post-project`,{
    title: project.project,
    description: project.description,
    category: project.sector,
    skills: JSON.stringify(project.skills),
    budget:	project.payBy,
    min: project.min,
    max: project.max,
    status: 'bidding',
    userId: userId
  }, config)
  .then((res) => {
    console.log(res.data)
    dispatch(loadProjects(userId))
  })
}

export const loadCategories = () => dispatch => {
  axios.get('http://localhost:3001/project/categories', config)
  .then((res) => dispatch({ 
    type: CATEGORIES_LOADED,
    payload: res.data
  }))
}

export const loadskills = () => dispatch => {
  console.log('laodskills');
  axios.get('http://localhost:3001/project/skills', config)
  .then((res) => dispatch({ 
    type: SKILLS_LOADED,
    payload: res.data
  }))
}

const config = { 
  headers: {
    'Content-Type': 'application/json',
    'auth' : localStorage.getItem('token')
  }
}