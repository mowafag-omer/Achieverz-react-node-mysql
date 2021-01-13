import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Card } from 'react-bootstrap'
import ProfileWidget from '../EmProfileWidget/EmProfileWidget'
import PostProject from '../PostProject/PostProject'

export const EmployerDashboard = (props) => {
  const employer = useSelector(state => state.employer)

  useEffect(() => {
    employer.hasNoProfile && props.history.push("/createEmProfile")
  })

  return (
    <div className="p-3 d-flex justify-content-between" style={{minHeight: '71.5vh'}}>
      <div className="shadow-sm p-4 mr-4" style={{width: '67%'}}>
        <h4 className="mb-4">Projets récents</h4>
        <Card className='w-100 shadow-sm'>
          <Card.Header><Card.Title>Nom de projet</Card.Title></Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
      <ProfileWidget />
    </div>
  )
}

export default EmployerDashboard