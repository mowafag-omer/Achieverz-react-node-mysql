import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

const Signin = (props) => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.auth)
  const error = useSelector(state => state.error)

  useEffect(() => {
    user.isAuthenticated && user.type === 'employer' && 
      props.history.push("/EmployerDashboard")
  }, [user])

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  })

  const onSubmit = (values, actions) => {
    dispatch(signIn(values))
    actions.setFieldValue('password', '')
  }

  return (
    <>
      <Nav />
      <div className="bg-light d-flex flex-column justify-content-center" style={{height: "90vh"}}>
        <h4 className="text-center">Se connecter</h4>
        <hr className="w-50 mb-5"></hr>
        {error.id === 'SIGNIN_FAIL' && 
          <Alert variant="danger" className='w-50 ml-auto mr-auto mb-4'>{error.msg}</Alert>
        }
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >{({touched, errors }) => { return (
          <Form className="w-50 mr-auto ml-auto">
            <div className='mb-3'>
              <Field type='email' id='email' name='email' placeholder="Adresse Email"
                className={touched.email && errors.email ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='email'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>
            <div className='mb-3'>
              <Field type='password' id='password' name='password' placeholder="Mode de pass"
                className={touched.password && errors.password ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='password'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>
            <button className="btn btn-success" type='submit'>Se connecter</button>
          </Form>      
        )}}
        </Formik>  
        <hr className="w-50 mt-5"></hr>
        <p className='text-center mt-2'>Vous n'avez pas de compte ? <Link to='/Signup'>S'inscrire</Link></p>
      </div>
      <Footer />    
    </>
  )
}

export default Signin