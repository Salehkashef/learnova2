import React, { useState } from "react";
import CoursePlay from "./CoursePlay";
import Lessons from "./Lessons";
import Quiz from "./Quiz";
import StarRating from "./StarRating";
import { useLocation } from "react-router-dom";

function CourseView() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const location = useLocation();
  const courseData = location.state;
  console.log(courseData);

  const handleLessonSelection = (lesson) => {
    setSelectedLesson(lesson);
  };

  return (
    <>
      <div className="row row-col-2" style={{ width: "100%" }}>
        <div className="col-4 lessons">
          <p
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              margin: "20px 0px 0px 20px",
            }}
          >
            Course Content
          </p>
          <Lessons onLessonSelect={handleLessonSelection} Course={courseData} />
          <Quiz Course={courseData} />
        </div>

        <div
          className="offset-1 col-7 "
          style={{ backgroundColor: "#9dccff3e" }}
        >
          {selectedLesson && (
            <CoursePlay lesson={selectedLesson} Course={courseData} />
          )}

          <StarRating courseId={courseData._id} />
        </div>
      </div>
    </>
  );
}

export default CourseView;
