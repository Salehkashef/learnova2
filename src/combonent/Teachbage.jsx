import React from 'react'
import img from '../assets/img/3784896.png'
import style from './Teachbage.module.css'
import { NavLink } from 'react-router-dom'
import img1 from '../assets/img/online-learning_2436805.png'
import img2 from '../assets/img/knowledge_11532604.png'
import img3 from '../assets/img/elearning_10282691.png'

function Teachbage() {
  return (
   <>
       <section className="home ms-5  mt-5 mb-5">
<div className="container">
  <div className="row">
    <div className="col-5 mx-4 mt-5">
      <h1 className={`ms-4 ${style.headtext}`}>
      Come teach <br />
       with us
      </h1>
      <p className='ms-4'>
      Become an instructor and change <br /> lives — including your own
      </p>
      <button className={`ms-4 mt- ${style.btn}`} >
        <NavLink className="nav-link active" to="/Register"> Get started</NavLink>
      </button>
      {/* <button className="btn btn-outline-dark ms-3 " type="submit">
        Discover
      </button> */}
    </div>
    <div className="col-6">
      <img className={style.img1}  src={img} />
    </div>
  </div>
</div>
</section>

<section className="top-category container  mt-5 mb-4 align-items-center">
        <h1 className={`text-center ${style.hedtext}`}>So many reasons to start</h1>
        <div className="row">
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className={`card text-center ${style.card}`}>
      <div className={`card-body  ${style.body}`}>
        <img src={img1} alt="" className={` ${style.cardimg} `} />
        <h2 className={`card-title ${style.text}`}>Flexibility of time and place</h2>
        <p className="card-text">
        E-learning allows students and teachers to be flexible in determining the times and places in which they participate in the learning and teaching process.
        </p>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className={`card text-center ${style.card}`}>
      <div className={`card-body ${style.body}`}>
      <img src={img2} alt="" className={style.cardimg} />
        <h2 className={`card-title ${style.text}`}>Innovation and Continuous Development</h2>
        <p className="card-text">
        E-learning provides an ideal environment for testing and continuous application of innovations in education.
        </p>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className={`card text-center ${style.card}`}>
      <div className={`card-body ${style.body}`}>
      <img src={img3} alt="" className={style.cardimg} />
        <h2 className={`card-title ${style.text}`}>Expansion of access</h2>
        <p className="card-text">
        e-learning can reach a wider audience of students in different places and conditions.
        </p>
      </div>
    </div>
  </div>
</div>

      </section>
   </>
  )
}

export default Teachbage