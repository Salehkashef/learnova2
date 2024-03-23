import React, { useEffect } from "react";
import wep from "../assets/img/continuous_8759173.png";
import art from "../assets/img/art_1756784.png";
import mark from "../assets/img/stock-market_3713756.png";
import des from "../assets/img/curve_2939047.png";
import style from "./TopCategoroes.module.css";


function TopCategoroes() {
  return (
    <>
      <section className="top-category container  mt-5 align-items-center">
        <h1 className="text-center">our top categoroes</h1>
        <div className="text ">
          <p className="text-center mt-4">
            Stay at the forefront of technological advancements with our
            comprehensive rangeof courses in technology <br />
            and IT. From coding and programming languages to cybersecurity and
            data science, our expert-led courses <br />
            ensure you're equipped with the skills demanded by the rapidly
            evolving digital landscape.
          </p>
        </div>
        <div className="cards ">
          <div className="row mt-4">
            <div
              className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded ms-3 text-center"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <div className="w-25 shadow rounded-circle p-3 mb-2 bg-body-tertiary mx-auto d-flex justify-content-center align-items-center">
                  <img className={style.timgi} src={wep} alt="" />
                </div>
                <h5 className="card-title">Devolopment</h5>
                <a
                  className="nav-link active ms-3 me-3"
                  aria-current="page"
                  href="#"
                >
                  view more..
                </a>
              </div>
            </div>
            <div
              className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded ms-3 text-center"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <div className="w-25 shadow rounded-circle p-3 mb-2 bg-body-tertiary mx-auto d-flex justify-content-center align-items-center">
                  <img className={style.timgi} src={des} alt="" />
                </div>
                <h5 className="card-title">Design</h5>
                <a
                  className="nav-link active ms-3 me-3"
                  aria-current="page"
                  href="#"
                >
                  view more..
                </a>
              </div>
            </div>
            <div
              className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded ms-3 text-center"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <div className="w-25 shadow rounded-circle p-3 mb-2 bg-body-tertiary mx-auto d-flex justify-content-center align-items-center">
                  <img className={style.timgi} src={art} alt="" />
                </div>
                <h5 className="card-title">Art &amp; Culture</h5>
                <a
                  className="nav-link active ms-3 me-3"
                  aria-current="page"
                  href="#"
                >
                  view more..
                </a>
              </div>
            </div>
            <div
              className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded ms-3 text-center"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <div className="w-25 shadow rounded-circle p-3 mb-2 bg-body-tertiary mx-auto d-flex justify-content-center align-items-center">
                  <img className={style.timgi} src={mark} alt="" />
                </div>
                <h5 className="card-title">markting</h5>
                <a
                  className="nav-link active ms-3 me-3"
                  aria-current="page"
                  href="#"
                >
                  view more..
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopCategoroes;
