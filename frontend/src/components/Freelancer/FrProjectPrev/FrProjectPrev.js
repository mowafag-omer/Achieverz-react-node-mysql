import React from 'react'
import { GeoAlt, Person, CheckCircle, XCircleFill } from 'react-bootstrap-icons'

const FrProjectPrev = ({ project, status }) => {
  console.log(status)

  const getSkills = (inputs) => {
    if(JSON.parse(inputs)[0]){
      const skills = JSON.parse(inputs)
      return skills
    } else {
      return false
    }
  }

  return (
    <div class="card mb-3">
      <div class="card-header p-1 px-3">
        <h5>{project.project_title}</h5>
        <span className="mr-2"><Person size={20} className="pb-1" />{project.first_name}</span>
        <span className="mr-2"><GeoAlt size={20} className="pb-1" />{project.city}, {project.country}</span>
        {
          status === 'pending' ?         
            <div className="my-2 alert-primary p-1 rounded" style={{width:'fit-content'}}>
              Candidature envoyée
              <CheckCircle className="pb-1 ml-1" /> 
            </div> :
          status === 'refused' && 
          <div className="my-2 alert-danger p-1 rounded" style={{width:'fit-content'}}>
            Candidature non retenue
            <XCircleFill className="pb-1 ml-1" /> 
          </div>
        }
      </div>
      <div class="p-3">
        <h6 className="mb-3">Compétences requises</h6>
        {getSkills(project.required_skills) !== false ?
          getSkills(project.required_skills).map((skill, index) => 
            <span key={index} className="text-center mr-2 py-1 px-2 bg-light border border-2 rounded"> {skill}</span>
          ) : 
          <p>Aucune compétence requise</p>
        }
        <h6 className="mt-3">Budget</h6>
        <span>
          {project.min_budget}$ - {project.max_budget}$
          {project.budget === 'fixed' ? ' (fixe)' : ' (par heure)'} 
        </span>
      </div>
    </div>
  )
}

export default FrProjectPrev
