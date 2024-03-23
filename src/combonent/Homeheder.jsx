import React from 'react'
import img from "../assets/img/3974104.jpg"
import { NavLink } from 'react-router-dom';
import style from "./Homeheder.module.css";

function Homeheder() {
  return (
    <>
    <section className="home ms-5  mt-5">
<div className="container">
  <div className="row">
    <div className="col-6 mt-5">
      <h1 className="">
        Our expertly curated <br />
        content is designed to <br />
        cater to learners at
        <br />
        different skill levels.
      </h1>
      <p>
        we believe in the transformative power of education. Our mission is to
        make learning accessible, engaging and personalized for each
        individual, regardless of their origin or location. We are
        committed to creating a global community of learners who can
        thrive in the digital age.
      </p>
      <button className={style.btn} >
        <NavLink className="nav-link active" to="/corses"> Get started</NavLink>
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
    </>
  )
}

export default Homeheder