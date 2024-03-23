import React from "react";
import Corsdetelshed from "./Corsdetelshed";
import Topoffer from "./Topoffer";
import About from "./About";
import Markting from "./Markting";
import { useLocation } from "react-router-dom";

function Corsdetels() {
  const location = useLocation();
  const courseData = location.state;
  return (
    <>
      <Corsdetelshed data={courseData} />
      {/* <Markting data={courseData._id} /> */}
      <About />
      <Topoffer />
    </>
  );
}

export default Corsdetels;
