import React from 'react'
import { Link } from 'react-router-dom'

import './adminDashboard.css'
import fr from '../../../assets/icons/fr.png'
import em from '../../../assets/icons/em.png'
import pr from '../../../assets/icons/project.png'

const AdminDashboard = () => {
  return (
    <div className="admindash p-4 flex-fill">
      <h3 className="page-title pl-2">Dashboard</h3>
      <div className="d-flex flex-wrap p-5 mx-auto">

        <Link to="/AEmprofile" className="card link shadow-sm hover-shadow mx-auto">
            <img className="mt-1"src={em} alt=""/>
            <h5>Employeurs</h5>
        </Link>

        <Link to="/freelancers" className="card link shadow-sm hover-shadow mx-auto">
          <img className="mt-1"src={fr} alt=""/>
          <h5>Freelances</h5> 
        </Link>
      
        <Link className="card link shadow-sm hover-shadow mx-auto">        
          <img className="mt-1"src={pr} alt=""/>
          <h5>Projest</h5> 
        </Link>

      </div>
    </div>
  )
}

export default AdminDashboard
