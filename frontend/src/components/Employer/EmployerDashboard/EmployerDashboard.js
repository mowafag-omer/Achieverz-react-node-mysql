import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Search } from 'react-bootstrap-icons'
import ProjectPreview from '../ProjectPreview/ProjectPreview'
import ProfileWidget from '../EmProfileWidget/EmProfileWidget'

export const EmployerDashboard = (props) => {
  const employer = useSelector(state => state.employer)
  const projects = useSelector(state => state.projects)
  const categories = useSelector(state => state.projects.categories)
  const applications = (id) => projects.applications ? projects.applications.filter(a => a.project_id === id).length : []
      
  const recentPro = projects.projects.sort((a, b) => {
    const dateA = new Date(a.posting_date), dateB = new Date(b.posting_date)
    return dateA - dateB
  }).filter(p => p.project_status === 'open').pop() 

  const Info = {
    name: `${employer.employer.first_name} ${employer.employer.last_name}`,
    allproject: projects.projects.length,
    pendding: projects.projects.filter(p => p.project_status !== 'confirmed').length,
    confirmed: projects.projects.filter(p => p.project_status === 'confirmed').length 
  }
  
  useEffect(() => {
    employer.hasNoProfile && props.history.push("/emCreateProfile")
  })

  return (
    <div className="em-projects p-2 d-flex justify-content-between" style={{minHeight: '76vh'}}>
      <div className="overflow-auto shadow-sm p-4 mr-4 w-100">
        <h4 className="mb-4">Projets récents</h4>
        {!!recentPro ?
          <Link to={{ pathname: 'project',
              state: {project: recentPro.project_status, id: recentPro.id}
            }}>
              <ProjectPreview project={recentPro} categories={categories} applications={applications(recentPro.id)}/>
            </Link> :

          <div className="mx-auto mt-5 d-flex flex-column align-items-center alerty py-2 w-75">
          <Search size={50} className="mb-4" />
          <p className="text-center">Vous avez aucun projet ouvert pour l'instant !</p> 
          <button className='btn'>Postez un Project</button>
          </div>
        }
        
      </div>
      <div className='col-3 mt-3 d-none d-lg-block'>
        <ProfileWidget widgetInfo={Info} />
      </div>
    </div>
  )
}

export default EmployerDashboard