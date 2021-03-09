import React from 'react'
import PrsoInfoPreview from './PrsoInfoPreview'
import FormExPreview from './FormExPreview'
import SkillsPreview from './SkillsPreview'

const FrFormPreview = ({userPI, exps, userskills, setstep, handleForm}) => {

  return (
    <div className="frPreview col-11 col-md-8 mx-auto p-3 my-4 rounded shadow">
      <h3 className="text-center">Résumé</h3>
      <hr className="w-100"></hr>

      <PrsoInfoPreview userPI={userPI} setstep={setstep} />
      {exps.length > 0 && <FormExPreview exps={exps} setstep={setstep}/>}
      {userskills.category && userskills.skills[0] && <SkillsPreview userskills={userskills} setstep={setstep} />}
      
      <div className="form-btn mt-2 d-flex">
       < button 
          type='submit' 
          className="btn mx-auto" 
          style={{width:'18%'}}
          onClick={handleForm}
        >
          Valider
        </button>
      </div>

      <hr className="w-100"></hr>
      <div className="mt-2 d-flex">
      < button className="btn mr-auto" type='button' onClick={()=> setstep(2)}>Précédent</button>
      </div>
    </div>
  )
}

export default FrFormPreview
