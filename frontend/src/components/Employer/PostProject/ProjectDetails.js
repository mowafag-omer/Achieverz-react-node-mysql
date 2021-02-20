import React from 'react'
import './postProject.css'

const projectDetails = ({values, categories}) => {
  const name = categories.find(category => category.id === parseInt(values.sector))

  return (
    <>
    {values.project && values.description && values.sector && values.min && values.max && (
      <div>
        <hr/>
        <h5 className="pb-2">Sont-ils corrects ces détails ?</h5>
        <div className='projectSum p-2 border rounded shadow-sm p-2 border rounder'>
          <ul>
            <li>Nom de projet : {values.project}</li>
            <li>Description : {values.description}</li>
            <li>Secteur : {name.category_name}</li>
            {values.skills[0] &&
              <li className="skills">Compétences requises : 
                <ul>
                  {values.skills.map((skill, index) => skill && 
                    <li key={index}>{skill}</li>
                  )}
                </ul>
              </li>
            }
            <li>budget : {values.min}$ - {values.max}$ {values.payBy === 'hour' && ' par heur'}</li>
          </ul>
        </div>
      </div>
    )}
    </>
  )
}

export default projectDetails