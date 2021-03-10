import axios from 'axios'
import { PROJECTS_LOADED, APPLICATIONS_LOADED, NO_APPLINTIONS, CATEGORIES_LOADED, SKILLS_LOADED } from '../types'


export const loadProjects = (id) => dispatch => {
  axios.get(`http://localhost:3001/project/projects/${id}`, { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
  .then((res) => dispatch({ 
    type: PROJECTS_LOADED,
    payload: res.data || []
  }))
}

export const loadAllProjects = () => dispatch => {
  axios.get(`http://localhost:3001/project/projects`, { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
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
    status: 'open',
    userId: userId
  }, { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
  .then((res) => {
    dispatch(loadProjects(userId))
    dispatch(loadEmApplication(userId))
  })
} 

export const updateProjectStatus = (projectId, userId, status, refused) => dispatch => {
  axios.put(`http://localhost:3001/project/update-project/${projectId}`, {status}, { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
  .then((res) => {
    dispatch(loadProjects(userId))
    refused.forEach(a => dispatch(updateApplicationStatus(a.id, userId, 'refused')))
  })
}

export const updateApplicationStatus = (applicationId, userId, status) => dispatch => {
  axios.put(`http://localhost:3001/project/update-application/${applicationId}`, {status}, { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
  .then((res) => dispatch(loadEmApplication(userId)))
}

export const loadEmApplication = (id) => dispatch => {
  axios.get(`http://localhost:3001/project/em-applications/${id}`, { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
  .then((res) => {
    res.status === 204 && dispatch({ type: NO_APPLINTIONS })
    res.status === 200 && 
      dispatch({ 
        type: APPLICATIONS_LOADED,
        payload: res.data
      })
  })
}

export const deleteProject = (projectId, userId) => dispatch => {
  axios.delete(`http://localhost:3001/project/delete-project/${projectId}`, { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
  .then((res) => {
    res.status === 200 && 
      dispatch(loadProjects(userId))
  })
}

export const loadFrApplication = (id) => dispatch => {
  axios.get(`http://localhost:3001/project/fr-applications/${id}`, { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
  .then((res) => {
    res.status === 204 && dispatch({ type: NO_APPLINTIONS })
    res.status === 200 && 
      dispatch({ 
        type: APPLICATIONS_LOADED,
        payload: res.data
      })
  })
}

export const AddApplication = (body) => dispatch => {
  console.log(body);
  axios.post('http://localhost:3001/project/add-application', body, { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
  .then(() => dispatch(loadFrApplication(body.freelancerId)))
}


export const loadCategories = () => dispatch => {
  axios.get('http://localhost:3001/project/categories', { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
  .then((res) => dispatch({ 
    type: CATEGORIES_LOADED,
    payload: res.data
  }))
}

export const loadskills = () => dispatch => {
  axios.get('http://localhost:3001/project/skills', { 
    headers: {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }
  })
  .then((res) => dispatch({ 
    type: SKILLS_LOADED,
    payload: res.data
  }))
}



// const config = { 
//   headers: {
//     'Content-Type': 'application/json',
//     'auth' : localStorage.getItem('token')
//   }
// }