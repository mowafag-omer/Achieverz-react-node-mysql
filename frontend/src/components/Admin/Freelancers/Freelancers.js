import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GeoAlt, Search } from 'react-bootstrap-icons'
import avatar from '../../../assets/photo/avatar.png'
import './Freelancers'



const Freelancers = () => {
  const freelancer = useSelector(state => state.freelancer)
  const projects = useSelector(state => state.projects)
  const cateName = (id) => projects.categories.filter(c => c.id === parseInt(id))[0].category_name 
  console.log(freelancer.allprofiles[0]);
  const getSkills = (inputs) => {
    if(JSON.parse(inputs)[0]){
      const skills = JSON.parse(inputs)
      return skills
    } else {
      return false
    }
  }

  return (
    <div className="freelancers p-4 flex-fill w-100">
      <h3 className="page-title pl-2">Freelances</h3>
      <div className="p-4 w-100 col-12 col-md-9 mx-auto">
        {freelancer.allprofiles.length > 0 && freelancer.allprofiles.map(profile => 
          <Link 
            className="link d-link"
            to={{
              pathname: "/Afrprofile",
              state: {frProfile: profile, category: cateName(profile.category), skills: getSkills(profile.skills) }
            }} 
          >
            <div key={profile.id} className="card shadow-sm pointer mb-3">
              <div class="card-header p-2 d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <img className="avatar mr-0 mr-sm-3" src={avatar} width="80" alt="Img de profile"/>
                <div className="mt-2">
                  <h6 className="ml-2 m-0">
                    {profile.first_name} &nbsp;
                    {profile.first_name}
                  </h6>
                  <h6 className="ml-2 m-0 mt-2 text-center text-sm-left">{profile.profile_title}</h6>
                  <span className="mr-0 mr-sm-3 mt-2 d-block"><GeoAlt size={20} className="pb-1" />Paris, France</span>
                </div>
              </div>
              <div className="card-body">
              <h6>Domaine</h6>
              <p class="card-text">{cateName(profile.category)}</p>

              <h6>Compétences requises</h6>
              <div className="mt-3 d-flex flex-wrap">
                      {getSkills(profile.skills) !== false ?
                        getSkills(profile.skills).map((skill, index) => 
                          <span key={index} className="text-center mr-1 mt-1 mt-md-0 py-1 px-2 border border-2"> {skill}</span>
                        ) : 
                        <p>Aucune compétence requise</p>
                      }
                    </div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Freelancers
