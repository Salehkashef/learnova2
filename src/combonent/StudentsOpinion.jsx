import React from 'react'
import style from './StudentsOpinion.module.css'
import img from "../assets/img/happy-confident-male-entrepreneur-with-postive-smile-has-beard-mustache-keeps-arms-folded-being-high-spirit-after-successful-meeting-with-partners-poses-against-white-wall-dressed-casually.jpg"
import Boton from './Boton'

function StudentsOpinion() {
  return (
    <>
    <section className="container">
  <h1 className='text-center'>
    What students say <br /> about us
  </h1>
  <div >
    <div className={style.container}>
      <div className=" mt-5">
      <img className={style.img1}  src={img} />
      </div>
      <div >
        <p className={style.text}>
        Figma ipsum component variant main layer. Community pencil bold variant edit rotate main <br />
        variant stroke. Flatten component slice move draft flows inspect. Inspect scale undo arrow <br />
        export union object selection text star. Duplicate list group pencil scrolling thumbnail undo.
        </p>
        <span className={style.studen}>name</span>
        <div className="botons d-flex justify-content-end mb-4">
        <button className={style.btnn}>
          <i class="fa-solid fa-less-than"></i>
        </button>
        <button className={style.btnn}>
          <i class="fa-solid fa-greater-than"></i>
        </button>
      </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default StudentsOpinion