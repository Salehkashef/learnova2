import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendation } from "../Redux/slices/RecomendationSlice";
import Cards from "./Cards";
import mainstyle from "./main.module.css";
function Recommendation() {
  const UserId = localStorage.getItem("userID");
  const dispatch = useDispatch();
  const courseItems = useSelector(
    (state) => state.RecommendationReducer.courseData.Course || []
  );
  console.log(courseItems);
  const usersData = useSelector(
    (state) => state.RecommendationReducer.courseData.User || []
  );
  const categoriesData = useSelector(
    (state) => state.RecommendationReducer.courseData.Category || []
  );

  useEffect(() => {
    dispatch(getRecommendation(UserId));
  }, [dispatch]);

  if (!courseItems.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="text mt-4 d-flex justify-content-between align-items-center">
            <h3>🌟 Explore Personalized Recommendations Just for You</h3>
            <span className={mainstyle.linkes}>
              <a href="#">View History</a>
            </span>
          </div>
          {courseItems.map((item, index) => (
            <div key={item.id} className="col-md-4 mb-4 m-auto ">
              <Cards
                data={item}
                user={usersData[index]}
                category={categoriesData[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Recommendation;
