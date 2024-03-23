import { useState, useEffect } from "react";
import "./StarRating.css";
import axiosInstance from "../Axios/interceptor";
import PropTypes from "prop-types";

const StarRating = ({ courseId }) => {
  const UserId = localStorage.getItem("userID");
  const [lessonRating, setLessonRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [existingRating, setExistingRating] = useState(null);
  const [fetchedRating, setFetchedRating] = useState(false);

  useEffect(() => {
    const fetchExistingRating = async () => {
      try {
        const response = await axiosInstance.get(
          `http://localhost:4000/course/rating/${courseId}/${UserId}`
        );
        console.log(response);
        setExistingRating(response.data.rating || 0);
        setFetchedRating(true);
        setLessonRating(response.data.rating || 0); // Set the lesson rating if it exists or 0
      } catch (error) {
        console.error("Error fetching existing rating:", error);
      }
    };

    fetchExistingRating();
  }, [courseId, UserId]);

  const handleStarClick = async (value) => {
    try {
      const response = await axiosInstance.post(
        `http://localhost:4000/course/rating/`,
        {
          courseId: courseId,
          rating: value,
          userId: UserId,
        }
      );
      console.log(response);
      setExistingRating(value);
      setLessonRating(value);
    } catch (error) {
      console.error("Error setting rating:", error);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="lesson-rating"
              value={starValue}
              checked={starValue === lessonRating}
              readOnly={true}
            />
            <span
              className={
                hoveredRating >= starValue ||
                lessonRating >= starValue ||
                (fetchedRating && existingRating && starValue <= existingRating)
                  ? "active"
                  : ""
              }
              onClick={() => handleStarClick(starValue)}
              onMouseEnter={() => setHoveredRating(starValue)}
              onMouseLeave={() => setHoveredRating(0)}
            >
              ★
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
