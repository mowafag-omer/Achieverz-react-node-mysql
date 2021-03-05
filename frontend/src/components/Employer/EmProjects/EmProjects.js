import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import ProjectPreview from '../ProjectPreview/ProjectPreview'
import ProfileWidget from '../EmProfileWidget/EmProfileWidget'

import './EmProjects.css'

const EmProjects = () => {
  const projects = useSelector(state => state.projects.projects)
  const categories = useSelector(state => state.projects.categories)
  const employer = useSelector(state => state.employer)
  const location = useLocation()
  const protState = location.state
  const openProjects = projects.filter(p => p.project_status === protState.project)
  console.log(location.history)

  const Info = {
    name: `${employer.employer.first_name} ${employer.employer.last_name}`,
    allproject: projects.length,
    pendding: projects.filter(p => p.project_status !== 'confirmed').length,
    confirmed: projects.filter(p => p.project_status === 'confirmed').length 
  }


  return (
    <div className="em-projects p-2 d-flex justify-content-between" style={{minHeight: '76vh'}}>
      <div className="overflow-auto shadow-sm p-4 mr-4 w-100">
      <h3 className="emp-title py-0 pl-1 mb-5 ml-1">{protState.title}</h3>
        {openProjects.map(project => 
          <Link to={{ pathname: 'project',
            state: {project: project.project_status, id: project.id}
          }}>
            <ProjectPreview key={project.id} project={project} categories={categories} />
          </Link>
        )} 
      </div>
      <div className='col-3 mt-3 d-none d-lg-block'>
        <ProfileWidget widgetInfo={Info} />
      </div>
    </div>
  )
}

export default EmProjects