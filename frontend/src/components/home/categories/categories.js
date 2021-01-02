import React from 'react'
import './categories.css'

const Categories = () => {
  return (
    <div className="categories d-flex flex-wrap justify-content-center">
      {[
        'Web Development',
        'Apps & Mobile',
        'UI / UX / Design',
        'Programming & Software',
        'Database Design & Administration',
        'Networking Hardware & System Admin',
      ].map((e, i) => 
        <div key={i} className="shadow-sm border border-5 rounded m-3">
          <h6 className="text-center mt-5 p-1">{e}</h6>
        </div>
      )}
    </div>
  )
}

export default Categories