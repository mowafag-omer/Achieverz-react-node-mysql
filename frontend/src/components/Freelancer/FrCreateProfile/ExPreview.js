import React from 'react'
import {X} from 'react-bootstrap-icons'

const ExPreview = ({exps, deleteExp}) => {
  return (
    <div className="d-flex flex-column mt-4">
        {exps.map((exp, index) => 
          <ul className="w-100 list-group list-group-flush shadow-sm p-2 mb-3 mx-auto border rounded">
            <li className="list-group-item d-flex justify-content-between">
              <h5>{exp.title}</h5> 
              {deleteExp && <X size={30} onClick={() => deleteExp(index)} />}
            </li>
            <li className="list-group-item"><b>{exp.employer}</b><br/> 
            <span>{exp.fdate} - {exp.tdate ? exp.tdate : 'presente'}</span>
            </li>
            <li className="list-group-item">{exp.description}</li>
          </ul>
        )}
      </div>
  )
}

export default ExPreview
