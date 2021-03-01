import {
  USER_LOADED,
  USER_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  AUTH_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGN_OUT
} from '../types'

const initialState = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: null,
  isLoading: false,
  loaded: false,
  userId: null,
  email: null,
  type: null
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        ...action.payload,
        loaded: true
      }
    case SIGNIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case AUTH_ERROR:
    case SIGNIN_FAIL:
    case SIGNUP_FAIL: 
    case SIGN_OUT:  
      localStorage.removeItem('token');
      return {
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        loaded: false
      };
    default:
      return state;
  }
}