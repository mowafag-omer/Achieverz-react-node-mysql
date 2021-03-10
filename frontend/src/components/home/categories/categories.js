import React from 'react'
import './categories.css'

const Categories = () => {
  return (
    <div className="container categories">
      <h4 className="text-center py-3 mx-auto">Catégories</h4>
      <div className="categories-content row justify-content-center">
      {[
        'Développement web',
        'Apps & Mobile',
        'UI / UX / Design',
        'Programmation et logiciel',
        'Conception et administration de bases de données',
        'Réseau et administrateur système',
      ].map((e, i) => 
        <div key={i} className="shadow-sm col-10 col-md-5 col-lg-3 border border-5 rounded m-3">
          <h6 className="text-center mt-5 p-1">{e}</h6>
        </div>
      )}
    </div>
    </div>
   
  )
}

export default Categories