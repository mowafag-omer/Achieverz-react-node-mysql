import { PROJECTS_LOADED, CATEGORIES_LOADED, SKILLS_LOADED, CLEAR_PROJECTS } from '../types'

const initialState = {
  projects: [],
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
    case CATEGORIES_LOADED:
      return {
        ...state,
        categories: action.payload
      }
    case SKILLS_LOADED:
      console.log(action.payload);
      return {
        ...state,
        skills: action.payload
      }
    case CLEAR_PROJECTS:
      return {
        projects: [],
        categories: [],
        loaded: false
      } 
    default:
      return state;
  }
}