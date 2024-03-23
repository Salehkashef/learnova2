import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from "./slices/courseslice";
import CategoryReducer from "./slices/categorySlice";
import CategoryCourseReducer from "./slices/catCourseSlice";
import InstructorReducer from "./slices/InstructorSlice";
import RelateReducer from "./slices/RelatedSlice";
import RecommendationReducer from "./slices/RecomendationSlice";
import UserCourseReducer from "./slices/UserCourse";

export const store = configureStore({
  reducer: {
    CourseReducer,
    CategoryReducer,
    CategoryCourseReducer,
    InstructorReducer,
    RelateReducer,
    RecommendationReducer,
    UserCourseReducer,
  },
});
