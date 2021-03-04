import React from 'react'
import { useSelector } from 'react-redux'
import { PencilSquare } from 'react-bootstrap-icons'

const SkillsPreview = ({userskills, setstep}) => {
  const categories = useSelector(state => state.projects.categories)
  const categoryName = categories.filter(c => parseInt(userskills.category) === c.id )[0].category_name

  return (
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between">
        <h5>Compétences</h5>
        <PencilSquare size={25} onClick={() => setstep(2)} />
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
            {userskills.skills.map((skill, index) => 
              <div key={index} className="w-75 py-1 px-2 mb-2 bg-light rounded">{skill}</div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default SkillsPreview
