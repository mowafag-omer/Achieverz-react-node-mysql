import React from 'react'
import { Card } from 'react-bootstrap'
import './EmProfileWidget.css'

export const EmProfileWidget = ({widgetInfo}) => {
  return (
    <Card bg="light" className="widget shadow-sm w-25">
      <Card.Header className="bg-secondary text-light h-25" style={{background:'##2b3247 !important'}}>
        Welcome back, <br/> <h4 className='mt-1'>{widgetInfo.name}</h4>
      </Card.Header>
      <Card.Body>   
        <Card.Title>
          
        </Card.Title>
        <Card.Text>
          <ul className='list-group list-group-flush w-100'>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              projets posté
              <span class="badge text-white rounded-pill">{widgetInfo.allproject}</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              projets en attendant
              <span class="badge text-white rounded-pill">{widgetInfo.pendding}</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              projets confirmé
              <span class="badge text-white rounded-pill">{widgetInfo.confirmed}</span>
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default EmProfileWidget