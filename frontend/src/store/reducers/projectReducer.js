import { PROJECTS_LOADED, CATEGORIES_LOADED } from '../types'

const initialState = {
  projects: [],
  categories: []
}

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case PROJECTS_LOADED:
      return {
        ...state,
        projects: action.payload
      }  
    case CATEGORIES_LOADED:
      return {
        ...state,
        categories: action.payload
      }  
    default:
      return state;
  }
}