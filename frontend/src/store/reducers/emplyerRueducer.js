import { EM_CREATE_SUCCESS  } from '../types'

const initialState = {
  hasProfile: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case EM_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state;
  }
}