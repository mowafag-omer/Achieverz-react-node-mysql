import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GeoAlt, Search } from 'react-bootstrap-icons'
import avatar from '../../../assets/photo/avatar.png'

const Employers = () => {
  const profiles = useSelector(state => state.employer.profiles)

  return (
    <div className="freelancers p-4 flex-fill w-100">
      <h3 className="page-title  pl-2">Employeurs</h3>
      {profiles.length > 0 && profiles.map(profile => 
        <div className="card shadow-sm w-100 m-4 p-0 col-12 col-md-9 mx-auto">
          <div class="card-header d-flex flex-column flex-sm-row flex-wrap align-items-center">
            <img className="avatar mr-0 mr-sm-3" src={avatar} width="80" alt="Img de profile"/>
            <div className="mt-2">
              <h6 className="ml-2 m-0">
                {profile.first_name} &nbsp;
                {profile.first_name}
              </h6>
            </div>
          </div>  
          <div className="card-body"> 
            {profile.company === true &&
              <div className="d-flex w-100 mb-1 p-2 flex-column flex-sm-row rounded">
                <div className="w-50 mb-3 mb-md-0">
                  <h6>Entreprise</h6>
                  <span>{profile.company}</span>
                </div>
                <div className="w-50">
                  <h6>Adresse de l'entreprise</h6>
                  <span>{profile.location}</span>
                </div>
              </div>
            }

            <div className="d-flex w-100 mb-1 flex-column flex-sm-row rounded">
              <div className="w-50 mb-3 mb-md-0">
                <h6>Adresse Email</h6>
                <span>{profile.email}</span>
              </div>
              <div className="">
                <h6>Numéro de téléphone</h6>
                <span>{profile.phone_num}</span>
              </div>
            </div>

            <div className="d-flex w-100 mb-1 p-2 flex-column flex-sm-row rounded">
              <div className="w-50 mb-3 mb-md-0">
                <h6>Ville</h6>
                <span>{profile.city}</span>
              </div>
              <div className="w-50">
                <h6>Pays</h6>
                <span>{profile.country}</span>
              </div>
            </div>
          
          </div>
        </div>
      )}     
    </div>
  )
}

export default Employers
