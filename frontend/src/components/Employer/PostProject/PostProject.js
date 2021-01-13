import React, { useState } from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import { Modal, Button } from 'react-bootstrap' 
import './postProject.css'

const PostProject = ({classes}) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const addSkill = (push) => { }

  const initialValues = {
    project: '',
    description: '',
    sector: '',
    skills: [''],
    payBy: ''
  }

  return (
    <Formik initialValues={initialValues}>{({touched, errors }) => { return (
      <Form>
        <Button className={classes} variant="warning" onClick={handleShow}>
          Poster un projet
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Poster un projet</Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <div className='form-group shadow-sm p-2 border rounded'>
              <label htmlFor="project" className="form-label">Nom de projet</label>
              <Field type='text' id="project" name='project' placeholder="Choisissez un nom pour votre projet" 
                className={touched.email && errors.email ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='project'>
                {error => <div className="text-danger">{error}</div>}
              </ErrorMessage>
            </div>

            <div className='form-group shadow-sm p-2 border rounded'>
              <label htmlFor="Description" className="form-label">Description</label>
              <Field as='textarea' id="Description" name='description' placeholder="Choisissez un nom pour votre projet" 
                className={touched.description && errors.description ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='project'>
                {error => <div className="text-danger">{error}</div>}
              </ErrorMessage>
            </div>

            <div className='form-group shadow-sm p-2 border rounded'>
              <label htmlFor="Sector" className="form-label">Secteur</label>
              <Field as='select' id="Sector" name='sector' className="form-control w-50">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>

            <div className='form-group shadow-sm p-2 border rounded'>
              <label htmlFor="Skills" className="form-label">Compétences requises</label>
              <FieldArray name='skills'>
                {({push, remove, form}) => {
                  const { values } = form
                  const { skills } = values
                  console.log(values.skills)
                  return (
                    <>
                    {skills.map((skill, index) => {
                      return (
                        <div key={index} className="d-flex w-50 mb-2">
                          {skills.length - 1 === index ? 
                            <Field name={`skills[${index}]`} className="form-control w-75 mr-2" placeholder="Ajouter une compétence requise" /> : 
                            <div className="py-1 px-2 mr-2 bg-light rounded">{skill}</div>
                          }
                          {skills.length > 1 && skills.length - 1 !== index && 
                            <span role='button' class="badge align-self-center border p-2 bg-light" onClick={() => remove(index)}> &#x2012; </span>
                          }
                          {skills.length - 1 === index && 
                            <span role='button' class="badge align-self-center border p-2 bg-light" onClick={() => push('')}> &#x271A; </span>
                          }
                        </div>
                      )
                    })}
                    </>
                  )
                }}
              </FieldArray>
            </div>

            <div className="form-group shadow-sm p-2 border rounded shadow-sm p-2 border rounder">
              <label className="d-block form-label">Comment voudriez-vous payer ?</label>
              <div className="form-check form-check-inline">
                <Field type="radio" id="fixed" name="payBy" value="fixed" className="form-check-input" />
                <label className="form-check-label" htmlFor="fixed">Payer un prix fixe</label>
              </div>
              <div className="form-check form-check-inline">
                <Field type="radio" id="hour" name="payBy" value="hour" className="form-check-input" />
                <label className="form-check-label" htmlFor="hour">Payer à l'heure</label>
              </div>
              <ErrorMessage name='type'>
                {error => <div className="text-danger">{error}</div>}
              </ErrorMessage>
            </div>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Fermer</Button>
            <Button variant="primary" type="submit">Poster</Button>
          </Modal.Footer>

        </Modal>
      </Form>
    )}}</Formik>
  )  
}

export default PostProject