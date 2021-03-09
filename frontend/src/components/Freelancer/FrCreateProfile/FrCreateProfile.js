import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useLocalStorage from '../../../assets/customHooks/useLocalStorage'
import FormProgress from './FormProgress/FormProgress'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import Experiences from './ExperiencesForm/ExperiencesForm'
import SkillForm from './SkillForm/SkillForm'
import FormPreview from './FormPreview/FormPreview'
import { frCreateProfile, AddExperiences } from '../../../store/actions/freelancerActions'

import './FrCreateProfile.css'

const userInitialValues = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  city: '',
  country: '',
  title: '',
  bio: '',
}

const skillInitialValues = {
  category: '',
  skills: ['']
}

const FrCreateProfile = (props) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)
  const freelancer = useSelector(state => state.freelancer)

  const [step, setstep] = useLocalStorage(0)
  const [userPI, setuserPI] = useLocalStorage('userPI', userInitialValues)
  const [exps, setexps] = useLocalStorage('exps', [])
  const [userskills, setuserskills] = useLocalStorage('skills', skillInitialValues)

  useEffect(() => {
    freelancer.hasNoProfile === false && props.history.push("/loading")
  })

  const handleForm = () => {

    const profileinfor = {
      fname: userPI.fname,
      lname: userPI.lname,
      email: userPI.email,
      phone: userPI.phone,
      city: userPI.city,
      country: userPI.country,
      title: userPI.title,
      bio: userPI.bio,
      category: userskills.category,
      skills: JSON.stringify(userskills.skills),
      userid: user.userId
     }

    const experiences = [...exps]
    const profile = {...profileinfor}

    setstep(0)
    setuserPI(userInitialValues)
    setexps([])
    setuserskills(skillInitialValues)
    dispatch(frCreateProfile(profile, experiences, user.token))

    props.history.push("/loading")
  }

  return (
    <div className="create-profile">
      <FormProgress step={step} setstep={setstep} />
      {
        step === 0 ? <PersonalInfo userPI={userPI} setuserPI={setuserPI} setstep={setstep} /> :
        step === 1 ? <Experiences exps={exps} setexps={setexps} setstep={setstep}/> :
        step === 2 ? <SkillForm userskills={userskills} setuserskills={setuserskills} setstep={setstep}/> :
        step === 3 && 
          <FormPreview 
            userPI={userPI} 
            exps={exps} 
            userskills={userskills} 
            setstep={setstep}
            handleForm={handleForm} 
          />
      }
    </div>
  )
}

export default FrCreateProfile
