/* eslint-disable no-unused-vars */
import React from 'react'
import Details from './Details'
import SideNav2 from './SideNav2'

function Profile() {
  return (
    <>
          <div className="contanit">
        <div className="row">
          <div className="col-md-3">
          <SideNav2/>
          </div>
          <div className="col-md-8">
          <Details />
          </div>
          </div>
          </div>
 
    </>
  )
}

export default Profile