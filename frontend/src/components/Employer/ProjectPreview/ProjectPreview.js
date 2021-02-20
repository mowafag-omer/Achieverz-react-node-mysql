import React from 'react'
import {Card } from 'react-bootstrap'

const ProjectPreview = (props) => {
  console.log(props.project);
  return (
    <Card className='w-100 shadow-sm'>
    <Card.Header><Card.Title>{props.project.project_title}</Card.Title></Card.Header>
    <Card.Body>
      <Card.Text>
        <span>{props.project.project_description}</span><br/>
        <span>{props.project.required_category}</span><br/>
        <span>{props.project.required_skills}
        {/* <ul>
          {props.project.required_skills.map((skill, index) => skill && 
            <li key={index}>{skill}</li>
          )}
        </ul> */}
        </span>
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </Card>
)
}
export default ProjectPreview
