import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'

const Loading = (props) => {
  const user = useSelector(state => state.auth.loaded)
  const employer = useSelector(state => state.employer.loaded)
  const projects = useSelector(state => state.projects.loaded)

  return (
    <div className="w-100 d-flex justify-content-center" style={{minHeight: '74vh'}}>
      {user && employer && projects ?  
        props.history.push("/EmployerDashboard"): 
        <Spinner className="my-auto" animation="grow" />
      } 
    </div>
  )
}

export default Loading