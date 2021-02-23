import React from 'react'
import { Jumbotron, Container, Form, FormControl, Button } from 'react-bootstrap'
import './Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Banner = () => {
  return (
    <Jumbotron className="mb-0" fluid>
      <Container>
        <h1>Lorem ipsum</h1>
        <div className="row">
          <p className="col-md-6">
            Êtes-vous un employeur à la recherche d'un.e développeur.se freelance ou vous êtes un.e développeur.se ouvert au travail ?
          </p>
        </div>
        <div className="row">
          <Form className="col-md-8 col-11 b-search" inline>
            <FormControl type="text" placeholder="quelle compétence recherchez-vous ?" className="" />
            <Button className="W-50" type="submit">Chercher</Button>
          </Form>
        </div>
      </Container>
    </Jumbotron>  
  )
}

export default Banner