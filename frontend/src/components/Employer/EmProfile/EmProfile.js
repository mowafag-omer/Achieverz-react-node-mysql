import React from 'react'
import { useSelector } from 'react-redux'
import avatar from '../../../assets/photo/avatar.png'
import './EmProfile.css'

const EmProfile = () => {
  const employer = useSelector(state => state.employer.employer)
  console.log(employer)
  return (
    <div className="profile shadow-sm flex-fill col-11 col-md-8 my-4 mx-auto">
      <div className="mt-3 mb-5">
        <img className="avatar mx-auto d-block" src={avatar} alt="Img de profile"/>
      </div>

      <div className="d-flex w-100 mb-1 p-2 flex-column flex-sm-row rounded bg-light">
        <div className="w-50 mb-3 mb-md-0">
          <h6>Prénom</h6>
          <span>{employer.first_name}</span>
        </div>
        <div className="w-50">
          <h6>Nom</h6>
          <span>{employer.last_name}</span>
        </div>
      </div>

      {employer.company === true &&
        <div className="d-flex w-100 mb-1 p-2 flex-column flex-sm-row rounded bg-light">
          <div className="w-50 mb-3 mb-md-0">
            <h6>Entreprise</h6>
            <span>{employer.company}</span>
          </div>
          <div className="w-50">
            <h6>Adresse de l'entreprise</h6>
            <span>{employer.location}</span>
          </div>
        </div>
      }

      <div className="d-flex w-100 mb-1 p-2 flex-column flex-sm-row rounded bg-light">
        <div className="w-50 mb-3 mb-md-0">
          <h6>Adresse Email</h6>
          <span>{employer.email}</span>
        </div>
        <div className="">
          <h6>Numéro de téléphone</h6>
          <span>{employer.phone_num}</span>
        </div>
      </div>

      <div className="d-flex w-100 mb-1 p-2 flex-column flex-sm-row rounded bg-light">
        <div className="w-50 mb-3 mb-md-0">
          <h6>Ville</h6>
          <span>{employer.city}</span>
        </div>
        <div className="w-50">
          <h6>Pays</h6>
          <span>{employer.country}</span>
        </div>
      </div>


    </div>
  )
}

export default EmProfile
