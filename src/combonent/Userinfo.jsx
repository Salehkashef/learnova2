import React, { useEffect, useState } from "react";
import axiosInstance from "../Axios/interceptor";
import "./UserInfo.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserCourse } from "../Redux/slices/UserCourse";
import { useNavigate } from "react-router-dom";

function UserInfo() {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const userId = localStorage.getItem("userID");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const dispatch = useDispatch();
  const courseItems = useSelector(
    (state) => state.UserCourseReducer.UserCourses.Course || []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `http://localhost:4000/user/${userId}`
        );
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  useEffect(() => {
    dispatch(getUserCourse(userId));
  }, [dispatch, userId]);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="main mt-5">
      <h2>IDENTITY</h2>
      {userData && (
        <div className="card">
          <div className="card-body">
            <i className="fa fa-pen fa-xs edit"></i>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{userData.fullName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{userData.Email}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>:</td>
                  <td>{userData.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <h2>COURSES</h2>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Course
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {courseItems.map((course, index) => (
            <button
              key={index}
              className="dropdown-item"
              onClick={() => handleCourseSelect(course)}
            >
              {course[0].title}
            </button>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <>
          <h2>COURSE DETAILS</h2>
          <div className="course-card">
            <div className="img">
              <img
                src={`http://localhost:4000/imgs/${selectedCourse[0].imgURL}`}
              />
            </div>
            <div className="content">
              <h2>{selectedCourse[0].title}</h2>
              <p>{selectedCourse[0].description}</p>
              <progress id="file" value="32" max="100"></progress>
              <a
                onClick={() =>
                  Navigate("/CourseView", { state: selectedCourse[0] })
                }
                className="btn btn-primary"
              >
                Start now <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserInfo;
