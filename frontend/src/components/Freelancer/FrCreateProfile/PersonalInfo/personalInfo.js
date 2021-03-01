import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './PersonalInfo.css'

const personalInfo = () => {

  const initialValues = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    title: '',
    bio: '',
  }

  const validationSchema = Yup.object({
    fname: Yup.string().required('Required'),
    lname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    phone: Yup.number().required('Required'),
    city: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    title: Yup.string().required('Required'),
    bio: Yup.string().required('Required'),
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className="personal-info col-11 col-md-8 mx-auto p-3 my-4 rounded shadow">
      <h4 className="text-center">Informations Personnelles</h4>
      <hr className="w-100"></hr>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({touched, errors }) => { return (
        <Form className="w-100 mx-auto">

          <div className="row-wrapper d-flex w-100 justify-content-between">
            <div className="input-wrapper mb-3 mx-1 w-50">
              <Field type='text' id='fname' name='fname' placeholder="Prénom" 
                className={`form-control ${touched.fname && errors.fname && 'border-danger'}`} 
              />
              <ErrorMessage name='fname'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>

            <div className="input-wrapper mb-3 mx-1 w-50">
              <Field type='text' id='lname' name='lname' placeholder="Nom" 
              className={`form-control ${touched.lname && errors.lname && 'border-danger'}`} 
              />
              <ErrorMessage name='lname'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>
          </div>

          <div className="row-wrapperd d-flex w-100 justify-content-between">
            <div className='input-wrapper mb-3 mx-1 w-50'>
              <Field type='email' id='email' name='email' placeholder="Adresse Email"
                className={`form-control ${touched.email && errors.email && 'border-danger'}`} 
              />
              <ErrorMessage name='email'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>            
            </div>

            <div className='input-wrapper mb-3 mx-1 w-50'>
              <Field type='number' id='phone' name='phone' placeholder="Numéro de téléphone"
                className={`form-control ${touched.phone && errors.phone && 'border-danger'}`} 
              />
              <ErrorMessage name='phone'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>            
            </div>
          </div>

          <div className="row-wrapperd d-flex w-100 justify-content-between">
            <div className="input-wrapper mb-3 mx-1 w-50">
              <Field type='text' id='city' name='city' placeholder="Ville" 
              className={`form-control ${touched.city && errors.city && 'border-danger'}`} 
              />
              <ErrorMessage name='city'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>

            <div className='form-group input-wrapper mb-3 mx-1 w-50'>
              {/* <label htmlFor="country" className="form-label">Secteur</label> */}
              <Field as='select' id="country" name='country' 
                className={`form-control ${touched.country && errors.country && 'border-danger'}`}
              >
                <option value="">Choisissez un pay</option>
              </Field>
              <ErrorMessage name='country'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>
          </div>

          <div className="mb-3 mx-1">
            <Field type='text' id='title' name='title' placeholder="Titre de profil" 
              className={`form-control ${touched.title && errors.title && 'border-danger'}`} 
            />
            <ErrorMessage name='title'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
          </div>

          <div className='form-group'>
            <Field as='textarea' name='bio' placeholder="Bio ! parlez-nous de vous" 
              className={`form-control ${touched.bio && errors.bio && 'border-danger'}`} 
            />
            <ErrorMessage name='bio'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
          </div>
          
          <button className="btn mt-3 ml-auto" type='submit'>suivant</button>

        </Form>
        )}}  
      </Formik>
    </div>
  )
}

export default personalInfo
