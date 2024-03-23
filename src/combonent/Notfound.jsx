import React from 'react'
import notfound from "../assets/img/7.png";
import waves from "../assets/img/wavesOpacity.svg";
import style from "./Notfound.module.css";


function Notfound() {
  return (
    <>
    <section className="home ms-5  mt-3  ">
<div className="container">
  <div className="row">
    <div className={`col-5 mt-5 mx-4`}>
      <h3 className='mb-4'>
        404 Not Found
      </h3 >
      <h1 className={`mb-3 ${style.text}`}>i have bad <br /> news for you</h1>
      <p>
        the page you are looking for might be <br />
        removed or is temporarily undavailoble
      
      </p>
    </div>
    <div className="col-6">
      <img className={style.img1}  src={notfound} />
    </div>
  </div>
</div>
</section>
<img src={waves} className='w-100'  />
    </>
  )
}

export default Notfound