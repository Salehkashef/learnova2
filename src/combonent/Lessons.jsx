import React, { useEffect, useState } from "react";
import axiosInstance from "../Axios/interceptor";
import "./Lessons.css";

function Lessons({ onLessonSelect, Course }) {
  console.log(Course);
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    try {
      const response = await axiosInstance.get(
        `http://localhost:4000/lesson/course/${Course._id}`
      );
      setLessons(response.data.data);
    } catch (error) {
      console.error("Error fetching lessons:", error);
    }
  };
  if (selectedLesson == null) {
    onLessonSelect(lessons[0]);
  }
  const handleLessonClick = (lesson) => {
    if (selectedLesson === lesson) {
      setSelectedLesson(null);
      onLessonSelect(null);
    } else {
      setSelectedLesson(lesson);
      onLessonSelect(lesson);
    }
  };

  return (
    <>
      <div style={{ padding: "15px" }}>
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>Lessons</p>
        {lessons.map((lesson, index) => (
          <div
            className="les"
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedLesson === lesson
                  ? "#49BBBD"
                  : "rgba(157, 204, 255, 0.3)",
              color: selectedLesson === lesson ? "white" : "black",
            }}
            key={index}
            onClick={() => handleLessonClick(lesson)}
          >
            <img
              src={
                selectedLesson === lesson
                  ? "src/assets/lesson1.png"
                  : "src/assets/lesson2.png"
              }
              alt=""
            />
            <span style={{ marginLeft: "10px" }}>
              Lesson {index + 1} : {lesson.title}
            </span>
            <span style={{ marginLeft: "50px" }}>{lesson.duration} hours</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Lessons;
