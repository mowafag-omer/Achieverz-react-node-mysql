import React from 'react'
import { Card } from 'react-bootstrap'

export const EmProfileWidget = () => {
  return (
    <Card bg="light" className="shadow-sm w-25">
      <Card.Header variant="Dark" className="h-25">Welcome back employer1</Card.Header>
      <Card.Body>
        <Card.Title> Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default EmProfileWidget