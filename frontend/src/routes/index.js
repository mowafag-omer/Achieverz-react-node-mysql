import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from '../components/Home/Home'
import Signin from '../components/Signin/Signin'
import Signup from '../components/Signup/Signup'
import CreateEmployerProfile from '../components/CreateEmployerProfile/CreateEmployerProfile'
import EmployerDashboard from '../components/Employer/EmployerDashboard/EmployerDashboard'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Signin} />
        <Route path="/Signup" component={Signup} />
        <PrivateRoute path="/createEmProfile" component={CreateEmployerProfile} />
        <PrivateRoute path="/EmployerDashboard" component={EmployerDashboard} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routes