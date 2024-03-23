import React from "react";
import { Route, Routes } from "react-router-dom";
import CourseView from "./CourseView";
import Questions from "./Questions";

function CoureData() {
  return (
    <Routes>
      <Route path="/CourseView" element={<CourseView />} />
      <Route path="/Quiz" element={<Questions />} />
    </Routes>
  );
}

export default CoureData;
