import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Search } from 'react-bootstrap-icons'
import FrProjectPrev from '../FrProjectPrev/FrProjectPrev'

const FrApplications = () => {
  const projects = useSelector(state => state.projects)
  const applications = projects.applications ? projects.applications.filter(a => a.status !== 'hired') : []
  const getProjects = (projectId) => projects.projects.filter(p => p.id === projectId)

  return (
    <div className="flex-fill p-3" style={{minHeight: '76vh'}}>
      <h3 className="page-title pl-2 mt-2">Projets confirmés</h3>
      <div className="shadow-sm p-2 m-4 col-11 col-md-8">
        {applications.length > 0 ? 
          applications.map(application => getProjects(application.project_id).length > 0 && 
            <Link key={application.id} className="link" to={{ pathname: 'FrOpenProject', status: application.status, project: getProjects(application.project_id)[0]}}>
              <FrProjectPrev status={application.status} project={getProjects(application.project_id)[0]} />
            </Link>
          ):
          <div className="mx-auto mt-5 d-flex flex-column align-items-center alerty py-2 w-75">
            <Search size={50} className="mb-4" />
            <p className="text-center">Vous n'avez pas de candidatures !</p> 
            <button className="btn d-none d-sm-block"><Link  className="link text-light" to='/OpenProjects'>Trouver un Projet</Link></button>
          </div>
        }
      </div>
    </div>
  )
}

export default FrApplications
