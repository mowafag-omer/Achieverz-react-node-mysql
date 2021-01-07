import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const CreateEmployerProfile = () => {
  const initialValues = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    country: '',
    city: '',
  }

  const validationSchema = Yup.object({
    fname: Yup.string().required('Required'),
    lname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    phone: Yup.number('phone must be a number').required('Required'),
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
  })

  const onSubmit = (values, submitProps) => {
    console.log(values)
  }

  return (
    <>
      <Nav /> 
      <div className="bg-light  d-flex flex-column" style={{minHeight: "90vh"}}>
        <h4 className="text-center mt-4">Créez votre profile</h4>
        <hr className="w-50 mb-4"></hr>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({touched, errors }) => { return (
          <Form className="w-50 mr-auto ml-auto mb-4">
            <div className="mb-3">
              <Field type='text' id='fname' name='fname' placeholder="Prénom" 
                className={touched.fname && errors.fname ? "border-danger form-control" : "form-control"} 
              />
              {errors.fname && <div className="text-danger">{errors.fname}</div>}
            </div>
            <div className="mb-3">
              <Field type='text' id='lname' name='lname' placeholder="Nom" 
                className={touched.lname && errors.lname ? "border-danger form-control" : "form-control"} 
              />
              {errors.lname && <div className="text-danger">{errors.lname}</div>}
            </div>
            <div className='mb-3'>
              <Field type='email' id='email' name='email' placeholder="Adresse Email"
                className={touched.email && errors.email ? "border-danger form-control" : "form-control"} 
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className='mb-3'>
              <Field type='text' id='phone' name='phone' placeholder="Numéro de téléphone"
                className={touched.phone && errors.phone ? "border-danger form-control" : "form-control"} 
              />
              {errors.phone && <div className="text-danger">{errors.phone}</div>}
            </div>
            <div className='mb-3'>
              <Field type='text' id='country' name='country' placeholder="Pays"
                className={touched.country && errors.country ? "border-danger form-control" : "form-control"} 
              />
              {errors.country && <div className="text-danger">{errors.country}</div>}
            </div>
            <div className='mb-3'>
              <Field type='text' id='city' name='city' placeholder="Vills"
                className={touched.city && errors.city ? "border-danger form-control" : "form-control"} 
              />
              {errors.city && <div className="text-danger">{errors.city}</div>}
            </div>
            <button className="btn btn-success mr-auto" type='submit'>Valider</button>
          </Form>
        )}}
        </Formik>
      </div>
      <Footer />
    </>
  )
}

export default CreateEmployerProfile