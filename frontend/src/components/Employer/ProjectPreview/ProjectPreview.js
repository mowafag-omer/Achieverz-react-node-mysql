import React from 'react'
import {Card } from 'react-bootstrap'
import './ProjectPreview.css'

const ProjectPreview = (props) => {
  return (
    <Card className='preview w-100 shadow-sm'>
    <Card.Header><Card.Title>{props.project.project_title}</Card.Title></Card.Header>
    <Card.Body className="m-0 px-3 py-2">
      <ul className="p-0">
        <li className="border-bottom pb-1">{props.project.project_description}</li><br/>

        {props.categories.map(c => c.id == props.project.required_category && 
        <li className="border-bottom pb-1"><b>{c.category_name}</b></li>)}<br/>

        <li className="border-bottom pb-1">
          <ul className="skills d-flex border-button"><b>compétences : </b>
            {JSON.parse(props.project.required_skills).map((skill, index) => skill && 
              <li key={index}> {skill}</li>
            )}
          </ul>
        </li>

      </ul>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </Card>
)
}
export default ProjectPreview
