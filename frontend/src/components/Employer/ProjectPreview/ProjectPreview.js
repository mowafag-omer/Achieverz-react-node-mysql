import React from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './ProjectPreview.css'

const ProjectPreview = ({project, categories, applications}) => {
  
  return (
    <Card className='preview w-100 mb-4 shadow-sm'>
      <Card.Header className="d-flex flex-column flex-sm-row justify-content-between">
        <Card.Title>{project.project_title}</Card.Title>
        <span>nombre de candidatures: {applications}</span>
      </Card.Header>
      <Card.Body className="m-0 px-3 py-2">
        <ul className="p-0">
          <li className="border-bottom pt-2"><p className='ellipsis'>{project.project_description}</p></li><br/>

          {categories.map(c => c.id == parseInt(project.required_category) && 
          <li className="border-bottom pb-1"><b>{c.category_name}</b></li>)}<br/>

          <li className="pb-1">
            <ul className="skills d-flex"><b>compétences : </b>
              {JSON.parse(project.required_skills)[0] ?
                JSON.parse(project.required_skills).map((skill, index) =>  
                  <li className='my-1' key={index}> {skill}</li>
                ) :
                <p className="ml-2">Aucune compétence requise</p>
              }
            </ul>
          </li>

        </ul>
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
  )
}

export default ProjectPreview
