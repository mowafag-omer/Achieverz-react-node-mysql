import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'

const Loading = (props) => {
  const user = useSelector(state => state.auth)
  const employer = useSelector(state => state.employer)
  const projects = useSelector(state => state.projects.loaded)
  const freelancer = useSelector(state => state.freelancer)

  useEffect(() => {
    !user.isAuthenticated && props.history.push("/")
  })

  return (
    <div className="w-100 d-flex justify-content-center" style={{minHeight: '74vh'}}>
      {
        employer.hasNoProfile ? props.history.push("/emCreateProfile") :
        freelancer.hasNoProfile ? props.history.push("/frCreateProfile") :
        user.loaded && employer.loaded && projects && user.type === 'employer' ?
        props.history.push("/EmployerDashboard") : 
        user.loaded && freelancer.profileLoaded && user.type === 'freelancer' ?
        props.history.push("/freelancerDashboard") :
        <Spinner className="my-auto" animation="grow" />
      } 
    </div>
  )
}

export default Loading