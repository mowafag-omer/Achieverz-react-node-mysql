import React from 'react'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Signin from '../components/Signin/Signin'
import Signup from '../components/Signup/Signup'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Signin} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </Router>
  )
}

export default Routes;
