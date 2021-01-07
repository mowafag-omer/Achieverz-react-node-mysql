import { combineReducers } from 'redux'
import authReducer  from './reducers/authReducer'
import errorReducer from './reducers/errorReducer'
import employerRueducer from './reducers/emplyerRueducer'

const rootReducer = combineReducers({
  auth: authReducer,
  employer: employerRueducer,
  error: errorReducer,
})

export default rootReducer