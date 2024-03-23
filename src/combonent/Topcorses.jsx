import React from "react";
import style from "./Corsesheder.module.css";
import mainstyle from "./main.module.css";
import Boton from "./Boton";
import Cards from "./Cards";

function Topcorses() {
  return (
    <>
      <div className={mainstyle.container}>
        <div className="container">
          <div className="row">
            <div className="text mt-4 d-flex justify-content-lg-between align-items-center">
              <h3>Recommended for you</h3>
              <span className={mainstyle.linkes}>
                <a>View hisotry</a>
              </span>
            </div>

            {/* <Cards /> */}
            {/* <Boton /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Topcorses;
