import React, { useEffect } from "react";
import Cards from "./Cards";
import mainstyle from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedCourse } from "../Redux/slices/RelatedSlice";

function Markting({ data }) {
  console.log(data);
  const dispatcher = useDispatch();
  const courses = useSelector((state) => state.RelateReducer.courses.Course);

  const users = useSelector((state) => state.RelateReducer.courses.User);
  console.log(users);
  const categories = useSelector(
    (state) => state.RelateReducer.courses.Category
  );

  useEffect(() => {
    dispatcher(getRelatedCourse(data));
  }, [dispatcher]);
  return (
    <>
      <div className={mainstyle.container}>
        <div className="container">
          <div className="row">
            <div className="text mt-4 d-flex justify-content-lg-between align-items-center">
              <h3>Marketing Articles</h3>
            </div>

            {courses &&
              courses.map((item, index) => (
                <div key={item.id} className="col-md-4 mb-4 m-auto ">
                  <Cards
                    data={item}
                    user={users[index]}
                    category={categories[index]}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Markting;
