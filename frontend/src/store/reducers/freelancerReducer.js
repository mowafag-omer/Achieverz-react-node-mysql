import { 
  FR_CREATE_SUCCESS, 
  EX_ADDED_SUCCESS, 
  PROFILE_LOADED, 
  EXPERIENCES_LOADED, 
  FR_NOT_FOUNDED, 
  EX_NOT_FOUNDED,
  CLEAR_FREELANCER 
} from "../types"

const initialState = {
  hasNoProfile: true,
  profile: null,
  experiences: null,
  profileLoaded: false,
  expLoaded: false,
  hasEx: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADED:
      return {
        ...state,
        hasNoProfile: false,
        profile: action.payload,
        profileLoaded: true
      }  
    case EXPERIENCES_LOADED:
      return {
        ...state,
        hasNoProfile: false,
        experiences: action.payload,
        expLoaded: true,
        hasEx: true
      }  
    case FR_CREATE_SUCCESS:
      return {
        ...state,
      }
    case EX_ADDED_SUCCESS:
      return {
        ...state,
      }
    case FR_NOT_FOUNDED:
      return {
        ...state,
        hasNoProfile: true
      }
    case CLEAR_FREELANCER:
      return {
        hasNoProfile: true,
        profile: null,
        experiences: null,
        loaded: false
      }
    default:
      return state;
  }
}