import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const FreelancerDashboard = (props) => {
  const freelancer = useSelector(state => state.freelancer)

  useEffect(() => {
    // freelancer.hasNoProfile && props.history.push("/frcreateProfile")
  })

  return (
    <div>
      <ha>Dashbord</ha>
    </div>
  )
}

export default FreelancerDashboard
