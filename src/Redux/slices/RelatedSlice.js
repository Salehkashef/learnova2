import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Axios/interceptor";
import axios from "axios";
export const getRelatedCourse = createAsyncThunk(
  "instructor/getData",
  async (CourseID, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/recomendation/api/course/${CourseID}`
      );
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const RelateSlice = createSlice({
  name: "instructor",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getRelatedCourse.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getRelatedCourse.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);

      state.courses = action.payload.data;
      console.log(state.courses);
    });
    builder.addCase(getRelatedCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default RelateSlice.reducer;
