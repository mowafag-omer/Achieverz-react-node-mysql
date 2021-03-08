import React from 'react'
import { useSelector }from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import './OpenProjects.css'

const OpenProjects = () => {
  const projects = useSelector(state => state.projects)
  const freelancer = useSelector(state => state.freelancer.profile)
  const frOpenProjects = projects.projects.filter(p => p.project_status === 'open')
  
  const getSkills = (inputs) => {
    if(JSON.parse(inputs)[0]){
      const skills = JSON.parse(inputs)
      if(skills.length < 3){
        return skills
      } else if(skills.length > 2){
        return skills.slice(0, 2)
      }
    } else {
      return false
    }
  }

  return (
    <div className='open-projects flex-fill m-3'>
      <h3 className="page-title py-0 pl-1 mb-4 ml-1">Trouver un Projet</h3>
      <div className="row justify-content-center shadow-sm m-3 p-3 rounded">

        {frOpenProjects.map(pro => 
          <Link key={pro.id} className="link" to={{ pathname: 'FrOpenProject', project: pro}}>
            <div className="card d-flex flex-column justify-content-between mb-3 mx-3 align-items-center p-3 shadow-sm hover-shadow">
              <h6 className="text-center">{pro.project_title}</h6>
              <p>{pro.city}, {pro.country}</p>
              <div style={{height:'100px'}}>
                {getSkills(pro.required_skills) !== false && getSkills(pro.required_skills).map((skill, index) => skill && 
                    <p key={index} className="text-center py-1 px-2 bg-light border border-2 rounded"> {skill}</p>
                )}
                {getSkills(pro.required_skills) === false &&
                  <p className="text-center">Aucune compétence requise</p>
                }
              </div>
              <p>
                {pro.min_budget}$ - {pro.max_budget}$
                {pro.budget === 'fixed' ? ' (fixe)' : ' (par heure)'} 
              </p>
              <hr className="w-50 my-1" style={{fontWeight:'200'}}/>
              <p className="ml-1 mr-2">il y a 2 jours</p>
            </div>
          </Link>
        )}
        
      </div>
    </div>
  )
}

export default OpenProjects
