import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './ExperiencesForm.css'
import ExPreview from '../ExPreview'

const ExperiencesForm = ({exps, setexps, setstep}) => {
  const [update, setupdate] = useState(false)
  const [showform, setshowform] = useState(exps.length ? false : true)
  const user = useSelector(state => state.auth)


  const initialValues = {
    title: '',
    employer: '',
    fdate: '',
    tdate: '',
    description: '',
    userId: user.userId,
    iscw: false
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    employer: Yup.string().required('Required'),
    fdate: Yup.date().required('Required'),
    tdate: Yup.date().when('iscw', {
      is: (iscw) => !iscw,
      then: Yup.date().required('required')            
    }),    
    description: Yup.string().required('Required'),
  })

  const onSubmit = (values) => {
    delete values.iscw
    setexps([...exps, values])
    setshowform(false)
  }

  const deleteExp = (i) => {
    exps.splice(i, 1)
    setexps(exps)
    setupdate(!update)
  }

  return (
    <div className="personal-info col-11 col-md-8 mx-auto p-3 my-4 rounded shadow">
      <h3 className="text-center">Expériences</h3>
      <hr className="w-100"></hr>

      <ExPreview exps={exps} deleteExp={deleteExp} />
      
      
      {!showform && <div className="form-btn mt-4 d-flex justify-content-center">
        < button className="btn" type='button' onClick={() => setshowform(true)}>Ajouter une expérience</button>
      </div>}
      
      <hr className="w-100"></hr>

      {showform &&
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({touched, errors, values }) => { return (
        <Form className="w-100 mx-auto">

          <div className="row-wrapper d-flex w-100 justify-content-between">
            <div className="input-wrapper mb-3 mx-1 w-50">
              <Field type='text' name='title' placeholder="title" 
                className={`form-control ${touched.title && errors.title && 'border-danger'}`} 
              />
              <ErrorMessage name='title'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>

            <div className="input-wrapper mb-3 mx-1 w-50">
              <Field type='text' name='employer' placeholder="employer" 
              className={`form-control ${touched.employer && errors.employer && 'border-danger'}`} 
              />
              <ErrorMessage name='employer'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>
          </div>

          <div className="row-wrapper d-flex w-100 justify-content-between">
            <div className="date-wrapper mb-3 mx-1 w-50">
              <Field type="month" name='fdate' placeholder="fdate" 
                className={`form-control ${touched.fdate && errors.fdate && 'border-danger'}`} 
              />
              <ErrorMessage name='fdate'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>

            <div className="date-wrapper mb-2 mx-1 w-50">
              <Field type="month" name='tdate' placeholder="tdate" 
                className={`form-control ${touched.tdate && errors.tdate && 'border-danger'}`} 
              />
              <ErrorMessage name='tdate'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>
          </div>
         
          {!values.tdate && 
          <div className='mb-4 ml-2'>
            <Field type="checkbox" name="iscw"/> J’occupe actuellement ce poste
          </div>}

          <div className='form-group mb-3'>
            <Field as='textarea' name='description' placeholder="Décrivez votre expérience de travail" 
              className={`form-control ${touched.description && errors.description && 'border-danger'}`} 
            />
            <ErrorMessage name='description'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
          </div>
          
          <div className="form-btn mt-4 d-flex justify-content-end">
          {/* < button className="btn mr-4 btn-off" type='button'>Annuler</button> */}
          < button className="btn" type='submit'>Ajouter une expérience</button>
          </div>
          <hr className="w-100"></hr>


        </Form>
        )}}  
      </Formik>}

      <div className="mt-2 d-flex">
      < button className="btn mr-auto" type='button' onClick={()=>setstep(0)}>Précédent</button>
      < button className="btn ml-auto" type='button' onClick={()=>setstep(2)}>Suivant</button>
      </div>

    </div>
  )
}

export default ExperiencesForm