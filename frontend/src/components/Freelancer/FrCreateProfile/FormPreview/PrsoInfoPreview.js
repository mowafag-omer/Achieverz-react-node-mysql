import React from 'react'
import { PencilSquare } from 'react-bootstrap-icons'

const PrsoInfoPreview = ({userPI, setstep}) => {
  return (
    <div className="card mb-4">
        <div className="card-header d-flex justify-content-between">
          <h5>Informations Personnelles</h5>
          <PencilSquare size={25} onClick={() => setstep(0)} />
        </div>
        <div className="card-body">        
          <div className="d-flex w-100 mb-3 pb-1 justify-content-between border-bottom">
            <div className="mx-1 w-50">
              <h6>Prénom</h6>
              <span>{userPI.fname}</span>
            </div>
            <div className="mx-1 w-50">
              <h6>Nom</h6>
              <span>{userPI.lname}</span>
            </div>
          </div>

          <div className="d-flex w-100 mb-3 pb-1 justify-content-between border-bottom">
            <div className="mx-1 w-50">
              <h6>Adresse Email</h6>
              <span>{userPI.email}</span>
            </div>
            <div className="mx-1 w-50">
              <h6>Numéro de téléphone</h6>
              <span>{userPI.phone}</span>
            </div>
          </div>

          <div className="d-flex w-100 mb-3 pb-1 justify-content-between border-bottom">
            <div className="mx-1 w-50">
              <h6>Ville</h6>
              <span>{userPI.city}</span>
            </div>
            <div className="mx-1 w-50">
              <h6>Pays</h6>
              <span>{userPI.country}</span>
            </div>
          </div>

          <div className="d-flex w-100 mb-3 pb-1 justify-content-between border-bottom">
            <div className="mx-1 w-50">
                <h6>Titre de profil</h6>
                <span>{userPI.title}</span>
            </div>
          </div>

          <div className="d-flex w-100 mb-3 pb-1 justify-content-between border-bottom">
            <div className="mx-1 w-100">
                <h6>bio</h6>
                <span>{userPI.bio}</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PrsoInfoPreview
