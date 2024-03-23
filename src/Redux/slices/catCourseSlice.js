import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Axios/interceptor";

export const getCategoryCourses = createAsyncThunk(
  "category/course",
  async ({ id, page, limit }, { rejectWithValue }) => {
    console.log(page);
    try {
      const response = await axiosInstance.get(
        `http://localhost:4000/course/category/${id}`,
        { params: { page, limit } }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const CategoryCourseSlice = createSlice({
  name: "Course",
  initialState: {
    courses: [],
    loading: false,
    error: null,
    totalPages: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload.data;
        console.log(state.courses);

        // console.log(action.payload.size);
        state.totalPages = Math.ceil(
          action.payload.total / action.payload.limit
        );
        // console.log(state.totalPages);
      })

      .addCase(getCategoryCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default CategoryCourseSlice.reducer;
