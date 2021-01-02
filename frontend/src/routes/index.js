import React from 'react'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/home/home'
import Signin from '../components/signin/signin'
import Signup from '../components/signup/signup'

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
