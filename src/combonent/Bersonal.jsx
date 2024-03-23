import React from 'react'
import mainstyle from "./main.module.css";
import Cards from './Cards';

function Bersonal() {
  return (
    <>
        <div className="container">
          <div className="row">
            <div className="text mt-4 d-flex justify-content-lg-between align-items-center">
              <h3>The course in personal development</h3>
              <span className={mainstyle.linkes}>
                <a>View hisotry</a>
              </span>
            </div>

          
            <Cards />

             
          </div>
        </div>
    </>
  )
}

export default Bersonal