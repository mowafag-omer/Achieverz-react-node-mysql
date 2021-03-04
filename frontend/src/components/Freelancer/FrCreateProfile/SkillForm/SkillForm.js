import React from 'react'
import { useSelector } from 'react-redux'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SkillForm = ({userskills, setuserskills, setstep}) => {
  const projects = useSelector(state => state.projects)
  const skillsList = [...projects.skills]

  // const addSkill = (push, skill) => skill && push('') 

  const initialValues = {
    category: userskills.category,
    skills: userskills.skills
  }

  const validationSchema = Yup.object({
    category: Yup.number().required('Required'),
  })

  const onSubmit = (values) => {
    // !values.skills[values.skills.length - 1] && values.skills.pop()
    setuserskills(values)
    setstep(3)
  }

  return (
    <div className="col-11 col-md-8 mx-auto p-3 my-4 rounded shadow">
      <h3 className="text-center">Compétences</h3>
      <hr className="w-100"></hr>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({touched, errors }) => { return (
        <Form>
          <div className='form-group p-2 border rounded'>
            <label htmlFor="category" className="form-label"><h6>Domaines d'expériences</h6></label>
            <Field as='select' id="category" name='category' 
              className={`form-control w-50 ${touched.category && errors.category && 'border-danger'}`}
            >
              <option value="">Choisissez un secteur</option>
              {projects.categories.map(category => 
                <option key={category.id} value={parseInt(category.id)}>{category.category_name}</option>
              )}
            </Field>
            <ErrorMessage name='category'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
          </div>

          <div className='form-group p-2 border rounded'>
            <label htmlFor="Skills" className="form-label"><h6>Compétences</h6></label>
            <FieldArray name='skills'>{({push, remove, form}) => {
              const { values, setFieldValue } = form
              const { skills } = values
              return (<>
                {skills.map((skill, index) => (
                  <div key={index} className="d-flex w-50 mb-2 position-relative">
                    {skills.length - 1 === index ? skills.length < 10 && (<> 
                      <Field 
                        name={`skills[${index}]`} 
                        className="skills-input form-control w-75 mr-2" 
                        onClick={() => setFieldValue('list', true, false ) }
                        placeholder="Ajouter une compétence requise"
                      />
                      {values.list && <ul className="list-group position-absolute skills-list">
                        {skillsList.filter(x => skills.indexOf(x) === -1).map(pskill =>
                          <li 
                            className='list-group-item skill'
                            onClick={() => {
                              setFieldValue(`skills[${index}]`, pskill.skill)
                              setFieldValue('list', false)
                            }} 
                            key={pskill.id}
                          >
                            {pskill.skill}
                          </li>
                        )}
                      </ul>}
                      </>): 
                      <div className="py-1 px-2 mr-2 bg-light rounded">{skill}</div>
                    }
                    {skills.length > 1 && skills.length - 1 !== index && 
                      <span role='button' onClick={() => remove(index)} 
                        className="badge align-self-center border p-2 bg-light" 
                      > &#x2012; </span>
                    }
                    {skills.length - 1 === index && skills.length < 10 &&
                      <span role='button' onClick={() => skill && push('')}
                        className="badge align-self-center border p-2 bg-light" 
                      > &#x271A; </span>
                    }
                  </div>
                ))}
              </>)
            }}</FieldArray>
          </div>
          <hr className="w-100"></hr>

          <div className="mt-2 d-flex">
          < button className="btn mr-auto" type='button' onClick={()=>setstep(1)}>Précédent</button>
          < button className="btn ml-auto" type='submit' >Suivant</button>
          </div>
        </Form>
      )}}
      </Formik>
    </div>  
  )  
}

export default SkillForm