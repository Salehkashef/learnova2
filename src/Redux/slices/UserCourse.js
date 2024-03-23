import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Axios/interceptor";

export const getUserCourse = createAsyncThunk(
  "/user/Courses/",
  async (userid) => {
    try {
      const response = await axiosInstance.get(
        `http://localhost:4000/user/course/${userid}`
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("error");
      throw error;
    }
  }
);

const UserCourseSlice = createSlice({
  name: "UserCourses",
  initialState: {
    UserCourses: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserCourse.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUserCourse.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);

      state.UserCourses = action.payload.data;
      console.log(state.UserCourses);
    });
    builder.addCase(getUserCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default UserCourseSlice.reducer;
