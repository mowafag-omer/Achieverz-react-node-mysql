import React from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './ProjectPreview.css'

const ProjectPreview = ({project, categories}) => {
  
  return (
    <Card className='preview w-100 mb-4 shadow-sm'>
      <Card.Header><Card.Title>{project.project_title}</Card.Title></Card.Header>
      <Card.Body className="m-0 px-3 py-2">
        <ul className="p-0">
          <li className="border-bottom pb-1"><p className='ellipsis'>{project.project_description}</p></li><br/>

          {categories.map(c => c.id == parseInt(project.required_category) && 
          <li className="border-bottom pb-1"><b>{c.category_name}</b></li>)}<br/>

          <li className="pb-1">
            <ul className="skills d-flex"><b>compétences : </b>
              {JSON.parse(project.required_skills)[0] && 
                JSON.parse(project.required_skills).map((skill, index) => skill && 
                  <li className='my-1' key={index}> {skill}</li>
              )}
            </ul>
          </li>

        </ul>
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
  )
}

export default ProjectPreview
