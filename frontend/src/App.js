import React, {usesle, useSelector} from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './store'
import Routes from './routes'

const middleware = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

function App() {
  return (
    <div className="d-flex flex-column justify-content-between" style={{minHeight:'100vh'}}>
      <Provider store={store}>
        <Routes />
      </Provider>  
    </div>
  )
}

export default App;
