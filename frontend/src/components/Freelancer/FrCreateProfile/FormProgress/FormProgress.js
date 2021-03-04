import React from 'react'
import { Check2 } from 'react-bootstrap-icons'
import './FormProgress.css'

const FormProgress = ({step, setstep}) => {

  return (
    <div className="form-progress position-relative d-flex justify-content-between col-11 col-md-7 mx-auto my-4">
      <div className="form-steps">
        <div className="bar-progress" style={{width: `${step * 32}%`}}></div>
      </div>
      <button 
        type="button" 
        onClick={() => setstep(0)}
        className={`translate-middle btn rounded-pill ${step===0?'active':'done'}`}
      >
        1
      </button>
        
      <button 
        type="button" 
        onClick={() => setstep(1)}
        className={`translate-middle btn rounded-pill ${step===1&&'active'} ${step>1&&'done'}`}
      >
        2
      </button>

      <button 
        type="button" 
        onClick={() => setstep(2)}
        className={`translate-middle btn rounded-pill ${step===2&&'active'} ${step>2&&'done'}`}
      >
        3
      </button>
      
      <button 
        type="button" 
        onClick={() => setstep(3)}
        className={`translate-middle btn rounded-pill ${step===3&&'active'} ${step>3&&'done'}`}
      >
        {step === 3 ? <Check2 /> : 4}
      </button>
    </div>
  )
}

export default FormProgress