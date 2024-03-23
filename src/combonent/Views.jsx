import React from 'react'
import mainstyle from "./main.module.css";

import Boton from './Boton';
import Cards from './Cards';

function Views() {
  return (
   <>
     <div className={mainstyle.container}>
        <div className="container">
          <div className="row ">
            <div className="text mt-5 d-flex justify-content-lg-between align-items-center">
              <h3>Student are viewing</h3>
              <span className={mainstyle.linkes}>
                <a>View hisotry</a>
              </span>
            </div>

          
            <Cards />
          </div>
        </div>
      </div>
   </>
  )
}

export default Views