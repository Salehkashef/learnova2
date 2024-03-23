import React from "react";
import mainstyle from "./main.module.css";

function Boton() {
  return (
    <>
      <div className="botons d-flex justify-content-end mb-4">
        <button className={mainstyle.btnn}>
          <i class="fa-solid fa-less-than"></i>
        </button>
        <button className={mainstyle.btnn}>
          <i class="fa-solid fa-greater-than"></i>
        </button>
      </div>
    </>
  );
}

export default Boton;
