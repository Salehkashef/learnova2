import React from "react";
import style from "./Topoffer.module.css";
import mainstyle from "./main.module.css";

function Topoffer() {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="text mt-4 d-flex justify-content-lg-between align-items-center">
              <h3>Top Education offers and deals are listed here</h3>
              <span className={mainstyle.linkes}>
                <a>View hisotry</a>
              </span>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 ">
              <div className="col">
                <div className={style.cardimg}>
                <div className={style.offer}>
                    <p className="mt-3">50%</p>
                  </div>
                  <div className={style.text}>
                    <h3>
                    FOR INSTRUCTORS
                    </h3>
                    <p>
                    TOTC’s school management <br />software helps traditional and <br /> online schools manage <br /> scheduling,
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={style.cardimg}>
                <div className={style.offer}>
                    <p className="mt-3">50%</p>
                  </div>
                  <div className={style.text}>
                    <h3>
                    FOR INSTRUCTORS
                    </h3>
                    <p>
                    TOTC’s school management <br />software helps traditional and <br /> online schools manage <br /> scheduling,
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={style.cardimg}>
                <div className={style.offer}>
                    <p className="mt-3">50%</p>
                  </div>
                  <div className={style.text}>
                    <h3>
                    FOR INSTRUCTORS
                    </h3>
                    <p>
                    TOTC’s school management <br />software helps traditional and <br /> online schools manage <br /> scheduling,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topoffer;
