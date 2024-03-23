import React from "react";
import mainstyle from "./main.module.css";

function Online() {
  return (
    <div className="container">
    <div className="row mt-3">
    <div className={mainstyle.online}>
      <div className="text ">
      <h2 className="mt-4">Online coaching lessons for remote learning.</h2>
      <p className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempos Lorem ipsum dolor <br /> sitamet, consectetur adipiscing elit, sed do
        eiusmod tempor
      </p>
      </div>
      <button className={mainstyle.onlinebtn}>Start learning now</button>
    </div>
    </div>
    </div>
  );
}

export default Online;
