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
import EmProfile from '../components/Employer/EmProfile/EmProfile'
import FrCreateProfile from '../components/Freelancer/FrCreateProfile/FrCreateProfile'
import FreelancerDashboard from '../components/Freelancer/FreelancerDashboard/FreelancerDashboard'
import FrOpenProject from '../components/Freelancer/FrOpenProject/FrOpenProject'
import OpenProjects from '../components/OpenProjects/OpenProjects'

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Signin} />
        <Route path="/Signup" component={Signup} />
        <Route path="/loading" component={Loading} />
        <PrivateRoute path="/emCreateProfile" component={EmCreateProfile} user="employer" />
        <PrivateRoute path="/EmployerDashboard" component={EmployerDashboard} user="employer" />
        <PrivateRoute path="/EmProjects" component={EmProjects} user="employer" />
        <PrivateRoute path="/project" component={Projects} user="employer" />
        <PrivateRoute path="/emProfile" component={EmProfile} user="employer" />
        <PrivateRoute path="/frCreateProfile" component={FrCreateProfile} user="freelancer" />
        <PrivateRoute path="/freelancerDashboard" component={FreelancerDashboard} user="freelancer" />
        <Route path="/OpenProjects" component={OpenProjects} />
        <PrivateRoute path="/FrOpenProject" component={FrOpenProject} user="freelancer" />
        <Route path="/admin" component={Signin} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routes