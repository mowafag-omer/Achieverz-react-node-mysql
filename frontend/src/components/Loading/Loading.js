import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'

const Loading = (props) => {
  const user = useSelector(state => state.auth)
  const employer = useSelector(state => state.employer.loaded)
  const projects = useSelector(state => state.projects.loaded)
  const freelancer = useSelector(state => state.freelancer.profileLoaded)

  useEffect(() => {
    !user.isAuthenticated && props.history.push("/")
  })

  return (
    <div className="w-100 d-flex justify-content-center" style={{minHeight: '74vh'}}>
      {
        user.loaded && employer && projects && user.type === 'employer' ?
        props.history.push("/EmployerDashboard") : 
        user.loaded && freelancer && user.type === 'freelancer' ?
        props.history.push("/freelancerDashboard") :
        <Spinner className="my-auto" animation="grow" />
      } 
    </div>
  )
}

export default Loading