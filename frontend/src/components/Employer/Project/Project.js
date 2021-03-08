import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams, useLocation, useHistory } from 'react-router-dom'
import { ArrowLeft, GeoAlt, Search } from 'react-bootstrap-icons'
import { deleteProject, updateApplicationStatus, updateProjectStatus } from '../../../store/actions/projectAction'
import avatar from '../../../assets/photo/avatar.png'
import './Project.css'

const Project = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const user = useSelector(state => state.auth)
  const projects = useSelector(state => state.projects)
  const profiles = useSelector(state => state.freelancer.allprofiles)
  const pro = projects.projects.filter(p => p.id === parseInt(location.state.id))[0]
  const cateName = (id) => projects.categories.filter(c => c.id === parseInt(id))[0].category_name 
  const applications = projects.applications.filter(a => a.project_id === pro.id)
  const profile = (id) =>  profiles.filter(p => p.user_id === id)[0]
  const getSkills = (inputs) => {
    if(JSON.parse(inputs)[0]){
      const skills = JSON.parse(inputs)
      return skills
    } else {
      return false
    }
  }
  
  console.log(applications.filter(a => a.status === 'hired' && a.project_id === pro.id))
  
  const handlePreHiring = (applicationId, userid) =>{
    dispatch(updateApplicationStatus(applicationId, userid, 'hired'))
    applications.filter(a => a.status === 'hired' && a.project_id === pro.id)
  } 
  
  const handleProjectUpdating = (projectId, userid) =>{
    // dispatch(updateProjectStatus(projectId, userid, 'confirmed'))
    applications.filter(a => a.status === 'hired' && a.project_id === pro.id)
    .forEach(elem => console.log(elem.id))
  } 

  const handledeleteProject = (projectId, id) =>{
    if(window.confirm("Vous souhaitez supprimer ce projet ?")){
      console.log(projectId);
      dispatch(deleteProject(projectId, id))
      alert("bien supprimé !")
      history.goBack()
    }
  }

  return (
    <div className="project flex-fill col-12 col-md-9 my-3 px-4 mx-auto shadow-sm">
      <ArrowLeft size={30} className="mb-3" role="button" onClick={history.goBack} />
      <div class="card w-100 mb-3 shadow-sm position-relative">
        <div class="card-body">
          <h5 class="card-title pb-1 border-bottom">{pro.project_title}</h5>
          <h6>description</h6>
          <p class="card-text">{pro.project_description}</p>
          <h6>Domaine</h6>
          <p class="card-text">{cateName(pro.required_category)}</p>
          <h6>Compétences requises</h6>
          <ul className="skills d-flex">
            {JSON.parse(pro.required_skills)[0] && 
              JSON.parse(pro.required_skills).map((skill, index) => skill && 
                <li className='my-1' key={index}> {skill}</li>
            )}
          </ul> 
          <h6>Budget</h6>
          <p class="card-text">
            {pro.min_budget}$ - {pro.min_budget}$
            {pro.budget === 'fixed' ? ' (fixe)' : ' (par heure)' }  
          </p>
        </div>
        <div className="d-flex flex-column py-3">
          <button 
            className="btn mx-auto mb-2"
            onClick={() => handleProjectUpdating(pro.id, user.userId)}
            >
              Confirmer et Fermer ce Projet
            </button>    
          <button 
            className="btn bg-danger mx-auto"
            onClick={() => handledeleteProject(pro.id, user.userId)}
          >
            Supprimer ce project
          </button>
        </div>      
      </div>

      <h4 className="my-4 text-center">Candidatures</h4>

      <div class="card w-100 mb-3">
        <div class="card-body">
          {applications.map(appli => {
            const pf = profile(appli.freelancer_id)
            return(
              <div key={appli.id} className="card shadow-sm pointer">
                <div class="card-header d-flex flex-column flex-sm-row flex-wrap align-items-center">
                  <img className="avatar mr-0 mr-sm-3" src={avatar} alt="Img de profile"/>
                  <div className="mt-2">
                    <h6 className="ml-2 m-0">
                      {pf.first_name} &nbsp;
                      {pf.last_name}
                    </h6>
                    <span className="mr-0 mr-sm-3 mt-2 d-block"><GeoAlt size={20} className="pb-1" />{pf.city}, {pf.country}</span>
                  </div>
                  <div className="ml-sm-auto mt-3 mt-sm-1">
                  <button className="ms-auto btn bg-danger mr-2">Refuser</button>
                  {
                    appli.status === "pending" ?
                    <button className="ms-auto btn" onClick={() => handlePreHiring(appli.id, user.userId)}>Recruter</button>:
                    appli.status === "hired" &&
                    <button className="ms-auto btn">pré-recruté</button>
                  }
                  </div>
                  {
                    appli.status === "hired" &&
                    <span className="">* Pour valider votre choix veuillez confirmer et fermer ce project.</span>
                  }
                </div>
                <div class="card-body">
                  <h6>Domaine</h6>
                  <p class="card-text">{cateName(pf.category)}</p>
                  <h6>Compétences requises</h6>
                  <div className="mt-3 d-flex flex-wrap">
                    {getSkills(pf.skills) !== false ?
                      getSkills(pf.skills).map((skill, index) => 
                        <span key={index} className="text-center mr-1 mt-1 mt-md-0 py-1 px-2 border border-2"> {skill}</span>
                      ) : 
                      <p>Aucune compétence requise</p>
                    }
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {!applications.length && 
          <div className="mx-auto d-flex mb-4 flex-column align-items-center alerty py-2 w-75">
            <Search size={50} className="mb-4" />
            <p className="text-center">Non candidatures pour ce projet !</p> 
            <button className='btn'>Trouvez un Freelance</button>
          </div>
        }
      </div>        
    </div>
  )
}

export default Project
