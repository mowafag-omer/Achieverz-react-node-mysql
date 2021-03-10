import React from 'react'
import { useSelector } from 'react-redux'
import { ArrowLeft, GeoAlt, Search } from 'react-bootstrap-icons'

const AFrProfile = (props) => {
  const freelancer = useSelector(state => state.freelancer)
  const profile = props.location.state.frProfile
  const categoryName = props.location.state.category
  const skills = props.location.state.skills

  return (
    <div className="project flex-fill col-12 col-md-9 my-4 px-4 mx-auto shadow-sm">
      <ArrowLeft size={30} className="mb-3" role="button" onClick={props.history.goBack} />
      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between">
          <h5>Informations Personnelles</h5>
        </div>
        <div className="card-body">        
          <div className="d-flex w-100 mb-3 pb-1 justify-content-between border-bottom">
            <div className="mx-1 w-50">
              <h6>Prénom</h6>
              <span>{profile.first_name}</span>
            </div>
            <div className="mx-1 w-50">
              <h6>Nom</h6>
              <span>{profile.last_name}</span>
            </div>
          </div>

          <div className="d-flex w-100 mb-3 pb-1 justify-content-between border-bottom">
            <div className="mx-1 w-50">
              <h6>Adresse Email</h6>
              <span>{profile.email}</span>
            </div>
            <div className="mx-1 w-50">
              <h6>Numéro de téléphone</h6>
              <span>{profile.phone_num}</span>
            </div>
          </div>

          <div className="d-flex w-100 mb-3 pb-1 justify-content-between border-bottom">
            <div className="mx-1 w-50">
              <h6>Ville</h6>
              <span>{profile.city}</span>
            </div>
            <div className="mx-1 w-50">
              <h6>Pays</h6>
              <span>{profile.country}</span>
            </div>
          </div>

          <div className="d-flex w-100 mb-3 pb-1 justify-content-between border-bottom">
            <div className="mx-1 w-50">
                <h6>Titre de profil</h6>
                <span>{profile.profile_title}</span>
            </div>
          </div>

          <div className="d-flex w-100 mb-3 pb-1 justify-content-between border-bottom">
            <div className="mx-1 w-100">
                <h6>bio</h6>
                <span>{profile.bio}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between">
          <h5>Compétences</h5>
        </div>
        <div className="card-body"> 

          <div className="d-flex w-100 mb-3 pb-1 justify-content-between border-bottom">
            <div className="mx-1 w-50">
              <h6 className="mb-2">Domaines d'expériences</h6>
              <span>{categoryName}</span>
            </div>
          </div>

          <div className="d-flex w-100 mb-3 pb-1 justify-content-between border-bottom">
            <div className="mx-1 w-50">
              <h6 className="mb-2">Compétences</h6>
              {skills.map((skill, index) => 
                <div key={index} className="w-75 py-1 px-2 mb-2 bg-light rounded">{skill}</div>
              )}
            </div>
          </div>

        </div>
      </div>

      <div className="card mb-4">
      <div className="card-header d-flex justify-content-between">
        <h5>Expériences</h5>
      </div>
      <div className="card-body">        
      <div className="ex-preview d-flex flex-column mt-4">
        {freelancer.experiences.filter(e => e.user_id === profile.user_id).map((exp) => 
          <ul key={exp.id} className="w-100 list-group list-group-flush shadow-sm p-2 mb-3 mx-auto border rounded">
            <li className="list-group-item d-flex justify-content-between">
              <h5>{exp.role}</h5> 
            </li>
            <li className="list-group-item"><b>{exp.employer}</b><br/> 
            <span>{exp.from_date} - {exp.to_date ? exp.to_date : 'presente'}</span>
            </li>
            <li className="list-group-item">{exp.description}</li>
          </ul>
        )} 
      </div>
      </div>
    </div>
    </div>
  )
}

export default AFrProfile
