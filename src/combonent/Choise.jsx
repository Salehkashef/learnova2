import React, { useEffect } from "react";
import mainstyle from "./main.module.css";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../Redux/slices/courseslice";

function Choise() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.CourseReducer.courses.Course);
  const total = useSelector((state) => state.CourseReducer.courses.Total);
  console.log(total);

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="text mt-4 d-flex justify-content-between align-items-center">
          <h3>Get choice of your course</h3>
          <span className={mainstyle.linkes}>
            <a href="#">View history</a>
          </span>
        </div>
        {courses && courses.map((item) => <Cards data={item} />)}
      </div>
    </div>
  );
}

export default Choise;
