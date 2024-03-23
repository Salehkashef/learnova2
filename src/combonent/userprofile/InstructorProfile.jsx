import React from "react";

import SideNav from "./SideNav";
import Info from "./Info";
import AddCourses from "./AddCourses";
import AddLessons from "./AddLessons";
import UpdateProfile from "./UpdateProfile";
import { Route, Routes } from "react-router-dom";
import QuizForm from "./AddQuizzes";

function InstructorProfile() {
  return (
    <>
      <div className="contanit">
        <div className="row">
          <div className="col-md-3">
            <SideNav />
          </div>
          <div className="col-md-8">
            <Routes>
              <Route path="/AddCourse" element={<AddCourses />} />
              <Route path="/AddLesson" element={<AddLessons />} />
              <Route path="/AddQuiz" element={<QuizForm />} />
              <Route path="/UpdateProfile" element={<UpdateProfile />} />
              <Route path="/profile" element={<Info />} />
              <Route path="/Update" element={<UpdateProfile />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstructorProfile;
