import React from 'react'
import { Profiler } from 'react'
import { Card } from 'react-bootstrap'
import './FrProfileWidget.css'

const FrProfileWidget = ({hired, noNhired, profile}) => {
  return (
    <Card bg="light" className="widget shadow-sm">
    <Card.Header className="bg-secondary text-light h-25" style={{background:'##2b3247 !important'}}>
    Bienvenu, <br/> <h4 className='mt-1'>
      {profile.first_name}
    </h4>
    </Card.Header>
    <Card.Body>   
      <Card.Title>
        
      </Card.Title>
      <Card.Text>
        <ul className='list-group list-group-flush w-100'>
          <li className='list-group-item d-flex justify-content-between align-items-center'>
            projets confirmé
            <span class="badge ml-1 text-white rounded-pill">{hired}</span>
          </li>
          <li className='list-group-item d-flex justify-content-between align-items-center'>
            Mes Candidatures
            <span class="badge ml-1 text-white rounded-pill">{noNhired}</span>
          </li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default FrProfileWidget
