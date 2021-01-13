import React, { useEffect } from 'react'
import { Navbar, Nav, Card } from 'react-bootstrap'

export const EmployerDashboard = (props) => {
  const employer = useSelector(state => state.employer)

  useEffect(() => {
    employer.hasNoProfile && props.history.push("/createEmProfile")
  })

  return (
    <>

    </>
  )
}

export default EmployerDashboard