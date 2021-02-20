import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProjectPreview from '../ProjectPreview/ProjectPreview'
import ProfileWidget from '../EmProfileWidget/EmProfileWidget'

export const EmployerDashboard = (props) => {
  const employer = useSelector(state => state.employer)
  const projects = useSelector(state => state.projects.projects)
  
  const recentPro = projects.sort((a, b) => {
    const dateA = new Date(a.posting_date), dateB = new Date(b.posting_date)
    return dateB - dateA
  }).filter(p => p.project_status === 'bidding').pop() 

  const widgetInfo = {
    name: `${employer.employer.first_name} ${employer.employer.last_name}`,
    allproject: projects.length,
    pendding: projects.filter(p => p.project_status !== 'confirmed').length,
    confirmed: projects.filter(p => p.project_status === 'confirmed').length 
  }
  
  useEffect(() => {
    employer.hasNoProfile && props.history.push("/createEmProfile")
  })

  return (
    <div className="p-3 d-flex justify-content-between" style={{minHeight: '71.5vh'}}>
      <div className="shadow-sm p-4 mr-4" style={{width: '67%'}}>
        <h4 className="mb-4">Projets récents</h4>
        <ProjectPreview project={recentPro} />
      </div>
      <ProfileWidget widgetInfo={widgetInfo} />
    </div>
  )
}

export default EmployerDashboard