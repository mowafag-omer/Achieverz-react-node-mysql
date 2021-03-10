import { 
  FR_CREATE_SUCCESS, 
  EX_ADDED_SUCCESS, 
  PROFILE_LOADED, 
  EXPERIENCES_LOADED, 
  FR_NOT_FOUNDED, 
  EX_NOT_FOUNDED,
  CLEAR_FREELANCER,
  PROFILES_NOT_FOUNDED,
  ALL_PROFILES_LOADED 
} from "../types"

const initialState = {
  hasNoProfile: false,
  profile: null,
  experiences: [],
  allprofiles: [],
  allprofilesLoaded: false,
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
    case ALL_PROFILES_LOADED:
      return {
        ...state,
        allprofiles: action.payload,
        allprofilesLoaded: true
      }  
    case PROFILES_NOT_FOUNDED:
      return {
        ...state,
        allprofiles: [],
        allprofilesLoaded: false
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
        hasNoProfile: false,
        profile: null,
        experiences: null,
        allprofiles: [],
        allprofilesLoaded: false,
        profileLoaded: false,
        expLoaded: false,
        hasEx: false
      }
    default:
      return state;
  }
}