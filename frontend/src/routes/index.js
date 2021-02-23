import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Signin from '../components/Signin/Signin'
import Signup from '../components/Signup/Signup'
import EmCreateProfile from '../components/Employer/EmCreateProfile/EmCreateProfile'
import EmployerDashboard from '../components/Employer/EmployerDashboard/EmployerDashboard'
import EmProjects from '../components/Employer/EmProjects/EmProjects'

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Signin} />
        <Route path="/Signup" component={Signup} />
        <PrivateRoute path="/emCreateProfile" component={EmCreateProfile} />
        <PrivateRoute path="/EmployerDashboard" component={EmployerDashboard} />
        <PrivateRoute path="/EmProjects" component={EmProjects} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routes