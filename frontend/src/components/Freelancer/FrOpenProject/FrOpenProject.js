import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { ArrowLeft, Person, GeoAlt, Clock, CheckCircle, XCircleFill } from 'react-bootstrap-icons'
import { AddApplication } from '../../../store/actions/projectAction'


const FrOpenProject = () => {
  const userId = useSelector(state => state.auth.userId)
  const proStore = useSelector(state => state.projects)
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const project = location.project
  const status = location.status
  const cateName = proStore.categories.filter(c => c.id === parseInt(project.required_category))[0].category_name 
  const isApplied = proStore.applications ? proStore.applications.filter(a => a.project_id === project.id) : []

  const getDays = (postDate) =>{
    const todayDate = new Date()
    const difference = todayDate.getTime() -  new Date(postDate).getTime()
    const days = difference / (1000 * 3600 * 24)
    return Math.floor(days)
  }

  const handleApplying = () => {
    dispatch(AddApplication({
      projectId: project.id,
      freelancerId: userId,
      employerId: project.employerId,
      status: 'pending'
    }))
  }
  
  return (
    <div className="project flex-fill col-12 col-md-9 my-3 px-4 mx-auto shadow-sm">
      <ArrowLeft size={30} className="mb-3" role="button" onClick={history.goBack} />
      
      <div className="card p-3 pb-2 mb-3 shadow-sm">
        <h3 className="card-title">{project.project_title}</h3>
        <div className="d-flex flex-wrap mb-4">  
          <span className="mr-2"><Person size={20} className="pb-1" />{project.first_name}</span>
          <span className="mr-2"><GeoAlt size={20} className="pb-1" />{project.city}, {project.country}</span>
          <span className="ml-1 text-secnodary"
            style={{fontWeight:'300'}}
          >
            <Clock size={17} className="pb-1" />
            <span className="ml-1 mr-2">il y a {getDays(project.posting_date)} jours</span>
          </span>
        </div>

        <div className="d-flex">
          {!isApplied[0] ?
            <button className="btn mx-sm-auto" style={{width:'180px'}} onClick={handleApplying}>
              Postuler
            </button> :
            status === 'confirmed' ?
            <div class="alert alert-success mx-sm-auto" role="alert">Vous avez été choisi pour ce projet</div> :
            status === 'refused' ?
            <div class="alert alert-danger mx-sm-auto" role="alert">
              Candidature non retenue
              <XCircleFill className="ml-2" />
            </div> :
            <div class="alert alert-primary mx-sm-auto" role="alert">
              Candidature envoyée
              <CheckCircle className="ml-2" />
            </div>
          } 
        </div>
      </div>

      <div className="card w-100 mb-3 shadow-sm">
        <h5 className="mx-3 mt-3 pb-3 border-bottom">À propos du projet</h5>
        <div className="card-body">
          <h6>description</h6>
          <p className="card-text">{project.project_description}</p>
          <h6>Domaine</h6>
          <p className="card-text">{cateName}</p>
          <h6>Compétences requises</h6>
            {JSON.parse(project.required_skills)[0] ?
              <ul className="skills d-flex">
                {JSON.parse(project.required_skills).map((skill, index) => skill && 
                  <li className='my-1' key={index}> {skill}</li>
                )}
              </ul> : 
              <p>Aucune compétence requise</p>
            }
          <h6>Budget</h6>
          <p className="card-text">
            {project.min_budget}$ - {project.max_budget}$
            {project.budget === 'fixed' ? ' (fixe)' : ' (par heure)'}  
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default FrOpenProject
