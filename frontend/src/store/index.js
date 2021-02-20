import { combineReducers } from 'redux'
import authReducer  from './reducers/authReducer'
import errorReducer from './reducers/errorReducer'
import employerRueducer from './reducers/emplyerRueducer'
import projectReducer from './reducers/projectReducer'
                
const rootReducer = combineReducers({
  auth: authReducer,
  employer: employerRueducer,
  projects: projectReducer,
  error: errorReducer,
})

export default rootReducer