import React, { useState } from 'react'
import FormProgress from './FormProgress/FormProgress'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import './FrCreateProfile.css'

const FrCreateProfile = () => {
  const [step, setstep] = useState(0)

  return (
    <div className="create-profile">
      <FormProgress step={step} setstep={setstep} />
      <PersonalInfo />
    </div>
  )
}

export default FrCreateProfile
