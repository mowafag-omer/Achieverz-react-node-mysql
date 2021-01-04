import React, { useContext, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Alert } from 'react-bootstrap'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { UserContext } from '../../contexts/UserContext'

const Signup = () => {
  const  { user, signUp }  = useContext(UserContext)

  useEffect(() => {
    user.Signup_success && console.log("done") 
    user.signup_error && console.log(user.signup_error)
  }, [user])

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    type: ''
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Required'),
    type: Yup.string().required('Required'),
  })
  const onSubmit = (values, submitProps) => {
    signUp(values)
  }
  return (
    <>
    <Nav />
    <div className="bg-light d-flex flex-column justify-content-center" style={{height: "90vh"}}>
      <h4 className="text-center">S'inscrire</h4>
      <hr className="w-50"></hr>
      {user.signup_error && <Alert variant="danger" className='w-50 ml-auto mr-auto'>{user.signup_error}</Alert>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >{ ({touched, errors }) => { return (
        <Form className="w-50 mr-auto ml-auto">
          <div className='mb-3'>
            <div className="form-check form-check-inline">
              <Field type="radio" name="type" id="Typ1e" value="employer" className="form-check-input" />
              <label className="form-check-label" htmlFor="Type1">Employer</label>
            </div>
            <div className="form-check form-check-inline">
              <Field type="radio" id="Type2" name="type" value="freelancer" className="form-check-input" />
              <label className="form-check-label" htmlFor="Type2">Freelancer</label>
            </div>
            <ErrorMessage name='type'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
          </div>  
          <div className='mb-3'>
            <Field type='email' id='email' name='email' placeholder="Adresse Email" 
              className={touched.email && errors.email ? "border-danger form-control" : "form-control"} 
            />
            <ErrorMessage name='email'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
          </div>
          <div className='mb-3'>
            <Field type='password' id='password' name='password' placeholder="Mot de pass"
              className={touched.password && errors.password ? "border-danger form-control" : "form-control"} 
            />
            <ErrorMessage name='password'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
          </div>
          <div className='mb-3'>
            <Field type='password' id='confirmPassword' name='confirmPassword' placeholder="Confirmation mot de pass"
              className={touched.confirmPassword && errors.confirmPassword ? "border-danger form-control" : "form-control"} 
            />
            <ErrorMessage name='confirmPassword'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
          </div>
          <button className="btn btn-success mr-auto" type='submit'>S'inscrire</button>
        </Form>      
      )}}
      </Formik>  
    </div>
    <Footer />
    </>
  )
}

export default Signup