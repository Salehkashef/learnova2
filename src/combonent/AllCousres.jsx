import React, { useEffect, useState } from "react";
import mainstyle from "./main.module.css";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../Redux/slices/courseslice";

function AllCourses() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.CourseReducer.courses.Course);
  const total = useSelector((state) => state.CourseReducer.courses.Total);
  const users = useSelector((state) => state.CourseReducer.courses.User);
  const categories = useSelector(
    (state) => state.CourseReducer.courses.Category
  );
  console.log(categories);

  const [page, setPage] = useState(1);
  const limit = 3;

  useEffect(() => {
    dispatch(getCourses({ page, limit }));
  }, [dispatch, page, limit]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const getCardMargin = () => {
    const numCards = courses.length;
    if (numCards === 1) return "auto";
    if (numCards < 4) return "1rem";
    return "0.5rem";
  };

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="text mt-4 d-flex justify-content-between align-items-center">
          <h3>Get choice of your course</h3>
        </div>
        <div className="d-flex ">
          {courses &&
            courses.map((item, index) => (
              <div
                key={item.id}
                className="col-sm-12 col-md-6 col-lg-3  mb-4 m-auto  "
                style={{ margin: getCardMargin() }}
              >
                <Cards
                  data={item}
                  user={users[index]}
                  category={categories[index]}
                />
              </div>
            ))}
        </div>
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
       <button
              className={page === 1 ? "d-none" : "page-link"}
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              Prev
        </button>
      </li>
    <li class="page-item "><span className="page-link">Page {page}</span></li>
    <li class="page-item">   
       <button
              className={total <= page * limit ? "d-none" : "page-link"}
              onClick={handleNextPage}
              disabled={total <= page * limit}
            >
              Next
        </button>
      </li>
  </ul>
</nav>
        {/* <ul className="pagination">
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
              className={total <= page * limit ? "d-none" : "page-link"}
              onClick={handleNextPage}
              disabled={total <= page * limit}
            >
              Next
            </button>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default AllCourses;
