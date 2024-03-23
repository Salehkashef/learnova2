import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import img from "../assets/img/download.jpeg";
import mainstyle from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import { getCategoryCourses } from "../Redux/slices/catCourseSlice";

function CategoryCourse() {
  const location = useLocation();
  const dispatch = useDispatch();
  const categoryData = location.state;
  console.log(categoryData);
  const courses = useSelector(
    (state) => state.CategoryCourseReducer.courses.Course
  );
  const total = useSelector(
    (state) => state.CategoryCourseReducer.courses.Total
  );
  const users = useSelector(
    (state) => state.CategoryCourseReducer.courses.User
  );
  console.log(users);
  const categories = useSelector(
    (state) => state.CategoryCourseReducer.courses.Category
  );
  console.log(total);
  const [page, setPage] = useState(1);
  const limit = 3;
  const id = categoryData._id;

  useEffect(() => {
    dispatch(getCategoryCourses({ id, page, limit }));
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <div>
        <section className="w-100">
          <div className="container">
            <div className="row mt-4 justify-content-center text-aline ">
              <div className="col-6">
                <p>The School Of</p>
                <h1>{categoryData.name}</h1>
                <p className="fs-5">{categoryData.description}</p>
              </div>
              <div className="col-6 align-items-center text-center  mt-5">
                <img
                  src={`http://localhost:4000/imgs/${categoryData.CatImg}`}
                  alt={categoryData.name}
                  className="w-75"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="text mt-4 d-flex justify-content-between align-items-center">
                <h3>Get choice {`${categoryData.name}`} course</h3>
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
              <ul className="pagination">
                <li className="page-item">
                  <button
                    className={page === 1 ? "d-none" : "page-link"}
                    onClick={handlePrevPage}
                    disabled={page === 1}
                  >
                    Prev
                  </button>
                </li>
                <span>Page {page}</span>
                <li className="page-item">
                  <button
                    className={page * limit >= total ? "d-none" : "page-link"}
                    onClick={handleNextPage}
                    disabled={page * limit >= total}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CategoryCourse;
