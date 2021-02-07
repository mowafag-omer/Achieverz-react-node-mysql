import React, { useState } from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Modal, Button } from 'react-bootstrap' 
import './postProject.css'

const PostProject = ({classes}) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // const addSkill = (push, skill) => skill && push('') 

  const initialValues = {
    project: '', description: '', sector: '', skills: [''], payBy: '', min: '', max: '',
  }

  const validationSchema = Yup.object({
    project: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    sector: Yup.string().required('Required'),
    payBy: Yup.string().required('Required'),
    min: Yup.string().required('Field is required')            
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (<>
    <Button className={classes} variant="warning" onClick={handleShow}>
      Poster un projet
    </Button>
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton><Modal.Title>Poster un projet</Modal.Title> </Modal.Header>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({values, touched, errors }) => { return (
        <Form>
          <div className="modal-body">
            <div className='form-group shadow-sm p-2 border rounded'>
              <label htmlFor="project" className="form-label">Nom de projet</label>
              <Field type='text' id="project" name='project' placeholder="Choisissez un nom pour votre projet" 
                className={touched.email && errors.email ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='project'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>

            <div className='form-group shadow-sm p-2 border rounded'>
              <label htmlFor="Description" className="form-label">Description</label>
              <Field as='textarea' id="Description" name='description' placeholder="Choisissez un nom pour votre projet" 
                className={touched.description && errors.description ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='description'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>

            <div className='form-group shadow-sm p-2 border rounded'>
              <label htmlFor="Sector" className="form-label">Secteur</label>
              <Field as='select' id="Sector" name='sector' className="form-control w-50">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <ErrorMessage name='sector'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>

            <div className='form-group shadow-sm p-2 border rounded'>
              <label htmlFor="Skills" className="form-label">Compétences requises</label>
              <FieldArray name='skills'>{({push, remove, form}) => {
                const { values } = form
                const { skills } = values
                console.log(!!values.skills)
                return (<>
                  {skills.map((skill, index) => (
                    <div key={index} className="d-flex w-50 mb-2">
                      {skills.length - 1 === index ? 
                        <Field name={`skills[${index}]`} className="form-control w-75 mr-2" 
                          placeholder="Ajouter une compétence requise" /> : 
                        <div className="py-1 px-2 mr-2 bg-light rounded">{skill}</div>
                      }
                      {skills.length > 1 && skills.length - 1 !== index && 
                        <span role='button' onClick={() => remove(index)} 
                          className="badge align-self-center border p-2 bg-light" 
                        > &#x2012; </span>
                      }
                      {skills.length - 1 === index && 
                        <span role='button' onClick={() => skill && push('')}
                          className="badge align-self-center border p-2 bg-light" 
                        > &#x271A; </span>
                      }
                    </div>
                  ))}
                </>)
              }}</FieldArray>
            </div>

            <div className="form-group p-2 border rounded shadow-sm p-2 border rounder">
              <label className="d-block form-label">Comment voudriez-vous payer ?</label>
              <div className="form-check form-check-inline">
                <Field type="radio" id="fixed" name="payBy" value="fixed" className="form-check-input" />
                <label className="form-check-label" htmlFor="fixed">Payer un prix fixe</label>
              </div>
              <div className="form-check form-check-inline">
                <Field type="radio" id="hour" name="payBy" value="hour" className="form-check-input" />
                <label className="form-check-label" htmlFor="hour">Payer à l'heure</label>
              </div>
              <ErrorMessage name='payBy'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>
            
            <div className="form-group shadow-sm p-2 border rounded">
              <label className="d-block form-label">Quel est votre budget estimé ?</label>
              <div className="input-group w-50">
                <span class="input-group-text">Budget minimum</span>
                <Field type='number' name='min' placeholder="" 
                  className={touched.min && errors.min ? "border-danger form-control" : "form-control"} 
                />
                <span class="input-group-text">$</span>
              </div>
              <ErrorMessage name='min'>{error => <div className="text-danger">{error}</div>}</ErrorMessage><br/>
              <div className="input-group w-50">
                <span class="input-group-text">Budget maximum</span>
                <Field type='number' name='max' placeholder="" 
                  className={touched.max && errors.max ? "border-danger form-control" : "form-control"} 
                />
                <span class="input-group-text">$</span>
              </div>
              <ErrorMessage name='max'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>

            {values.project && values.description && values.sector && values.min && values.max && (<>
              <hr/>
              <h5 className="pb-2">Sont-ils corrects ces détails ?</h5>
              <div className='projectSum p-2 border rounded shadow-sm p-2 border rounder'>
                <ul>
                  <li>Nom de projet : {values.project}</li>
                  <li>Description : {values.description}</li>
                  <li>Secteur : {values.sector}</li>
                  {values.skills[0] && 
                    <li className="skills">Compétences requises : <ul>{values.skills.map(skill => skill && <li>{skill}</li>)}</ul></li>}
                  <li>budget : {values.min} - {values.max} {values.payBy === 'hour' && 'par heur'}</li>
                </ul>
              </div>
            </>)}
    
          </div>
          <div className="modal-footer">
            <Button variant="secondary" onClick={handleClose}>Fermer</Button>
            <Button variant="primary" type="submit">Poster</Button>
          </div>
        </Form>
      )}}</Formik>
    </Modal>
  </>)  
}

export default PostProject