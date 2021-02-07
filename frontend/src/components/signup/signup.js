import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

const Signup = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)
  const error = useSelector(state => state.error)

  // useEffect(() => {
  //   user.Signup_success && console.log("done") 
  //   user.signup_error && console.log(user.signup_error)
  // }, [user])

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    type: ''
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password is too short - should be 6 chars minimum.').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Required'),
    type: Yup.string().required('Required'),
  })
  const onSubmit = (values, actions) => {
    console.log(actions);
    dispatch(signUp(values))
    actions.setFieldValue('password', '', false)
    actions.setFieldValue('confirmPassword', '', false)
  }

  return (
    <div className="bg-light d-flex flex-column justify-content-center py-4" style={{minHeight: "80.7vh"}}>
      <div className="w-50 mx-auto p-3 rounded shadow">
        <h4 className="text-center">S'inscrire</h4>
        <hr className="w-100"></hr>

        {/* {user.signup_error && <Alert variant="danger" className='w-50 ml-auto mr-auto'>{user.signup_error}</Alert>} */}
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({touched, errors }) => { return (
          <Form className="w-75 mr-auto ml-auto">

            <div className="mb-3 d-flex justify-content-center">
              <div className="form-check form-check-inline">
                <Field type="radio" name="type" value="employer" className="form-check-input" />
                <label className="form-check-label" htmlFor="Type1">Employer</label>
              </div>
              <div className="form-check form-check-inline">
                <Field type="radio"name="type" value="freelancer" className="form-check-input" />
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
        <hr className="w-100 mt-4"></hr>
        <p className='text-center mt-2'>Vous avez déjà un compte ? <Link to='/login'>Se connecter</Link></p>
      </div>
    </div>
  )
}

export default Signup