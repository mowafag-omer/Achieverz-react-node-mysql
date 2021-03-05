import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams, useLocation, useHistory } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons'
import './Project.css'

const Project = () => {
  const projects = useSelector(state => state.projects.projects)
  const categories = useSelector(state => state.projects.categories)
  const location = useLocation()
  // const params = useParams()
  const history = useHistory()
  const pro = projects.filter(p => p.id === parseInt(location.state.id))[0]
  const cateName = categories.filter(c => c.id === parseInt(pro.required_category))[0].category_name 

  console.log(pro)

  return (
    <div className="project flex-fill col-12 col-md-9 my-3 px-4 mx-auto shadow-sm">
      <ArrowLeft size={30} className="mb-3" role="button" onClick={history.goBack} />
      <div class="card w-100 mb-3 shadow-sm">
        <div class="card-body">
          <h5 class="card-title pb-1 border-bottom">{pro.project_title}</h5>
          <h6>description</h6>
          <p class="card-text">{pro.project_description}</p>
          <h6>Domaine</h6>
          <p class="card-text">{cateName}</p>
          <h6>Compétences requises</h6>
          <ul className="skills d-flex">
            {JSON.parse(pro.required_skills)[0] && 
              JSON.parse(pro.required_skills).map((skill, index) => skill && 
                <li className='my-1' key={index}> {skill}</li>
            )}
          </ul> 
          <h6>Budget</h6>
          <p class="card-text">
            {pro.min_budget}$ - {pro.min_budget}$
            {pro.budget === 'fixed' ? ' (fixe)' : ' (par heure)' }  
          </p>
          <button class="btn btn-primary" >Go back</button>
        </div>
      </div>
    </div>
  )
}

export default Project
