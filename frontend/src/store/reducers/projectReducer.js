import { PROJECTS_LOADED, APPLICATIONS_LOADED, NO_APPLINTIONS, CATEGORIES_LOADED, SKILLS_LOADED, CLEAR_PROJECTS } from '../types'

const initialState = {
  projects: [],
  hasApplic: false,
  applications: [],
  categories: [],
  skills: [],
  loaded: false
}

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case PROJECTS_LOADED:
      return {
        ...state,
        projects: action.payload,
        loaded: true
      }  
    case APPLICATIONS_LOADED:
      return {
        ...state,
        applications: action.payload,
        hasApplic: true
      }  
    case NO_APPLINTIONS:
      return {
        ...state,
        hasApplic: false
      }  
    case CATEGORIES_LOADED:
      return {
        ...state,
        categories: action.payload
      }
    case SKILLS_LOADED:
      return {
        ...state,
        skills: action.payload
      }
    case CLEAR_PROJECTS:
      return {
        projects: [],
        hasApplic: false,
        applications: [],
        categories: [],
        loaded: false
      } 
    default:
      return state;
  }
}