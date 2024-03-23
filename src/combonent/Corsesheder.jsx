import React from "react";
import style from "./Corsesheder.module.css";
import mainstyle from "./main.module.css";
import cimg from "../assets/img/business-video-chat-laptop.jpg";
import timg from "../assets/img/Group 237.png";
import Boton from "./Boton";

function Corsesheder() {
  return (
    <>
      <div className={mainstyle.container}>
        <div className="container">
          <div className="row">
            <div className="text mt-4 d-flex justify-content-lg-between align-items-center">
              <h3>Welcome back, ready for your next lesson?</h3>
              <span className={mainstyle.linkes}>
                <a>View hisotry</a>
              </span>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 ">
              <div className="col">
                <div className="card border-0 h-100 d-flex justify-content-center align-items-center">
                  <img src={cimg} className={style.cardimg} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      AWS Certified Solutions Architect
                    </h5>
                    <div className="techerimg d-flex justify-content-start align-items-center">
                      <img src={timg} className={style.cardimg2} alt="" />
                      <p className="mt-2">Lina</p>
                    </div>
                    <div className={style.reat}>
                      <div className={style.reatsize}></div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <p className={style.botomtext}>Lesson 5 of 7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 h-100 d-flex justify-content-center align-items-center">
                  <img src={cimg} className={style.cardimg} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      AWS Certified Solutions Architect
                    </h5>
                    <div className="techerimg d-flex justify-content-start align-items-center">
                      <img src={timg} className={style.cardimg2} alt="" />
                      <p className="mt-2">Lina</p>
                    </div>
                    <div className={style.reat}>
                      <div className={style.reatsize}></div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <p className={style.botomtext}>Lesson 5 of 7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 h-100 d-flex justify-content-center align-items-center">
                  <img src={cimg} className={style.cardimg} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      AWS Certified Solutions Architect
                    </h5>
                    <div className="techerimg d-flex justify-content-start align-items-center">
                      <img src={timg} className={style.cardimg2} alt="" />
                      <p className="mt-2">Lina</p>
                    </div>
                    <div className={style.reat}>
                      <div className={style.reatsize}></div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <p className={style.botomtext}>Lesson 5 of 7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Boton />
          </div>
        </div>
      </div>
    </>
  );
}

export default Corsesheder;
