import React from 'react'
import { PencilSquare } from 'react-bootstrap-icons'
import ExPreview from '../ExPreview'

const ExpPreview = ({exps, setstep}) => {
  return (
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between">
        <h5>Expériences</h5>
        <PencilSquare size={25} onClick={() => setstep(1)} />
      </div>
      <div className="card-body">        
        <ExPreview exps={exps} />
      </div>
    </div>
  )
}

export default ExpPreview
