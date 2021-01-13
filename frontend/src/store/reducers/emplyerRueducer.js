import { EM_CREATE_SUCCESS, EMPLOYER_LOADED, EM_NOT_FOUNDED } from '../types'

const initialState = {
  hasNoProfile: false,
  isLoading: false,
  employer: null
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case EMPLOYER_LOADED:
      return {
        ...state,
        hasNoProfile: false,
        employer: action.payload
      }  
    case EM_CREATE_SUCCESS:
      return {
        ...state,
      }
    case EM_NOT_FOUNDED:
      return {
        ...state,
        hasNoProfile: true
      }
    default:
      return state;
  }
}