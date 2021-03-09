import { EM_CREATE_SUCCESS, EMPLOYER_LOADED, EM_NOT_FOUNDED, CLEAR_EMPLOYER } from '../types'

const initialState = {
  hasNoProfile: false,
  isLoading: false,
  employer: null,
  loaded: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case EMPLOYER_LOADED:
      return {
        ...state,
        hasNoProfile: false,
        employer: action.payload,
        loaded: true
      }  
    case EM_CREATE_SUCCESS:
      return {
        ...state,
        hasNoProfil: false
      }
    case EM_NOT_FOUNDED:
      return {
        ...state,
        hasNoProfile: true
      }
    case CLEAR_EMPLOYER:
      return {
        hasNoProfile: false,
        isLoading: false,
        employer: null,
        loaded: false
      }
    default:
      return state;
  }
}