import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Loading from '../components/Loading/Loading'
import Signin from '../components/Signin/Signin'
import Signup from '../components/Signup/Signup'
import EmCreateProfile from '../components/Employer/EmCreateProfile/EmCreateProfile'
import EmployerDashboard from '../components/Employer/EmployerDashboard/EmployerDashboard'
import EmProjects from '../components/Employer/EmProjects/EmProjects'
import Projects from '../components/Employer/Project/Project'
import FrCreateProfile from '../components/Freelancer/FrCreateProfile/FrCreateProfile'
import FreelancerDashboard from '../components/Freelancer/FreelancerDashboard/FreelancerDashboard'

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Signin} />
        <Route path="/Signup" component={Signup} />
        <PrivateRoute path="/loading" component={Loading} user="employer" />
        <PrivateRoute path="/emCreateProfile" component={EmCreateProfile} user="employer" />
        <PrivateRoute path="/EmployerDashboard" component={EmployerDashboard} user="employer" />
        <PrivateRoute path="/EmProjects" component={EmProjects} user="employer" />
        <PrivateRoute path="/project" component={Projects} user="employer" />
        <Route path="/frCreateProfile" component={FrCreateProfile} />
        <PrivateRoute path="/freelancerDashboard" component={FreelancerDashboard} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routes